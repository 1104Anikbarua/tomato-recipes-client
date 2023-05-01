import React from 'react';
import logo from '../../../assets/logo/nav-logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-black flex justify-between items-center h-20'>
            <div>
                <img src={logo} alt="website nav logo" />
            </div>

            <ul className='flex items-center'>
                <li className='mr-5'>
                    <Link className='text-white'>Home</Link>
                </li>

                <li className='mr-5'>
                    <Link className='text-white'>Food</Link>
                </li>

                <li className='mr-5'>
                    <Link className='text-white'>Chef</Link>
                </li>

                <li className='mr-5'>
                    <Link className='text-white'>Logout</Link>
                </li>
                <li className='mr-5'>
                    <Link className='text-white'>Login</Link>
                </li>

                <li className='mr-5'>
                    <Link className='text-white'>Register</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;