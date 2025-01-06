import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false); // For mobile solution menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSolutionMenu = () => {
    setIsSolutionOpen(!isSolutionOpen);
  };

  return (
    <header
      className={`${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out text-gray-700 px-10 font-sans`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Logo */}
        <a href="#home">
          <div className="text-3xl font-bold tracking-wider">
            <img src="logos/logo-light.svg" alt="logo" className="h-10" />
          </div>
        </a>

        {/* Center: Navigation Links (Desktop Only) */}
        <nav className="hidden lg:flex space-x-12 text-lg text-gray-900">
          <a href="#home" className="hover:text-blue-600 transition-all">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition-all">
            About Us
          </a>

          {/* Our Solution with Popup Hover */}
          <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="#solution" className="hover:text-blue-600 transition-all">
              Our Solution
              <FaChevronDown className="inline-block ml-2 text-xl" />
            </a>
            {isHovered && (
              <div className="absolute top-full mt-2 left-0 w-72 bg-indigo-700 text-white p-4 rounded-lg shadow-xl transform scale-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-20">
                <a
                  href="#solution-details"
                  className="block text-lg hover:text-indigo-200 transition-all"
                >
                  Solution Details
                </a>
                <a
                  href="#case-studies"
                  className="block text-lg hover:text-indigo-200 mt-2 transition-all"
                >
                  Case Studies
                </a>
                <a
                  href="#pricing"
                  className="block text-lg hover:text-indigo-200 mt-2 transition-all"
                >
                  Pricing Plans
                </a>
                <a
                  href="#testimonials"
                  className="block text-lg hover:text-indigo-200 mt-2 transition-all"
                >
                  Customer Testimonials
                </a>
              </div>
            )}
          </div>

          <a href="#blogs" className="hover:text-blue-600 transition-all">
            Blogs
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-all">
            Contact Us
          </a>
        </nav>

        {/* Right: Sign In / Sign Up Buttons */}
        <div className="hidden lg:flex space-x-8">
          <button className="bg-transparent border-2 border-gray-900 text-gray-900 py-3 px-8 rounded-md hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 ease-in-out">
            Sign In
          </button>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-4xl">
            {isMenuOpen ? (
              <span className="text-black">×</span> // Cross
            ) : (
              <span className="text-black">≡</span> // Hamburger
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-600 text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-4xl text-white hover:text-gray-300 transition-all"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-8">
          <a
            href="#home"
            className="text-2xl font-semibold hover:text-yellow-300 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-2xl font-semibold hover:text-yellow-300 transition-all duration-300"
          >
            About Us
          </a>

          {/* Mobile: Our Solution with Slide-In Menu */}
          <div className="relative">
            <a
              href="#solution"
              className="text-2xl font-semibold hover:text-yellow-300 transition-all duration-300 cursor-pointer"
              onClick={toggleSolutionMenu}
            >
              Our Solution
              <FaChevronDown className="inline-block ml-2 text-xl" />
            </a>
            {isSolutionOpen && (
              <div className="absolute bg-gray-800 text-white p-6 w-64 rounded-lg shadow-lg mt-2 z-50">
                <a
                  href="#solution-details"
                  className="block text-lg hover:text-yellow-300 transition-all"
                >
                  Solution Details
                </a>
                <a
                  href="#case-studies"
                  className="block text-lg hover:text-yellow-300 mt-2 transition-all"
                >
                  Case Studies
                </a>
                <a
                  href="#pricing"
                  className="block text-lg hover:text-yellow-300 mt-2 transition-all"
                >
                  Pricing Plans
                </a>
                <a
                  href="#testimonials"
                  className="block text-lg hover:text-yellow-300 mt-2 transition-all"
                >
                  Customer Testimonials
                </a>
              </div>
            )}
          </div>

          <a
            href="#blogs"
            className="text-2xl font-semibold hover:text-yellow-300 transition-all duration-300"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="text-2xl font-semibold hover:text-yellow-300 transition-all duration-300"
          >
            Contact Us
          </a>

          <div className="flex flex-col space-y-4 mt-8">
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-md hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300">
              Sign In
            </button>
            <button className="bg-yellow-600 text-white py-3 px-8 rounded-md hover:bg-yellow-700 transition-all duration-300">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
