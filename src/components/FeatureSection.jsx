import React from 'react';

const FeatureSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Our Features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Feature 1</h3>
            <p className="mt-4 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Feature 2</h3>
            <p className="mt-4 text-base text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900">Feature 3</h3>
            <p className="mt-4 text-base text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
