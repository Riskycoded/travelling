import React from 'react';
import Study from '../assets/Graduate.jpg';

const Ready = () => {
    return (
        <section className="ready-section bg-blue-500 text-gray-900 flex flex-col md:flex-row gap-8 md:gap-20 p-6 md:p-0">

            <div className="w-full md:w-auto flex justify-center md:justify-start">
                <img
                    src={Study} 
                    alt="Graduate" 
                    loading="lazy"
                    className="w-full max-w-sm md:w-120 md:h-160 rounded-lg md:rounded-none object-cover"
                />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-0">
                <p className="text-3xl md:text-5xl text-white font-bold w-full md:w-180">
                    Ready to start your studying abroad journey?
                </p>
                <p className="pt-4 font-semibold text-white md:text-gray-900 text-sm md:text-base">
                    Get in touch with us today to get Counselling, Guidance and Support
                </p>

                                <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ausvisastudy@gmail.com&su=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 rounded-sm bg-white text-blue-700 w-40 hover:bg-black hover:text-white cursor-pointer transition-all duration-300 h-10 flex items-center justify-center font-semibold"
                                >
                                        Mail Us Today
                                </a>


            </div>

        </section>
    );
}

export default Ready;