import React, { useContext, useState } from 'react';
import Google from '../Google/Google';
import Github from '../Github/Github';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PageTitle from '../../PageTitle/PageTitle';

const Login = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [show, setShow] = useState(false)
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const { logInUser, logTry, resetPassword } = useContext(ChefContext);

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
            .then((response) => {
                console.log(response)
                // console.log(response.status)
                if (response.status === 200) {
                    logTry(email, password)
                        .then((result) => {
                            toast.success('Logged in Successful')
                            setError('')
                            navigate(from, { replace: true })
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }
            })
            .catch((error) => {
                // console.log(error.response.data)
                const data = error?.response?.data;
                const message = data?.error?.message;
                // console.log(message)
                setError(message)
            })

        // .then((result) => {
        //     const user = result.user;
        //     toast.success('Logged in Successful')
        //     setError('')
        //     navigate(from, { replace: true })
        // })
        // .catch((error) => {
        //     console.log(error)
        //     const errorMessage = error.message;
        //     setError(errorMessage)
        // })
        event.target.reset()
    }
    const handleEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
    }
    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                toast.info(`password reset email sent to ${email}`)
            })
            .catch((e) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto px-5 lg:px-0'>
            <PageTitle titles={'Login'}></PageTitle>
            <p className='text-center font-raleway font-extrabold text-xl'>Please Login</p>
            <form onSubmit={handleUserLogIn} action="" className='flex flex-col'>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="email">
                        <span>Email</span>
                    </label>
                    <input
                        onBlur={handleEmail}
                        className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="email" name="email" id="email"
                        placeholder='Your Email' required />
                </div>

                <div className='flex flex-col relative'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="password">
                        <span>Password</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2'
                        type={show ? 'text' : 'password'}
                        name="password" id="password"
                        placeholder='Password' required />


                    {
                        show
                            ?
                            <HiEyeSlash
                                className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'
                                onClick={() => setShow(!show)}>
                            </HiEyeSlash>
                            :
                            <HiEye
                                className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'
                                onClick={() => setShow(!show)}
                            />
                    }
                </div>

                {
                    error &&
                    <p className='text-red-500 font-raleway mt-2'>{error}</p>
                }
                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md cursor-pointer' type="submit" value="Login" />

                <Link onClick={handleResetPassword} className='text-blue-500'>Forget Password?</Link>

                <p className='font-raleway font-medium mt-2'>New To This Website please <Link state={from} className='text-blue-500' to={'/register'}>Register</Link></p>
            </form>

            <Google></Google>
            <Github></Github>
        </div>
    );
};

export default Login;