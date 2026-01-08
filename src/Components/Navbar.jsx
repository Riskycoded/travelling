import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import StudyAbroadd from "../assets/StudyAbroadd.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-8 bg-white shadow-md relative">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xl">
            <img src={ StudyAbroadd} alt="" loading="lazy" />
          </div>
          <span className="text-xl font-semibold text-gray-800">Eduvoyage</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <a href="#" className="text-xl font-bold hover:text-blue-500 transition-colors">
            Home
          </a>
          <a href="#offering" className="text-xl font-bold hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#contact" className="text-xl font-bold hover:text-blue-500 transition-colors">
            Contact
          </a>
          <a href="#FAQQ" className="text-xl font-bold hover:text-blue-500 transition-colors">
            FAQ
          </a>
        </div>

        {/* Desktop WhatsApp Button */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/2348089953598?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20studying%20abroad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 rounded px-6 py-2 hover:bg-green-600 transition-all duration-300 cursor-pointer font-semibold text-center text-white flex items-center justify-center"
          >
            Whatsapp Us!
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#" 
              className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#offering" 
              className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <a 
              href="#FAQQ" 
              className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            
            {/* Mobile WhatsApp Button */}
            <a 
              href="https://wa.me/2348089953598?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20studying%20abroad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 rounded px-6 py-3 hover:bg-green-600 transition-all duration-300 font-semibold text-center text-white mt-4"
              onClick={toggleMenu}
            >
              Whatsapp Us!
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;