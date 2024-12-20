import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import section20 from '../assets/Images/section20.avif'
import { RiArrowDownSLine } from "react-icons/ri";
const Diet_plan_form = () => {
   
    const [isOpenAge,setIsOpenAge] = useState(false);
  
      const[isOpenActivity,setIsOpenActivity]=useState(false)
      const [isOpenGoal,setIsOpenGoal]=useState(false)
      const[isOpenType,setIsOpenType]=useState(false)
      const[isOpenMeal,setIsOpenMeal]=useState(false)
      const[selctGender,setSelectGender]=useState('Select')
      const[selectActivity,setSelectActivity]=useState('Select')
      const[selectGoal,setSelectGoal]=useState('Select')
      const[selectType,setSelectType]=useState('Select')
      const [selectMeals,setSelectMeals]=useState('Select')
      const toggleDropdownAcivity = () => {
        setIsOpenActivity(!isOpenActivity);
      };
      const toggleGender =() =>{
        setIsOpenAge( !isOpenAge);
      }

      const handleOptionGender = (option) => {
        setSelectGender(option);
        setIsOpenAge(!isOpenAge);
      };
    
      
      const handleOptionActivity = (option) => {
        setSelectActivity(option);
        setIsOpenActivity(false);
      };
      const toggleGoal =() =>{
        setIsOpenGoal( !isOpenGoal);
      }

      const handleOptionGoal = (option) => {
        setSelectGoal(option);
        setIsOpenGoal(false);
      };
      const toggleType =() =>{
        setIsOpenType( !isOpenType);
      }

      const handleOptionType = (option) => {
        setSelectType(option);
        setIsOpenType(false);
      };
      const toggleMelas =() =>{
        setIsOpenMeal( !isOpenMeal);
      }

      const handleOptionMelas = (option) => {
        setSelectMeals(option);
        setIsOpenMeal(false);
      };
  return (
    <div>
        <Navbar/>
        <div className='relative pt-40'>
            <img src={section20} alt='' className='w-full'/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[46%] w-4/6 h-[85%] bg-black bg-opacity-80 flex items-center flex-col gap-8  px-8'>
                <div className='flex flex-col  justify-start self-start  w-full' style={{ fontFamily: "'Jura', sans-serif" }}>
                <div className='text-5xl  font-extrabold text-center text-red-600 my-8 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Personalized Workout Plan Form</div>
                    <div className='text-4xl font-extrabold text-red-600 my-4 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Personal Details</div>
                    <div className='grid grid-cols-2 w-full gap-4'>
                        <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                            <div className='text-white self-start'>Age</div>
                            <input type='number' placeholder='Eg: 18' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none 
                                focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600"/>
                        </div>
                        <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                            <div className='text-white self-start'>Gender</div>
                            <div 
                                className="relative" 
                                onClick={toggleGender}
                                aria-haspopup="true" 
                                
                                >
                                <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                    focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                    hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                    >
                                        <span>{selctGender}</span>
                                            <RiArrowDownSLine  className="text-white cursor-pointer"/>
                                </div>                            
                                {isOpenAge && (
                                    <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                        <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionGender('Female')}
                                        >
                                            Female
                                        </div>
                                        <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionGender('Male')}
                                        >
                                        Male
                                        </div>
                                        <div
                                            className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                            onClick={() => handleOptionGender('Other')}
                                        >
                                            Other
                                        </div>
                                        
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full mt-4 gap-4'>
                        <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                            <div className='text-white self-start'>Height</div>
                            <input type='text' placeholder="Eg: 5'5 or 175cm " className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none 
                                focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600"/>
                        </div>
                        <div className={`flex flex-col justify-start gap-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Weight</div>
                        <input type='text' placeholder='Eg: 150lbs or 68 kg' className="text-white placeholder:text-[rgb(106,106,106)] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                        </div>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Activity Level</div>
                        <div 
                            className="relative" 
                            onClick={toggleDropdownAcivity}
                            aria-haspopup="true" 
                            
                            >
                            <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                >
                                    <span>{selectActivity}</span>
                                        <RiArrowDownSLine  className="text-white cursor-pointer"/>
                            </div>
                                    
                                                        
                            {isOpenActivity && (
                                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionActivity('Low')}
                                    >
                                        Low
                                    </div>
                                    <div
                                    className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                    onClick={() => handleOptionActivity('Medium')}
                                    >
                                    Medium
                                    </div>
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionActivity('High')}
                                    >
                                        High
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='text-4xl font-extrabold text-red-600 my-6 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Dietary goals</div>
                    <div className={`flex flex-col justify-start gap-4  transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Goal</div>
                        <div 
                            className="relative" 
                            onClick={toggleGoal}
                            aria-haspopup="true" 
                            
                            >
                            <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                >
                                    <span>{selectGoal}</span>
                                        <RiArrowDownSLine  className="text-white cursor-pointer"/>
                            </div>
                                    
                                                        
                            {isOpenGoal && (
                                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionGoal('Fitness')}
                                    >
                                        Fitness
                                    </div>
                                    <div
                                    className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                    onClick={() => handleOptionGoal('Muscle Gain')}
                                    >
                                    Muscle Gain
                                    </div>
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionGoal('Strong')}
                                    >
                                        Strong
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Specific Goal</div>
                        <input type='text' placeholder='Eg: Weight loss, Muscle gain, Improve digestion...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className='text-4xl font-extrabold text-red-600 my-6 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Dietary references and restriction</div>
                    <div className={`flex flex-col justify-start gap-4  transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Diet Type</div>
                        <div 
                            className="relative" 
                            onClick={toggleType}
                            aria-haspopup="true" 
                            
                            >
                            <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                >
                                    <span>{selectType}</span>
                                        <RiArrowDownSLine  className="text-white cursor-pointer"/>
                            </div>
                                    
                                                        
                            {isOpenType && (
                                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionType('Unhygine')}
                                    >
                                        Unhygine
                                    </div>
                                    <div
                                    className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                    onClick={() => handleOptionType('Hygine')}
                                    >
                                    Hygine
                                    </div>
                                    
                                    
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Food Allegries or Intolerances</div>
                        <input type='text' placeholder='Eg: Nuts, Diary, Gluten...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Foods you Dislike</div>
                        <input type='text' placeholder='Eg: Mushrooms, Seafood, Spicy foods...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className='text-4xl font-extrabold text-red-600 my-6 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Healthy information</div>
                    <div className={`flex flex-col justify-start gap-4  transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Medical Condition</div>
                        <input type='text' placeholder='Eg: Diabetes' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Nutritional Needs</div>
                        <input type='text' placeholder='Eg: High-Proteins' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className='text-4xl font-extrabold text-red-600 my-6 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>meal and lifestyle preferences</div>
                    <div className={`flex flex-col justify-start gap-4  transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Meals Per day</div>
                        <div 
                            className="relative" 
                            onClick={toggleMelas}
                            aria-haspopup="true" 
                            
                            >
                            <div className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                                focus:outline-none focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                                hover:border hover:border-red-600 flex justify-between items-center cursor-pointer"
                                >
                                    <span>{selectMeals}</span>
                                        <RiArrowDownSLine  className="text-white cursor-pointer"/>
                            </div>
                                    
                                                        
                            {isOpenMeal && (
                                <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] rounded-md w-full border border-[#1a1a1a] shadow-lg">
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionMelas('3')}
                                    >
                                        3
                                    </div>
                                    <div
                                    className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                    onClick={() => handleOptionMelas('4')}
                                    >
                                    4
                                    </div>
                                    <div
                                        className="text-white p-2 mx-2 rounded hover:bg-red-700 cursor-pointer"
                                        onClick={() => handleOptionMelas('5')}
                                    >
                                        5
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Cooking Hobies</div>
                        <input type='text' placeholder='Eg: Quick meals, Meal Prepping, Homemade recipes...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Budget Considerations</div>
                        <input type='text' placeholder='Eg: $50 per week, Affordable meals, Low-cost ingredients...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className='text-4xl font-extrabold text-red-600 my-6 uppercase'style={{ fontFamily: "'Jura', sans-serif" }}>Current eating habits</div>
                    <div className={`flex flex-col justify-start gap-4  transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Typical Daily Diet</div>
                        <input type='text' placeholder='Eg: Breakfast-Eggs, Lunch-Salad, Dinner-Gilled Chicken...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className={`flex flex-col justify-start gap-4 mt-4 transition-all duration-1000 ease-out }`}>
                        <div className='text-white self-start'>Frequency of Eating Out</div>
                        <input type='text' placeholder='Eg: 2 times a week, Occasionally,Once a Month...' className="text-white placeholder:text-[#6a6a6a] bg-[#1a1a1a] p-2 rounded-md border border-[#1a1a1a]
                            focus:outline-none 
                            focus:border-red-600 focus:shadow-[0_0_8px_2px_rgba(255,0,0,0.8)] 
                            hover:border hover:border-red-600"/>
                    </div>
                    <div className={`w-full rounded-md text-black bg-red-600 py-3 flex justify-center items-center font-bold text-sm mt-6 opacity-60 transition-all duration-1000 ease-out `}>Submit</div>  
                </div>
            </div>            
        </div>
        <Footer/>
    </div>
  )
}

export default Diet_plan_form;