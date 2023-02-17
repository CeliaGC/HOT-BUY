import { useState, useEffect } from "react";
import productHandler from '../handler/productHandler';
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

    return (
            <body>
                {
                    products.map(item =>(
                        
                    (<div id="productShort" key={item.id}>

                        <div className="margin"></div>

                        <div id="product">

                            <div id="img">
                                <img id="imgProduct" src={item.img}></img>
                                <div id="stock">{item.unit}</div> 
                            </div>
                        
                                                        

                            <div id="description">
                                <div className="grid" id="g1"></div>
                                <div className="grid" id="g2"></div>
                                <div className="grid" id="name">{item.name}</div>
                                <div className="grid" id="g4"></div>
                                <div className="grid" id="g5"></div>
                                <div className="grid" id="g6"></div>
                                <div className="grid" id="g7"></div>
                                <div className="grid" id="price">{item.price + ' €'}</div>
                                <div className="grid" id="g9"></div>
                                <button className="button" id="edit"></button>
                                <div className="grid" id="g11"></div>
                                <button className="button" id="delete"></button>
                                <div className="grid" id="g13"></div>
                            </div>

                        </div>
                       
                        <div className="margin"></div>

                     </div>)
                    ))
                }

            </body>
    )
}

