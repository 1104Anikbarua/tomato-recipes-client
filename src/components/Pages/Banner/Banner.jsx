import React from 'react';
import bg from '../../../assets/banner/bg.png'
const Banner = () => {
    return (
        <div className='relative flex flex-col items-center justify-center mt-20 h-[100vh]'>
            <div className='absolute inset-0 w-full bg-cover bg-center filter contrast-50' style={{ backgroundImage: `url(${bg})` }}></div>
            <div className='relative text-center'>
                <h1 className='text-7xl font-raleway font-extrabold text-center text-white my-auto'>DELICIOUS FOOD</h1>
                <p className='text-5xl font-raleway font-medium text-white text-center'>Stay With Tomato</p>
                <button className='bg-black w-40 rounded-md h-10 mt-5 text-white font-medium'>Click</button>
            </div>
        </div>

    );
};

export default Banner;