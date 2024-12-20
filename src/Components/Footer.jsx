import React from 'react'
import logo from '../assets/Images/icons.svg'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";
const Footer = () => {
  return (
    <div className=' bg-black  flex flex-col justify-center items-center'>

        <div className=''>
            <div className=' flex flex-col gap-6 my-16 justify-center items-center'> 

                <div>
                    <img src={logo} alt='' className='w-44'/>
                </div>
                <div className='text-gray-500 text-3xl font-extrabold w-[450px] text-center' style={{ fontFamily: "'Jura', sans-serif" }}>Where Fitness Meets Social Connection!</div>
                <div className='bg-[#18181a] py-4 rounded-2xl px-8 flex gap-2 justify-center items-center border border-gray-500'>
                    <MdOutlineMailOutline />
                    <div className='font-semibold text-gray-400'>hello@gym.birlaventures.com</div>
                </div>
                <div className='flex text-2xl font-extrabold my-4 text-gray-200' style={{ fontFamily: "'Jura', sans-serif" }}>Home <span className='mx-8 text-gray-700 text-[3rem] -mt-2'>.</span> Workout Plan <span className='mx-8 text-gray-700 text-[3rem] -mt-2'>.</span> Diet Plan <span className='mx-8 text-gray-700 text-[3rem] -mt-2'>.</span> FAQ's</div>
            </div>
        </div>
        <hr className="w-5/6 mb-4 border border-gray-700 mx-auto" />
        <div className='w-5/6 flex mb-4 justify-between items-center'>
            <div className='text-xl text-white'>
            © 2024 GymFluencer. All rights reserved.
            </div>
            <div className='flex gap-3'>
                <div className='bg-[#18181a] w-12 h-12 rounded-xl flex justify-center items-center'>
                    <RiLinkedinBoxFill className='text-white text-2xl'/>
                </div>
                <div className='bg-[#18181a] w-12 h-12 rounded-xl flex justify-center items-center'>
                    <RiTwitterXLine className='text-white text-2xl'/>
                </div>
                <div className='bg-[#18181a] w-12 h-12 rounded-xl flex justify-center items-center'>
                    <PiInstagramLogoFill className='text-white text-2xl'/>
                </div>

            </div>
        </div>


        <div></div>

        

    </div>
  )
}

export default Footer