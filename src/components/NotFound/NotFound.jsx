import React from 'react';
import error from '../../assets/error.json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='relative'>
            <button onClick={() => navigate(-1)}
                className='absolute z-10 bg-black w-40 h-10 text-white rounded-lg font-raleway font-extrabold text-xl'>Back</button>
            <Lottie animationData={error} loop={true}></Lottie>
        </div>
    );
};

export default NotFound;