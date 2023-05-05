import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';


export const ChefContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        const postData = {
            email, password, returnSecureToken: true
        }
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgdbj5JH6Wd3Dks_Q3Li-4oJRcKpYziWI`, postData)
        // return signInWithEmailAndPassword(auth, email, password)
    }

    const logTry = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [reload]);

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        signUpUser,
        logInUser,
        updateUser,
        logOutUser,
        googleSignUp,
        githubSignUp,
        user,
        loading,
        setReload,
        logTry,
        resetPassword
    }

    return (
        <ChefContext.Provider value={authInfo}>
            {children}
        </ChefContext.Provider>
    );
};

export default AuthProvider;