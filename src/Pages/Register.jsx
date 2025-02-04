import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ContextApi } from '../Providers/ContextProvider';

export const Register = () => {
    const { registerWithEmail, setErr, err, user, setUser, updateUserInfo } = useContext(ContextApi)
    const [toggle, setToggle,] = useState(false);

    const navigate = useNavigate()
    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.pass.value;
        const name = form.name.value;
        const PhotoURL = form.PhotoURL.value;
        // console.log(email, PhotoURL, name, password)

        if (!/.{6,}/.test(password)) {
            setErr('Length must be at least 6 characters')
            return
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setErr('Must have an Uppercase letter in the password')
            return
        }

        else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            setErr("Must have atleast a special character ('!@#$%^&*()_+\-=\[\]{};'\\|,.<>\/?]+') in the password")
            return
        }

        else if (!/\d+/.test(password)) {
            setErr('Must have atleast a numeric character in the password')
            return
        }

            try{
                const result = await registerWithEmail(email, password)
                // console.log(result)
                await updateUserInfo(name, PhotoURL)
                setUser({...user, photoURL:PhotoURL, displayName:name})
                toast.success('Registration & Login Successfull')
                form.reset();
                navigate(location?.state ? location.state : "/");
            }
            
            catch(error){
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErr(errorMessage);
                toast.error('Registration Unsuccessfull')
            };
        }
    return (
        <div className="lg:w-full w-10/12 mx-auto mt-5 bg-cover bg-center rounded-lg flex flex-col items-start justify-center text-center md:p-10 lg:p-0 border-2  ">
            <Helmet>
                <title>Fiber Fusion | Register</title>
            </Helmet>
            <div className='lg:w-10/12 md:w-11/12 w-full mx-auto flex gap-5 items-center justify-center  text-black rounded-xl space-y-2 font-extrabold '>
                <form onSubmit={handleForm} className='mx-auto flex flex-1 flex-col gap-5 lg:w-8/12 md:w-10/12 w-full relative'>

                    <label data-aos="zoom-out-right" data-aos-duration='1000' className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input className='text-black w-full text-sm' type="email" name='email' placeholder="Email" required />
                    </label>

                    {/* {err &&

                        <div className='absolute bg-red-500 h-auto w-10/12 ml-[470px] mt-[-20px] p-2 lg:flex hidden '>
                            {err}
                        </div>

                    } */}

                    <label data-aos="zoom-out-left" data-aos-duration='1000' className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input className='text-black w-full' type="text" name='name' placeholder="Username" required />
                    </label>
                    <label data-aos="zoom-out-right" data-aos-duration='1000' className="input input-bordered flex items-center gap-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input className='text-black w-full'
                            type={toggle ? "text" : "password"}
                            placeholder='Password'
                            name='pass' required />

                        <span onClick={() => setToggle(!toggle)} className='absolute text-black font-extrabold lg:ml-[645px] md:ml-[430px] ml-[275px]'>
                            {
                                toggle ? <FaRegEyeSlash className='text-accent font-extrabold' /> : <FaRegEye className='text-accent font-extrabold' />
                            }
                        </span>
                    </label>
                    {err && <p className='text-red-500 flex w-full text-xs'>{err}</p>}

                    <label data-aos="zoom-out-left" data-aos-duration='1000' className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input className='text-black w-full' type="text" name='PhotoURL' placeholder="PhotoURL" />
                    </label>
                    <Link to={'/login'} onClick={() => setErr(null)} className='text-sm text-primary font-extrabold text-left flex gap-2 w-auto '>Have an account? <span className='hover:text-accent text-black'>Log in</span></Link>
                    <button className='btn btn-outline text-white bg-accent hover:bg-primary hover:text-black' type='submit'>Register</button>
                </form>

                <div className="w-4/12 bg-center bg-cover bg-[url('https://i.ibb.co/fnpD264/sign-up-concept-illustration-114360-7895.jpg')] lg:flex hidden">
                    <p className='w-full lg:h-96 text-white'> <span className='bg-accent  rounded-lg'></span> </p>
                </div>


            </div>
        </div>
    )
}
