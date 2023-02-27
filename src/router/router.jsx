import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Products from "../pages/Products";
import NewProduct from "../pages/Newproduct";
import DetailedView from "../pages/DetailedView";
import EditProduct from "../pages/EditProduct";
import ProductHandler from '../handler/ProductHandler';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
                    {
                        index: true,
                        element: <Products />,
                        loader: fetchProducts,
                    },
                    {
                        path: '/newProduct',
                        element: <NewProduct />,
                    },
                    {
                        path: '/detailedView/:id',
                        element: <DetailedView/>,
                        loader: fetchProduct,
                    },    
                    {
                        path: '/editProduct/:id',
                        element: <EditProduct />,
                        loader: fetchProduct
                    },    
                ]
            },
        ]
);

async function fetchProducts() {
    const products = await ProductHandler.loadProducts();
    return { products };
}

async function fetchProduct({ params }) {
    const product = await ProductHandler.loadProduct(params.id);
    return { product };
}
