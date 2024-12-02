import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from './pages/Index.jsx'
import Profile from './pages/Profile.jsx'
import Auth from './pages/Auth.jsx'
import Post from './pages/Post.jsx'
import New from './pages/New.jsx'
import Setting from './pages/Setting.jsx'
import Dashboard from './pages/Dashboard.jsx'

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
    path: "/new",
    element: <New />
  },
  {
    path:"/dashboard",
    element: <Dashboard />
  },
  {
    path: "/setting",
    element: <Setting />
  }
]);

createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
