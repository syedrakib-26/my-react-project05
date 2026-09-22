import React from 'react'

import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-16 py-5 border-b border-gray-100"'>
            <div className='flex items-center'>
                <img src={Logo} alt="Logo" />
                </div>
                <div>
                <ul  className='flex items-center justify-between gap-8 text-sm'>
                    <li className="text-pink-600">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>
            <div className="flex items-center gap-5">
                <button className="text-gray-600 px-6 py-3 rounded-full hover:bg-pink-800">Sign In</button>
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-125 hover:bg-pink-800">Sign Up</button>
            </div>
        </nav>
    );
};

export default Navbar;