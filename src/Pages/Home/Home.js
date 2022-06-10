import React from 'react';
import developerImg from '../../images/parvez.png';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='lg:flex justify-around items-center'>
                <div>
                    <img className='w-full' src={developerImg} alt="developerImg" />
                </div>
                <div className='text-center mt-16'>
                    <h1 className='text-4xl'>Hello!</h1>
                    <h2 className='text-3xl'>I'm Parvez Rahman</h2>
                    <h2 className='text-lg font-semibold mt-8'>About Me</h2>
                    <p>
                        I am a WEB Developer. I am working with React, Node.js, and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).
                    </p>
                    <a href="https://drive.google.com/file/d/1z_zf5Lka3v5qfc0DMHZhvDk3Fgz5A38l/view" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-wide mt-6">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;