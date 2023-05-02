import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export const ChefContext = createContext(null);

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        signUpUser,
        loginUser
    }

    return (
        <ChefContext.Provider value={authInfo}>

        </ChefContext.Provider>
    );
};

export default AuthProvider;