import React, { useContext } from 'react'
import { useAxiosSecure } from '../Hooks/useAxiosSecure'
import { Link } from 'react-router-dom'
import { MdFormatListBulletedAdd } from 'react-icons/md'
import { ContextApi } from '../Providers/ContextProvider'
import toast from 'react-hot-toast'

export const RecentBlog = ({ data }) => {

    const { _id, img_url, title, category, short_description, long_description, wishListersEmail } = data
    
    const {user} = useContext(ContextApi)
    const axiosSecure = useAxiosSecure()

    const wishList = async () =>{

        const whishData = {...data, 'wishListersEmail': user?.email}
        delete whishData._id
 
        //    console.log(whishData)

        try {
             const { data } = await axiosSecure.post('/wishlist', whishData)
             if (data.insertedId) {
                 toast.success('Added to Wishlist')
                 // navigate('/allBlogs');
                 // reset();
             }
             else{
                 toast.error('Already added to wishlist')
             }
             
         }
         catch (error) {
            console.log(error.code)
         }
 
     }

    return (
        <div data-aos="fade-down">
            <article className="flex flex-col md:flex-row bg-white transition hover:shadow-xl cursor-text">
                <div className="basis-56">
                    <img
                        alt=""
                        src={img_url}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <a>
                            <h3 className="font-bold uppercase text-gray-900">
                                {title}
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            {short_description}
                        </p>
                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                            Category: {category}
                        </p>
                    </div>

                    <div className="flex items-center justify-around pb-5">
                        <Link
                            to={`/blogs/${_id}`}
                            className="bg-accent px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary hover:text-black duration-700"
                        >
                            Details
                        </Link>

                        <button onClick={wishList}  className="bg-accent px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary hover:text-black duration-700 flex gap-2"><MdFormatListBulletedAdd />Add to Wishlist</button>


                        {/* <button onClick={() => handleDelete2(_id)} className="bg-accent px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-red-500 hover:text-black duration-700 flex items-center gap-2"><MdDeleteOutline />Remove</button> */}

                    </div>
                </div>
            </article>
        </div>
    )
}
