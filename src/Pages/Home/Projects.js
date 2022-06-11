import React from 'react';
import projects1 from '../../images/projects-photo/bike.PNG';
import projects2 from '../../images/projects-photo/perfume.PNG';
import projects3 from '../../images/projects-photo/photography.PNG';

const Projects = () => {
    return (
        <div className='my-16'>
            <h1 className='text-center text-4xl my-8'> My Latest Featured Projects</h1>
            <div className='lg:flex items-center justify-around my-7'>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl image-full my-4 lg:my-0">
                    <figure><img src={projects1} alt="projects1" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl'>Bike Hero</h2>
                        <p>A Computer Parts Manufacturer website</p>
                        <div className="card-actions">
                            <a href="https://bike-hero-5bfb8.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">Live Site Link</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl image-full my-4 lg:my-0">
                    <figure><img src={projects2} alt="projects1" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl'>Perfume Hero</h2>
                        <p>A warehouse website</p>
                        <div className="card-actions">
                            <a href="https://perfume-hero.web.app/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">Live Site Link</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-96 bg-base-100 shadow-xl image-full my-4 lg:my-0">
                    <figure><img src={projects3} alt="projects1" /></figure>
                    <div className="card-body">
                        <h2 className='text-2xl'>Basic PhotoGraphy</h2>
                        <p>Independent Service Provider Website</p>
                        <div className="card-actions">
                            <a href="https://basic-photography.web.app/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">Live Site Link</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;