import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Trusted from '../Trusted/Trusted';
import Reviews from '../Reviews/Reviews';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Common = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Trusted></Trusted>
            <Reviews></Reviews>
        </div>
    );
};

export default Common;