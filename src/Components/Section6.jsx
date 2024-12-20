import React from 'react';
import section6_1 from '../assets/Images/section6-1.avif';
import section6_2 from '../assets/Images/section6-2.avif';
import section6_3 from '../assets/Images/section6-3.avif';
import section6_4 from '../assets/Images/section6-4.avif';
import section6_5 from '../assets/Images/section6-5.avif';

const Section6 = () => {
  const services = [
    { imgSrc: section6_1, text: 'TRACK' },
    { imgSrc: section6_2, text: 'ANALYZE' },
    { imgSrc: section6_3, text: 'TRAIN' },
    { imgSrc: section6_4, text: 'CONNECT' },
    { imgSrc: section6_5, text: 'CHALLENGE' },
  ];

  return (
    <div className='py-12'>
      <div className='text-center text-6xl text-red-600 font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>
        Our Services
      </div>
      <div className='flex justify-center items-center my-10'>
        <div className='w-[600px] text-center text-xl font-semibold text-white' style={{ fontFamily: "'Jura', sans-serif" }}>
          GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
        </div>
      </div>

      <div className='flex h-[650px] mt-8'>
        {services.map((service, index) => (
          <div key={index} className='relative w-1/4 px-[1px] group overflow-hidden'>
            <img
              src={service.imgSrc}
              alt={`Service ${index + 1}`}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>
              {service.text}
            </div>
            <div className="bg-black absolute top-0 w-full h-full left-0 opacity-20 "></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6;
