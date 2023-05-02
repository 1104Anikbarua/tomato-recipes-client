import React from 'react';
import google from '../../../../assets/icon/googlee.png'
const Google = () => {
    return (
        <div>
            <button className='flex font-raleway font-bold items-center my-5 justify-center w-full text-white rounded-md bg-black py-1 uppercase'>
                <span className='mr-2'>Continue With Google</span>
                <img className='w-5 h-5' src={google} alt="" />
            </button>
        </div>
    );
};

export default Google;