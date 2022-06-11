import React from 'react';
import './About.css';
import developerImg from '../../images/parvez.png';

const About = () => {
    return (
        <div className='about'>
            <div className='p-16 bg-gradient-to-r from-blue-500 to-cyan-500'>
                <h1 className='text-center text-4xl'>About Me</h1>
            </div>
            <div className='lg:flex justify-around items-center my-8 lg:container'>
                <div className='w-[100%]'>
                    <img src={developerImg} alt="DeveloperPhoto" />
                </div>
                <div className='text-center mt-16 lg:w-[50%]'>
                    <h3 className='my-8'>About Me</h3>
                    <h1 className='text-3xl font-bold'>PERSONAL DETAILS</h1>
                    <h1 className='text-xl font-bold mt-8'>Parvez Rahman</h1>
                    <p className='mt-4'>
                        Hi I am Parvez Rahman. I am an honors first year student of Chemistry Department of Jhenaidah K.C. College. My weakness over programming since I was in school. I have decided to learn web development by thinking a lot and I am learning well. I want to be a good person and a good web developer.I want to develop my skills more in the next 5 months and get a good Jobs. I will do whatever it takes to develop my own skills.
                    </p>
                    <a href='https://www.linkedin.com/in/parvez-rahman-87714422a/' target={'_blank'}>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">View Full Details</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;