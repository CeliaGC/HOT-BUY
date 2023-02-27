import ProductShort from "../components/ProductShort";
import {Link, useLoaderData} from 'react-router-dom'


function Products() { 
    const {products} = useLoaderData();
    return (
       <>
        {products.map((p) => (
            
           <h1>Cucha tú el {p.name}</h1>
            

        ))}
       </> 
    );
 };
 export default Products;