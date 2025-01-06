import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const [hovered, setHovered] = useState(null);

  const teamMembers = [
    {
      name: 'John Doe',
      designation: 'UI/UX Designer',
      imageUrl: '/public/images/team-01.png',
      socials: {
        facebook: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Jane Smith',
      designation: 'Frontend Developer',
      imageUrl: '/public/images/team-02.png',
      socials: {
        facebook: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Michael Brown',
      designation: 'Backend Developer',
      imageUrl: '/public/images/team-03.png',
      socials: {
        facebook: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <div className="container mx-auto py-24 px-6 ">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-900 mb-12">
        Meet Our Creative, Dedicated Team
      </h2>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        We’re a group of passionate individuals working together to create innovative solutions for your business success.
      </p>

      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group w-72 h-96 bg-gradient-to-tl from-indigo-800 to-indigo-600 rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-64 object-cover transition-all duration-500"
            />

            {/* Name and Designation */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black opacity-80 p-4 text-center rounded-b-3xl">
              <h3 className="text-xl text-white font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-200">{member.designation}</p>
            </div>

            {/* Social Media Icons */}
            <div
              className={`absolute bottom-[-70px] left-0 w-full bg-black p-4 flex justify-center gap-8 text-white transition-all duration-500 group-hover:bottom-0 rounded-b-3xl`}
            >
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-all transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
