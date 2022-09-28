import React from 'react';
import developerImg from '../../images/developer/parvez.png';
import resume from '../../images/resume/MERN Stack Resume.pdf';
import { Link } from 'react-router-dom';
import facebookIcon from '../../images/icon/facebook.svg';
import instagramIcon from '../../images/icon/instagram.svg';
import linkedinIcon from '../../images/icon/linkedin.svg';
import githubIcon from '../../images/icon/github.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='pb-4 font'>
            <div className='lg:flex justify-around items-center'>
                <div className='w-1/2'>
                    <h1 className='text-5xl text-[#8cc090] font-bold mb-2'>HELLO!</h1>
                    <h1 className='text-6xl font-bold my-2 text-white'>I Am,Parvez Rahman</h1>
                    <p className='text-3xl text-[#808da4]'>
                        I'm Parvez Rahman, a professional web developer with long-time experience in this field​.
                    </p>
                    <div className='flex items-center justify-start py-2'>
                        <a target='_blank' className='mr-4 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://www.facebook.com/parvez.rahman.13913"><img className='w-6' src={facebookIcon} alt="" /></a>
                        <a target='_blank' className='mx-5 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://www.instagram.com/parvez13913/"><img className='w-5' src={instagramIcon} alt="" /></a>
                        <a target='_blank' className='mx-5 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://www.linkedin.com/in/parvez-rahman-87714422a/"><img className='w-5' src={linkedinIcon} alt="" /></a>
                        <a target='_blank' className='mx-5 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://github.com/parvez13913"><img className='w-5' src={githubIcon} alt="" /></a>
                    </div>
                    <button className="uppercase p-3 font-normal text-white btn-wide mt-6 border border-[#8cc090] hover:rounded-full transform duration-1000">
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
                    <img className='w-96 rounded-md hover:scale-95 hover:-rotate-1 transform duration-1000' src={developerImg} alt="developerImg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;