import React, { useState } from 'react';
import ProductHandler from '../handler/ProductHandler';
import { useLoaderData } from "react-router-dom";

function StockCounter() {
  const { product } = useLoaderData();
  const id = product.id;
  const [unit, setUnit] = useState(product.unit);

  const handleUnitChange = (event) => {
    let unitInput = event.target.value;
    setUnit(unitInput);
  };

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
      <div>
        <p>Unidades: {unit}</p>
        <button onClick={() => setUnit(0)}>Sin stock</button>
        <button onClick={() => setUnit(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setUnit(prevCount => prevCount + 1)}>+</button>
      </div>
      <form onSubmit={handleSubmit}></form>
    </>
  );
}

export default StockCounter;
