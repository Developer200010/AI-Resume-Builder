import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import path from 'path'
import SignIn from './auth/sign-in/index.jsx'
import Home from './container/home/index.jsx'
import Dashboard from './container/dashboard/index.jsx'

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
    ]
  },
  {
    path:"/auth/sign-in",
    element:<SignIn/>
  }
 

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
