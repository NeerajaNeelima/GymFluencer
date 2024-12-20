import React from 'react';

const Section2 = () => {
  return (
    <div className="w-full h-[200px] flex flex-col justify-center gap-4 overflow-hidden bg-black">
      
      
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee-left text-white text-[5rem] inline-block" style={{ fontFamily: "'Jura', sans-serif" }}>
          Fitness/Transformation/Motivation/Progress/ Fitness/Transformation/Motivation/Progress/
        </div>
      </div>

      
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <div className="relative animate-marquee-right text-red-600 text-[5rem] inline-block" style={{ fontFamily: "'Jura', sans-serif" }}>
          WORK/COMMUNITY/STRENGTH/PROGRESS/ WORK/COMMUNITY/STRENGTH/PROGRESS/
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      </div>
      

    </div>
  );
};

export default Section2;
