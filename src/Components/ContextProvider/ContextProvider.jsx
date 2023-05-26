import React, { createContext, useEffect, useState } from 'react';
export  const AuthContext=createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    const googleUserCreate=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubUserCreate=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const updateUserProfile=(users,name,imgUrl)=>{
        updateProfile(users, {
            displayName: name, photoURL: imgUrl
          })
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
const authInfo={
    createUser,
    signInUser,
    user,
    googleUserCreate,
    githubUserCreate,
    logOut,
    loading,
    updateUserProfile
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;