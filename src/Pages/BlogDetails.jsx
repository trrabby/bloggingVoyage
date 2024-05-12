import React, { useContext } from 'react'
import { ContextApi } from '../Providers/ContextProvider';
import { Button, Card, Textarea } from '@tremor/react';


import { TbCategory, TbListDetails } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

export const BlogDetails = () => {

    const item = useLoaderData()
    // console.log(item)
    const { _id, category, email, img_url, long_description, short_description, title } = item;
    const { user } = useContext(ContextApi)
    const axiosSecure= useAxiosSecure()
    const matchedUser = user.email == email

    const { data: wishlist = [], isLoading, isError, error, refetch, } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: () => "",
        refetchOnMount: true,
      })

      const blogsData = async () => {
        const { data } = await axiosSecure(`/wishlist/${user?.email}`)
        return data
      }
    
     

    // console.log(matchedUser)

    const handleComment = async (e)=>{
        e.preventDefault();
        const commentData = e.target.textarea.value;
        const comment = {
            'commentData' : commentData,
            'postId' : _id,
            'commenter_email': user?.email,
            'commenter_name': user?.displayName,
            'commenter_pic': user?.photoURL,
        }
        // console.log(comment)

        try {
            const { data } = await axiosSecure.post('/comments',comment )
            if (data.insertedId) {
                toast.success('Commented Successfully')
                // navigate('/allBlogs');
                // reset();
            }
            else{
                toast.error('Comment Unsuccessfull')
            }
            
        }
        catch (error) {
           console.log(error.code)
        }
           
    }
    return (
        <div className='mt-5'>
            {/* <Helmet>
                <title>Blogging Voyage | Blog Details{_id}</title>
            </Helmet> */}
            <div className="flex lg:flex-row flex-col  card card-compact lg:w-full w-10/12 mx-auto bg-base-100 shadow-xl rounded-2xl cursor-text  h-full border border-blue-200 mb-5">
                <div className='lg:w-8/12'>
                    <figure><img className='md:max-h-[calc(100vh-1px)] max-h-[calc(100vh-150px)]  
                    w-full rounded-2xl p-5' src={img_url} alt="" /></figure>
                </div>

                <div className="card-body lg:w-4/12 p-2 flex flex-col space-y-5">
                    <div className='space-y-3'>
                        <h2 className="card-title text-lg md:text-xl text-justify font-semibold lg:text-2xl lg:semi-extrabold">
                            {title}
                        </h2>

                        <div className=' lg:text-lg text-base text-justify lg:font-semibold'>{short_description}</div>


                    </div>

                    <div className='flex flex-col space-y-2 justify-start w-full items-left gap-2'>
                        <hr />

                        <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <TbCategory /> Category: {category}</p>

                        <div className=' flex items-center gap-2 text-justify mr-2 font-semibold'>{long_description}</div>
                        {/* <div className=' flex items-center gap-2 text-justify mr-2 font-semibold'>{email}</div> */}

                    </div>

                    <div className='flex justify-center items-center space-y-2 w-full'>

                        {
                            matchedUser && <Link to={`/update/${_id}`}>
                                <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300 border-none'>Update</button>
                            </Link>
                        }

                    </div>


                </div>

            </div>
            <div className='space-y-2'>
                <h1 className='text-center lg:text-2xl text-xl font-bold'>Comment Section</h1>
                <p className='text-lg text-center'>Leave your valuable comments here.</p>

                <div className='flex justify-between pt-10'>
                    <div className='w-6/12 border-r-2 border-accent'>
                        <Card className="mx-auto max-w-lg">
                            <form onSubmit={handleComment}
                               
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="description" className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                        <div className='flex justify-between'>
                                            <h1 className='text-black font-bold flex'>User: {user.displayName || email} </h1> <img className='h-8 w-8 rounded-full' src={user.photoURL} alt="" />

                                        </div>
                                        Comment here...

                                    </label>
                                    <Textarea
                                        id="description"
                                        placeholder="Start typing here..."
                                        rows={6}
                                        name='textarea'
                                    />
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <Button type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Card>

                    </div>

                    <div className='w-6/12'>
                        <a
                            href="#"
                            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>

                            <div className="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        Building a SaaS product as a software developer
                                    </h3>

                                    <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                                </div>

                                <div className="hidden sm:block sm:shrink-0">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        className="size-16 rounded-lg object-cover shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-pretty text-sm text-gray-500">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                                    maiores deleniti consectetur nobis et eaque.
                                </p>
                            </div>

                            <dl className="mt-6 flex gap-4 sm:gap-6">
                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">Published</dt>
                                    <dd className="text-xs text-gray-500">31st June, 2021</dd>
                                </div>

                                <div className="flex flex-col-reverse">
                                    <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                                    <dd className="text-xs text-gray-500">3 minute</dd>
                                </div>
                            </dl>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
