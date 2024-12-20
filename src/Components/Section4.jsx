import React, { useState, useEffect, useRef } from 'react';

const Section4 = () => {
  const [count420k, setCount420k] = useState(420000);
  const [count120k, setCount120k] = useState(120000);
  const [countNeg20, setCountNeg20] = useState(-20000);
  const [hasStarted, setHasStarted] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          
          let count420Interval = setInterval(() => {
            setCount420k((prev) => {
              if (prev >= 463000) {
                clearInterval(count420Interval);
                return 463000;
              }
              return prev + 1000; 
            });
          }, 20); 

          
          let count120Interval = setInterval(() => {
            setCount120k((prev) => {
              if (prev >= 163000) {
                clearInterval(count120Interval);
                return 163000;
              }
              return prev + 1000; 
            });
          }, 20);

          
          let countNeg20Interval = setInterval(() => {
            setCountNeg20((prev) => {
              if (prev >= 43000) {
                clearInterval(countNeg20Interval);
                return 43000;
              }
              return prev + 500; 
            });
          }, 20);
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className='flex justify-center items-center gap-10 pb-12'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='text-5xl text-white font-bold'>{(count420k / 1000).toFixed(0)}k+</div>
        <div className='text-gray-500 font-semibold w-[400px] text-center' style={{ fontFamily: "'Jura', sans-serif" }}>
          Workouts logged and progress tracked every month
        </div>
      </div>
     <div className="border-l-2 border-gray-800 h-36 "></div>

      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='text-5xl text-white font-bold'>{(count120k / 1000).toFixed(0)}k+</div>
        <div className='text-gray-500 font-semibold w-[400px] text-center' style={{ fontFamily: "'Jura', sans-serif" }}>
          Fitness enthusiasts connected through our platform
        </div>
      </div>
      <div className="border-l-2 border-gray-800 h-36 "></div>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='text-5xl text-white font-bold'>{(countNeg20 / 1000).toFixed(0)}k+</div>
        <div className='text-gray-500 font-semibold w-[400px] text-center' style={{ fontFamily: "'Jura', sans-serif" }}>
          Countries where GymFluencer is making an impact
        </div>
      </div>
    </div>
  );
};

export default Section4;
