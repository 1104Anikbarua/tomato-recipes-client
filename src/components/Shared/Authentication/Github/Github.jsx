import React, { useContext } from 'react';
import github from '../../../../assets/icon/github.png';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Github = () => {
    const { githubSignUp } = useContext(ChefContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleSignUpGithub = () => {
        githubSignUp()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }

    return (
        <div>
            <button onClick={handleSignUpGithub} className='flex font-raleway font-bold items-center my-5 justify-center w-full text-white rounded-md bg-black py-1 uppercase'>
                <span className='mr-2'>Continue With Github</span>
                <img className='w-5 h-5 bg-white' src={github} alt="" />
            </button>
        </div>
    );
};

export default Github;