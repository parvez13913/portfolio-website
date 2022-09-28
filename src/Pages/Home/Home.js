import React from 'react';
import Banner from './Banner';
import './Home.css';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import Services from './Services';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <Banner />
            <PersonalDetails />
            <Services />
            <Skill />
            <Projects />
        </div>
    );
};

export default Home;