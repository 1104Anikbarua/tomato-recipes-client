import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='mt-40 mb-20 divide-y-8 divide-black px-5 lg:px-20'>
            <PageTitle titles={'About Us'}></PageTitle>
            <p className='font-raleway font-medium text-xl mb-2'>Founded in 2023 in India, Tomato.com has grown from a small delhi startup to one of the world's leading digital food companies. Tomato.com mission is to make it easier for everyone to experience the indian food.</p>

            <p className='font-raleway font-medium text-xl mb-2'>
                By investing in the technology that helps take the friction out of travel, Tomato.com seamlessly connects millions of food lover with memorable experiences, a range of food options and incredible places food to taste - from homes to hotels and much more. As one of the worlds largest food marketplaces for both established brands and entrepreneurs of all sizes, Tomato.com enables properties all over the world to reach a global audience and grow their businesses.
            </p>

            <p className='font-raleway font-medium text-xl mb-2'>
                Tomato.com makes it easy and backs it all up with 24/7 customer support.
            </p>
        </div>
    );
};

export default AboutUs;