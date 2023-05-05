import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo/nav-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { ChefContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import Hamburger from 'hamburger-react';


const Header = () => {
    const [show, setShow] = useState(false);
    const [isOpen, setOpen] = useState(false)

    const { user, logOutUser } = useContext(ChefContext);

    const handleSignOut = () => {
        logOutUser()
            .then(() => {
                toast.info('Logout successfully')
            })
            .catch((error) => {
                const errorMessage = error.message
                toast.error('Something Went Wrong')
            })
    }

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

                {/* <li className='mr-5'>
                    <NavLink to={'/food'} className={({ isActive }) => isActive ? 'true' : 'false'}>Food</NavLink>
                </li> */}

                <li className='mr-5'>
                    <NavLink to={'blog'} className={({ isActive }) => isActive ? 'true' : 'false'}>Blog</NavLink>
                </li>

                {
                    user && <li className='mr-5'>
                        <NavLink to={'login'} className={({ isActive }) => isActive ? 'true' : 'false'}
                            onClick={() => handleSignOut()}
                        >Logout</NavLink>
                    </li>
                }

                {
                    user
                        ?
                        <li className='flex flex-col items-center mr-5'
                        // onMouseEnter={() => setShowName(true)}
                        // onMouseLeave={() => setShowName(false)}
                        >
                            {
                                <Link to={'/profile'}>
                                    <img title={user?.displayName}
                                        className='w-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="user photo" />
                                </Link>
                            }
                            {/* {
                                showName && <p className='text-lg text-white duration-700 ease-linear block'>{user?.displayName}</p>
                            } */}
                        </li>
                        :
                        <li className='mr-5'>
                            <NavLink to={'login'} className={({ isActive }) => isActive ? 'true' : 'false'}>Login</NavLink>
                        </li>
                }

                {
                    !user && <li className='mr-5'>
                        <NavLink to={'register'} className={({ isActive }) => isActive ? 'true' : 'false'}>Register</NavLink>
                    </li>
                }
            </ul>
            <div className='md:hidden'
                onClick={() => setShow(!show)}>

                <Hamburger
                    color='white'
                    toggled={isOpen} toggle={setOpen} />
            </div>
        </div >
    );
};

export default Header;