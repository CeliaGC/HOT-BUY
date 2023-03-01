import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductShort from "../components/ProductShort";
import Products from "../pages/Products";
import NavbarHotBuy from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
            <Navbar />
            <ProductShort />
           
            <Footer />
        </>
    );
};

export default LayoutPublic;