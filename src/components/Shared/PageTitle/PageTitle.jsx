import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ titles }) => {
    // console.log(titles)
    return (

        <Helmet>
            <title>{titles}-Tomato</title>
        </Helmet>

    );
};

export default PageTitle;