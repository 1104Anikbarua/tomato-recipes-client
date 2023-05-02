import React, { useState } from 'react';
import logo from '../../../assets/logo/nav-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { HiBars3, HiXMark } from "react-icons/hi2";
const Header = () => {
    const [show, setShow] = useState(false);



    return (
        <div className='flex items-center justify-between bg-black shadow-md fixed top-0 right-0 left-0 h-20 md:px-20 z-20'>
            <div>
                <Link to={'/'}>
                    <img src={logo} alt="website nav logo" />
                </Link>
            </div>

            <ul className={`flex items-center flex-col absolute duration-700 w-full bg-black shadow-md md:flex-row md:justify-end md:static md:shadow-none ${show ? 'top-[82px]' : '-top-96'}`}>
                <li className='mr-5'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'true' : 'false'}>Home</NavLink>
                </li>

                <li className='mr-5'>
                    <NavLink to={'/food'} className={({ isActive }) => isActive ? 'true' : 'false'}>Food</NavLink>
                </li>

                <li className='mr-5'>
                    <NavLink to={'blog'} className={({ isActive }) => isActive ? 'true' : 'false'}>Blog</NavLink>
                </li>

                <li className='mr-5'>
                    <NavLink to={'login'} className={({ isActive }) => isActive ? 'true' : 'false'}>Logout</NavLink>
                </li>
                <li className='mr-5'>
                    <NavLink to={'login'} className={({ isActive }) => isActive ? 'true' : 'false'}>Login</NavLink>
                </li>

                <li className='mr-5'>
                    <NavLink to={'register'} className={({ isActive }) => isActive ? 'true' : 'false'}>Register</NavLink>
                </li>
            </ul>
            <div className='md:hidden'
                onClick={() => setShow(!show)}>

                {
                    show
                        ?
                        <HiXMark className='w-8 h-8 text-white cursor-pointer'></HiXMark>
                        :
                        <HiBars3 className='w-8 h-8 text-white cursor-pointer'></HiBars3>
                }
            </div>
        </div >
    );
};

export default Header;