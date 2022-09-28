import React from 'react';
import developerImg from '../../images/developer/parvez.png';
import resume from '../../images/resume/MERN Stack Resume.pdf';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='bg-[#f9f9ff] pb-4 font'>
            <div className='lg:flex justify-around items-center'>
                <div>
                    <h1 className='text-5xl text-[#8cc090] font-bold'>HELLO!</h1>
                    <h1 className='text-5xl'>I Am,Parvez Rahman</h1>
                    <h2 className='font-bold'>MERN Stack Web Developer</h2>

                    <button className="uppercase p-3 font-normal text-white btn-wide mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-full transform duration-1000">
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
                    <img className='w-96 rounded-md hover:scale-95 hover:-rotate-1 transform duration-1000' style={{ backgroundImage: `url(https://i.ibb.co/0C5XPcZ/background-img.jpg)` }} src={developerImg} alt="developerImg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;