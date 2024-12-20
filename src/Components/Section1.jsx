import React from 'react';
import background from '../assets/Images/section1bg.avif';

const Section1 = () => {
  return (
    <div className="relative w-full h-[700px]">
      
      <img src={background} alt="" className="w-full h-full object-cover" />
      
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      
      <div className="absolute top-0 left-0 w-full mx-auto h-full  flex flex-col items-center justify-center">
        
        
        <div className='bg-[#18181a] border border-gray-500 rounded-full py-1 px-4 flex items-center gap-3 mt-12'>
            <div className=" avatar-group -space-x-4   flex ">
            <div className="flex items-center">
                <div className=''>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-8 rounded-full'  alt="Avatar 1" />
                </div>
            </div>
            <div className="flex items-center">
                <div >
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-8 rounded-full'  alt="Avatar 2" />
                </div>
            </div>
            <div className="flex items-center">
                <div >
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className='w-8 rounded-full'  alt="Avatar 3" />
                </div>
            </div>
            </div>
            <div className='text-white font-semibold'>Trusted by 3+ million users</div>

        </div>
        

        
        <div className="w-[80%] text-center  flex items-center justify-center text-[#eb0000] font-semibold text-[60px] sm:text-[100px]" style={{ fontFamily: "'Jura', sans-serif" }}>
          Track Your Fitness Journey
        </div>

        
        <div className="w-[60%] flex items-center justify-center text-white font-semibold text-xl px-4 text-center">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts, count reps, and track calories burned. Stay motivated and achieve your goals with ease.
        </div>
      </div>
    </div>
  );
};

export default Section1;
