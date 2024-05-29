import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../Components/Css/nextSlider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

export const RelatedBlogsSlider = ({ blogs }) => {
    // console.log(blogs)

    return (
        <div >
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper overflow-x-scroll"
                >
                    <div>

                        {
                            blogs.map(blog => <SwiperSlide>
                                <div data-aos="fade-down" >
                                    <Link to={`/blogs/${blog._id}`} onClick={window.scroll(top)} className="flex flex-col bg-white transition hover:shadow-xl cursor-text">
                                        <div className="basis-56">
                                            <img
                                                alt=""
                                                src={blog.img_url}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-1 flex-col justify-between">
                                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                                <a>
                                                    <h3 className="font-bold text-sm md:text-base uppercase text-gray-900">
                                                        {blog.title}
                                                    </h3>
                                                </a>

                                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                                    {blog.short_description}
                                                </p>
                                                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                                    Category: {blog.category}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-around pb-5">
                                                {/* <Link
                                                to={`/blogs/${_id}`}
                                                className="bg-accent px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary hover:text-black duration-700"
                                            >
                                                Details
                                            </Link> */}

                                                {/* <button onClick={wishList} className="bg-accent px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-primary hover:text-black duration-700 flex gap-2"><MdFormatListBulletedAdd />Add to Wishlist</button> */}


                                                {/* <button onClick={() => handleDelete2(_id)} className="bg-accent px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-red-500 hover:text-black duration-700 flex items-center gap-2"><MdDeleteOutline />Remove</button> */}

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>


                </Swiper>
            </>
        </div>
    )
}