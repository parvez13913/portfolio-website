import React from 'react';
import developerImg from '../../images/developer/parvez.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './Banner.css';

const Banner = () => {
    return (
        <div className='lg:pb-4 font'>
            <div className='lg:flex md:flex justify-around items-center'>
                <div className='p-4 lg:p-0'>
                    <h1 className='text-4xl text-[#8cc090] font-bold lg:my-3'>HELLO!</h1>
                    <h1 className='text-3xl font-bold my-3 text-white'>I Am,Parvez Rahman</h1>
                    <p className='text-xl text-[#808da4] leading-relaxed'>
                        I'm Parvez Rahman, a professional web developer with long-time experience in this field​.
                    </p>
                    <div className='justify-items-center space-x-8 mt-2'>
                        <a target='_blank' href="https://www.facebook.com/parvez.rahman.13913">
                            <FontAwesomeIcon className='text-2xl border p-2 rounded-full text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white' icon={faFacebook} />
                        </a>
                        <a target='_blank' href="https://www.instagram.com/parvez13913/">
                            <FontAwesomeIcon className='text-2xl border rounded-full p-2 text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white' icon={faInstagram} />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/parvez-rahman-87714422a/">
                            <FontAwesomeIcon className='text-2xl border rounded-full p-2 text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white' icon={faLinkedinIn} />
                        </a>
                        <a target='_blank' href="https://github.com/parvez13913">
                            <FontAwesomeIcon className='text-2xl border rounded-full p-2 text-[#8cc090] border-[#8cc090] hover:bg-[#8cc090] hover:text-white' icon={faGithub} />
                        </a>
                    </div>
                    <button className="uppercase p-3 font-normal text-white btn-wide mt-6 border border-[#8cc090] hover:rounded-full transform duration-1000">
                        <a href='https://www.linkedin.com/in/parvez-rahman-87714422a/' target={'_blank'}>
                            View Full Details
                        </a>
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