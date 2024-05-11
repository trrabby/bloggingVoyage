import React, { useContext } from 'react'
import { ContextApi } from '../Providers/ContextProvider';

import { TbCategory, TbListDetails } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const BlogDetails = () => {

    const item = useLoaderData()
    console.log(item)
    const { _id, category, img_url, long_description, short_description, title } = item;

    const { handleDelete } = useContext(ContextApi)

    // console.log(item)
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
                    
                    </div>


                    <div className='flex justify-center items-center space-y-2 w-full'>

                        <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300  border-none'><TbListDetails />Add to Wishlist</button>

                        <Link to={`/update/${_id}`}>
                            <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300 border-none'>Update</button>
                        </Link>

                        {/* <button onClick={() => handleDelete(_id)} className='btn btn-outline text-red-600 hover:bg-red-500 font-bold hover:scale-105 hover:duration-300 border-none'><MdDeleteOutline />Delete</button> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
