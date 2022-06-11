import React from 'react';
import Banner from './Banner';
import './Home.css';
import PersonalDetails from './PersonalDetails';
import Services from './Services';

const Home = () => {
    return (
        <div className='home-section'>
            <Banner />
            <PersonalDetails />
            <Services />
        </div>
    );
};

export default Home;