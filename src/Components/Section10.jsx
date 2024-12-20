
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import imag1_1 from '../assets/Images/section10-1.1.avif';
import imag1_2 from '../assets/Images/section10-1.2.avif';
import imag2_1 from '../assets/Images/section10-2.1.avif';
import imag2_2 from '../assets/Images/section10-2.2.avif';
import imag3_1 from '../assets/Images/section10-3.1.avif';
import imag3_2 from '../assets/Images/section10-3.2.avif';
import logo from '../assets/Images/0v6KpXFPQZJJNjkZDISeeJJLc.svg'
import section10bg from '../assets/Images/section10bg.svg'

const Section10 = () => {
  const userDetails = [
    {
      name: 'John Doe',
      age: 29,
      before_image: imag1_1,
      after_image: imag1_2,
      benefits: {
        weeks: 12,
        weight: { before: 220, after: 180 },
        body_fats: { before: 25, after: 18 }
      }
    },
    {
      name: 'Jane Smith',
      age: 34,
      before_image: imag2_1,
      after_image: imag2_2,
      benefits: {
        weeks: 10,
        weight: { before: 160, after: 140 },
        body_fats: { before: 30, after: 22 }
      }
    },
    {
      name: 'Mark Johnson',
      age: 41,
      before_image: imag3_1,
      after_image: imag3_2,
      benefits: {
        weeks: 8,
        weight: { before: 200, after: 190 },
        body_fats: { before: 28, after: 24 }
      }
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  const showNextSlide = () => {
    setCurrentSlide((prev) => (prev === userDetails.length ? 1 : prev + 1));
  };

  const showPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? userDetails.length : prev - 1));
  };

  useEffect(() => {
    const autoScroll = setInterval(showNextSlide, 5000); 
    return () => clearInterval(autoScroll); 
  }, [currentSlide]);

  return (
    <div className="w-full h-[800px] overflow-hidden mt-10 text-white relative">
     
      <div className="flex justify-center items-center">
        <div
          className="text-center text-6xl text-red-600 w-4/5 font-extrabold"
          style={{ fontFamily: "'Jura', sans-serif" }}
        >
          TRANSFORMATION MADE POSSIBLE WITH GYMFLUENCER
        </div>
      </div>

      
      <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out">
        {userDetails.map((user, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex transition-transform duration-700 ease-in-out transform ${
              currentSlide === index + 1
                ? 'translate-x-0'
                : currentSlide > index + 1
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            
            <div className="flex w-full">
              <div className="flex flex-col ml-20 w-2/5 p-5">
              <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" class="custom-svg"  width="600" height="600" fill="none"><path fill="#121212" fill-rule="evenodd" d="M166.32.004c-2.519.031-5.037.062-7.556.072C109.006.191 62.238 19.31 26.33 54.024l-1.64 1.605c-.27.262-.543.52-.814.779-2.143 2.042-4.222 4.022-5.306 6.861-.105.847-.176 1.416-.123 1.973.107 1.14.73 2.232 2.627 5.558a362.43 362.43 0 0 1 2.634 4.527l1.42 2.481a1724.4 1724.4 0 0 1 8.851 15.463l1.9 3.358 1.876 3.27 1.752 3.093c1.96 3.434 3.421 6.353 3.809 10.324l-1.622 1.93C22.328 132.1 9.967 160.441 4.313 184.887a945.12 945.12 0 0 1-.996 4.429C.638 199.353.054 208.99.009 219.31l-.006 2.131c-.106 19.568 2.465 39.604 9.977 57.813l1.336 3.062c9.035 21.135 20.697 39.808 37.493 55.588l1.507 1.412c11.392 10.952 23.883 20.169 38.104 27.087l1.896.913c11.117 5.456 22.455 9.36 34.467 12.382l2.533.618c14.194 3.472 28.4 3.47 42.957 3.125 39.865-1.628 79.462-20.605 106.606-49.571l1.437-1.554c33.179-35.857 43-76.631 43-125h-93v-54h-31v139h31v-54h61l-.035.192c-1.156 6.355-2.218 12.199-4.019 18.327l-.759 2.481c-1.905 6.244-3.837 12.382-6.734 18.25l-1.453 2.75c-7.712 15.088-17.12 28.405-30.02 39.516l-2.98 2.484c-26.031 21.746-57.148 30.148-90.547 29.379-30.802-1.24-62.862-15.156-84.153-37.769l-2.3-2.61c-24.793-27.87-35.012-59.293-34.282-96.308 1.04-30.863 14.26-62.136 36.848-83.516l2.434-2.176c24.123-21.655 53.132-35.508 86.004-35.361 2.198.025 4.395.049 6.594.046 7.602-.023 14.998.048 22.442 1.805l1.96.51c22.853 5.191 47.117 16.58 63.273 34.02l1.727 1.98c13.783 15.332 25.294 32.501 31 52.5l2 7.5h32c0-25.414-19.057-56.057-35.625-74.25-1.001-.989-1.474-1.456-1.914-1.952-.395-.445-.763-.912-1.461-1.798-.907-2.377-1.168-3.536-.295-5.956l1.181-2.071 1.329-2.371 1.472-2.539a1219.69 1219.69 0 0 1 4.657-8.196l1.656-2.867 1.671-2.894 1.665-2.883c1.074-1.866 2.15-3.732 3.226-5.598 2.5-4.26 4.915-8.478 6.965-12.976.254-1.425.372-2.083.267-2.704-.089-.534-.343-1.04-.814-1.98l-1.98-1.965c-24.203-24.055-51.965-41.721-84.676-51.761l-3.074-.926C197.38 1.949 182.18-.101 166.32.004Zm91.871 83.187c2.937-4.854 5.592-9.359 7.125-14.875-59.589-44.909-150.865-55.944-209 0v3c1.076 1.615 2.143 3.239 3.145 4.901l1.237 2.111 1.348 2.295 1.395 2.38c1.33 2.267 2.66 4.533 3.988 6.8l.887 1.513a71.422 71.422 0 0 0 6.933-3.847c32.583-20.75 72.291-29.142 110.543-22.84l3.524.687c18.577 3.455 34.327 9.758 50.872 18.831 1.344.739 2.689 1.474 4.037 2.206 2.455 1.327 4.906 2.659 7.352 4.002l1.739.961c1.157-1.913 2.309-3.83 3.457-5.75l1.418-2.375Z" clip-rule="evenodd"/><path fill="#121212" d="M151.316 176.316h30v93h-30v-93Z"/><path fill="#121212" d="M181.316 125.316c1 1 1 1 1.113 3.96l-.016 3.919-.004 2.081c-.006 2.201-.018 4.402-.031 6.603l-.014 4.467a4457.2 4457.2 0 0 1-.048 10.97 2854.08 2854.08 0 0 1-3.255-.466c-20.76-2.959-40.723-2.538-58.412 10.715-13.792 11.254-24.953 26.746-27.333 44.751-1.658 18.86 2.144 36.932 13.75 52.188 12.307 14.486 28.128 24.257 47.302 25.999 9.263.532 17.677-.76 26.948-2.187v32c-28.586 4.084-56.277-.176-79.901-17.384-22.682-17.51-34.922-41.179-39.697-69.112-1.208-10.521-.915-21.209 1.598-31.504l.742-3.441c6.143-26.069 23.187-47.331 45.508-61.746 21.101-12.502 47.666-18.374 71.75-11.813Z"/></svg>
              </div>
                <div className='absolute top-16 left-32'>
                <div className="border-l-4 border-l-red-600 flex flex-col gap-4 p-3 w-5/6">
                  <div className="grid grid-cols-[20%_80%] gap-4">
                    <div className="text-3xl font-bold items-center justify-center text-gray-500">Name:</div>
                    <div className="text-white text-3xl ml-4 font-bold">{user.name}</div>
                  </div>
                  <div className="grid grid-cols-[20%_60%] gap-4">
                    <div className="text-3xl font-bold items-center justify-center text-gray-500">Age:</div>
                    <div className="text-white text-3xl ml-4 font-bold">{user.age}</div>
                  </div>
                </div>
                <div
                  className="flex flex-col justify-center gap-8 my-20 font-extrabold"
                  style={{ fontFamily: "'Jura', sans-serif" }}
                >
                  <div className="flex gap-20">
                    <div className="border border-white py-2 px-8 font-semibold text-lg">
                      {user.benefits.weeks} Weeks
                    </div>
                    <div className="text-xl font-semibold text-gray-500 flex justify-center items-center">Before</div>
                    <div className="text-xl font-semibold text-gray-500 flex justify-center items-center">After</div>
                  </div>
                  <div className="border border-gray-400 w-5/6"></div>
                  <div>
                    <div className="flex gap-20">
                      <div className="text-2xl font-semibold text-gray-500 flex justify-start items-start py-2 px-6">
                        Weight
                      </div>
                      <div className="flex">
                        <div className="text-4xl font-semibold text-white flex justify-center items-center">
                          {user.benefits.weight.before}
                        </div>
                        <span className="text-lg font-semibold text-gray-500 flex justify-end items-end">kg</span>
                      </div>

                      <div className="flex">
                        <div className="text-4xl font-semibold text-white flex justify-center items-center">
                          {user.benefits.weight.after}
                        </div>
                        <span className="text-lg font-semibold text-gray-500 flex justify-end items-end">kg</span>
                      </div>
                    </div>
                  </div>
                  <div>
                </div>
                    <div className="flex gap-20">
                      <div className="text-2xl font-semibold text-gray-500 flex justify-start items-start py-2 px-6">
                        Body fat
                      </div>
                      <div className="flex justify-start">
                        <div className="text-4xl font-semibold text-white flex justify-center items-center">
                          {user.benefits.body_fats.before}
                        </div>
                        <span className="text-lg font-semibold text-gray-500 flex justify-start items-end">%</span>
                      </div>

                      <div className="flex justify-start">
                        <div className="text-4xl font-semibold text-white flex justify-center items-center">
                          {user.benefits.body_fats.after}
                        </div>
                        <span className="text-lg font-semibold text-gray-500 flex justify-start items-end">%</span>
                      </div>
                    </div>
                  </div>
              </div>
              </div>

              {/* Images */}
              <div className="flex justify-center w-1/2">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-4 mt-32">
                    <img
                      src={user.before_image}
                      alt="Before"
                      className="w-[300px] h-[400px] object-cover"
                    />
                    <div className="flex justify-center items-center">
                      <span
                        className="text-red-600 text-3xl"
                        style={{ fontFamily: "'Jura', sans-serif" }}
                      >
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-32 relative">
                <svg
                    className="absolute -top-8 -right-8 animate-spin"
                    viewBox="0 0 100 100"
                    style={{ width: "80px", height: "80px" }}
                >
                    <path
                    id="curve-circle"
                    d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="none"
                    ></path>
                    <text>
                    <textPath
                        href="#curve-circle"
                        startOffset="0"
                        style={{
                        letterSpacing: "0.15em",
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "11px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fill: "white",
                        }}
                    >
                        · BUILT · TRAINED &amp; POWERED · GYMFLUENCER
                    </textPath>
                    </text>
                </svg>
                <div className='absolute -top-4 -right-3 '>
                    <img src={logo} alt='' className='w-10'/>
                </div>

                <img
                    src={user.after_image}
                    alt="After"
                    className="w-[300px] h-[400px] object-cover"
                />
                <div className="flex justify-center items-center">
                    <span
                    className="text-red-600 text-3xl"
                    style={{ fontFamily: "'Jura', sans-serif" }}
                    >
                    After
                    </span>
                </div>
                </div>



                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <button
        onClick={showPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black text-white z-50"
      >
        <FaChevronLeft size={30} />
      </button>
      <button
        onClick={showNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black text-white z-50"
      >
        <FaChevronRight size={30} />
      </button>

     
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        {userDetails.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentSlide === index + 1
                ? 'bg-white'
                : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
      
    </div>
  );
};

export default Section10;

