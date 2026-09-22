import React from 'react';

import { FaCopyright } from "react-icons/fa";

const Bottom = () => {
    return (
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8 lg:px-0 mt-12 border-t border-gray-300 pt-4">
      
          <div className="flex flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            
            <p className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                <FaCopyright /> 2026 Dev Stack. All rights reserved.</p>

            <div className="flex items-center gap-7">

              <a href="#" className="transition hover:text-gray-800"> Privacy </a>

              <a href="#" className="transition hover:text-gray-800" > Terms </a>

            </div>

       
        </div> 

    </div>
    );
};

export default Bottom;