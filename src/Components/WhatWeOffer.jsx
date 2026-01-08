import React from 'react';

const WhatWeOffer = () => {
  const programs = [
    {
      title: "Bachelor of Science Degrees",
      icon: (
        <span className="w-8 h-8 inline-flex items-center justify-center text-2xl">🎓</span>
      ),
      description: "Launch your academic journey with comprehensive undergraduate programs designed for success."
    },
    {
      title: "Bachelor of Science Degrees Top Up",
      icon: (
        <span className="w-8 h-8 inline-flex items-center justify-center text-2xl">📚</span>
      ),
      description: "Complete your bachelor's degree with our specialized top-up programs for career advancement."
    },
    {
      title: "Masters of Science",
      icon: (
        <span className="w-8 h-8 inline-flex items-center justify-center text-2xl">🎓</span>
      ),
      description: "Advance your expertise with postgraduate programs that open doors to leadership roles."
    },
    {
      title: "Master of Research",
      icon: (
        <span className="w-8 h-8 inline-flex items-center justify-center text-2xl">🔬</span>
      ),
      description: "Develop advanced research skills and contribute to cutting-edge discoveries in your field."
    }
  ];

  const benefits = [
    {
      title: "Top Rated UK Universities",
      icon: (
        <span className="w-6 h-6 inline-flex items-center justify-center">🏛️</span>
      ),
      description: "Gain admission into prestigious institutions recognized globally for academic excellence."
    },
    {
      title: "Affordable Tuitions",
      icon: (
        <span className="w-6 h-6 inline-flex items-center justify-center">💷</span>
      ),
      description: "Access quality education at competitive rates that won't break the bank."
    },
    {
      title: "Flexible Payment Plans",
      icon: (
        <span className="w-6 h-6 inline-flex items-center justify-center">🤝</span>
      ),
      description: "Choose payment options that work with your budget and financial situation."
    },
    {
      title: "Fast Visa Application Support",
      icon: (
        <span className="w-6 h-6 inline-flex items-center justify-center">🛂</span>
      ),
      description: "Get expert guidance through the visa process with quick turnaround times."
    },
    {
      title: "100% Stress Free Process",
      icon: (
        <span className="w-6 h-6 inline-flex items-center justify-center">✅</span>
      ),
      description: "From application to enrollment, we handle the complexities so you can focus on your future."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
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
                  <div className="text-white">{program.icon}</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
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
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;