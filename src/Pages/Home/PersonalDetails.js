import React from 'react';
// import developerImg from '../../images/parvez.png';

const PersonalDetails = () => {
    return (
        <div className='lg:flex justify-around items-center my-8 lg:container'>
            <div className='w-[100%]'>
                {/* <img src={developerImg} alt="DeveloperPhoto" /> */}
            </div>
            <div className='text-center mt-16 lg:w-[50%]'>
                <h3 className='my-8'>About Me</h3>
                <h1 className='text-3xl font-bold'>PERSONAL DETAILS</h1>
                <p className='mt-8'>
                    Here, I focus on a range of items and features that we use in life without giving them a second thought. such as web development.
                </p>
                <a href='https://www.linkedin.com/in/parvez-rahman-87714422a/' target={'_blank'}>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-3 font-semibold text-white lg:hover:bg-primary btn-wide mt-6">View Full Details</button>
                </a>
            </div>
        </div>
    );
};

export default PersonalDetails;