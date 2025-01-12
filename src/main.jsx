import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'

const router=createBrowserRouter([
  {
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Home/>
    },
    {
      path: "about",
      element: <AboutUs/>
    }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
