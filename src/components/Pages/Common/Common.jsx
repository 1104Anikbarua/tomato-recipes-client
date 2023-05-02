import React from 'react';
import Banner from '../Banner/Banner';
import History from '../History/History';
import Chef from '../Chef/Chef';
import Trusted from '../Trusted/Trusted';
import Reviews from '../Reviews/Reviews';

const Common = () => {

    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Trusted></Trusted>
            <Reviews></Reviews>
            {/* <History></History> */}
        </div>
    );
};

export default Common;