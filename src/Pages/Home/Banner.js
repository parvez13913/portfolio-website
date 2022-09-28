import React from 'react';
import developerImg from '../../images/developer/parvez.png';
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
                    <h1 className='text-4xl text-[#8cc090] font-bold my-3'>HELLO!</h1>
                    <h1 className='text-5xl font-bold my-3 text-white'>I Am,Parvez Rahman</h1>
                    <p className='text-2xl text-[#808da4] leading-relaxed'>
                        I'm Parvez Rahman, a professional web developer with long-time experience in this field​.
                    </p>
                    <div className='flex items-center justify-start pt-5'>
                        <a target='_blank' className='mr-4 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://www.facebook.com/parvez.rahman.13913"><img className='w-6' src={facebookIcon} alt="" /></a>
                        <a target='_blank' className='mx-5 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://www.instagram.com/parvez13913/"><img className='w-5' src={instagramIcon} alt="" /></a>
                        <a target='_blank' className='mx-5 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://www.linkedin.com/in/parvez-rahman-87714422a/"><img className='w-5' src={linkedinIcon} alt="" /></a>
                        <a target='_blank' className='mx-5 p-3 border rounded-full border-[#8cc090] hover:bg-[#8cc090]' href="https://github.com/parvez13913"><img className='w-5' src={githubIcon} alt="" /></a>
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