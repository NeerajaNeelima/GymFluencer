import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import section20 from '../assets/Images/section20.avif'
import { RiArrowDownSLine } from "react-icons/ri";
const Workout_plan_form = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const [isOpenAge,setIsOpenAge] = useState(false);
      const [selectedOption, setSelectedOption] = useState('Bignner'); 
      const[selctGender,setSelectGender]=useState('Select')
      const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
      };
      const toggleGender =() =>{
        setIsOpenAge( (prev) =>!prev);
      }

      const handleOptionGender = (option) => {
        setSelectGender(option);
        setIsOpenAge(!isOpenAge);
      };
    
      
      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(!isOpen);
      };
  return (
    <div>
        <Navbar/>
        <div className='relative pt-40'>
            <img src={section20} alt='' className='w-full'/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[46%] w-4/6 h-[85%] bg-black bg-opacity-80 flex items-center flex-col gap-8  px-8'>
                
                <div className='text-4xl font-extrabold text-red-600 my-4 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Personalized Workout Plan Form</div>
                <div className='flex flex-col  justify-start self-start  w-full'>
                    <div className='text-3xl font-extrabold text-red-600  uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>1.Fitness goals</div>
                    <div className='text-xl font-extrabold text-red-600  uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Primary goals:</div>
                    <div className='grid grid-cols-2 mt-4 '>
                        <div className='flex gap-4 items-center' style={{ fontFamily: "'Jura', sans-serif" }}>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Weight loss</div>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Muscle Gain</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-4' style={{ fontFamily: "'Jura', sans-serif" }}>
                        <div className='flex gap-4 items-center'>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Endurance</div>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Flexibility</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                        <div className='flex gap-4 items-center' style={{ fontFamily: "'Jura', sans-serif" }}>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Overall Fitness</div>
                        </div>
                        
                    </div>
                    <div className='text-xl font-extrabold text-red-600 mt-8 uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Specific Areas of Focus:</div>
                    <div className='grid grid-cols-2 mt-4 '>
                        <div className='flex gap-4 items-center' style={{ fontFamily: "'Jura', sans-serif" }}>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Upper Body</div>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Lower Body</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-4' style={{ fontFamily: "'Jura', sans-serif" }}>
                        <div className='flex gap-4 items-center'>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Core</div>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Full Body</div>
                        </div>
                    </div>
                    <div className='text-3xl font-extrabold text-red-600  uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>2. Current Fitness Level</div>
                    <div className='text-xl font-extrabold text-red-600  uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Fitness Level:</div>
                    <div 
                        className="relative" 
                        onClick={toggleDropdown}
                        aria-haspopup="true" 
                        aria-expanded={isOpen ? "true" : "false"}
                        >
                                        <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                            focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                            hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                        >
                                        <span>{selectedOption}</span>
                                        <RiArrowDownSLine  className="text-white cursor-pointer"/>
                                        </div>
                    
                                        
                                        {isOpen && (
                                        <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                            <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionSelect('Begineer')}
                                            >
                                            Beginner
                                            </div>
                                            <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionSelect('Intermediate')}
                                            >
                                            Intermediate
                                            </div>
                                            <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionSelect('Adcanced')}
                                            >
                                            Advanced
                                            </div>
                                        </div>
                                        )}
                    </div>
                    <div className='text-xl font-extrabold text-red-600 mt-8 uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Exercise Experience:</div>
                    <div className='grid grid-cols-2 mt-4 ' style={{ fontFamily: "'Jura', sans-serif" }}>
                        <div className='flex gap-4 items-center'>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Squats</div>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Push-Ups</div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mt-4' style={{ fontFamily: "'Jura', sans-serif" }}>
                        <div className='flex gap-4 items-center'>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Cardio Machines</div>
                        </div>
                        <div className='flex gap-4 items-center '>
                            <input
                                type="checkbox"
                                className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                            />
                            <div className='text-white text-lg font-semibold'>Others</div>
                        </div>
                    </div>
                    <div className='text-3xl font-extrabold text-red-600  uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>3. Physical Measurements and Health Info</div>
                    <div className='grid grid-cols-2 w-full gap-4'>

                        <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                            <div className='text-white self-start'>Age</div>
                            <input type='number' placeholder='Ex: 18' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none 
                                focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600"/>
                        </div>
                        <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                            <div className='text-white self-start'>Gender</div>
                            <div 
                                className="relative" 
                                onClick={toggleGender}
                                aria-haspopup="true" 
                                aria-expanded={isOpen ? "true" : "false"}
                                >
                                <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                            focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                            hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                        >
                                    <span>{selctGender}</span>
                                        <RiArrowDownSLine  className="text-white cursor-pointer"/>
                                    </div>
                    
                                        
                                        {isOpenAge && (
                                        <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                            <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionGender('Female')}
                                            >
                                           Female
                                            </div>
                                            <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionGender('Male')}
                                            >
                                            Male
                                            </div>
                                            <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionGender('Other')}
                                            >
                                            Other
                                            </div>
                                            
                                        </div>
                                        )}
                                    </div>
                            
                                </div>

                            </div>
            
                        </div>
                        <div className='grid grid-cols-2 w-full gap-4'>
                            <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                                <div className='text-white self-start'>Height</div>
                                <input type='text' placeholder="Eg: 5'5 or 175cm " className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                    focus:outline-none 
                                    focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                    hover:border hover:border-red-600"/>
                            </div>
                            <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                            <div className='text-white self-start'>Weight</div>
                            <input type='text' placeholder='Eg: 150lbs or 68 kg' className="text-white placeholder:text-[rgb(106,106,106)] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none 
                                focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600"/>
                            </div>

                        </div>
                        <div className='flex flex-col gap-4 self-start w-full -mt-4'>
                            <div className='text-white self-start'>Injuries or Physical Limitations:</div>
                            <textarea className= 'w-full rounded-xl h-28 p-2 placeholder:text-[rgb(106,106,106)] bg-[#1a1a1a] text-white resize ' placeholder='Eg: Back Pain, knee injury, Limited mobility...'>

                            </textarea>

                        </div>
                        <div className='flex flex-col gap-4 self-start w-full -mt-4'>
                            <div className='text-white self-start'>Medical Condition:</div>
                            <textarea className= 'w-full rounded-xl h-28 p-2 placeholder:text-[rgb(106,106,106)] bg-[#1a1a1a] text-white resize ' placeholder='Eg: Diabetes, Hypertension, Thyroid issues...'>

                            </textarea>

                        </div>
                        <div className='text-3xl font-extrabold text-red-600  uppercase self-start -mt-4'style={{ fontFamily: "'Jura', sans-serif" }}>4. Workout Preferences</div>
                        <div className='text-xl font-extrabold text-red-600  uppercase self-start -mt-4' style={{ fontFamily: "'Jura', sans-serif" }}>Preferred Workout Types:</div>
                        <div className='grid grid-cols-2  w-full -mt-4'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Strength Training</div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Cardio</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2  w-full'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Yoga</div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>HIIT</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 w-full'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Bodyweight</div>
                            </div>
                            
                        </div>
                        <div className='text-3xl font-extrabold text-red-600  uppercase self-start'style={{ fontFamily: "'Jura', sans-serif" }}>5. Schedule and Time Availability
                        </div>
                        <div className='text-xl font-extrabold text-red-600  uppercase self-start' style={{ fontFamily: "'Jura', sans-serif" }}>Days Available for Workouts:</div>
                        <div className='grid grid-cols-2  w-full'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Monday</div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Tuesday</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2  w-full'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Wednesday</div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Thursday</div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2  w-full'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Friday</div>
                            </div>
                            <div className='flex gap-4 items-center '>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-lg font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Saturday</div>
                            </div>
                            
                        </div>
                        <div className='grid grid-cols-2 w-full'>
                            <div className='flex gap-4 items-center'>
                                <input
                                    type="checkbox"
                                    className="w-8 h-8 border-2  border-gray-400 rounded-lg bg-white checked:border-red-600 checked:bg-blue-500  checked:text-red-600 checked:accent-red-600"
                                />
                                <div className='text-white text-md font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Sunday</div>
                            </div>
                            
                        </div>
                        <div className={`w-full rounded-md text-black bg-red-600 py-3 flex justify-center items-center font-bold text-sm mt-6 opacity-60 transition-all duration-1000 ease-out `}>Submit</div>        
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Workout_plan_form;