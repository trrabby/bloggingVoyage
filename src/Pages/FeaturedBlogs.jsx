import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export const FeaturedBlogs = () => {
  const axiosSecure = useAxiosSecure()

  const { data, isLoading, isError, error, refetch, } = useQuery({
    queryKey: ['reactTable'],
    queryFn: () =>blogsData(),
    
  })

  const blogsData = async () => {
    const { data } = await axiosSecure('/blogs')
    return data
  }

  console.log(data)
 
    // tableData.sort((a, b) =>{
  //   const fRating = a.rating;
  //   const sRating = b.rating;
  //   return fRating > sRating ? -1 : 1
  // })
  
  return (
    <div>

      <div className='mt-5'>
        <Helmet>
          <title>Blogging Voyage | Featured Posts</title>
        </Helmet>
        <div className="overflow-x-auto">
          <table className="table-sm w-full text-center ">
            {/* head */}
            <thead className='underline' >
              <tr >
                <th>Ser No</th>
                <th>Title</th>
                <th>Blog Owner</th>
                <th>Blog Owner's Photo</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              {data &&
                data.slice(0,10).map((item, i) => <tr key={item._id} data-aos="fade-down" data-aos-duration="800" className='hover:bg-[#dab9b93b] border-b'>
                  <th>{i + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.user_name || item.email}</td>
                  <td className="flex justify-center items-center"><img className="w-10 text-center rounded-lg" src={item.blog_owner_pic} alt="" /></td>
                  {/* <th><Link onClick={handleDetails} to={`/items/${item._id}`} className='btn bg-accent text-white hover:bg-white hover:text-black'>View Details</Link></th> */}
                </tr>

                )

              }


            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}
