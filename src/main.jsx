import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import NavbarHotBuy from './components/Navbar'
// import HeaderHotBuy from './components/Header'
import MyForm from './components/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Product />
    <MyForm />
  </React.StrictMode>,
)
