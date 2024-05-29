import React, { useContext } from 'react'
import { ContextApi } from '../Providers/ContextProvider';
import { Link } from 'react-router-dom';
import { TbCategory, TbListDetails } from 'react-icons/tb';
import { MdDeleteOutline } from 'react-icons/md';
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

export const Blog = ({ item }) => {

   const { _id, category, img_url, short_description, title, email } = item;
    // console.log(item)
    const axiosSecure = useAxiosSecure()

    const { user, handleDelete } = useContext(ContextApi)

    const wishList = async () =>{

       const whishData = {...item, 'wishListersEmail': user?.email}
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

        // <div></div>
        <div>
            <div data-aos="zoom-out" data-aos-duration='800' className="flex flex-col items-stretch flex-grow whitespace- card card-compact w-full border shadow-accent shadow-sm rounded-2xl bg-[#193c57a1] hover:shadow-lg hover:shadow-primary cursor-text hover:duration-300 h-full px-2 text-white">
                <div><img className='md:h-52 h-44 lg:h-56  
                    w-full rounded-lg p-2 lg:p-5 hover:scale-105 hover:duration-1000 object-center' src={img_url} alt="" /></div>
                <div className="card-body p-2 flex flex-grow items-stretch flex-col">
                    <h2 className="card-title text-lg md:text-xl text-justify font-semibold lg:text-xl lg:semi-extrabold">
                        {title}
                    </h2>

                    <div className='font-semibold'>
                        {short_description?.length > 100 ?
                            <p>{short_description.slice(0, 97)}<Link to={`/blogs/${_id}`} className='text-blue-500'>...</Link></p>
                            : short_description}
                    </div>

                    <hr />

                    <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <TbCategory /> Category: {category}</p>
                    {/* <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <TbCategory /> {email}</p> */}


                </div>

                <div className='flex lg:justify-around w-full flex-col lg:flex-row py-2 gap-4 justify-center items-center'>
                    <Link to={`/blogs/${_id}`} onClick={window.scroll(top)}>
                    <button onClick={()=>!user && toast.error('login requried to proceed')} className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300   bg-primary hover:border-primary flex gap-2'><TbListDetails />View Details</button>
                    </Link>

                    <button onClick={wishList} className='btn btn-outline text-white hover:bg-accent font-bold hover:scale-105 hover:duration-300  border-primary hover:border-primary 
                    lg:w-6/12 w-8/12'><MdFormatListBulletedAdd />Add to Wishlist</button>

                    {/* <button onClick={() => handleDelete(_id)} className='btn btn-outline text-red-600 hover:bg-red-500 font-bold hover:scale-105 hover:duration-300 border-none'><MdDeleteOutline />Delete</button> */}

                </div>
            </div>
        </div>

    )
}
