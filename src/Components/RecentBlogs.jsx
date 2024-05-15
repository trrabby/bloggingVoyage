import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAxiosSecure } from '../Hooks/useAxiosSecure'
import { RecentBlog } from './RecentBlog'



export const RecentBlogs = () => {

    const axiosSecure = useAxiosSecure()

    const { data: blogs = [], isLoading, isError, error } = useQuery({
        queryKey: ['recent'],
        queryFn: () => blogsData(),
      })
    
      const blogsData = async () => {
        const { data } = await axiosSecure('/blogs')
        return data
      }
    const recentBlogs = blogs.slice(-6).reverse()
    // console.log(recentBlogs)

  return ( 
    <div className='my-10 space-y-24'>
            <div data-aos="fade-up" data-aos-duration="1000" className='text-center space-y-5'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-extrabold'>Top New Blogs</h1>
                <p className='text-lg lg:w-6/12 mx-auto'>"Stay Updated with Our Latest Adventures: Dive into Our Recent Stories and Discover New Destinations!"</p>
            </div>

            <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 justify-between gap-5 p-0 mb-10 lg:w-full w-10/12 mx-auto mt-5 '>
                {
                    recentBlogs.map(recentBlog=><RecentBlog data={recentBlog} key={recentBlog._id}></RecentBlog>)
                }
            </div>


    </div>
  )
}
