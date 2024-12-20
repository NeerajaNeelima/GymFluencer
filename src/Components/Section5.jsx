import React, { useState, useRef, useEffect } from 'react';
import section4 from '../assets/Images/section4.avif';
import { FaPlay } from 'react-icons/fa';

const Section5 = ({rotation}) => {
  
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const handlePlayClick = () => {
    setIsVideoOpen(true); 
  };


  const handleCloseModal = () => {
    setIsVideoOpen(false); 
  };

  return (
    <div className="py-12">
     
      <div
        
        className="relative flex justify-center py-12 "
      >
       
        <img
          src={section4}
          alt=""
          className="relative w-1/2 rounded-2xl cursor-pointer transition-transform duration-500 ease-in-out"
          style={{
            transform: `perspective(1200px) rotateX(${rotation}deg)`,
          }}
          
        />

        
        <div className="bg-black absolute top-0 w-full h-full left-0 opacity-40 hover:opacity-80 transition-opacity duration-300"></div>

        
        <div className="absolute inset-0 flex justify-center items-center cursor-pointer" onClick={handlePlayClick}>
          <div className="relative flex justify-center items-center">
            
            <div className="absolute border border-gray-400 rounded-full w-16 h-16 animate-border-pulse"></div>
           
            <div className="relative text-white text-4xl">
              <FaPlay className="text-[18px] text-gray-400 opacity-95" />
            </div>
          </div>
        </div>
      </div>

      
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
            
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/pznrAWMhahA?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            
            <button
              onClick={handleCloseModal}
              className="absolute top-0 -right-16 w-8 h-8 bg-[#18181a] text-white rounded-full p-2 text-md flex justify-center items-center"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section5;
