import React from 'react';
import webDesign from '../../images/services/design.png';
import webDevelopment from '../../images/services/development.png';
import Counter from './Counter';

const Services = () => {
    return (
        <div className='my-16'>
            <div>
                <h1 className='text-4xl font-bold text-center'>My Offered Services</h1>
            </div>
            <div className='lg:flex items-center justify-around text-center'>
                <div className='shadow-lg rounded-lg p-4 text-center'>
                    <div>
                        <img src={webDesign} alt="" />
                    </div>
                    <h2 className='mt-4 text-2xl'>Web Design</h2>
                </div>
                <div className='shadow-lg rounded-lg p-4 text-center'>
                    <div>
                        <img src={webDevelopment} alt="" />
                    </div>
                    <h2 className=' text-2xl'>Web Development</h2>
                </div>
            </div>
            <div>
                <Counter></Counter>
            </div>
            <div className='flex justify-center'>
                <a href="https://github.com/parvez13913" target="_blank" rel="noopener noreferrer">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">Details Information</button>
                </a>
            </div>
        </div>
    );
};

export default Services;