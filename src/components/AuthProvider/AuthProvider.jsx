import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const ChefContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
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
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignUp = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        signUpUser,
        logInUser,
        updateUser,
        logOutUser,
        googleSignUp,
        githubSignUp,
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