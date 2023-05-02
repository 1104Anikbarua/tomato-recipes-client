import React, { useContext, useState } from 'react';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import Google from '../Google/Google';
import Github from '../Github/Github';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [error, setError] = useState('')
    const { signUpUser, updateUser } = useContext(ChefContext);

    const handleRegisterUser = (event) => {
        console.log(event.target.name.value)
        event.preventDefault();
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, photo, email, password)
        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Registered')
                setError('')
                updateUser(name, photo)
                    .then(() => {
                        toast.info(`${name} is set as Display Name`)
                    })
                    .catch(() => {
                        toast.error('Something Went Wrong')
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)
            })
        event.target.reset()

    }







    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto'>
            <p className='text-center font-raleway font-extrabold text-xl'>Please Register</p>
            <form action="" onSubmit={handleRegisterUser} className='flex flex-col'>
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="name">
                        <span>Name</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="name" id="name" placeholder='Your Name' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="photourl">
                        <span>Photo Url</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="photo" id="photo"
                        placeholder='Photo Url' />
                </div>

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
                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md cursor-pointer' type="submit" value="Register" />
                <p>Already have an account please <Link className='text-blue-500' to={'/login'}>Login</Link></p>
            </form>
            <Google></Google>
            <Github></Github>
        </div>
    );
};

export default Register;