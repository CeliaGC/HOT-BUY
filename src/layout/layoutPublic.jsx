import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductShort from "../components/ProductShort";
import Products from "../pages/Products";

const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
            <Navbar />
            <ProductShort />
            {/* <main className="container">
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}  
                <Outlet />
            </main> */}
            <footer className="container text-center">Footer</footer>
        </>
    );
};

export default LayoutPublic;