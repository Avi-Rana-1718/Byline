import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from './pages/Index.jsx'
import Profile from './pages/Profile.jsx'
import Auth from './pages/Auth.jsx'
import Post from './pages/Post.jsx'
import New from './pages/New.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/user/:id",
    element: <Profile />
  },
  {
    path:"/post/:id",
    element: <Post />
  },
  {
    path: "new",
    element: <New />
  }
]);

createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
