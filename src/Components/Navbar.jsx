import React,{useState} from 'react'
import logo from '../assets/Images/icons.svg'
import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onAboutClick,onBenefitsClick,onConcat ,onBlogClick}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate=useNavigate();
    const workoutHeader = "what is the Workout Plan";
    const workoutDescription = "A workout plan is a structured schedule of exercises designed to help you reach your fitness goals, stay active, and improve your health.";

    const dietHeader = "what is the Diet Plan?";
    const dietDescription = "A diet plan is a structured approach to nutrition designed to help you achieve specific fitness goals, whether it's weight loss, muscle gain, or improving overall health. At GymFluencer, we believe that proper nutrition is the cornerstone of a successful fitness journey.";
    const navigateToWorkout = () => {
        navigate('/workout_plan', {
          state: {
            headerText: workoutHeader,
            descriptionText: workoutDescription,
          }
        });
      };
    
      const navigateToDiet = () => {
        navigate('/diet_plan', {
          state: {
            headerText: dietHeader,
            descriptionText: dietDescription,
          }
        });
      };
      const goToSection = (section) => {
        navigate('/', { state: { scrollTo: section } });
      };
  return (
    <div className='flex justify-center items-center mx-auto rounded-full px-8  my-10 py-4 fixed bg-[#101211] opacity-95 border border-gray-600 left-0 right-0 w-max z-50 '>

        <div className='flex gap-12 items-center font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>
            <img src={logo} alt='' className='w-44 h-12'/>
            <div className='text-gray-500 text-2xl hover:text-red-600 cursor-pointer'onClick={()=>{navigate('/')}}>Home</div>
            <div className='text-gray-500 text-2xl hover:text-red-600 cursor-pointer'onClick={() => goToSection("about")}>About</div>
            <div
            className="relative text-gray-500 text-2xl hover:text-red-600 cursor-pointer flex gap-2 items-center"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}>
            <div>Our Services</div>
            <IoChevronDown
                className={`transition-colors duration-300 ${showDropdown ? 'text-yellow-400' : ''}`}
            />

            
                {showDropdown && (
                    <div className="absolute top-full left-0 mt-0 w-56 border border-gray-600  bg-[#18181a] flex flex-col rounded-md shadow-lg">
                    <div className="text-gray-500 hover:text-white text-xl px-4 py-3 cursor-pointer"  onClick={navigateToWorkout}>
                        Workout Plan
                    </div>
                    <div className="text-gray-500 hover:text-white text-xl px-4 py-3 cursor-pointer" onClick={navigateToDiet}>
                        Diet Plan
                    </div>
                    </div>
                )}
            </div>
            <div className='text-gray-500 text-2xl hover:text-red-600 cursor-pointer' onClick={() => goToSection("benefits")}>Benifits</div>
            <div className='text-gray-500 text-2xl hover:text-red-600 cursor-pointer' onClick={() => goToSection("blog")}>Blog</div>
            <div className='text-gray-500 text-2xl hover:text-red-600 cursor-pointer'onClick={() => goToSection("contact")}>Contact</div>
            <div className='flex justify-center text-2xl bg-[#eb0000] w-44  cursor-pointer text-white rounded-full py-2  items-center '>Join us now</div>
        </div>

    </div>
  )
}

export default Navbar