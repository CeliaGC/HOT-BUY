import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
const LayoutPublic = () => {

    // const navigation = useNavigation()

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default LayoutPublic;