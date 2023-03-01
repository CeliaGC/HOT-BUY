import { useState, useEffect } from "react";
import ProductHandler from "../handler/productHandler";
import './ProductShort.css'
import {Link} from 'react-router-dom';

export default function productShort() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        const data = await ProductHandler.loadProducts();
        setProducts(data)
    }

    const deleteShort = async (id) => {
        
        setProducts(products.filter((p) => p.id !== id));
        await ProductHandler.deleteProduct(id)
        
    }

    // const getDetail =  (id) => {
        
    //     products.find(p => p.id == id);
    //     console.log(id)   
    //     console.log(products)
        

    // }
    return (
        <>
            {
                products.map(item =>(

                (<div id="productShort" key={item.id}>
                    
                    <div className="margin"></div>


                    <div id="product">
                        <div id="img">
                            <Link to="/DetailedView"><img id="imgProduct" src={item.img}></img></Link>
                        
                            <div id="itemStock"><p>{item.unit}</p></div> 
                        </div>


                        <div id="description">
                            <div className="grid" id="g1"></div>
                            <div className="grid" id="g2"></div>
                            <div className="grid" id="itemName">{item.name}</div>
                            <div className="grid" id="g4"></div>
                            <div className="grid" id="g5"></div>
                            <div className="grid" id="g6"></div>
                            <div className="grid" id="g7"></div>
                            <div className="grid" id="itemPrice"><p>{item.price + ' €'}</p></div>
                            <div className="grid" id="g9"></div>
                            <button className="button" id="edit"></button>
                            <div className="grid" id="g11"></div>
                            <button onClick={() => deleteShort(item.id)}className="button" id="delete"></button>
                            {/* <input onSubmit={onSubmit(item.id)} type="submit" className="button" id="delete"/> */}
                            <div className="grid" id="g13"></div>
                        </div>
                    </div>
                
                    <div className="margin"></div>

                 </div>)
                ))

            }
        </>
    )
}

