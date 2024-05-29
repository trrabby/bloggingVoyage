import { useAxiosSecure } from '../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { RelatedBlogsSlider } from './RelatedBlogsSlider'

export const RelatedBlogs = ({ category }) => {
    // console.log(category)

    const axiosSecure = useAxiosSecure()

    const { data: blogs = [], isLoading, isError, error } = useQuery({
        queryKey: ['recent'],
        queryFn: () => blogsData(),
    })

    const blogsData = async () => {
        const { data } = await axiosSecure(`/blogs-cat/${category}`)
        return data
    }


    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className='p-5 my-10 lg:w-4/12 md:w-6/12 mx-auto rounded-xl'>
                <h1 className='text-center lg:text-3xl text-xl font-bold'>Related Blogs</h1>
                <p className='text-lg text-center'>See Personalized Blogs.</p>
            </div>
            
            <div>
                <RelatedBlogsSlider blogs={blogs}></RelatedBlogsSlider>
            </div>
        </div>
    )
}
