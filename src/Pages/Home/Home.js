import React from 'react';
import Banner from './Banner';
import './Home.css';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import Services from './Services';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='bg-[#152136]'>
            <Banner />
            <PersonalDetails />
            <Skill />
            <Services />
            <Projects />
        </div>
    );
};

export default Home;