import React from 'react';
import Study from '../assets/caleb.png';
import CounsellingForm from './counsellingform';

const Hero = () => {
    return (
        <section className="hero-section bg-blue-500 text-white">
            <div className='flex flex-col md:flex-row gap-6'>
                {/* Text Content */}
                <div className='p-6 md:pl-10 space-y-3 text-center md:text-left'>
                    <button className='outline outline-1 rounded-md bg-transparent p-2 text-sm md:text-base'>
                        Study Abroad
                    </button>
                    <h1 className='text-3xl md:text-5xl font-bold font-sans'>
                        Your Study <span className='text-black'>Abroad</span> Companion
                    </h1>
                    <p className='pt-2 font-light text-sm md:text-base'>
                        Explore programs, scholarships, and resources to make your study abroad journey seamless and successful.
                    </p>
                    <CounsellingForm className='h-12 w-40 hover:bg-black cursor-pointer hover:text-white text-center items-center justify-center bg-white text-blue-700 rounded-sm mx-auto md:mx-0'>
                        Get free Counselling
                    </CounsellingForm>
                </div>
            
                {/* Image */}
                <div>
    <img src={Study} alt="Study Abroad" className='hidden md:block lg:w-200 lg:h-100'/>
</div>
            </div>
        </section>
    );
}

export default Hero;