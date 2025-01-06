import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 flex items-center justify-center">
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center  rounded-3xl shadow-2xl overflow-hidden bg-opacity-90">
        {/* Left Side: Company Info Section */}
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left p-6">
          <h2 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Welcome to <span className="text-gradient">Yourbrand</span> Company
          </h2>
          <p className="text-xl text-gray-200 mb-6">
            We specialize in innovative solutions that drive growth for businesses. Our team is dedicated to providing exceptional services tailored to your needs. Let’s make great things happen!
          </p>
          <div className="space-y-4 mt-8">
            <a
              href="tel:0123456789"
              className="flex items-center justify-center md:justify-start text-white hover:text-indigo-300 transition duration-300 text-xl"
            >
              <span className="material-icons mr-3 text-2xl">phone</span>
              0123456789
            </a>
            <a
              href="mailto:contact@yourbrand.com"
              className="flex items-center justify-center md:justify-start text-white hover:text-indigo-300 transition duration-300 text-xl"
            >
              <span className="material-icons mr-3 text-2xl">email</span>
              contact@yourbrand.com
            </a>
            <a
              href="https://yourbrand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start text-white hover:text-indigo-300 transition duration-300 text-xl"
            >
              <span className="material-icons mr-3 text-2xl">public</span>
              Visit Our Website
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form Section */}
        <div className="md:w-1/2 bg-indigo-800 p-6 rounded-2xl shadow-2xl mt-6 md:mt-0">
          <h3 className="text-4xl font-extrabold text-white mb-6">Get In Touch</h3>
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 p-4 rounded-lg border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-4 rounded-lg border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="mt-2 p-4 rounded-lg border-2 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r  text-white py-3 px-6 rounded-lg hover:bg-gradient-to-l from-indigo-600  to-indigo-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
