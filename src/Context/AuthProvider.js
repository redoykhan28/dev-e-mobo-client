import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.init';


//get auth
const auth = getAuth(app)

//create context
export const authContext = createContext()

const AuthProvider = ({ children }) => {

    //state for hold user
    const [user, setuser] = useState(null)

    //state for loader
    const [loader, setLoader] = useState(true)

    //SignUp
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    //login
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //hold a user
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setuser(currentUser)
            console.log('current User:', currentUser)
            setLoader(false)
        })

        return () => {

            unsubscribe()
        }

    }, [])

    //set display name
    const updateUser = (name) => {
        setLoader(true);
        return updateProfile(auth.currentUser, {

            displayName: name
        })

    }

    //logout
    const logout = () => {

        setLoader(true)
        localStorage.removeItem('token')
        return signOut(auth)
    }

    //auth value passing obj
    const authInfo = {
        signUp,
        login,
        updateUser,
        logout,
        user,
        loader
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;