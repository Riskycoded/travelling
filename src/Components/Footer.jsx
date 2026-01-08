import React from 'react';
import StudyAbroad from "../assets/StudyAbroadd.png";
import LegalPages from './LegalPages'; // Add this import

const Footer = () => {

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 to-blue-200 py-12 px-8" id='contact'>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Left Section */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center text-white text-xl">
                <img src={StudyAbroad} alt="Study Abroad" />
              </div>
              <span className="text-2xl font-semibold text-gray-800">AbroadAchieve</span>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              From visa prep to securing admission, we guide you every step of the way.
            </p>
            
            <div className="flex gap-4 mt-1">
              <a href="https://x.com/abroadachieve?s=21" className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                𝕏
              </a>
              <a href="https://www.facebook.com/share/1DFjHPqtxm/?mibextid=wwXIfr" className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                f
              </a>
              <a href="https://www.instagram.com/abroad_achieve_?igsh=MXhsZHNyNG96d29lcg%3D%3D&utm_source=qr" className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                in
              </a>
            </div>
            
            <p className="text-gray-500 text-xs mt-4">
              2025 Eduvoyage. All rights reserved.
            </p>
          </div>
          
          {/* Middle Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-gray-800 mb-2">Menu</h3>
            
            <div className="flex flex-col gap-3">
              <a href="#Choose" className="text-gray-600 text-sm hover:text-purple-600 transition-colors duration-300">
                About Us
              </a>
              <a href="#offering" className="text-gray-600 text-sm hover:text-purple-600 transition-colors duration-300">
                Courses
              </a>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-gray-800 mb-1">Stay in the loop!</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Call us today to make enquiries or book a free counselling session.
            </p>
            
            <div className="mt-4">
  <a 
    href="tel:+2348089953598"
    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-black transition-colors duration-300"
  >
    Call Us
  </a>
</div>
            
            {/* Replace the old links with LegalPages component */}
            <LegalPages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;