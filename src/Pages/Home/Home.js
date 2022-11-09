import React from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner';
import Education from './Education';
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
            <Education />
            <Services />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;