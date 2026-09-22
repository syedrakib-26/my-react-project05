// import React from 'react'


import { useState } from "react";

import Logo from '../assets/logo-text.png'




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="relative flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4 sm:px-8 lg:px-16">



      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col gap-1.5 lg:hidden" aria-label="Toggle menu">

        <span className="h-0.5 w-7 bg-gray-700"></span>
        <span className="h-0.5 w-7 bg-gray-700"></span>
        <span className="h-0.5 w-7 bg-gray-700"></span>

      </button>


         <div className='flex items-center'>
                <img src={Logo} alt="Logo" />               
        </div>


      <div className="hidden lg:block">
        <ul className="flex items-center gap-8 text-sm">
          <li>
             <a href="#" className="text-pink-600 transition hover:text-pink-700"> Home </a>

          </li>

          <li>
            <a href="#" className="text-gray-600 transition hover:text-pink-600"> Technologies </a>
          </li>

          <li>
            <a href="#" className="text-gray-600 transition hover:text-pink-600"> Projects </a>
          </li>

          <li>
            <a href="#" className="text-gray-600 transition hover:text-pink-600">About </a>
          </li>

          <li>
            <a href="#" className="text-gray-600 transition hover:text-pink-600" > Contact </a>

          </li>

        </ul>


      </div>



      <div className="flex items-center gap-3 sm:gap-5">

        <button className="text-sm text-gray-600 transition rounded-full px-5 py-2.5 hover:bg-pink-700 sm:block"> Sign In </button>

        <button className="rounded-full bg-pink-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700 hover:shadow-lg"> Sign Up </button>

      </div>

  
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-gray-100 bg-white px-6 py-5 shadow-md lg:hidden">
          <ul className="flex flex-col gap-5">

            <li>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-pink-600"> Home </a>
            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 hover:text-pink-600"> Technologies </a>
            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 hover:text-pink-600" >  Projects </a>
            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 hover:text-pink-600" > About </a>

            </li>

            <li>
              <a href="#" onClick={() => setMenuOpen(false)}  className="block text-sm text-gray-600 hover:text-pink-600" > Contact </a>

            </li>

    
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;