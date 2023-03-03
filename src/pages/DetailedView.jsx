// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';


// import DetailView from '../components/DetailView/DetailView';



// const DetailedView = () => {
//     const { id } = useParams();
//     const [product, setProduct]= useState({});
    
//     const getProduct = async () =>{
//         const singleProduct = await productService.getProductById(id);
//         setProduct(singleProduct);
//     }
//     useEffect(() => {
//         getProduct();
//       }, []);

//     return (
//         <div className='container-detail'>
    
//         {product && (
//   <DetailView
//     key={product.id}
//     img={product.img}
//     name={product.name}

//   />
// )}
//         </div>

//     )
      
// }        
            


// export default DetailedView;
import DetailView from '../components/DetailView/DetailView'
import React from 'react';

const DetailedView = () => { 
    return (
    <>
    <DetailView />
    </>
    )
};

export default DetailedView;