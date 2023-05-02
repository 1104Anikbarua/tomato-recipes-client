import React from 'react';
import Banner from '../Banner/Banner';
import History from '../History/History';
import Chef from '../Chef/Chef';
import { useLoaderData, useNavigation } from 'react-router-dom';

const Common = () => {
    // const data = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            {/* <History></History> */}
        </div>
    );
};

export default Common;