import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { app } from '../firebase.config';
import axios from 'axios';
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export const ContextApi = createContext(null);

export const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const [err, setErr] = useState(null)
    const [user, setUser] = useState(null);



    const auth = getAuth(app);

    const registerWithEmail = (email, password, name, PhotoURL) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, PhotoURL)

    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const signInWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)

    }

    const singInWithGitHub = () => {
        setLoading(true)
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    // const updateUserInfo = (displayName, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: displayName, photoURL: photo
    //     })

    // }


    const signOutfromLogin = () => {
        toast.success('Signed Out Successfully')
        return signOut(auth)
    }

    const axiosSecure = useAxiosSecure()

    const handleDelete = async (id) => {
        const shouldDelete = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        console.log(shouldDelete)

        if (shouldDelete.isConfirmed) {

            const { data } = await axiosSecure.delete(`/blogs/${id}`)

            if (data.deletedCount > 0) {
                toast.success('Deleted Successfully')
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            console.log(data)
        }


        // fetch(`https://server-site-gamma-indol.vercel.app/items/${id}`, {
        //     method: "delete"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.deletedCount > 0) {
                    
        //             // const remaining = products.filter(item => item._id !== id);
        //             // setProducts(remaining);

        //         }
        //     })




    }



    const ContextValue = {
        auth,
        user,
        loading,
        setLoading,
        setUser,
        registerWithEmail,
        login,
        signOutfromLogin,
        signInWithGoogle,
        singInWithGitHub,
        // updateUserInfo,
        setErr,
        err,
        handleDelete
    }

    return (
        <ContextApi.Provider value={ContextValue}>
            {children}
        </ContextApi.Provider>
    )
}
