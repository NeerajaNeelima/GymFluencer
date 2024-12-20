import React from 'react'
import section7_1 from '../assets/Images/section7-1.avif'
import section7_2 from '../assets/Images/section7-2.avif'
import { HiOutlineStar } from "react-icons/hi2";
import { BiGroup } from "react-icons/bi";
import { RiBasketballFill } from "react-icons/ri";
import { SlStar } from "react-icons/sl";
import { PiSmileySticker } from "react-icons/pi";
const Section7 = () => {
  return (
    <div  className='py-14 flex flex-col justify-center items-center gap-12'>
            <div className='flex gap-2 border border-gray-500 bg-[#131315] py-2   text-white items-center w-36 rounded-3xl justify-center font-bold '> <HiOutlineStar className='text-[20px]'/><div style={{ fontFamily: "'Jura', sans-serif" }}>Our Benefits</div></div>
            <div className='text-center text-6xl text-red-600 font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Discover GymFluencer Benefits</div>
            <div className='flex justify-center items-center'>
                <div className='w-[600px] text-center text-xl font-semibold text-white' style={{ fontFamily: "'Jura', sans-serif" }}>
                Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation


                </div>
            </div>
            <div className='grid grid-cols-3'>

                <div className='flex flex-col gap-8 '>
                    <div className='border w-[400px] py-6 px-6 border-gray-800  flex flex-col gap-3 justify-start rounded-3xl bg-[#09090a]'>
                        <div className='border flex justify-center items-center  border-gray-600 rounded-xl w-12 h-12 bg-[#18181a]'>
                            <BiGroup className='text-white text-[30px] font-bold'/>     
                        </div>
                        <div className=' text-[25px] text-red-600 font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Effortless Workout Logging</div>
                        <div className='w-[300px] text-[19px] text-gray-500 font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Easily log your workouts and monitor your progress over time with our intuitive logging feature.</div>
                    </div>
                    <div className='border w-[400px] py-6 px-6 border-gray-800  flex flex-col gap-3 justify-start rounded-3xl bg-[#09090a]'>
                        <div className='border flex justify-center items-center  border-gray-600 rounded-xl w-12 h-12 bg-[#18181a]'>
                            <RiBasketballFill className='text-white text-[30px] font-bold'/>     
                        </div>
                        <div className=' text-[25px] text-red-600 font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Accurate Rep Counting </div>
                        <div className='w-[300px] text-[19px] text-gray-500 font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Count your reps accurately with our app, ensuring consistency and improved performance.</div>
                    </div>
                </div>
                <div className=' flex justify-center  items-center '>
                    <div className="relative ">
                    <img src={section7_1} alt="" className=" w-80 h-full object-cover" />
                    <img src={section7_2} alt="" className="absolute top-4 rounded-3xl left-3 w-[295px] h-[600px] object-cover" />
                    </div>
                </div>
                

                <div className='flex flex-col gap-8'>
                    <div className='border w-[400px] py-6 px-6 border-gray-800  flex flex-col gap-3 justify-start rounded-3xl bg-[#09090a]'>
                        <div className='border flex justify-center items-center  border-gray-600 rounded-xl w-12 h-12 bg-[#18181a]'>
                            <SlStar className='text-white text-[25px] font-bold'/>     
                        </div>
                        <div className=' text-[25px] text-red-600 font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Personalized Workout Plans</div>
                        <div className='w-[300px] text-[19px] text-gray-500 font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>All-powered workout plans tailored to your fitness level, goals, and progress.</div>
                    </div>
                    <div className='border w-[400px] py-6 px-6 border-gray-800  flex flex-col gap-3 justify-start rounded-3xl bg-[#09090a]'>
                        <div className='border flex justify-center items-center  border-gray-600 rounded-xl w-12 h-12 bg-[#18181a]'>
                            <PiSmileySticker className='text-white text-[30px] font-bold'/>     
                        </div>
                        <div className=' text-[25px] text-red-600 font-extrabold' style={{ fontFamily: "'Jura', sans-serif" }}>Calorie Calculation & Personalized Diet Plans</div>
                        <div className='w-[300px] text-[19px] text-gray-500 font-semibold' style={{ fontFamily: "'Jura', sans-serif" }}>Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.</div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Section7