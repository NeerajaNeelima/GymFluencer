import React, { useEffect, useRef, useState, forwardRef } from "react";

const Section3 = forwardRef((props, externalRef) => {
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
    <div
      ref={(node) => {
        sectionRef.current = node; 
        if (externalRef) {
          
          if (typeof externalRef === "function") {
            externalRef(node);
          } else {
            externalRef.current = node;
          }
        }
      }}
      className="h-[550px] flex flex-col justify-center items-center gap-2 overflow-hidden"
    >
      
      <div
        className={`text-[70px] text-red-600 font-bold transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
        style={{ fontFamily: "'Jura', sans-serif" }}
      >
        YOUR FITNESS.
      </div>
      <div
        className={`text-[70px] text-red-600 font-bold transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
        style={{ fontFamily: "'Jura', sans-serif" }}
      >
        OUR MISSION.
      </div>
      <div
        className={`text-[20px] w-[800px] text-center font-semibold transition-all duration-1000 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-[100px] opacity-0"
        }`}
      >
        At GymFluencer, our mission is simple: to provide the tools and support
        you need to reach your fitness goals. We combine innovative technology
        with personalized guidance to make fitness easier, more accessible, and
        more motivating. Join us as we help you transform your fitness journey,
        one workout at a time.
      </div>
    </div>
  );
});

export default Section3;
