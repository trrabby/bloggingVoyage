import React, { useContext } from 'react'
import { ContextApi } from '../Providers/ContextProvider';
import { Button, Card, Textarea } from '@tremor/react';


import { TbCategory, TbListDetails } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { clear } from 'localforage';
import { CommentCard } from '../Components/CommentCard';
import { RelatedBlogs } from '../Components/RelatedBlogs';

export const BlogDetails = () => {

    const item = useLoaderData()
    // console.log(item)
    const { _id, category, email, img_url, long_description, short_description, title } = item;
    const { user } = useContext(ContextApi)
    const axiosSecure = useAxiosSecure()

    const matchedUser = user.email === email

    const { data: comments = [], isLoading, isError, error, refetch, } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: () => blogsData(),
    })

    const blogsData = async () => {
        const { data } = await axiosSecure(`/comments/${_id}`)
        return data
    }

    const handleComment = async (e) => {
        // console.log(e)
        e.preventDefault();
        let commentData = e.target.textarea.value;
        if(commentData=' '){
            return toast.error('Please write something')
        }
        const comment = {
            'commentData': commentData,
            'postId': _id,
            'commenter_email': user?.email,
            'commenter_name': user?.displayName,
            'commenter_pic': user?.photoURL,
            'creation_time': user?.metadata?.lastSignInTime,

        }
        // console.log(comment)

        if (user.email === email) {
            return toast.error("You cann't comment on your own blog")
        }

        else {

            try {
                const { data } = await axiosSecure.post('/comments', comment)
                if (data.insertedId) {
                    toast.success('Commented Successfully')
                    e.target.textarea.value="";
                    refetch()
                    // navigate('/allBlogs');

                }
                else {
                    toast.error('Comment Unsuccessfull')
                }

            }
            catch (error) {
                console.log(error)
            }

        }
    }
    return (
        <div className='mt-5'>
            <Helmet>
                <title>Blogging Voyage | Blog Details</title>
            </Helmet>
            <div className="flex lg:flex-row flex-col  card card-compact lg:w-full w-10/12 mx-auto bg-base-100 shadow-xl rounded-2xl cursor-text  h-full border border-blue-200 mb-5">
                <div data-aos="fade-up" data-aos-duration="1000" className='lg:w-8/12'>
                    <figure><img className='md:max-h-[calc(100vh-1px)] max-h-[calc(100vh-150px)]  
                    w-full rounded-2xl p-5' src={img_url} alt="" /></figure>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="card-body lg:w-4/12 p-2 flex flex-col space-y-5">
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
            <div data-aos="fade-up" data-aos-duration="1000" className='p-5 my-10 lg:w-4/12 md:w-6/12 mx-auto rounded-xl'>
                    <h1 className='text-center lg:text-3xl text-xl font-bold'>Comment Section</h1>
                    <p className='text-lg text-center'>Leave your valuable comments here.</p>
            </div>

            <div className='space-y-2 bg-[url(https://i.ibb.co/VWyw7Bc/premium-photo-1683262038148-2ac280407276.jpg)] bg-no-repeat bg-center bg-cover p-5 bg-fixed text-white rounded-t-lg'>
                
                <div className='flex flex-col-reverse md:flex-row justify-between pt-10 gap-3'>
                    <div className='lg:w-6/12 w-full border-r-2 border-fourth '>
                        <Card data-aos="fade-up" data-aos-duration="1000" className="mx-auto max-w-lg sticky top-16 ">
                            <form onSubmit={handleComment}

                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="description" className="text-tremor-default text-tremor-content dark:text-dark-tremor-content border-none">
                                        <div className='flex justify-between'>
                                            <h1 className='text-fourth font-bold flex'>User: {user.displayName || user.email} </h1> <img className='h-8 w-8 rounded-full' src={user.photoURL} alt="" />

                                        </div>
                                        Comment here...

                                    </label>
                                    <Textarea
                                        className='text-black'
                                        id="description"
                                        placeholder="Start typing here..."
                                        rows={6}
                                        defaultValue={' '}
                                        name='textarea'
                                    />
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <Button type="submit" className='bg-accent hover:bg-primary rounded-lg text-white hover:text-accent'>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </Card>

                    </div>

                    <div  className='flex flex-col gap-3 lg:w-8/12 w-full'>
                        {
                            comments?.map(comment => <CommentCard key={comment._id} comment={comment}></CommentCard>)
                        }
                    </div>
                    
                </div>
                
            </div>
            <RelatedBlogs category={category}></RelatedBlogs>
        </div>
    )
}
