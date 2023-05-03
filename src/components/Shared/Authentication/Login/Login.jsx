import React, { useContext, useState } from 'react';
import Google from '../Google/Google';
import Github from '../Github/Github';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [error, setError] = useState('');
    const { logInUser } = useContext(ChefContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleUserLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (email === '' || password === '') {
            setError('Email and password cannot be empty')
            return;
        }

        logInUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success('Logged in Successful')
                setError('')
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
        event.target.reset()
    }



    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto'>
            <p className='text-center font-raleway font-extrabold text-xl'>Please Login</p>
            <form onSubmit={handleUserLogIn} action="" className='flex flex-col'>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="email">
                        <span>Email</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="email" name="email" id="email"
                        placeholder='Your Email' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="password">
                        <span>Password</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="password" name="password" id="password"
                        placeholder='Password' />
                </div>

                {
                    error &&
                    <p className='text-red-500 font-raleway mt-2'>{error}</p>}
                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md cursor-pointer' type="submit" value="Login" />
                <p className='font-raleway font-medium mt-2'>New To This Website please <Link state={from} className='text-blue-500' to={'/register'}>Register</Link></p>
            </form>

            <Google></Google>
            <Github></Github>
        </div>
    );
};

export default Login;