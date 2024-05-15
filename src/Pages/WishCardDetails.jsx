import React from 'react'
import { Helmet } from 'react-helmet-async';
import { TbCategory } from 'react-icons/tb';
import { Link, useLoaderData, useParams } from 'react-router-dom';

export const WishCardDetails = () => {

    // const {id} = useParams()
    // console.log(id)

    const item = useLoaderData()
    // console.log(item)
    const { _id, category, img_url, long_description, short_description, title } = item;


    return (

        <div className='mt-5'>
            <Helmet>
                <title>Blogging Voyage | Wishlist Details</title>
            </Helmet>
            <div className="flex lg:flex-row flex-col  card card-compact lg:w-full w-10/12 mx-auto bg-base-100 shadow-xl rounded-2xl cursor-text  h-full border border-blue-200 mb-5">
                <div data-aos="fade-up" data-aos-duration="1000" className='lg:w-8/12'>
                    <figure><img className='md:max-h-[calc(100vh-1px)] max-h-[calc(100vh-150px)]  
                    w-full rounded-2xl p-5' src={img_url} alt="" /></figure>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className="card-body lg:w-4/12 p-2 flex flex-col space-y-5">
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


                    {/* <div className='flex justify-center items-center space-y-2 w-full'>

                        <Link to={`/update/${_id}`}>
                            <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300 border-none'>Update</button>
                        </Link>

                    </div> */}
                </div>
            </div>
        </div>
    )
}
