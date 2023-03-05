import React, { useState } from 'react';
import ProductHandler from '../handler/ProductHandler';
import { useLoaderData } from "react-router-dom";
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import './DetailView.css';

function StockCounter() {
  const { product } = useLoaderData();
  const id = product.id;
  const [unit, setUnit] = useState(product.unit);

  // const handleUnitChange = (event) => {
  //   let unitInput = event.target.value;
  //   setUnit(unitInput);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedProduct = {
      ...product,
      unit: unit
    };
    ProductHandler.updateProduct(id, updatedProduct)
      .then(() => {
        setUnit(updatedProduct.unit);
      });
  };

  return (
    <>
      <div > 
        <p><strong><font color="#7C2E9B">Unidades:</font></strong> {unit}</p>
        <div style={{margin:'auto', display: 'flex', flexDirection: 'row', alignContent:'center', justifyContent:'center'}}>
        <button style={{width: '6rem', fontFamily: 'Goldman', fontWeight: 'bold', backgroundColor:'rgba(215, 201, 240, 1)', border: 'none'}} onClick={() => setUnit(0)}>Sin stock</button>
        <button style={{width: '2rem', fontFamily : 'Goldman', fontWeight: 'bold', backgroundColor:'rgba(215, 201, 240, 1)', border: 'none', marginLeft: '0.5rem', padding: '0.7rem', marginRight: '0.5rem'}}onClick={() => setUnit(prevCount => prevCount - 1)}>-</button>
        <button style={{width: '2rem', fontFamily: 'Goldman', fontWeight: 'bold', backgroundColor:'rgba(215, 201, 240, 1)', border: 'none'}} onClick={() => setUnit(prevCount => prevCount + 1)}>+</button>
        </div>
      </div>
      <form>
      <Button onClick={handleSubmit} variant="contained" style={{margin: 'auto', width:'4rem', backgroundColor:'#D7C9F0', color:'#7C2E9B'}}><UpdateIcon /></Button>
      </form>
    </>
  );
}

export default StockCounter;
