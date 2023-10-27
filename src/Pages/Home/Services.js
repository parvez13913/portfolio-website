import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faEdit } from '@fortawesome/free-regular-svg-icons';
import './Service.css';

const Services = () => {

    return (
        <div id='service' className='font'>
            <div>
                <h1 className='text-[#8cc090] text-4xl text-center font-bold my-8'>SERVICES AND SOLUTIONS</h1>
            </div>
            <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4 justify-items-center'>
                <div className='w-11/12 md:w-11/12 md:my-2 lg:w-3/4 flex items-start space-x-7'>
                    <div className='scrvice-card'>
                        <FontAwesomeIcon className='text-5xl text-[#8cc090]' icon={faReact} />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>CREATIVE DESIGN</h2>
                        <p className='text-[#808da4]'>You will find unique and creative designs with me. I consider myself the best for new designs!</p>
                    </div>
                </div>

                <div className='w-11/12 md:w-11/12 md:my-2 lg:w-3/4 flex items-start space-x-7'>
                    <div className='scrvice-card'>
                        <FontAwesomeIcon className='text-5xl text-[#8cc090] justify-items-start' icon={faFreeCodeCamp} />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>UNLIMITED FEATURES</h2>
                        <p className='text-[#808da4]'>I am ready to create any kind of feature you want. I am the best for unlimited features!!</p>
                    </div>
                </div>
                <div className='w-11/12 md:w-11/12 md:my-2 lg:w-3/4 flex items-start space-x-7'>
                    <div className='scrvice-card'>
                        <i className="fa-sharp fa-solid fa-desktop text-5xl text-[#8cc090]"></i>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>ULTRA RESPONSIVE</h2>
                        <p className='text-[#808da4]'>I am ready to design any kind of responsive design, mobile, desktop, or tablet. I am the best for all kinds of responsive design.</p>
                    </div>
                </div>
                <div className='w-11/12 md:w-11/12 md:my-2 lg:w-3/4 flex items-start space-x-7'>
                    <div className='scrvice-card'>
                        <FontAwesomeIcon className='text-5xl text-[#8cc090]' icon={faLightbulb} />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>CREATIVE IDEAS</h2>
                        <p className='text-[#808da4]'>I consider myself best for web-related creative ideas. You can get any kind of creative idea from me.</p>
                    </div>
                </div>
                <div className='w-11/12 md:w-11/12 md:my-2 lg:w-3/4 flex items-start space-x-7'>
                    <div className='scrvice-card'>
                        <FontAwesomeIcon className='text-5xl text-[#8cc090]' icon={faEdit} />
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>EASY CUSTOMIZATION</h2>
                        <p className='text-[#808da4]'>I have the customization facility of the web. I am ready for any type of web-related customization.</p>
                    </div>
                </div>
                <div className='w-11/12 md:w-11/12 md:my-2 lg:w-3/4 flex items-start space-x-7'>
                    <div className='scrvice-card'>
                        <i className="fa-solid fa-headset text-5xl text-[#8cc090]"></i>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-2xl font-bold'>SUPPER SUPPORT</h2>
                        <p className='text-[#808da4]'>I am ready to support my clients 24 hours a day, my clients can get support from me anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;