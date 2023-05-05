import React from 'react';
import bg from '../../../assets/banner/bg.png'
import { useNavigate } from 'react-router-dom';
const Banner = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/map')
    }

    return (
        <div className='relative flex flex-col items-center justify-center mt-20 h-[100vh]'>
            <div className='absolute inset-0 w-full bg-cover bg-center filter contrast-50' style={{ backgroundImage: `url(${bg})` }}></div>
            <div className='relative text-center'>

                <h1
                    data-aos='zoom-in-up'
                    data-aos-duration='1000'
                    data-aos-delay='200'

                    className='text-6xl lg:text-7xl font-raleway font-extrabold text-center text-white my-auto'>DELICIOUS FOOD</h1>

                <p
                    data-aos='zoom-in-up'
                    data-aos-duration='1000'
                    data-aos-delay='600'

                    className='text-5xl font-raleway font-medium text-white text-center'>Stay With Tomato</p>

                <button
                    onClick={handleRedirect}
                    data-aos='zoom-in-up'
                    data-aos-duration='1000'
                    data-aos-delay='900'

                    className='bg-black w-40 rounded-md h-10 mt-5 text-white font-bold text-sm'>Click</button>
            </div>
        </div>

    );
};

export default Banner;