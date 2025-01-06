import React from 'react';
import { FaRocket, FaLaptop, FaMobileAlt, FaPenFancy, FaBrush, FaCloud, FaDatabase, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'We build scalable and responsive web applications.',
      icon: <FaLaptop size={60} />,
    },
    {
      name: 'Mobile App Development',
      description: 'Creating intuitive mobile applications for Android and iOS.',
      icon: <FaMobileAlt size={60} />,
    },
    {
      name: 'UI/UX Design',
      description: 'Delivering user-friendly and attractive designs.',
      icon: <FaPenFancy size={60} />,
    },
    {
      name: 'SEO Optimization',
      description: 'We optimize your website for better search engine rankings.',
      icon: <FaRocket size={60} />,
    },
    {
      name: 'Graphic Design',
      description: 'Creative designs for your branding and marketing.',
      icon: <FaBrush size={60} />,
    },
    {
      name: 'Cloud Services',
      description: 'We provide scalable and secure cloud-based solutions.',
      icon: <FaCloud size={60} />,
    },
    {
      name: 'Database Management',
      description: 'Managing and optimizing your database systems.',
      icon: <FaDatabase size={60} />,
    },
    {
      name: 'Cybersecurity',
      description: 'Ensuring the safety and security of your online presence.',
      icon: <FaShieldAlt size={60} />,
    },
  ];

  return (
    <div className="container mx-auto py-24 px-8">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Our Premium Services</h2>
      <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-gray-700">
        We provide a range of professional services to help you build your digital presence. Our team ensures quality, speed, and efficiency in every project.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative w-80 h-[450px] bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl"
          >
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex justify-center items-center rounded-t-2xl shadow-md">
              {service.icon}
            </div>

            <div className="p-6 absolute bottom-0 left-0 right-0 bg-white rounded-b-2xl shadow-md transition-all duration-300 transform group-hover:translate-y-4">
              <h3 className="text-3xl font-semibold mb-4 text-indigo-800">{service.name}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
              <button className='mt-4 py-2 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:bg-indigo-700'>
                Read More
              </button>
            </div>

            {/* Hover Effect - Soft Color Overlay */}
            <div className="absolute inset-0 bg-transparent z-10 group-hover:bg-gradient-to-r from-purple-500 to-indigo-600 opacity-30 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
