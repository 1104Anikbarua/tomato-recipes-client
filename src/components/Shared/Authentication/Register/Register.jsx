import React, { useContext, useState } from 'react';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import Google from '../Google/Google';
import Github from '../Github/Github';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PageTitle from '../../PageTitle/PageTitle';

const Register = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [error, setError] = useState('')
    const { signUpUser, updateUser, setReload } = useContext(ChefContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleRegisterUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;

        // if (email === '' || password === '') {
        //     setError('Email and password cannot be empty')
        //     return;
        // }
        // if (!/(?!.* ).{6}$/.test(password)) {
        //     // console.log('Password must be 6 character long')
        //     setError('Password must be 6 character long')
        //     return;
        // }
        if (emailError) {
            event.target.email.focus();
            return;
        }
        else if (passwordError) {
            event.target.password.focus();
            return;
        }

        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success('Successfully Registered')
                setError('')
                updateUser(name, photo)
                    .then(() => {
                        toast.info(`${name} is set as Display Name`)
                        setReload(new Date().getTime())
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        console.log(errorMessage)
                        toast.error('Something Went Wrong')
                    })
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
        event.target.reset()

    }

    const handleEmailChange = (event) => {
        const typedEmail = event.target.value
        // console.log(typedEmail)
        setEmail(typedEmail)
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(typedEmail)) {
            setEmailError('Please provide a valid email');
        } else {
            setEmailError('');
        }
    };
    const handlePasswordChange = (event) => {
        const typedPassword = event.target.value;
        // console.log(typedPassword)
        setPassword(typedPassword)
        // console.log(password)
        if (typedPassword.length < 6) {
            setPasswordError('Password must be atleast 6 character long')
        }
        else {
            setPasswordError('')
        }
    };

    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto px-5 lg:px-0'>
            <PageTitle titles={'Register'}></PageTitle>
            <p className='text-center font-raleway font-extrabold text-xl'>Please Register</p>
            <form action="" onSubmit={handleRegisterUser} className='flex flex-col'>
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="name">
                        <span>Name</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="name" id="name" required placeholder='Your Name' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="photourl">
                        <span>Photo Url</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="photo" id="photo"
                        required placeholder='Photo Url' />
                </div>
                {/* Email */}
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="email">
                        <span>Email</span>
                    </label>
                    <input
                        onChange={handleEmailChange}
                        value={email}
                        className={`bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2
                        ${email ?
                                emailError
                                    ?
                                    'outline-red-500 text-red-500'
                                    :
                                    'outline-green-600'
                                : ''
                            }

                        
                        `}
                        type="email"
                        name="email"
                        id="email"
                        required placeholder='Your Email' />
                    {
                        emailError &&
                        <p className='text-red-500 font-raleway mt-2'>{emailError}</p>
                    }
                </div>
                {/* Password */}
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="password">
                        <span>Password</span>
                    </label>
                    <input
                        onChange={handlePasswordChange}
                        value={password}

                        className={`bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2
                        ${password ?
                                passwordError
                                    ?
                                    'outline-red-500 text-red-500'
                                    :
                                    'outline-green-600'
                                : ''
                            }
                                
                                
                                `}

                        type="password"
                        name="password"
                        id="password"
                        required placeholder='Password' />
                    {
                        passwordError &&
                        <p className='text-red-500 font-raleway mt-2'>{passwordError}</p>
                    }
                </div>
                {
                    error &&
                    <p className='text-red-500 font-raleway mt-2'>{error}</p>
                }
                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md cursor-pointer' type="submit" value="Register" />
                <p className='font-raleway font-medium mt-2'>Already have an account please <Link className='text-blue-500' to={'/login'}>Login</Link></p>
            </form>
            <Google></Google>
            <Github></Github>
        </div>
    );
};

export default Register;