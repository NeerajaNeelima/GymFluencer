import React, { useEffect, useRef, useState } from 'react';
import section8bg from '../assets/Images/section8bg.avif';
import section8 from '../assets/Images/section8.avif';
import section8_1 from '../assets/Images/section8-1.avif';
import section8_2 from '../assets/Images/section8-2.avif';

const Section8 = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [section8, section8_1, section8_2];
  
  // Handle infinite loop with fading images and scroll transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop over the images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="h-full relative">
      <div className="relative">
        <img
          src={section8bg}
          alt="background"
          className="relative w-full h-[600px] object-cover"
        />
        <div className="absolute w-full h-full left-0 top-0 bg-black opacity-80"></div>
        <div className="absolute w-full h-full left-0 top-0 grid grid-cols-2">
          <div className="flex flex-col justify-center items-center gap-10">
            <div
              className="text-red-600 text-4xl font-extrabold w-[300px] transition-transform -translate-x-12"
              style={{ fontFamily: "'Jura', sans-serif" }}
            >
              YOUR PERSONALIZED FITNESS HUB
            </div>
            <div className="text-white w-[400px]">
              Personalized workout routines tailored to your goals and preferences
            </div>
            <div className="text-white w-[400px]">
              Get expert guidance with virtual coaching sessions, available anytime, anywhere.
            </div>
            <div className="text-white w-[400px]">
              Track your fitness journey with detailed analytics, goal setting, and achievements.
            </div>
          </div>

          {/* Vertical Scrolling Image Section */}
          <div className='flex justify-center items-center'>

          <div
            className="overflow-hidden flex  relative  h-[450px]"
            ref={scrollRef}
          >
            <div
              className="flex flex-col  gap-12 transition-all h-[300px]  duration-500"
              style={{
                transform: `translateY(-${currentIndex * 400}px)`, 
              }}
            >
              {images.map((src, index) => (
                <div className='h-[400px]'>
                <img
                  key={index}
                  src={src}
                  alt={`image-${index}`}
                  className={`w-[600px] transition-all duration-500 transform ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : index === (currentIndex + 1) % images.length
                      ? 'opacity-10 scale-90' 
                      : index === (currentIndex - 1 + images.length) % images.length
                      ? 'opacity-10 scale-90' 
                      : 'opacity-5 scale-80'
                  }`}
                />
                </div>
              ))}
            </div>
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Section8;
