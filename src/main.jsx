import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MyForm from './components/Form'
import ProductShort from './components/ProductShort'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <MyForm/> */}
    <ProductShort/>
  </React.StrictMode>,
)
