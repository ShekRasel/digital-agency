import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-12">
          {/* Logo Section */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-center sm:text-left">
            <h2 className="text-5xl font-extrabold text-gradient mb-4">
              YourBrand
            </h2>
            <p className="text-lg text-gray-300 max-w-sm mx-auto sm:mx-0">
              Leading the way in innovation, technology, and creativity. We help you achieve your goals with the power of design and development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-indigo-300 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="hover:text-indigo-300 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="hover:text-indigo-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone size={20} className="mr-2 text-indigo-300" />
                <span className="text-gray-300">+1 (800) 123 4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope size={20} className="mr-2 text-indigo-300" />
                <span className="text-gray-300">contact@yourbrand.com</span>
              </li>
            </ul>
            <div className="flex gap-6 mt-4 justify-center sm:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                <FaFacebook size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
                <FaLinkedin size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <p className="text-sm mt-2">Designed with love by YourBrand Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
