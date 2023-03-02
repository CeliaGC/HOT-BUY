import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import MyForm from './components/Form'
import NavbarHotBuy from './components/Navbar'
import HeaderHotBuy from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderHotBuy />
    <br />
    <NavbarHotBuy />
    <MyForm />
  </React.StrictMode>,
)