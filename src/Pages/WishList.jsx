import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { useAxiosSecure } from '../Hooks/useAxiosSecure'
import { WishCard } from './WishCard'
import { ContextApi } from '../Providers/ContextProvider'

export const WishList = () => {

  const {user}= useContext(ContextApi)
  const axiosSecure = useAxiosSecure()

  const { data: wishlist = [], isLoading, isError, error, refetch, } = useQuery({
    queryKey: ['allBlogs'],
    queryFn: () => blogsData(),
    refetchOnMount: true,
  })

  const blogsData = async () => {
    const { data } = await axiosSecure(`/wishlist/${user?.email}`)
    return data
  }


  return (
    <div>
      
      <div data-aos="zoom-in-down" data-aos-duration='1000' className='text-center w-8/12 mx-auto space-y-2 my-10'>
        <h1 className='text-center lg:text-4xl text-xl font-bold'>Your Wishlist is here</h1>
        <p>Your've WishListed {wishlist.length} {wishlist.length>1 ? "items" : "item"} </p>
      </div>

      <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 justify-between gap-5 p-0 mb-10 lg:w-full w-10/12 mx-auto mt-5 '>

        {
          wishlist.map(wish=><WishCard data={wish} refetch={refetch} key={wish._id}></WishCard>)
        }

      </div>
      


    </div>


  )
}
