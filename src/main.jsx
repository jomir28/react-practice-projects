import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Bookmarks from './components/Bookmarks/Bookmarks.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,

    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        loader:()=>fetch('https://dev.to/api/articles?per_page=15&top=7'),
        element:<Blogs></Blogs>
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
