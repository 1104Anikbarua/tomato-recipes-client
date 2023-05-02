import React from 'react';
import github from '../../../../assets/icon/github.png';

const Github = () => {
    return (
        <div>
            <button className='flex font-raleway font-bold items-center my-5 justify-center w-full text-white rounded-md bg-black py-1 uppercase'>
                <span className='mr-2'>Continue With Github</span>
                <img className='w-5 h-5 bg-white' src={github} alt="" />
            </button>
        </div>
    );
};

export default Github;