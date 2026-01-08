import React from 'react';
import './First.css';
import bscImage from '../assets/bsc.jpg';
import bsctImage from '../assets/bsct.jpg';
import msImage from '../assets/msct.jpg';
import research from '../assets/research.jpg';

const First = () => {
  const universities = [
    { name: "University of Melbourne", country: "Australia" },
    { name: "University of Toronto", country: "Canada" },
    { name: "University of Oxford", country: "UK" },
    { name: "Harvard University", country: "USA" },
    { name: "University of Sydney", country: "Australia" },
    { name: "McGill University", country: "Canada" },
    { name: "University of Cambridge", country: "UK" },
    { name: "MIT", country: "USA" },
    { name: "Australian National University", country: "Australia" },
    { name: "University of British Columbia", country: "Canada" },
    { name: "Imperial College London", country: "UK" },
    { name: "Stanford University", country: "USA" },
    { name: "University of Queensland", country: "Australia" },
    { name: "McMaster University", country: "Canada" },
    { name: "LSE", country: "UK" },
    { name: "Yale University", country: "USA" },
  ];

  const programs = [
    {
      title: "Bachelor of Science Degrees",
      icon: (
        <img src={bscImage} alt="BSc" loading="lazy" className="w-full h-full object-cover" />
      ),
      description: "Launch your academic journey with comprehensive undergraduate programs designed for success."
    },
    {
      title: "Bachelor of Science Degrees Top Up",
      icon: (
        <img src={bsctImage} alt="BSc Top Up" loading="lazy" className="w-full h-full object-cover" />
      ),
      description: "Complete your bachelor's degree with our specialized top-up programs for career advancement."
    },
    {
      title: "Masters of Science",
      icon: (
        <img src={msImage} alt="MSc" loading="lazy" className="w-full h-full object-cover" />
      ),
      description: "Advance your expertise with postgraduate programs that open doors to leadership roles."
    },
    {
      title: "Master of Research",
      icon: (
        <img src={research} alt="Research" loading="lazy" className="w-full h-full object-cover" />
      ),
      description: "Develop advanced research skills and contribute to cutting-edge discoveries in your field."
    }
  ];

  const benefits = [
    {
      title: "Top Rated UK Universities",
      icon: (
        <span className="w-full h-full flex items-center justify-center text-2xl">🏛️</span>
      ),
      description: "Gain admission into prestigious institutions recognized globally for academic excellence."
    },
    {
      title: "Affordable Tuitions",
      icon: (
        <span className="w-full h-full flex items-center justify-center text-2xl">💷</span>
      ),
      description: "Access quality education at competitive rates that won't break the bank."
    },
    {
      title: "Flexible Payment Plans",
      icon: (
        <span className="w-full h-full flex items-center justify-center text-2xl">🤝</span>
      ),
      description: "Choose payment options that work with your budget and financial situation."
    },
    {
      title: "Fast Visa Application Support", 
      icon: (
        <span className="w-full h-full flex items-center justify-center text-2xl">🛂</span>
      ),
      description: "Get expert guidance through the visa process with quick turnaround times."
    },
    {
      title: "100% Stress Free Process",
      icon: (
        <span className="w-full h-full flex items-center justify-center text-2xl">✅</span>
      ),
      description: "From application to enrollment, we handle the complexities so you can focus on your future."
    },

    {
      title: "Personalized Counseling",
      icon: (
        <span className="w-full h-full flex items-center justify-center text-2xl">🎯</span>
      ),
      description: "Receive one-on-one guidance tailored to your academic and career goals."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Universities Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-12">
            Gain Admission into Top Universities
          </h1>
          
          <div className="relative w-full overflow-hidden universities-carousel-container">
            <div className="universities-carousel">
              {universities.map((uni, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                >
                  {/* Logo removed: display text only */}
                  <p className="text-xl font-semibold text-gray-800">{uni.name}</p>
                  <p className="text-sm text-gray-600 mt-2">{uni.country}</p>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {universities.map((uni, index) => (
                <div
                  key={`dup-${index}`}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                >
                  {/* Logo removed: display text only */}
                  <p className="text-xl font-semibold text-gray-800">{uni.name}</p>
                  <p className="text-sm text-gray-600 mt-2">{uni.country}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What We Offer Header */}
        <div className="text-center mb-16" id='offering'>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">What We Offer</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your pathway to world-class education starts here
          </p>
        </div>

        {/* Programs Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {program.icon}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" id='Choose'>Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-black cursor-pointer hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default First;