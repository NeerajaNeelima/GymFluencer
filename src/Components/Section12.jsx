import React,{ useEffect, useRef, useState,forwardRef } from 'react'
import section12_1 from '../assets/Images/section12_1.avif'
import section12_2 from '../assets/Images/section12_2.avif'
import section12_3 from '../assets/Images/section12_3.avif'
import section12_4 from '../assets/Images/section12_4.avif'
import section12_5 from '../assets/Images/section12_5.avif'
import section12_6 from '../assets/Images/section12_6.avif'
import section12_7 from '../assets/Images/section12_7.avif'
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
const Section12 = forwardRef((props, externalRef) =>  {
    const gyms = [
        {
          id: 1,
          name: 'Physc Gym Nerul 24/7',
          phone: '+91 1234567890',
          location: 'Nerul, Navi Mumbai, Maharashtra, 400706',
          image: section12_1,
        },
        {
          id: 2,
          name: 'Iron Fitness',
          phone: '+91 1234567890',
          location: '2801 14th St NW, Washington, DC 20009',
          image: section12_2,
        },
        {
          id: 3,
          name: 'Hydropower Fitness & Gym',
          phone: '+91-22-0001-0211',
          location: '28345 Industrial Blvd, Hayward, CA 94545',
          image: section12_3,
        },
        {
          id: 4,
          name: 'Yuva Fitness',
          phone: '+91 1234567890',
          location: '1921 Wichman Rd, Moore',
          image: section12_4,
        },
        {
          id: 5,
          name: 'Ozone The Gym',
          phone: '+91 1234567890',
          location: '2043 S 3rd Dr, Phoenix, AZ 85003',
          image: section12_4,
        },
        {
          id: 6,
          name: 'The Square Gym',
          phone: '+91 1234567890',
          location: 'HC 77 Box 1A, Budville, NM 87007',
          image: section12_5,
        },
        {
          id: 7,
          name: 'Arnolds Total Fitness',
          phone: '+91 1234567890',
          location: '1050 W Hampden Ave Ste 100',
          image: section12_6,
        },
        {
          id: 8,
          name: 'Edge Fitness Seawoods',
          phone: '+91 1234567890',
          location: 'V368+53 Las Colinas, Irving',
          image: section12_7,
        },
      ];
      const [activeCard, setActiveCard] = useState(1);

        const handleCardClick = (id) => {
            setActiveCard(id);
        };

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
    <div>
        <div className='w-full flex flex-col gap-4 mt-10'  ref={externalRef} >
            <div style={{ fontFamily: "'Jura', sans-serif" }} className={`flex flex-col items-center gap-4 `}>
                <div className='text-4xl text-red-600 font-extrabold'>FIND YOUR NEAREST GYM</div>
                <div className='w-2/5 text-center text-white text-2xl'>Easily discover gyms near your location to kickstart your fitness journey today!</div>
            </div>
            <div className='flex justify-center items-center'>

                <div className='bg-[#121212] w-5/6 h-[680px] flex overflow-hidden   rounded-3xl '>
                    <div className='w-1/2 p-8 overflow-y-scroll h-full flex flex-col cursor-pointer gap-8'>
                        {gyms.map((gym) => (
                            <div
                            key={gym.id}
                            className={`h-[170px] w-full rounded-2xl flex group transition-colors duration-300 ${
                                activeCard === gym.id ? 'bg-red-600' : 'bg-[#1a1a1a]'
                            } `}
                            onClick={() => handleCardClick(gym.id)}
                            >
                            <div className='w-[220px] overflow-hidden rounded-tl-2xl rounded-bl-2xl p-[1px]'>
                                <img
                                src={gym.image}
                                alt={gym.name}
                                className='h-[170px] w-[200px] rounded-tl-2xl rounded-bl-2xl transform transition-transform duration-300 group-hover:scale-110'
                                />
                            </div>
                            <div className='flex flex-col gap-4 py-4'>
                                <div
                                className='text-white text-2xl font-extrabold'
                                style={{ fontFamily: "'Jura', sans-serif" }}
                                >
                                {gym.name}
                                </div>
                                <div className='flex gap-4 items-center'>
                                <FiPhoneCall className='text-white text-xl' />
                                <div className='font-semibold text-gray-300'>{gym.phone}</div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                <GrLocation className='text-white text-xl' />
                                <div className='text-sm font-semibold text-gray-300'>
                                    {gym.location}
                                </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div>
                    <div className='w-full overflow-hidden'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15086.84530312852!2d73.016683!3d19.032438!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAxJzU2LjgiTiA3M8KwMDEnMDAuMSJF!5e0!3m2!1sen!2sin!4v1734603642379!5m2!1sen!2sin"
                            width="633"
                            
                            height="680"
                            style={{ border: 0, borderTopRightRadius: '20px',
                                borderBottomRightRadius: '20px', }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                    </div>
                </div>

            </div>
            

            
        </div>
    </div>
  )
});

export default Section12