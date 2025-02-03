import React from 'react';

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-72 text-center p-4 md:p-4 bg-gradient-to-r from-[#97A3CE] via-[#C5AABF] to-[#4E76D9]">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800 px-4 md:px-0">
        WHAT WE DO?
      </h1>
      <p className="max-w-2xl mb-6 md:mb-8 text-gray-800 px-4 md:px-0 text-sm md:text-base">
        Cincha Holdings is a venture capital and private equity firm with an emphasis on emerging technologies, sustainability, and underserved markets.
        We partner with exceptional entrepreneurs to build transformative companies.
      </p>
      <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition duration-300 text-sm md:text-base">
        Chat With us
      </button>
    </div>
  );
};

export default WhatWeDoSection;