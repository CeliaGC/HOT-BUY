import { Outlet, useNavigation } from "react-router-dom";
import NavbarHotBuy from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
            <NavbarHotBuy />
            <main className="container">
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}  
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default LayoutPublic;