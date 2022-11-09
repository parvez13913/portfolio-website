import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="navbar bg-[#152136] sticky top-0 z-50">
            <div className="text-[#8b98af] mx-auto">
                <ul className="p-0 font-semibold flex space-x-11 ">
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/home'>
                                <h6>Home</h6>
                                <i className="fa-solid fa-house"></i>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/about'>
                                <h6>About</h6>
                                <i className="fa-solid fa-user"></i>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/skill'>
                                <h6>Skills</h6>
                                <i className="fa-solid fa-lightbulb"></i>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/education'>
                                <h6>Education</h6>
                                <i className="fa-solid fa-user-graduate"></i>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/service'>
                                <h6>Services</h6>
                                <i className="fa-solid fa-gears"></i>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/projects'>
                                <h6>Projects</h6>
                                <i className="fa-solid fa-briefcase"></i>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link className='flex flex-col items-center' to='/contact'>
                                <h6>Contact</h6>
                                <i className="fa-solid fa-address-book"></i>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;