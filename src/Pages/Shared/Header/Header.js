import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';


const Header = () => {
    return (
        <div className="navbar bg-[#152136] sticky top-0 z-50">
            <div>
                <h5 className='text-lg text-[#8b98af]'>Parvez</h5>
            </div>
            <div className="text-[#8b98af] mx-auto">
                <ul className="p-0 font-semibold flex space-x-8">
                    <li>
                        <CustomLink className="space-x-2 btn" to='/home'>
                            <i className="fa-solid fa-house"></i>
                            <span>Home</span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className='space-x-2 btn' to='/about'>
                            <i className="fa-solid fa-user"></i>
                            <span>About</span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className='space-x-2 btn' to='/skill'>
                            <i className="fa-solid fa-lightbulb"></i>
                            <span>Skills</span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className='space-x-2 btn' to='/education'>
                            <i className="fa-solid fa-user-graduate"></i>
                            <span>Education</span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className='space-x-2 btn' to='/service'>
                            <i className="fa-solid fa-gears"></i>
                            <span>Services</span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className='space-x-2 btn' to='/projects'>
                            <i className="fa-solid fa-briefcase"></i>
                            <span>Projects</span>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink className='space-x-2 btn' to='/contact'>
                            <i className="fa-solid fa-address-book"></i>
                            <span>Contact</span>
                        </CustomLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;