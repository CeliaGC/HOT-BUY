import { Outlet } from "react-router-dom";
import NavbarHotBuy from "../components/Navbar";

function Root() {
    return (
        <>
            <NavbarHotBuy />
            <Outlet />
        </>
    )
}

export default Root;
