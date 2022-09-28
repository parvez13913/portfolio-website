import React from 'react';
import developerImg from '../../images/developer/parvezz.png';
import resume from '../../images/resume/MERN Stack Resume.pdf';
import { Link } from 'react-router-dom';

const PersonalDetails = () => {
    return (
        <div className='lg:flex justify-around items-center my-8 font'>
            <div className='w-1/2'>
                <img className='w-96 rounded-md hover:scale-95 hover:-rotate-1 transform duration-1000' src={developerImg} alt="developerImg" />
            </div>
            <div className='text-left mt-16'>
                <div>
                    <h3 className='text-4xl mt-2 font-bold text-[#8cc090]'>About Me</h3>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold mt-4 text-white'>PERSONAL INFORMATION</h2>
                    <div className='grid grid-cols-2 gap-4 my-4 text-[#808da4]'>
                        <p>
                            <span className='font-semibold'>Name:</span> Parvez Rahman
                        </p>
                        <p>
                            <span className='font-semibold'>Age:</span> 22 Years
                        </p>
                        <p>
                            <span className='font-semibold'>Email:</span> parvezz13913@gmail.com
                        </p>
                        <p>
                            <span className='font-semibold'>Address:</span> Jhenaidah,Bangladesh
                        </p>
                        <p>
                            <span className='font-semibold'>Skill:</span> Font-End
                        </p>
                        <p>
                            <span className='font-semibold'>Experience:</span> 1 Yerars
                        </p>
                        <p>
                            <span className='font-semibold'>Language:</span> Bangla,English
                        </p>
                    </div>
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
        </div>
    );
};

export default PersonalDetails;