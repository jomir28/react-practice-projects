import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
           <div>
           <Outlet></Outlet>
           </div>
            <div className="h-14">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;