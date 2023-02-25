import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from './router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import navbarHotBuy from './components/Navbar'
//import HeaderHotBuy from './components/Header'
import MyForm from './components/Form'
import ProductShort from './components/ProductShort'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <Product /> */}
    < navbarHotBuy/>
    <MyForm />
    <RouterProvider router={router}/>
    
    
    {/* <MyForm/> */}
    <ProductShort/>
  </React.StrictMode>,
)