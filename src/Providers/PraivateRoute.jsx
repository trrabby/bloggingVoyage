import React, { useContext, useEffect } from 'react'
import { Navigate, useLocation } from "react-router-dom"
import Lottie from "lottie-react";
import groovyWalkAnimation from "../Components/groovyWalk.json";
import { ContextApi } from './ContextProvider';


export const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(ContextApi)
    const location = useLocation()
    // console.log(location.pathname)
    // console.log(loading)
    if (user) {

        return children
    }


    else {
        if (loading) {

            // return <div className='flex justify-center items-center text-primary'>
            //     <span className="loading loading-bars loading-lg"></span>
            // </div>

            return <Lottie className='h-52' animationData={groovyWalkAnimation} />;
        };

        if (!user) {
            return <Navigate to={'/login'} state={location.pathname}> </Navigate>

        }
    }











}





