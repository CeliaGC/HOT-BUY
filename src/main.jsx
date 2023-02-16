import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from './components/Product'
import './index.css'
import MyForm from './components/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Product />
    <MyForm />
  </React.StrictMode>,
)
