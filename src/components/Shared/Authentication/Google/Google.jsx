import React, { useContext } from 'react';
import google from '../../../../assets/icon/googlee.png'
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const Google = () => {
    const { googleSignUp } = useContext(ChefContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSingUpGoogle = () => {
        googleSignUp()
            .then((result) => {
                const user = result.user;
                // console.log(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }

    return (
        <div>
            <button onClick={handleSingUpGoogle} className='flex font-raleway font-bold items-center my-5 justify-center w-full text-white rounded-md bg-black py-1 uppercase'>
                <span className='mr-2'>Continue With Google</span>
                <img className='w-5 h-5' src={google} alt="" />
            </button>
        </div>
    );
};

export default Google;