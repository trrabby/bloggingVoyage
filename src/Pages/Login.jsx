import React, { useContext } from 'react'

import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ContextApi } from '../Providers/ContextProvider';

export const Login = () => {

    const { user, login, setUser, signInWithGoogle, singInWithGitHub, setErr, err, } = useContext(ContextApi)

    const location = useLocation()
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.pass.value;

        console.log({ email, password })

        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
                toast.success('Loggin Successfully')
                form.reset();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setErr(errorMessage);
                toast.error('Information mismatched. Please checkback.')
            });

    }
    const signInWithGooglebutton = () => {
        signInWithGoogle()
            .then((res) => {
                toast.success('Log in successfull')
                navigate(location?.state ? location.state : "/");
                // console.log(res)

            })
            .catch((err) => {
                console.log(err)
                setErr(err)
                toast.error('Log in unsuccessfull')
            })
    }

    const singInWithGitHubButton = () => {
        singInWithGitHub()
            .then((res) => {
                toast.success('Log in successfull')
                navigate(location?.state ? location.state : "/");
                // console.log(res)
            })
            .catch((err) => {
                console.log(err)
                setErr(err)
                toast.error('Log in unsuccessfull')
            })


    }

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center text-center'>
            <div className="w-6/12 lg:min-h-[calc(100vh-270px)] bg-no-repeat bg-center bg-contain  bg-[url('https://i.ibb.co/ZT40d6W/3d-render-secure-login-password-illustration-107791-16640.jpg')] rounded-lg lg:mb-5 mt-5   ">

            </div>
            <div className="lg:w-6/12 rounded-lg mb-5 lg:mt-5 flex flex-col items-center justify-center text-center  ">
                <div className="w-full rounded-lg mb-5 mt-5 flex flex-col items-center justify-center text-center  ">
                    <Helmet>
                        <title>Fiber Fution | Log in</title>
                    </Helmet>

                    <div className='w-full mx-auto flex flex-col items-center justify-center  text-black bg-third p-5  rounded-xl space-y-2 font-extrabold md:my-5'>
                        <form onSubmit={handleForm} className='mx-auto mt-10 flex flex-col gap-5 w-full lg:w-8/12'>

                            <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow	1s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input className='text-black w-full' type="email" name='email' placeholder="Email" />
                            </label>

                            <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input className='text-black w-full' type="password" placeholder='Password' name='pass' />
                            </label>
                            {err && <p className='text-red-500 flex w-full text-xs'>{err}</p>}

                            {/* {err &&

                        <dir className='absolute bg-red-500 h-auto w-3/12 ml-[510px] mt-[-20px] p-2'>
                            {err}
                        </dir>

                    } */}
                            <Link to={'/register'} onClick={()=>setErr(null)} className='text-sm text-primary font-extrabold text-left flex gap-2'>Don't have any account? <span className='text-red-200 hover:text-accent'>Register Now</span></Link>
                            <button className='btn btn-outline hover:bg-accent text-white' type='submit'>Log In</button>
                        </form>

                        <div className='mb-5 mt-5 text-white'>
                            <button onClick={() => signInWithGooglebutton()} className='btn btn-ghost hover:bg-accent'>Sign In With Google</button>
                            <button onClick={() => (singInWithGitHubButton())} className='btn btn-ghost hover:bg-accent'>Sign In With GitHub</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
