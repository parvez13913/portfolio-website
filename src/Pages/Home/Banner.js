import React from 'react';
import developerImg from '../../images/developer/parvez.png';
import resume from '../../images/resume/MERN Stack Resume.pdf';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-[#f9f9ff] pb-4 font'>
            <div className='lg:flex justify-around items-center'>
                <div className='text-center lg:mt-16 lg:w-[50%]'>
                    <h1 className='mb-4 pt-2 lg:pt-0 text-lg'>THIS IS ME</h1>
                    <h2 className='text-5xl font-bold'>MERN Stack Web Developer</h2>
                    <p className='mt-2'>
                        I am a WEB Developer. I am working with React, Node.js, and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).
                    </p>
                    <button className="uppercase p-3 font-normal text-white btn-wide mt-6 back-button">
                        <Link to={resume} target="_blank" download={resume}>
                            <div className='flex items-center justify-center'>
                                <span>
                                    Download Resume
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </button>
                </div>
                <div className='lg:pt-3 pt-2'>
                    <img className='w-96 rounded-md background-img img' src={developerImg} alt="developerImg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;