import React, { useEffect, useRef, useState, forwardRef } from 'react';
import section11 from '../assets/Images/section11bg.avif';
import section11_1 from '../assets/Images/section11_1.avif';
import section11_3 from '../assets/Images/section11_3.avif';
import section11_2 from '../assets/Images/section11_2.avif';
import { IoStar } from 'react-icons/io5';

const Section11 = forwardRef((props, externalRef) => {
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

  const cards = [
    {
      img: section11_2,
      text: 'GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!',
      name: 'Angelia Jolie',
      profession: 'Model',
    },
    {
      img: section11_3,
      text: 'I love how user-friendly the app is. Logging workouts has never been easier!',
      name: 'Michael Field',
      profession: 'Software engineer',
    },
    {
      img: section11_1,
      text: 'I have seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!',
      name: 'David Lee',
      profession: 'Designer',
    },
  ];

  return (
    <div
      ref={(node) => {
        sectionRef.current = node; 
        if (externalRef) {
         
          if (typeof externalRef === 'function') {
            externalRef(node);
          } else {
            externalRef.current = node;
          }
        }
      }}
      className='relative'
    >
      <div>
        <img src={section11} alt='' className='w-full h-[600px] object-cover' />
        <div className='absolute bg-black opacity-70 top-0 left-0 w-full h-full'></div>

        <div
          className={`absolute top-16 left-0 w-full flex items-start justify-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className='text-center text-5xl text-white mt-4 font-extrabold'
            style={{ fontFamily: "'Jura', sans-serif" }}
          >
            WHAT PEOPLE SAY
          </div>
        </div>

        <div
          className={`absolute top-1/3 w-full overflow-hidden transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className='flex animate-marquee gap-6'>
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                id='card'
                className='bg-[#121212] w-[800px] h-[300px] rounded-2xl flex gap-6 items-center shrink-0'
              >
                <img
                  src={card.img}
                  alt=''
                  className='rounded-tl-2xl rounded-bl-2xl w-[350px] h-[300px] object-cover'
                />
                <div className='text-white flex flex-col gap-6 justify-start h-full'>
                  <div className='flex text-[#eb0000] gap-2 text-3xl mt-12'>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                  </div>
                  <div
                    className='text-lg font-semibold'
                    style={{ fontFamily: "'Jura', sans-serif" }}
                  >
                    {card.text}
                  </div>
                  <div className='flex flex-col mt-8'>
                    <div className='font-bold text-xl'>{card.name}</div>
                    <div className='flex gap-1 items-center'>
                      <div className='border-t border-gray-400 w-6 my-6'></div>
                      <div className='text-gray-400'>{card.profession}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Section11;
