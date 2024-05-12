import React, { useContext, useEffect, useState } from 'react'
import { GiSewingNeedle, GiSewingString } from 'react-icons/gi'
import { Link, NavLink } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { ContextApi } from '../Providers/ContextProvider'

export const Navbar = () => {

    const { user, signOutfromLogin, setUser, setLoading } = useContext(ContextApi)

    const [theme, setTheme] = useState("light")

    const handleToggle = (e) => {
        const value = e.target.checked
        if (value) {
            setTheme('dark')
            localStorage.setItem('theme', "dark")
        }

        else {
            setTheme("light")
            localStorage.setItem('theme', "light")
        }
    }

    useEffect(() => {
        const getTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', getTheme)
    }, [theme])

    const handleSignOut = () => {
        signOutfromLogin()
            .then((user) => {
                setUser(user)
                // setLoading(!null)
            }).catch((error) => {
                console.log(error)
            });
    }

    const handleToast = () => {
        if (!user) {
            // setLoading(false)
            return toast.error('log in required to proceed')
        }

    }

    return (
        <div className='flex items-center bg-accent text-black sticky shadow-sm shadow-[#4d4d00] top-0 rounded-b-2xl justify-center z-10'>
            <div className="navbar  flex justify-between items-center">

                <div className='flex flex-row-reverse lg:flex-row justify-between items-center lg:flex-1'>

                    {/* Menu */}
                    <div className='p-0 flex flex-1 justify-around'>
                        {/* menu SM */}
                        <div className="dropdown p-0 lg:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 text-left">
                                <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/'}>Home</NavLink>

                                <NavLink onClick={handleToast} className={({ isActive }) => isActive ?
                                    'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/addBlog'}>Add Blog</NavLink>

                                <NavLink className={({ isActive }) => isActive ?
                                    'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/allBlogs'}>All Blogs</NavLink>

                                <NavLink onClick={handleToast} className={({ isActive }) => isActive ?
                                    'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/featuredBlogs'}>Featured Blogs</NavLink>

                                <NavLink onClick={handleToast} className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/wishlist'}>Wishlist</NavLink>

                                {
                                    !user && <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/logIn'}>Log In</NavLink>
                                }
                                {
                                    !user && <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/register'}>Register</NavLink>
                                }

                            </ul>
                        </div>

                        {/* Menu lg */}
                        <div className="navbar-center hidden lg:flex gap-3 text-fourth">

                            <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/'}>Home</NavLink>

                            <NavLink onClick={handleToast} className={({ isActive }) => isActive ?
                                'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/addBlog'}>Add Blog</NavLink>

                            <NavLink className={({ isActive }) => isActive ?
                                'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/allBlogs'}>All Blogs</NavLink>

                            <NavLink onClick={handleToast} className={({ isActive }) => isActive ?
                                'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/featuredBlogs'}>Featured Blogs</NavLink>

                            <NavLink onClick={handleToast} className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/wishlist'}>Wishlist</NavLink>

                            {
                                !user && <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/logIn'}>Log In</NavLink>
                            }
                            {
                                !user && <NavLink className={({ isActive }) => isActive ? 'text-primary font-extrabold p-2' : 'hover:text-primary p-2 font-extrabold'} to={'/register'}>Register</NavLink>
                            }


                        </div>
                    </div>
                </div>

                <div className="flex gap-2 text-primary">
                    {/* <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="dropdown dropdown-end tooltip tooltip-bottom" data-tip="Settings">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            {user ?
                                <>
                                    {/* <p className='hover:tooltip'>{user.email}</p> */}
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" >
                                            <div className=' font-bold h-8 w-8 rounded-full '>
                                                {
                                                    user.photoURL ?
                                                        <div>
                                                            <img className='rounded-full h-8 w-8' src={user.photoURL} />
                                                        </div> :
                                                        <FaUserCircle className='w-full h-full' />
                                                        

                                                }

                                            </div>

                                        </div>
                                        {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-52 text-center">
                                            <Link>{user.displayName || "No Name Found"}</Link>
                                        </ul> */}
                                    </div>

                                </> :

                                <div className="tooltip tooltip-bottom flex items-center justify-center" data-tip="Settings">
                                    <button className=" border-none "> <FaUserCircle className='md:w-8 md:h-8' /></button>
                                </div>



                            }
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-white rounded-box w-64 text-black font-bold">
                            <li>
                                {user && <a className="justify-between hover:text-primary">
                                    {user.displayName || "No Name Found"} 
                                   
                                </a>}
                                {user && <a className="justify-between hover:text-primary">
                                    {user.email || "No email Found"} 
                                   
                                </a>}
                            </li>
                            <li><a>Settings  <span className="badge">New</span></a></li>
                           
                            {user && <li><Link to={'/login'} onClick={handleSignOut} className="btn btn-ghost hover:text-primary">Sign Out</Link></li>}
                            <Link to={'/login'}>
                                {!user && <li><button className="btn btn-ghost font-bold">Log In</button></li>}
                            </Link>
                        </ul>
                    </div>

                    <label
                        htmlFor="AcceptConditions"

                        className="relative h-8 w-14 cursor-pointer rounded-full bg-third transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
                    >

                        <input onChange={handleToggle} type="checkbox" id="AcceptConditions" className="peer sr-only" />

                        <span
                            className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-accent ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-accent peer-checked:ring-transparent"
                        >
                        </span>
                    </label>
                </div>


            </div>
        </div >
    )
}
