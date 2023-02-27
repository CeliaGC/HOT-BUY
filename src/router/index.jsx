import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Products from "../pages/Products";
import  NewProduct from "../pages/Newproduct";
// import DetailedView from "../pages/DetailedView";
import EditProduct from "../pages/EditProduct";

import productHandler from "../handler/productHandler";
import ProductShort from "../components/ProductShort";
import productService from "../services/ProductServices";
import DetailedView from "../pages/DetailedView";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        errorElement: <NotFound />, 
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        path: 'products',
                        element: <ProductShort />,
                        loader: fetchProducts,
                    },
                    {
                        path: 'newProduct',
                        element: <NewProduct />,
                    },
                    {
                        path: "detailedView/:id",
                        element: <DetailedView />,
                        loader: fetchProduct,
                    },    
                    {
                        path: 'editProduct/:id',
                        element: <EditProduct />,
                        loader: fetchProduct,
                        
                    },    
                   
                ]
            },
         
        ]
    },   
]);

async function fetchProducts() {
    const products = await productHandler.loadProducts();
    return { products };
}

async function fetchProduct({ params }) {
    const product = await productHandler.loadProduct(params.id);
    return { product };
}
