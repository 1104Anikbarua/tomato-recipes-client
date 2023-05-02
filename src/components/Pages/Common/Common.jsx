import React from 'react';
import Banner from '../Banner/Banner';
import History from '../History/History';
import Chef from '../Chef/Chef';
import Trusted from '../Trusted/Trusted';

const Common = () => {

    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Trusted></Trusted>
            {/* <History></History> */}
        </div>
    );
};

export default Common;