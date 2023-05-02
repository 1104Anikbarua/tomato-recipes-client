import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


export const ChefContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        signUpUser,
        loginUser,
        updateUser,
        logOutUser,
        user,
        loading
    }

    return (
        <ChefContext.Provider value={authInfo}>
            {children}
        </ChefContext.Provider>
    );
};

export default AuthProvider;