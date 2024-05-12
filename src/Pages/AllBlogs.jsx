import React, { useEffect, useState } from 'react'
import { useAxiosSecure } from '../Hooks/useAxiosSecure'
import { ContextApi, ContextProvider } from '../Providers/ContextProvider'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Lottie from 'lottie-react'
import groovyWalkAnimation from "../Components/groovyWalk.json";
import { Blog } from './Blog'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { FaArrowDownLong } from "react-icons/fa6";





export const AllBlogs = () => {
  const { user } = ContextProvider(ContextApi)
  const axiosSecure = useAxiosSecure()

  const [filter, setFilter] = useState(null)
  const [input, setValue] =useState("")
  // console.log(input)

  // console.log(filter)


  const { data: blogs = [], isLoading, isError, error, refetch, } = useQuery({
    queryKey: ['allBlogs'],
    queryFn: () => blogsData(),
    refetchOnMount: true,
  })

  const blogsData = async () => {
    const { data } = await axiosSecure('/blogs')
    return data
  }

  if (isLoading) {
    return <Lottie className='h-52' animationData={groovyWalkAnimation} />;

    // <SkeletonTheme baseColor="#202020" highlightColor="#204969">
    //   <p>
    //     <Skeleton count={10} />
    //   </p>
    // </SkeletonTheme>

  }

  const handleFrontSel = (e) => {
    const value = e.target.value
    

    if (value === 'All') {
      toast('You are watching all blogs.')
      return setFilter(null)


    }
    if (value === 'Health') {
      const health = blogs.filter(blog => blog.category === "Health")
      setFilter(health)
      return toast('Health Related Blogs are Projected')
    }
    else if (value === 'Travel') {
      const travel = blogs.filter(blog => blog.category === "Travel")
      setFilter(travel)
      return toast('Travel Related Blogs are Projected')
    }
    else if (value === 'Finance') {
      const finance = blogs.filter(blog => blog.category === "Finance")
      setFilter(finance)
      return toast('Finance Related Blogs are Projected')
    }
    else if (value === 'Food') {
      const food = blogs.filter(blog => blog.category === "Food")
      setFilter(food)
      return toast('Food Related Blogs are Projected')
    }
    else if (value === 'Lifestyle') {
      const ls = blogs.filter(blog => blog.category === "Lifestyle")
      setFilter(ls)
      return toast('Lifestyle Related Blogs are Projected')
    }


  }

  const handleTextSearch = async (e) => {
    const value = e.target.value
    // console.log(value)
    setValue(value)

    if (value === "") {
      return setFilter(null)
    }

    const { data } = await axiosSecure(`/blogs-head/${value}`)
    setFilter(data)
    toast.success(`${data.length} ${data.length > 1 ? "Blogs" : "Blog"} found`)




  }

  return (

    <div>
      <section
        className=" bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover 
        max-h-[calc(100vh-1px)] bg-center bg-no-repeat rounded-2xl my-2"
      >
        <div className='lg:p-16 text-white w-full'>
          <div className=' bg-[#3d3d3d8e] p-5 lg:py-12 rounded-xl w-full'>
            <h1 className="text-3xl font-extrabold sm:text-5xl flex gap-4">
              Let us find your <strong className="font-extrabold text-rose-700 flex"> Desired Blogs </strong>


            </h1>

            <p className="mt-4 max-w-lg sm:text-xl">
              Our Blogs are mindblowing....
            </p>

            <div className="mt-8 gap-4 text-center w-full sticky top-0">
              <div className="w-full rounded bg-third lg:px-12 px-2 py-4 text-sm font-medium text-black shadow  sm:w-auto flex lg:flex-row flex-col items-center gap-5 justify-between  "
              >
                <div className="input input-bordered flex items-center gap-2 animate__animated animate__flipInX animate__slow 1s w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' id="select"><path fill="none" d="M0 0h48v48H0z"></path><path d="M6 10h4V6c-2.21 0-4 1.79-4 4zm0 16h4v-4H6v4zm8 16h4v-4h-4v4zM6 18h4v-4H6v4zM26 6h-4v4h4V6zm12 0v4h4c0-2.21-1.79-4-4-4zM10 42v-4H6c0 2.21 1.79 4 4 4zm-4-8h4v-4H6v4zM18 6h-4v4h4V6zm4 36h4v-4h-4v4zm16-16h4v-4h-4v4zm0 16c2.21 0 4-1.79 4-4h-4v4zm0-24h4v-4h-4v4zm0 16h4v-4h-4v4zm-8 8h4v-4h-4v4zm0-32h4V6h-4v4zM14 34h20V14H14v20zm4-16h12v12H18V18z"></path></svg>
                  <select name="selectionTab" onChange={handleFrontSel} className='w-full h-full border-none bg-none outline-none' placeholder="Select">
                    <option value="" disabled selected>Select a Blog Category</option>
                    <option value="All">All</option>
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                    <option value="Finance">Finance</option>
                    <option value="Food">Food</option>
                    <option value="Lifestyle">Lifestyle</option>
                  </select>
                </div>

                <div className='flex gap-4 w-full'>
                  <input onKeyUp={handleTextSearch} type="text" placeholder='Search By Title' className='p-3 px-5 text-base rounded-xl w-full text-black animate__animated animate__flipInX animate__slow 1s' />
                  <a href={'#blogs'}>
                    <button className='btn bg-accent hover:bg-primary text-white hover:text-black duration-1000 animate__animated animate__flipInX animate__slow 1s'>
                      {`${input ? "Search" : "Travel ↓"}`}</button></a>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div data-aos="zoom-in-down" data-aos-duration='1000' className='text-center w-8/12 mx-auto space-y-2 my-10'>
        <h1 id='blogs' className='text-center text-4xl'>Discover Our Praiseworthy Blogs</h1>
        <p className='text-lg '>Explore our collection of praiseworthy blogs, where each piece is meticulously crafted to be insightful, engaging, and thought-provoking.</p>
      </div>

      <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5 p-0 mb-10 lg:w-full w-10/12 mx-auto mt-5 '>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
        {
          filter ? filter.map(item =>
            <Blog item={item} key={item._id}>

            </Blog>) :

            blogs.map(item =>
              <Blog item={item} key={item._id}>

              </Blog>)
        }
      </div>
    </div>

  )
}
