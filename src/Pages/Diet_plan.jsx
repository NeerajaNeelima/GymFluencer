import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Section16 from '../Components/Section16'
import Section20 from '../Components/Section20'
import Section18 from '../Components/Section18'
import Section19 from '../Components/Section19'
const Diet_plan = () => {
    const location = useLocation();
  const { headerText, descriptionText } = location.state || {};
  return (
    <div>

        <Navbar/>
        <div className='pt-28'>
        <Section16 headerText={headerText} descriptionText={descriptionText}/>
        </div>
        <div className=''><Section19 /></div>
        
        <div className=''>
        <Section20 />
        </div>
        <Section18 />
        <Footer/>

    </div>
  )
}

export default Diet_plan