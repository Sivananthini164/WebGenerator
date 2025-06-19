import React, { useState } from 'react';
import backgroundImage from '../assets/backgroundImage.jpg';


function HeroSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='  min-h-screen w-full bg-zinc-300 flex flex-col items-center justify-center px-4'>
        <div className='p-4 sm:p-6 md:p-10 w-full sm:w-4/5 m-2 text-2xl sm:text-3xl lg:text-5xl font-bold text-center text-red-800'>
          Create Beautiful Websites in Minutes - No Code, Just AI 
        </div>
        <div className='p-4 sm:p-6 md:p-8 w-full sm:w-4/5 m-2 text-lg sm:text-xl lg:text-3xl font-semibold text-center text-red-800'>
          Build modern, responsive websites in minutes with intelligent automation. No coding skills required
        </div>
        <button
          onClick={() => setShowModal(true)}
          className='p-3 sm:p-4 bg-blue-950 text-red-600 rounded-[18px] m-4 text-lg sm:text-xl lg:text-2xl font-semibold'>
          Build smart websites with AI
        </button>
      </div>

      {/* Alternate Modal Card */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-11/12 sm:w-3/4 md:max-w-md rounded-xl shadow-lg p-6 relative text-gray-900">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Alternate Content */}
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2">
              🌟 Build Instantly With AI
            </h2>
            <p className="text-center text-sm text-gray-600 mb-4">
              Tell us your project, and we’ll create a live preview tailored to your business – powered by AI.
            </p>

            <input
              type="text"
              placeholder="Business/Project name"
              className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Website type (e.g., Blog, Store, Portfolio)"
              className="w-full mb-5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-800 transition">
              Generate AI Website
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
