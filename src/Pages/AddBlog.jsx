import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { ContextApi } from '../Providers/ContextProvider'
import { useAxiosSecure } from '../Hooks/useAxiosSecure'


export const AddBlog = () => {
    const { user } = useContext(ContextApi)
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (formInfo) => {
        const infoWithAddl ={...formInfo, "blog_owner_pic" : user.photoURL}

        try {
            const { data } = await axiosSecure.post('/blogs', infoWithAddl)
            if (data.insertedId) {
                toast.success('Blog Added successfully')
                // navigate('/allBlogs');
                reset();
            }
            
        }
        catch (err) {
            console.log(err)
        }

        // fetch('https://server-site-gamma-indol.vercel.app/items', {
        //     // fetch('https://server-site-gamma-indol.vercel.app/artCategory', {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) {
        //             toast.success('Item Added Successfully')
        //             // reset();
        //         }
        //     })


    }

    return (
        <div>
            <Helmet>
                <title>Blogging Voyage | Add Blog</title>
            </Helmet>
            <div className="lg:w-full w-10/12 mx-auto lg:min-h-[calc(100vh-170px)] bg-cover bg-center  rounded-lg mb-5 flex flex-col items-center justify-center text-center ">
                <Helmet>
                    <title>Blogging Voyage | Add Blog</title>
                </Helmet>

                <div className='lg:w-11/12 w-full mx-auto flex gap-2 lg:flex-row-reverse items-center justify-center  text-black  p-5  rounded-xl space-y-2 font-medium md:my-5'>

                    <div className="w-6/12 bg-center bg-cover bg-[url('https://i.ibb.co/vw4xsDM/design-application-flat-character-illustration-203633-2106.jpg')] lg:flex hidden">
                        <p className='w-full lg:h-96 text-white'> <span className='bg-accent  rounded-lg'></span> </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex flex-col gap-5 lg:w-6/12 w-full'>

                        <div>
                            <h1 className='font-bold'>Add Blog</h1>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-5 w-full'>
                            <div className='w-full flex flex-col gap-3'>

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="text" placeholder='Blog Title' name='title' {...register("title", { required: true })} />
                                </label>
                                {errors.title && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow	1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="image"><path d="M13.5,6C12.7,6,12,6.7,12,7.5S12.7,9,13.5,9S15,8.3,15,7.5S14.3,6,13.5,6z M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14
	                                c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,13.9L18.1,12c-1.2-1.1-3.1-1.1-4.2,0L13,12.9L10.1,10c-1.2-1.1-3.1-1.1-4.2,0L4,11.9V5
	                                c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V13.9z"></path></svg>
                                    <input className='text-black w-full' type="text" name='img_url' placeholder="Thumbnail Image URL"
                                        {...register("img_url", { required: true })} />
                                </label>
                                {errors.img_url && <span className='text-red-600 text-xs'>This field is required</span>}



                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' id="select"><path fill="none" d="M0 0h48v48H0z"></path><path d="M6 10h4V6c-2.21 0-4 1.79-4 4zm0 16h4v-4H6v4zm8 16h4v-4h-4v4zM6 18h4v-4H6v4zM26 6h-4v4h4V6zm12 0v4h4c0-2.21-1.79-4-4-4zM10 42v-4H6c0 2.21 1.79 4 4 4zm-4-8h4v-4H6v4zM18 6h-4v4h4V6zm4 36h4v-4h-4v4zm16-16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zm0-24h4v-4h-4v4zm0 16h4v-4h-4v4zm-8 8h4v-4h-4v4zm0-32h4V6h-4v4zM14 34h20V14H14v20zm4-16h12v12H18V18z"></path></svg>
                                    <select name="category" className='w-full h-full border-none bg-none outline-none' placeholder="Select" {...register("category", { required: true })}>
                                        <option value="" disabled selected>Blog Category</option>
                                        <option value="Health">Health</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Food">Food</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                    </select>
                                </label>
                                {errors.category && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="email" defaultValue={user.email} value={user.email} placeholder='Email' name='email' {...register("email", { required: true })} />
                                </label>
                                {errors.email && <span className='text-red-600 text-xs'>This field is required</span>}

                                <label className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 42 42" id="pen"><path fill="#231f20" d="M37.28 4.72a5.52 5.52 0 0 0-7.78 0L5.73 28.49a1.56 1.56 0 0 0-.42.84L4.3 36a1.5 1.5 0 0 0 1.48 1.73h.23l6.66-1a1.56 1.56 0 0 0 .84-.42L37.28 12.5a5.52 5.52 0 0 0 0-7.78ZM11.74 33.8l-4.17.63.63-4.17 19.52-19.51 3.53 3.53Zm23.42-23.42-2.49 2.49-3.54-3.54 2.49-2.49a2.5 2.5 0 1 1 3.54 3.54Z"></path></svg>
                                    <input className='text-black w-full' type="text" defaultValue={user.displayName} value={user.displayName} placeholder='User Name' name='user_name' {...register("user_name", { required: true })} />
                                </label>
                                {errors.user_name && <span className='text-red-600 text-xs'>This field is required</span>}

                            </div>


                        </div>

                        <textarea className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow	1s p-2 px-4" placeholder='Short Description' name="short_description" rows="4" cols="50" {...register("short_description", { required: true })}>

                        </textarea>
                        {errors.short_description && <span className='text-red-600 text-xs'>This field is required</span>}

                        <textarea className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow	1s p-2 px-4 h-20" placeholder='Long Description' name="long_description" rows="8" cols="50" {...register("long_description", { required: true })}>

                        </textarea>
                        {errors.long_description && <span className='text-red-600 text-xs'>This field is required</span>}

                        <button className='btn btn-outline text-white font-extrabold bg-accent hover:bg-primary hover:text-black' type='submit'>Add Item</button>
                    </form>



                </div>
            </div>

        </div>
    )
}
