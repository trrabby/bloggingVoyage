import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import { Root } from './Layout/Root';
import { Home } from './Pages/Home';
import { ContextProvider } from './Providers/ContextProvider';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AddBlog } from './Pages/AddBlog';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { PrivateRoute } from './Providers/PraivateRoute';
import { AllBlogs } from './Pages/AllBlogs';
import { WishList } from './Pages/WishList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BlogDetails } from './Pages/BlogDetails';
import { useAxiosSecure } from './Hooks/useAxiosSecure';
import { Update } from './Pages/Update';
import { WishCardDetails } from './Pages/WishCardDetails';
import { FeaturedBlogs } from './Pages/FeaturedBlogs';

const axiosSecure = useAxiosSecure()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addBlog",
        element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>
      },
      {
        path: "/blogs/:id",
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-side-a-11.vercel.app/blogs/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-side-a-11.vercel.app/blogs/${params.id}`)
      },
      {
        path: "/featuredBlogs",
        element: <PrivateRoute><FeaturedBlogs></FeaturedBlogs></PrivateRoute>
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><WishList></WishList></PrivateRoute>
      },
      {
        path: "/wblogs/:id",
        element: <PrivateRoute><WishCardDetails></WishCardDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://server-side-a-11.vercel.app/wishlists/${params.id}`)
      },

    ]
  }

]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster />
        </HelmetProvider>
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
