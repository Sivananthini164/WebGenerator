import React, { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import icon from '../assets/icon.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-[#000c2f] p-5 w-full fixed flex justify-between items-center shadow-md shadow-zinc-900 z-50">
        {/* Left section with logo and title */}
        <div className="flex items-center pl-4 w-2/5">
          <img src={icon} alt="Logo" className="w-20 h-20" />
          <span className="uppercase font-bold text-xl text-white ml-2 italic">WebGenerator</span>
        </div>

        {/* Right section with nav links */}
        <div className="hidden md:flex w-4/5 justify-center items-center gap-8 text-xl font-bold text-zinc-400 pr-4">
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Tech Stack</a>
          <a href="#">Integration</a>
          <a href="#">Pricing</a>
          <button className="p-2 bg-blue-950 text-zinc-400 border-2 border-blue-600 rounded-full shadow-md">Get Started</button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden p-4 text-blue-900 text-3xl cursor-pointer" onClick={toggleMenu}>
          <FaAlignJustify />
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-zinc-100 shadow-md text-center mt-24 p-10 gap-4 text-red-700 font-bold text-lg fixed w-full z-40">
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Tech Stack</a>
          <a href="#">Integration</a>
          <a href="#">Pricing</a>
          <button className="p-2 bg-blue-950 text-red-400 border-2 border-blue-600 rounded-full mx-auto w-1/2">Get Started</button>
        </div>
      )}
    </>
  );
}

export default Navbar;
