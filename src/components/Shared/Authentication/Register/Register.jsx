import React, { useContext } from 'react';
import { ChefContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {

    const { } = useContext(ChefContext)








    return (
        <div className='mt-40 mb-20 w-full max-w-sm mx-auto'>
            <p className='text-center font-raleway font-extrabold text-xl'>Please Register</p>
            <form action="" className='flex flex-col'>
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="name">
                        <span>Name</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="name" id="name" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg font-raleway font-semibold mb-2' htmlFor="photourl">
                        <span>Photo Url</span>
                    </label>
                    <input className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2' type="text" name="photo" id="photo" />
                </div>
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

                <input className='bg-black text-white font-raleway font-bold uppercase mt-5 py-1 rounded-md' type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;