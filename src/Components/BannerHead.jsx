import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { GiSewingNeedle } from 'react-icons/gi'
import { TbBrandBlogger } from "react-icons/tb";
import { Link } from 'react-router-dom'
import { MdAttachEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

export const BannerHead = () => {
    return (

        <div className='mb-2'>
            {/* Logo */}
            <div className="flex bg-third justify-between items-center">
                {/* <a className="btn btn-ghost text-xl">Fiber Fusion</a> */}
                <Link to={'/'} >
                    <span className="btn btn-ghost text-sm md:text-xl lg:text-2xl text-primary font-extrabold md:flex md:flex-col"><TbBrandBlogger /> Blogging Voyage</span>

                </Link>
                <div className='flex gap-4 font-bold'>
                    <hr className='border h-14' />
                    <div className='px-5 lg:flex hidden gap-2 items-center'>
                        <p className='text-primary '>Call Us</p>
                        <a href=""><p className='text-fourth hover:text-primary hover:underline'>+880176697055</p></a>
                    </div>
                    <hr className='border h-14 lg:flex hidden' />
                    <div className='px-5 lg:flex hidden gap-2 items-center'>
                        <p className='text-primary font-bold  '>Email Us</p>
                        <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=new"><p className='text-fourth hover:text-primary hover:underline'>info@loggingvoyage.com</p></a>
                    </div>
                    <hr className='border h-14 lg:flex hidden' />
                </div>
                <div>
                    <div className="flex justify-center items-center gap-3 p-3 lg:w-full">
                        <a target='_blank' href="https://www.facebook.com/profile.trrabby">
                            <p className="lg:p-2 p-1 rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaFacebookF className="text-2xl text-white" />
                            </p>
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/towfiqueweb">
                            <p className="lg:p-2 p-1 rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaLinkedinIn className="text-2xl text-white" />
                            </p>
                        </a>
                        <a>
                            <p className="lg:p-2 p-1 md:flex hidden rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaInstagram className="text-2xl text-white" />
                            </p>
                        </a>
                        <a  target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                            <p className="lg:p-2 p-1 flex md:hidden rounded-full border-2 border-gray-400 hover:bg-primary">
                                <MdAttachEmail  className="text-2xl text-white" />
                            </p>
                        </a>
                        <a >
                            <p className="lg:p-2 p-1 flex md:hidden rounded-full border-2 border-gray-400 hover:bg-primary">
                                <FaMobileAlt className="text-2xl text-white" />
                            </p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
