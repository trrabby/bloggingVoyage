import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Navbar } from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Components/Footer'
import { BannerHead } from '../Components/BannerHead'
/* Animate css and aos imports */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
import 'animate.css';

export const Root = () => {
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Blogging Voyage | Home</title>
            </Helmet>
            <BannerHead></BannerHead>
            <Navbar></Navbar>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    )
}
