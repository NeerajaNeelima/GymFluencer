import React,{useEffect,useState,useRef} from 'react'
import Navbar from '../Components/Navbar';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Section6 from '../Components/Section6.jsx';
import Section7 from '../Components/Section7.jsx'
import Section8 from '../Components/Section8.jsx'
import Section9 from '../Components/Section9.jsx';
import Section10 from '../Components/Section10.jsx';
import Section11 from '../Components/Section11.jsx';
import Section12 from '../Components/Section12.jsx';
import Section13 from '../Components/Section13.jsx';
import Section14 from '../Components/Section14.jsx';
import Footer from '../Components/Footer';
const Home = () => {
   
   
    const section3Ref = useRef(null);
    const section11Ref = useRef(null);
    const section14Ref = useRef(null);
    const section13Ref = useRef(null);

    const scrollToSection3 = () => {
      console.log('Click')
      if (section3Ref.current) {
        section3Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollToSection11 = () => {
      console.log('Click')
      if (section11Ref.current) {
        section11Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToSection14 = () => {
      console.log('Click')
      if (section14Ref.current) {
        section14Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const scrollToSection13 = () => {
      console.log('Click')
      if (section13Ref.current) {
        section13Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
  
   
    
    return (
      <div >
        <Navbar onAboutClick={scrollToSection3} onBenefitsClick={scrollToSection11} onConcat={scrollToSection14} onBlogClick={scrollToSection13}/>
        <Section1 />
        <Section2 />
        <Section3 ref={section3Ref}/>
        <Section4 />
        <Section5  />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 ref={section11Ref}/>
        <Section12 />
        <Section13 ref={section13Ref}/>
        <Section14 ref={section14Ref}/>
        <Footer/>
      </div>
    )
}

export default Home