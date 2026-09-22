import React from 'react';

import Logo from '../assets/logo-text.png'

const Footer = () => {
    
  return (

    <footer className="w-full bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-0">
  
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8"> */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 items-center text-center lg:items-start lg:text-left">
          

          <div className="md:col-span-2">

            <div className="flex items-center gap-2">

                <img src={Logo} alt="Logo" />

            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              Curated tools, technologies, and resources for developers
              building modern software. </p>


            <div className="mt-6 flex items-center gap-5">
              <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-pink-500"> GitHub </a>

              <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-pink-500"> Twitter </a>

              <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-pink-500" > LinkedIn </a>

            </div>


          </div>

    

          <div className="mt-12 hidden grid-cols-3 gap-8 lg:grid md:col-span-1">
      
             <div>

            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900"> Product </h3>

         
            <ul className="space-y-3">
              <li>
                <a
                  href="#" className="text-sm text-gray-600 transition hover:text-gray-800"> Home </a>

              </li>

              <li>
                <a href="#" className="text-sm text-gray-600 transition hover:text-gray-800" > Technologies </a>

              </li>

              <li> 
                
                <a href="#" className="text-sm text-gray-600 transition hover:text-gray-800"> Projects </a>
              </li>

            </ul>

          </div>


          </div>

    
          <div className="mt-12 hidden grid-cols-3 gap-8 lg:grid md:col-span-1">
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900"> Company </h3>

              <ul className="space-y-3">

                <li> 
                    
                    <a href="#" className="text-sm text-gray-600 transition hover:text-gray-800"> About </a>

                </li>

                <li>
                  <a href="#"className="text-sm text-gray-600 transition hover:text-gray-800"> Contact </a>

                </li>

                <li>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-gray-800"> Careers </a>

                </li>

              </ul>

            </div>

          

            <div className="hidden md:block">

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-gray-900"> Legal </h3>

              <ul className="space-y-3">
                <li>
                     <a href="#" className="text-sm text-gray-600 transition hover:text-gray-800"> Privacy Policy </a>

                </li>

                <li>
                  <a href="#" className="text-sm text-gray-600 transition hover:text-gray-800"> Terms of Service </a>

                </li>

              </ul>

            </div>

          </div>



        </div>


      </div>
      
    </footer>


  );


};

export default Footer;



