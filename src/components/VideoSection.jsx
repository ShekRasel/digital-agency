import React, { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';

const VideoSection = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const handleButtonClick = () => {
    setVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setVideoVisible(false);
  };

  return (
    <div className="md:flex items-center justify-center space-x-4 mt-10">
      <button
        className="text-2xl animate-pulse border rounded-full p-5 text-white bg-blue-700"
        onClick={handleButtonClick}
      >
        <BiRightArrow />
      </button>
      <h1 className="text-2xl lg:text-3xl font-bold mt-2 md:mt-0">SEE HOW WE WORK</h1>

      {isVideoVisible && (
        <div className="relative w-full h-full max-w-3xl mx-auto mt-8">
          <div className="absolute top-0 right-0 p-4">
            <button
              className="text-white text-2xl bg-black rounded-full p-2"
              onClick={handleCloseVideo}
            >
              ✕
            </button>
          </div>
          <iframe
            className="w-full h-64"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
