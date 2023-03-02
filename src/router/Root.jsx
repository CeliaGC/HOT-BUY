import { Outlet } from "react-router-dom";
import NavbarHotBuy from "../components/Navbar";
import Footer from "../components/Footer"

function Root() {
    return (
        <>
            <NavbarHotBuy />
            <Outlet />
            <Footer />

        </>
    )
}

export default Root;
