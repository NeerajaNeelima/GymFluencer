import React,{useState,useEffect,useRef} from 'react'
import section19bg from '../assets/Images/section19bg.avif'
import section19_1 from '../assets/Images/section19_1.avif'
import section19_2 from '../assets/Images/section19_2.avif'
import section19_3 from '../assets/Images/section19_3.avif'
import section19_4 from '../assets/Images/section19_4.avif'
import section19_5 from '../assets/Images/section19_5.avif'
import section19_6 from '../assets/Images/section19_6.avif'
import section19_7 from '../assets/Images/section19_7.avif'
import section19_8 from '../assets/Images/section19_8.avif'
import section19_9 from '../assets/Images/section19_9.avif'
const Section19 = () => {
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
    <div ref={sectionRef} className='flex flex-col justify-center items-center gap-12 overflow-hidden  '>
        

                <div
                    className={`text-5xl text-red-600 font-bold w-[450px] text-center transition-all duration-1000 ease-out uppercase `}
                    style={{ fontFamily: "'Jura', sans-serif" }}
                >
                Why Choose Our Diet Plan?
            </div>
            <div
                    className={`text-[20px]  text-center font-semibold w-[600px] transition-all duration-1000 ease-out delay-400  `} style={{ fontFamily: "'Jura', sans-serif" }}
                >
                    At GymFluencer, we provide expertly curated diet plans tailored to your individual needs and fitness goals. Our plans are designed by professional nutritionists and fitness experts to ensure you get optimal results.
            </div>
            <div className="relative">
                <img src={section19bg} alt="" className="w-full h-[3050px] " />
                <div className="absolute opacity-85 bg-black inset-0 w-full h-full top-0 left-0"></div>
                <div ref={sectionRef} className="absolute inset-0 w-full h-full flex flex-col gap-16 py-10 px-14 mt-24">
                    <div className={`flex justify-between items-center `}>
                        <div className={`flex flex-col gap-4 justify-start transition-transform duration-1000 ease-in-out transform ${
          isVisible ? '-translate-x-full' : 'translate-x-0'
        }`}>
                            <img src={section19_1} alt='' className='w-[650px] h-[450px] object-cover'/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Weight Loss Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Weight Loss (Fat Loss) Diet Plan.</div>
                        </div>
                        <div className={`flex flex-col gap-4 justify-start transition-transform -mt-52 duration-1000 ease-in-out transform ${
          isVisible ? '-translate-x-44' : 'translate-x-0'
        }`}>
                            <img src={section19_2} alt='' className='w-[650px] h-[450px] object-cover'/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Personalized Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Personalized Diet Plan.</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col justify-start gap-4'>
                            <img src={section19_3} alt='' className='w-[650px] h-[450px] object-cover'/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Muscle Building (Hypertrophy) Diet Plan
                            </div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Muscle Building (Hypertrophy) Diet Plan.

</div>
                        </div>
                        <div className='flex flex-col justify-start gap-4'>
                            <img src={section19_4} alt='' className='w-[650px] h-[450px] object-cover -mt-52'/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Cutting Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Cutting Diet Plan</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col justify-start gap-4'>
                            <img src={section19_5} alt='' className='w-[650px] h-[450px] object-cover'/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Endurance/Performance Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Endurance/Performance Diet Plan.</div>
                        </div>
                        <div className='flex flex-col justify-start gap-4'>
                            <img src={section19_6} alt='' className='w-[650px] h-[450px] object-cover -mt-52'/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Keto Diet (Ketogenic)</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Keto Diet (Ketogenic).</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col justify-start gap-4'>
                            <img src={section19_7} alt='' className='w-[650px] h-[450px] object-cover'/>
                            <div className='text-red-600 text-3xl uppercase font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Intermittent Fasting Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Intermittent Fasting Diet Plan.</div>
                        </div>
                        <div className='flex flex-col justify-start gap-4'>
                            <img src={section19_8} alt='' className='w-[650px] h-[450px] object-cover -mt-52'/>
                            <div className='text-red-600 text-3xl uppercase font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Vegetarian/Vegan Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Vegetarian/Vegan Diet Plan.</div>
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        
                        <div className='flex flex-col justify-start -mt-28 gap-4'>
                            <img src={section19_9} alt='' className='w-[650px] h-[450px] object-cover '/>
                            <div className='text-red-600 text-3xl font-extrabold uppercase' style={{ fontFamily: "'Jura', sans-serif" }}>Paleo Diet Plan</div>
                            <div className='text-lg text-white' style={{ fontFamily: "'Jura', sans-serif" }}>A description of the Paleo Diet Plan.

</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Section19