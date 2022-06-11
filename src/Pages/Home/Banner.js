import React from 'react';
import developerImg from '../../images/parvez.png';

const Banner = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='lg:flex justify-around items-center'>
                <div className='text-center mt-16 lg:w-[50%]'>
                    <h1 className='my-8'>THIS IS ME</h1>
                    <h2 className='text-5xl font-bold'>MERN Stack Web Developer</h2>
                    <p className='mt-8'>
                        I am a WEB Developer. I am working with React, Node.js, and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).
                    </p>
                    <a href="https://drive.google.com/file/d/1z_zf5Lka3v5qfc0DMHZhvDk3Fgz5A38l/view" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">Resume</button>
                    </a>
                </div>
                <div>
                    <img className='w-full' src={developerImg} alt="developerImg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;