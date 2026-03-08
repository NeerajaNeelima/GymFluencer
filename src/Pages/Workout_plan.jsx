import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Section16 from '../Components/Section16';
import Section17 from '../Components/Section17';
import Section18 from '../Components/Section18';
const Workout_plan = () => {
    const location = useLocation();
  const { headerText, descriptionText } = location.state || {};
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <div>

        <Navbar/>
        <div className='pt-28'>
        <Section16 headerText={headerText} descriptionText={descriptionText} />
        </div>
        <div className=''>
        <Section17 />
        </div>
        <Section18 />
        <Footer/>

    </div>
  )
}

export default Workout_plan