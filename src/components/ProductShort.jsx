import { forEach } from "lodash";
import { useState, useEffect } from "react";
import productHandler from '../handler/productHandler';
import { Link } from 'react-router-dom';
import './ProductShort.css'

export default function productShort() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        const data = await productHandler.loadProducts();
        setProducts(data)
    }

    const deleteShort = (id) => {
        
        setProducts(products.filter((p) => p.id !== id));
    }

    function editProduct() {
        console.log("Form opens")
    }
    // function DeleteProduct() {
    //     const [showDiv, setShowdiv] = useState(true);

    //     const clickErase = () => {
    //         setShowdiv(false);
    //     }
    // }



    return (
        <container>
            {
                products.map(item =>(

                (<div id="productShort" key={item.id}>
                    
                    <div className="margin"></div>
                    <div id="product">
                        <div id="img">
                        <Link className="product-link" to={`/DetailedView/${item.id}`}><img id="imgProduct" src={item.img}></img></Link>
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
                            <Link className="product-link" to={`/EditProduct/${item.id}`}><button className="button" id="edit"></button></Link>
                            <div className="grid" id="g11"></div>
                            <button onClick={() => deleteShort(item.id)}className="button" id="delete"></button>
                            <div className="grid" id="g13"></div>
                        </div>
                    </div>
                
                    <div className="margin"></div>

                 </div>)
                ))

            }
        </container>
    )
}