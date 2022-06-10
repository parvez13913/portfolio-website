import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className='lg:mx-2'>
                <ul>
                    <li>
                        <a className='hidden lg:block font-semibold text-3xl font-serif'>Parvez Rahman</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>
            <div className='lg:mx-2'>
                <ul>
                    <li>
                        <a className='lg:hidden font-semibold text-lg font-serif'>Parvez Rahman</a>
                    </li>
                </ul>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;