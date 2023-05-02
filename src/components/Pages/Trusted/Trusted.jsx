import React from 'react';
import Marquee from 'react-fast-marquee';

const Trusted = () => {
    return (
        <div className='my-20 h-80 bg-black'>
            <h1 className='text-7xl font-raleway font-extrabold text-center text-white mb-5'>These Chef Previously Work For</h1>

            <Marquee direction='left' className='overflow-y-hidden'>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>The Taj Place</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>The Oberoi Udaivilas</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>Hilton mumbai</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>The pearless inn</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>grand hyatt goa</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>Radisson Blu Mumbai</p>
            </Marquee>
            <Marquee direction='right' className='overflow-y-hidden'>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>The Taj Place</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>The Oberoi Udaivilas</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>Hilton mumbai</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>The pearless inn</p>
                <p className='font-raleway text-3xl uppercase font-extrabold text-white mr-5'>grand hyatt goa</p>
            </Marquee>
        </div>
    );
};

export default Trusted;