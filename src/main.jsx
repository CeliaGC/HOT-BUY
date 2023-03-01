import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import navbarHotBuy from './components/Navbar';
//import HeaderHotBuy from './components/Header'
import MyForm from './components/Form';
import ProductShort from './components/ProductShort';
import Products from './pages/Products';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Product /> */}
    {/* < navbarHotBuy/>
    <MyForm /> */}
    {/* <RouterProvider router={router}/> 
    <ProductShort/> */}
    <RouterProvider router={router}></RouterProvider>
    {/* <Products></Products> */}
  </React.StrictMode>,
)