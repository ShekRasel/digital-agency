import React from 'react';

const Hero = () => {
  return (
    <section id='home' className="relative bg-gradient-to-r from-indigo-700 to-blue-500  py-24 lg:flex justify-between 2xl:px-72 mt-24">
      
      {/* Top Curve */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className="w-full"
        >
          <path
            fill="white"
            d="M0,64C288,118 576,0 864,40C1152,80 1440,0 1440,0L1440,150L0,150Z"
          ></path>
        </svg>
      </div>

      {/* Left: Text Content */}
      <div className="relative z-10 max-w-2xl text-center md:text-left space-y-8 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white 2xl:text-blue-800 leading-tight">
          Transforming Ideas into Beautiful Digital Experiences
        </h1>
        <p className="text-xl text-gray-200">
          We specialize in UI/UX design, web development, and digital marketing, helping your brand stand out in the digital world.
        </p>

        <div className="space-y-6">
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-xl hover:from-indigo-700 hover:to-blue-700 transition duration-300 transform hover:scale-105">
            Get Started Now
          </button>
          <div className="text-lg text-gray-200">
            <p>Call us: <span className="text-indigo-200">(0123) 456 – 789</span></p>
            <p>We're here to help with any questions or concerns.</p>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative z-10 mt-12 md:mt-0 flex justify-center px-8">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-800 opacity-40 rounded-xl"></div>
        <img
          src="images/hero.png" 
          alt="Hero Image"
          className="w-full max-w-lg rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105"
        />
      </div>

    </section>
  );
};

export default Hero;
