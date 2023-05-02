import React from 'react';
import Google from './Google/Google';
import Github from './Github/Github';
import { Link } from 'react-router-dom';
// import loginLottie from '../../../assets/login.json'
// import Lottie from 'lottie-react'

const Login = () => {
    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto'>
            <p className='text-center font-raleway font-extrabold text-xl'>Please Login</p>
            <form action="" className='flex flex-col'>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="email">
                        <span>Email</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="email" name="email" id="email" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="password">
                        <span>Password</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="password" name="" id="" />
                </div>

                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md' type="submit" value="Login" />
                <p>New To This Website please <Link className='text-blue-500' to={'/register'}>Register</Link></p>
            </form>

            <Google></Google>
            <Github></Github>
        </div>
    );
};

export default Login;