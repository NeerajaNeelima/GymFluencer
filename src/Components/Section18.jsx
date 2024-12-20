import React,{useState,useEffect,useRef} from 'react';
import section18 from '../assets/Images/section18bg.avif';
import logo from '../assets/Images/icons.svg';
import { RiArrowDownSLine } from "react-icons/ri";
const Section18 = () => {
    const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState('Diet Plan'); 
  const sectionRef = useRef(null);
        const [isVisible, setIsVisible] = useState(false);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setIsVisible(true); 
                } else {
                  setIsVisible(false); 
                }
              });
            },
            { threshold: 0.5 } 
          );
      
          if (sectionRef.current) {
            observer.observe(sectionRef.current); 
          }
      
          return () => {
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current); 
            }
          };
        }, []);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-4">
      <div className="relative">
        <img src={section18} alt="" className="w-full h-[700px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-70"></div>
        <div id='form' ref={sectionRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-40 justify-between  w-4/6 h-4/6 bg-black bg-opacity-80 text-white p-8">
          <div className="text-center flex flex-col gap-4 justify-start py-4   w-full">
            <div className={`uppercase text-4xl font-bold text-red-600 text-left transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        } `}>
              Kickstart Your Fitness Journey with Gymfluencer
            </div>
            <div className={`text-lg text-left transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}>
              Experience all that GymFluencer has to offer with a free trial. Explore our world-class amenities, personalized diet plans, and professional training programs—absolutely free.
            </div>
            <hr className={`border-t-2 border-white my-4 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`} />
            <div className={` self-start transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}><img src={logo} alt="" className="w-44 mx-auto" /></div>
            
          </div>
          <div  className="text-center flex flex-col justify-center gap-4 w-full">
            <div className='flex gap-4'>

                <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}>
                    <div className='text-white self-start'>Name</div>
                    <input
                        type="text"
                        placeholder="Neeraja Naru"
                        className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a] 
                         focus:outline-none 
                        focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                        hover:border hover:border-red-600"
                    />
                </div>
                <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}>
                    <div className='text-white self-start'>Phone number</div>
                    <input type='number' placeholder='123456789' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                         focus:outline-none 
                        focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                        hover:border hover:border-red-600"/>
                </div>

            </div>
            <div>
                <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}>
                    <div className='text-white self-start'>Email</div>
                    <input type='email' placeholder='neerajanaru023@gmail.com' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                         focus:outline-none 
                        focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                        hover:border hover:border-red-600"/>
                </div>
            </div>
            <div>
            <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}>
                <div className="text-white self-start">Services</div>
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
                        onClick={() => handleOptionSelect('Diet Plan')}
                        >
                        Diet Plan
                        </div>
                        <div
                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                        onClick={() => handleOptionSelect('Workout Plan')}
                        >
                        Workout Plan
                        </div>
                        <div
                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                        onClick={() => handleOptionSelect('Both')}
                        >
                        Both
                        </div>
                    </div>
                    )}
                </div>
                <div className={`w-full rounded-md text-black bg-red-600 py-3 flex justify-center items-center font-bold text-sm mt-6 opacity-60 transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}>Submit</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section18;
