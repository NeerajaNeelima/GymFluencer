import React,{forwardRef} from 'react'
import section13_1 from '../assets/Images/section13_1.avif'
import section13_2 from '../assets/Images/section13_2.avif'
import section13_3 from '../assets/Images/section13_3.avif'
import logo1 from '../assets/Images/section13logo.avif'
import logo2 from '../assets/Images/section13logo2.avif'
import logo3 from '../assets/Images/section13logo3.avif'
import { CiCalendar } from "react-icons/ci";
const Section13 = forwardRef((props, externalRef) =>{
  return (
    <div className='h-[900px'>
        <div className='grid lg:grid-cols-[60%_40%] sm:grid-cols-1 px-8 py-24' ref={externalRef}>
            <div className='relative'>
                <img  src={section13_1} alt='' className='  h-full rounded-2xl'/>
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 5%, rgba(0, 0, 0, 0) 100%)",
                    }}
                ></div>
                <div className='absolute bottom-4 left-8 flex flex-col gap-4' style={{ fontFamily: "'Jura', sans-serif" }}>

                    <div className='bg-red-600 text-white flex justify-center items-center px-8 py-1 w-32 rounded-lg font-semibold text-[18px] '>Exercise</div>
                    <div className='text-white lg:text-4xl sm:text-2xl font-extrabold'>CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE</div>
                    <div className='flex gap-4'>
                        <div className='flex gap-2 justify-center'>
                            <CiCalendar className='text-2xl'/>
                            <div>Jun 28, 2024</div>
                        </div>
                        <div className="w-[1px] h-[25px] bg-white"></div>
                        <div className='flex gap-2 justify-center'>
                            <div>
                                <img src={logo1} alt='' className='w-8 h-8 rounded-full'/>
                            </div>
                            <div>Benjamin</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex lg:flex-col  gap-8 ml-8'>
                <div className='relative'>
                    <img  src={section13_2} alt='' className=' rounded-2xl'/>
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 5%, rgba(0, 0, 0, 0) 100%)",
                        }}
                    ></div>
                    <div className='absolute bottom-4 left-8 flex flex-col gap-4' style={{ fontFamily: "'Jura', sans-serif" }}>
                        <div className='bg-[#e3670e] text-white flex justify-center items-center px-8 py-1 w-44 rounded-lg font-semibold text-[18px] '>Weight loss</div>
                        <div className='text-white lg:text-2xl sm:text-lg font-extrabold  uppercase'>Weight Loss: A Sustainable Approach for a Healthier You</div>
                        <div className='flex gap-4'>
                            <div className='flex gap-2 justify-center'>
                                <CiCalendar className='text-2xl'/>
                                <div>Jun 26, 2024</div>
                            </div>
                            <div className="w-[1px] h-[25px] bg-white"></div>
                            <div className='flex gap-2 justify-center'>
                                <div>
                                    <img src={logo2} alt='' className='w-8 h-8 rounded-full'/>
                                </div>
                                <div>Jessica</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img  src={section13_3} alt='' className=' rounded-2xl'/>
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 5%, rgba(0, 0, 0, 0) 100%)",
                        }}
                    ></div>
                    <div className='absolute bottom-4 left-8 flex flex-col gap-4' style={{ fontFamily: "'Jura', sans-serif" }}>
                        <div className='bg-[#2a990b] text-white flex justify-center items-center px-8 py-1 w-32 rounded-lg font-semibold text-[18px] '>Nutrition</div>
                        <div className='text-white lg:text-2xl sm:text-lg font-extrabold uppercase'>Fuel Your Fitness: A Guide to Nutrition for Peak Performance</div>
                        <div className='flex gap-4'>
                            <div className='flex gap-2 justify-center'>
                                <CiCalendar className='text-2xl'/>
                                <div>Jun 23, 2024</div>
                            </div>
                            <div className="w-[1px] h-[25px] bg-white"></div>
                            <div className='flex gap-2 justify-center'>
                                <div>
                                    <img src={logo3} alt='' className='w-8 h-8 rounded-full'/>
                                </div>
                                <div>David</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
});

export default Section13