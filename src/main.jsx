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
import BlogDetails from './components/BlogDetails/BlogDetails.jsx';
import Contant from './components/Contant/Contant.jsx';
import Author from './components/Author/Author.jsx';

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
        path:'/blog/:id',
        loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
        element:<BlogDetails></BlogDetails>,

        children:[
          {
            index:true,
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            element:<Contant></Contant>
          },
          {
            path:'author',
            loader: ({params})=> fetch(`https://dev.to/api/articles/${params.id}`),
            element:<Author></Author>
          }
        ],
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
