import React from 'react'
import { Link } from 'react-router-dom'
import { Slider } from '../Components/Slider'
import toast from 'react-hot-toast'
import { RecentBlogs } from '../Components/RecentBlogs'
import { Helmet } from 'react-helmet-async'
import { motion } from "framer-motion"

const handleSubscribe = (e) => {
  e.preventDefault();
  const data = e.target.subscribe.value

  if (data) {
    toast.success('Subscribed Successfully')
    e.target.subscribe.value = ""
  }

}
export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Blogging Voyage | Home</title>
      </Helmet>
      {/* banner */}
      <section className="bg-gray-50 rounded-xl my-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
          <div data-aos="fade-up" data-aos-duration="1000" className="mx-auto max-w-xl py-20 text-center space-y-5">
            <h1 className="text-3xl font-extrabold sm:text-5xl ">
              Welcome to
              <strong className="font-extrabold text-third sm:block mt-5"> BLOGGING VOYAGE </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Your destination for exploring, reading, and sharing captivating blogs from around the world!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                data-aos="fade-right" data-aos-duration="1000"
                className="block lg:w-4/12 rounded bg-third px-12 py-3 text-sm text-white font-bold hover:text-accent duration-700 shadow hover:bg-primary focus:outline-none focus:ring  sm:w-auto"
                to={'/allBlogs'}
              >
                See Blogs
              </Link>

              <a
                data-aos="fade-left" data-aos-duration="1000"
                className="block lg:w-4/12 rounded px-10 py-3 text-sm font-bold border-accent border-2 text-accent shadow hover:text-primary focus:outline-none focus:ring hover:bg-accent duration-500 sm:w-auto"
                href="#footer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs */}
      <RecentBlogs></RecentBlogs>


      {/* carousel */}
      <section>
        <div className="mx-auto max-w-screen-2xl  px-4 lg:py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:h-screen lg:grid-cols-2">
            <div className="lg:w-6/12 z-10 lg:py-16">
              <div data-aos="fade-right" data-aos-duration="1000" className="object-center">
                {/* Slider */}
                <Slider></Slider>
              </div>
            </div>

            <div className="lg:w-6/12 items-center text-center bg-gray-100">
              <div className="p-8 sm:p-16 lg:p-24 space-y-6">

                <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-bold sm:text-3xl">
                  "Discover the World: Your Ultimate Travel Companion"
                </h2>

                <p data-aos="fade-up" data-aos-duration="2000" className="my-4 text-gray-600 text-justify">
                  "Embark on a journey of discovery with our travel blog, where each post is a passport to new adventures and unforgettable experiences. From hidden gems and off-the-beaten-path destinations to iconic landmarks and cultural insights, we're your trusted guide to exploring the world. Join us as we wanderlust together, sharing captivating stories, practical tips, and breathtaking photos that inspire wanderlust and ignite the spirit of exploration. Whether you're a seasoned traveler or an armchair adventurer, our travel blog invites you to escape the ordinary and embrace the extraordinary as we traverse the globe together, one destination at a time."
                </p>

                <button data-aos="fade-up" data-aos-duration="1000">
                  <a href="#subscribe"
                    className="w-6/12 rounded px-12 py-3 text-sm font-bold border-accent border-2 text-accent shadow hover:text-primary  hover:bg-accent duration-500 
                  sm:w-auto"
                  >
                    Get in Touch
                  </a>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* extra section */}

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header data-aos="fade-left" data-aos-duration="1000">
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Health Blogs</h2>

                  <p className="mt-4 text-gray-500">
                    Follow Our Health Blogs and Keep Yourselves Fit.
                  </p>
                </header>

                <Link
                  data-aos="fade-right" data-aos-duration="1000"
                  to={'/allBlogs'}
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  See All Blogs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li data-aos="fade-up" data-aos-duration="1000">
                  <Link to={'https://bloggingvoyage-236e6.web.app/blogs/6644b186ff230926e3df4b9f'} className="group block">
                    <img
                      src="https://i.ibb.co/NCQp8sb/premium-photo-1661962800478-27f22e96e129.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        Discover how incorporating regular exercise into your routine can improve your physical and mental well-being.
                      </h3>
                    </div>
                  </Link>
                </li>
                <li data-aos="fade-down" data-aos-duration="1000">
                  <Link to={'https://bloggingvoyage-236e6.web.app/blogs/6644b0a3ff230926e3df4b9c'} className="group block">
                    <img
                      src="https://i.ibb.co/ZgsGG4j/photo-1603166868295-4ae2cba14063.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3
                        className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                      >
                        Discover how practicing mindfulness can improve your mental well-being and enhance your everyday experiences.
                      </h3>
                    </div>
                  </Link>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section id='subscribe' className="container relative flex flex-wrap lg:flex-row flex-col-reverse justify-end lg:items-center lg:mt-20 my-10 lg:my-0 gap-10">
        <div data-aos="fade-right" data-aos-duration="1000" className="text-center sm:text-left md:col-span-4 lg:col-span-2">
          <p className="text-2xl font-extrabold text-gray-900">Stay in Touch</p>
          
          <div className="mx-auto mt-8 max-w-md sm:ms-0">
            <p className="lg:text-left  leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
              "Connect with us today! Reach out for inquiries, collaborations, or just to say hello. We're here to listen and assist."</p>
             
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                <label htmlFor="email" className="sr-only">Email</label>

                <input
                  className="lg:w-full w-10/12 mx-auto rounded-sm border-gray-200 px-6 py-3 shadow-sm shadow-accent"
                  type="email"
                  placeholder="Enter your email"
                  name='subscribe'
                  required
                />

                <button
                  className="block w-4/12 mx-auto lg:m-0 rounded-sm px-5 py-2 text-base font-bold shadow-accent shadow-lg hover:shadow-primary border duration-500 sm:w-auto "
                  type="submit"
                >
                  Subscribe
                </button>


              </div>
            </form>
          </div>
        </div>

        <div className="h-64 w-full sm:h-96 lg:w-6/12">
          <img alt=""
            src="https://i.ibb.co/NNwHwZ8/premium-photo-1681883457631-e21611e38757.jpg"
            className="inset-0 h-full w-full object-cover rounded-t-xl"
          />
        </div>
      </section>
    </div>
  )
}
