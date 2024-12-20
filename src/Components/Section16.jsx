import React,{useState,useEffect,useRef} from 'react'

import { RiUserStarLine } from "react-icons/ri";
const Section16 = ({headerText, descriptionText}) => {
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
  return (
    <div
      ref={sectionRef}
      className="h-[550px] flex flex-col justify-center items-center gap-12 overflow-hidden  "
    >
      
      <div
        className={`text-5xl text-red-600 font-bold transition-all duration-1000 ease-out uppercase ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
        style={{ fontFamily: "'Jura', sans-serif" }}
      >
       {headerText}
      </div>
      
      <div
        className={`text-[20px] w-[800px] text-center font-semibold transition-all duration-1000 ease-out delay-400  ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`} style={{ fontFamily: "'Jura', sans-serif" }}
      >
        {descriptionText}
      </div>
      <div
        className={`text-5xl text-red-600 font-bold transition-all duration-1000 ease-out uppercase ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
        style={{ fontFamily: "'Jura', sans-serif" }}
      >
        what We Offer:
      </div>
      <div className='flex gap-28'>
        <div className={`flex flex-col justify-center items-center gap-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-[50px] opacity-0"}`}>
            <div className='w-16 h-16 rounded-xl bg-[#330000] flex justify-center items-center'><RiUserStarLine className='text-red-600 text-3xl'/></div>
        
            <div className='text-lg text-white ' style={{ fontFamily: "'Jura', sans-serif" }}>Customized Workout Plans</div>
        </div>
        <div className={`flex flex-col justify-center items-center gap-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-[50px] opacity-0"}`}>
            <div className='w-16 h-16 rounded-xl bg-[#330000] flex justify-center items-center'><RiUserStarLine className='text-red-600 text-3xl'/></div>
        
            <div className='text-lg text-white ' style={{ fontFamily: "'Jura', sans-serif" }}>Personalized guidance</div>
        </div>
        <div className={`flex flex-col justify-center items-center gap-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-[50px] opacity-0"}`}>
            <div className='w-16 h-16 rounded-xl bg-[#330000] flex justify-center items-center'><RiUserStarLine className='text-red-600 text-3xl'/></div>
        
            <div className='text-lg text-white ' style={{ fontFamily: "'Jura', sans-serif" }}>Holistic Approach</div>
        </div>
      </div>

    </div>
  )
}

export default Section16