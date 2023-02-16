import React, { useState } from 'react';

function StockCounter({initialCount}) {
    const [count, setCount] = useState(0);
    return (
      <>
        Unidades: {count}
        <button onClick={() => setCount(0)}>Sin stock</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }

  export default StockCounter