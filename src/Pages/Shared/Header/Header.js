import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <div className="navbar bg-[#152136] sticky top-0 z-50">
            <div>
                <h5 className='text-lg text-[#8b98af]'>Parvez</h5>
            </div>
            <div className="text-[#8b98af] mx-auto">
                <ul className="p-0 font-semibold flex space-x-8">
                    <li>
                        <HashLink className="space-x-2 btn" smooth to='home#banner'>
                            <i className="fa-solid fa-house"></i>
                            <span>Home</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className='space-x-2 btn' smooth to='home#about'>
                            <i className="fa-solid fa-user"></i>
                            <span>About</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className='space-x-2 btn' smooth to='home#skill'>
                            <i className="fa-solid fa-lightbulb"></i>
                            <span>Skills</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className='space-x-2 btn' smooth to='home#education'>
                            <i className="fa-solid fa-user-graduate"></i>
                            <span>Education</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className='space-x-2 btn' smooth to='home#service'>
                            <i className="fa-solid fa-gears"></i>
                            <span>Services</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className='space-x-2 btn' smooth to='home#projects'>
                            <i className="fa-solid fa-briefcase"></i>
                            <span>Projects</span>
                        </HashLink>
                    </li>
                    <li>
                        <HashLink className='space-x-2 btn' smooth to='home#contact'>
                            <i className="fa-solid fa-address-book"></i>
                            <span>Contact</span>
                        </HashLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;