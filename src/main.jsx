import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UsersDetails from './Components/UsersDetails/UsersDetails.jsx';
import Posts from './Components/posts/Posts.jsx';
import PostV from './Components/postDetails/PostV.jsx';
import ErrorPage from './Components/errorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,



    children: [
      {
        path: '/about',
        element:<About></About>
      },
      {
        path:'/Users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>

      },
      {
        path: '/Contact',
        element:<Contact></Contact>
      },
     {path:'/user/:userId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UsersDetails></UsersDetails>
      
     } ,
     {
      path:'/posts',
      loader:() => fetch(`https://jsonplaceholder.typicode.com/posts`),
      element:<Posts></Posts>
     },
     {
      path:'/post/:postId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostV></PostV>
     }
    ] 
  },
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
