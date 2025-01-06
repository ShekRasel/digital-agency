import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'John Doe',
    photo: '/images/client1.avif',
    review: 'Amazing service! Delivered on time and exceeded my expectations. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    photo: '/images/client2.avif',
    review: 'The team was great to work with. The project was completed with precision and quality.',
    rating: 4,
  },
  {
    name: 'Michael Brown',
    photo: '/images/client3.avif',
    review: 'Fantastic experience! They really understand the client’s needs and deliver accordingly.',
    rating: 5,
  },
  {
    name: 'Lisa Johnson',
    photo: '/images/client4.avif',
    review: 'Highly skilled team, excellent communication, and perfect results. I’m very happy with the project.',
    rating: 4,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite Carousel Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  // Function to handle button click navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 via-purple-800 to-indigo-900 py-20 relative overflow-hidden">
      {/* Reversed Curved SVG Shape at the Top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,128L48,138.7C96,149,192,171,288,181.3C384,192,480,192,576,181.3C672,171,768,149,864,160C960,171,1056,213,1152,213.3C1248,213,1344,192,1392,186.7C1440,181,1488,171,1536,160L1536,0L1536,320L1488,320C1440,320,1344,320,1248,320C1152,320,1056,320,960,320C864,320,768,320,672,320C576,320,480,320,384,320C288,320,192,320,96,320L48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-white font-serif">What Our Clients Say</h2>

        {/* Carousel */}
        <div className="relative flex justify-center">
          <div className="overflow-hidden w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            {/* Current Review Slide */}
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6 py-8 md:px-12">
                  <div className="max-w-3xl bg-white rounded-xl shadow-xl p-8 text-left flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
                    <div className="relative">
                      <img
                        src={review.photo}
                        alt={review.name}
                        className="w-44 h-44 object-cover rounded-full mb-4 border-4 border-white shadow-lg"
                      />
                      {/* Add a glowing effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-indigo-800">{review.name}</h3>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={22}
                          className={`mr-1 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'} transition-all duration-200 hover:text-yellow-400`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-center">{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4  bg-white rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-indigo-600' : 'hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
