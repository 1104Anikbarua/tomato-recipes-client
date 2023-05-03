import React, { useContext } from 'react';
import { ChefContext } from '../../../AuthProvider/AuthProvider';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {

    const { user, loading } = useContext(ChefContext);
    const location = useLocation();
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;