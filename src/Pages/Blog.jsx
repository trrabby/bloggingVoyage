import React, { useContext } from 'react'
import { ContextApi } from '../Providers/ContextProvider';
import { Link } from 'react-router-dom';
import { TbCategory, TbListDetails } from 'react-icons/tb';
import { MdDeleteOutline } from 'react-icons/md';

export const Blog = ({ item }) => {

    
    const { _id, category, img_url, long_description, short_description, title } = item;
    // console.log(item)

    const { handleDelete } = useContext(ContextApi)

    return (

        // <div></div>
        <div>
            <div data-aos="zoom-out" data-aos-duration='800' className="flex flex-col items-stretch flex-grow whitespace- card card-compact w-full border shadow-accent shadow-sm rounded-2xl  hover:bg-slate-100 cursor-text hover:duration-300 h-full">
                <div><img className='md:h-52 h-44 lg:h-56  
                    w-full rounded-lg p-2 lg:p-5 hover:scale-105 hover:duration-1000 object-center' src={img_url} alt="" /></div>
                <div className="card-body p-2 flex flex-grow items-stretch flex-col">
                    <h2 className="card-title text-lg md:text-xl text-justify font-semibold lg:text-xl lg:semi-extrabold">
                        {title}
                    </h2>

                    <div className='font-semibold'>
                        {short_description.length > 100 ?
                            <p>{short_description.slice(0, 97)}<Link to={`/blogs/${_id}`} className='text-blue-500'>...</Link></p>
                            : short_description}
                    </div>

                    <hr />

                    <p className='flex items-center gap-2 text-right mr-2 font-semibold'> <TbCategory /> Category: {category}</p>


                </div>

                <div className='flex justify-around w-full'>
                    <Link to={`/blogs/${_id}`}>
                        <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300  border-none'><TbListDetails />View Details</button>
                    </Link>
                    {/* <Link to={`/update/${_id}`}>
                        <button className='btn btn-outline text-black hover:bg-accent font-bold hover:scale-105 hover:duration-300 border-none'><GrDocumentUpdate />Update</button>
                    </Link> */}
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline text-red-600 hover:bg-red-500 font-bold hover:scale-105 hover:duration-300 border-none'><MdDeleteOutline />Delete</button>

                </div>
            </div>
        </div>

    )
}
