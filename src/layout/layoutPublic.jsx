import { Outlet, useNavigation } from "react-router-dom";
import NavbarHotBuy from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
            <NavbarHotBuy />
            <Filter />
            {/* <main className="container">
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}   */}
                <Outlet />
          
            <Footer />
        </>
    );
};

export default LayoutPublic;