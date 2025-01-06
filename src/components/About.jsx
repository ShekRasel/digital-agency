import React from "react";
import { BiRightArrow } from "react-icons/bi";
import VideoSection from "./VideoSection";

export default function About() {
  return (
    <div id="about" className="relative py-24 lg:py-36 bg-gradient-to-r from-indigo-700 to-blue-500 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      
      {/* Curved SVG Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,202.7C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,213.3C1440,213,1488,203,1536,197.3L1536,0L1536,320L1488,320C1440,320,1344,320,1248,320C1152,320,1056,320,960,320C864,320,768,320,672,320C576,320,480,320,384,320C288,320,192,320,96,320L48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-8 2xl:px-32 relative z-10 gap-24">
        {/* Left Side: Images */}
        <div className="hidden md:flex gap-10 items-center w-full md:w-1/2 justify-center">
          <div className="flex flex-col gap-12">
            <img
              src="images/about-01.png"
              alt="About 1"
              className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
            />
            <img
              src="images/about-02.png"
              alt="About 2"
              className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-16">
            <img
              src="images/about-03.png"
              alt="About 3"
              className="rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-100">Why Choose Us</h1>
          <div className="font-extrabold text-3xl lg:text-5xl text-white space-y-2">
            <h1>We Make Our Customers</h1>
            <h1>Happy by Delivering</h1>
            <h1>The Best Services.</h1>
          </div>

          <p className="mt-8 px-6 md:px-0 text-xl text-gray-300 leading-relaxed">
            We provide exceptional services that ensure our clients are satisfied. From web development to digital marketing, we guarantee top-notch quality and reliable solutions to meet your business needs.
          </p>

          <VideoSection />
        </div>
      </div>
    </div>
  );
}
