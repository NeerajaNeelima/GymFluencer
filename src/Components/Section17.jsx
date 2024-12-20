import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import section17_1 from '../assets/Images/section17_1.avif'
import section17_2 from '../assets/Images/section17_2.avif'
import section17_3 from '../assets/Images/section17_3.avif'
import section17_4 from '../assets/Images/section17_4.avif'
const Section17 = () => {
    const sectionRef = useRef(null);
    const navigate=useNavigate();
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
          className=" flex flex-col justify-center items-center gap-12 overflow-hidden "
        >
          
          <div
            className={`text-5xl text-red-600 font-bold transition-all duration-1000 ease-out uppercase ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-100"
            }`}
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
           Select Your Workout Plan
          </div>
          
          <div
            className={`text-[22px] w-[600px] text-center font-semibold transition-all text-white  duration-1000 ease-out delay-400  ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-100"
            }`} style={{ fontFamily: "'Jura', sans-serif" }}
          >
            Choose a workout plan that fits your goals, whether it’s building strength, losing weight, or staying active. Find the perfect plan for you!
          </div>
          <div className='flex justify-center items-center gap-8 px-8'>
            <div className={`flex flex-col gap-4 items-start transition-all text-white  duration-1000 ease-out delay-400 ${
              isVisible ? "-translate-y-[100px] opacity-100" : "translate-y-[200px] opacity-100"
            }`}>
                <img src={section17_1} alt='' className='w-[650px] h-[600px] rounded  object-cover'/>
                <div className='flex flex-col gap-4'>
                    <div className=' uppercase text-3xl font-extrabold text-red-600' style={{ fontFamily: "'Jura', sans-serif" }}>Beginner</div>
                    <div className='text-white text-md' style={{ fontFamily: "'Jura', sans-serif" }}>Start your fitness journey with simple and effective exercises.</div>
                </div>
            </div>
            <div className={`flex flex-col gap-4 items-start mt-52 transition-all text-white  duration-1000 ease-out delay-400 ${
              isVisible ? "-translate-y-[100px] opacity-100" : "translate-y-[200px] opacity-100"
            }`}>
                <img src={section17_2} alt=''className='w-[650px] h-[600px] rounded object-cover'/>
                <div className='flex flex-col gap-4'>
                    <div className=' uppercase text-3xl font-extrabold text-red-600' style={{ fontFamily: "'Jura', sans-serif" }}>Intermediate</div>
                    <div className='text-white md' style={{ fontFamily: "'Jura', sans-serif" }}>Start your fitness journey with simple and effective exercises.</div>
                </div>
            </div>
            <div className={`flex flex-col gap-4 items-start transition-all text-white  duration-1000 ease-out delay-400 ${
              isVisible ? "-translate-y-[100px] opacity-100" : "translate-y-[200px] opacity-100"
            }`}>
                <img src={section17_3} alt='' className='w-[650px] h-[600px] rounded  object-cover'/>
                <div className='flex flex-col gap-4'>
                    <div className=' uppercase text-3xl font-extrabold text-red-600' style={{ fontFamily: "'Jura', sans-serif" }}>Advanced</div>
                    <div className='text-white md' style={{ fontFamily: "'Jura', sans-serif" }}>Push your limits with high-intensity and complex movements.</div>
                </div>
            </div>
            <div className={`flex flex-col gap-4 items-start transition-all text-white cursor-pointer duration-1000 ease-out delay-400 mt-52 ${
              isVisible ? "-translate-y-[100px] opacity-100" : "translate-y-[200px] opacity-100"
            }`} onClick={()=>{navigate('/workout_plan_form')}}>
                <img src={section17_4} alt='' className='w-[650px] h-[600px] rounded  object-cover'/>
                <div className='flex flex-col gap-4'>
                    <div className=' uppercase text-3xl font-extrabold text-red-600' style={{ fontFamily: "'Jura', sans-serif" }}>Personalized Workout Plan</div>
                    <div className='text-white md' style={{ fontFamily: "'Jura', sans-serif" }}>Create your own workout plan.</div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Section17