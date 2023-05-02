import React, { useState } from 'react';
import logo from '../../../assets/logo/nav-logo.png'
import { Link } from 'react-router-dom';
import { HiBars3, HiXMark } from "react-icons/hi2";
const Header = () => {
    const [show, setShow] = useState(false);



    return (
        <div className='flex items-center justify-between bg-black shadow-md fixed top-0 right-0 left-0 h-20 md:px-20 z-20'>
            <div>
                <img src={logo} alt="website nav logo" />
            </div>

            <ul className={`flex items-center flex-col absolute duration-700 w-full bg-black shadow-md md:flex-row md:justify-end md:static md:shadow-none ${show ? 'top-[82px]' : '-top-96'}`}>
                <li className='mr-5'>
                    <Link className='text-white font-raleway text-lg font-medium'>Home</Link>
                </li>

                <li className='mr-5'>
                    <Link className='text-white font-raleway text-lg font-medium'>Food</Link>
                </li>

                <li className='mr-5'>
                    <Link to={'/blog'} className='text-white font-raleway text-lg font-medium'>Blog</Link>
                </li>

                <li className='mr-5'>
                    <Link to={'/login'} className='text-white font-raleway text-lg font-medium'>Logout</Link>
                </li>
                <li className='mr-5'>
                    <Link to={'/login'} className='text-white font-raleway text-lg font-medium'>Login</Link>
                </li>

                <li className='mr-5'>
                    <Link to={'/register'} className='text-white font-raleway text-lg font-medium'>Register</Link>
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