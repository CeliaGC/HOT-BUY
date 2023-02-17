import React from 'react'
import ReactDOM from 'react-dom/client'
import StockCounter from './components/StockCounter'
import './index.css'
import MyForm from './components/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Product /> */}
    <StockCounter/>
    <MyForm />
  </React.StrictMode>,
)
