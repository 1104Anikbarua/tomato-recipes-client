import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <FadeLoader className='mx-auto my-auto'
            color={'#f2ba57'}
            size={100}
            height={15}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default LoadingSpinner;