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
            {/* <main className="container">
            <NavbarHotBuy />
            <main className="container">
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}  
                <Outlet />
            </main> */}
            <footer className="container text-center">Footer</footer>
            </main>
            <Footer />
        </>
    );
};

export default LayoutPublic;