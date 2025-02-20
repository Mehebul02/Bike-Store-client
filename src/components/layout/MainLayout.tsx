import { Outlet } from "react-router-dom";
import Footer from "../ui/footer/Footer";
import Home from "./Home";
import Header from "../header/Header";

const MainLayout = () => {
    return (
        <div>
          <Header/>
          <Outlet/>
            <Footer />
        </div>
    );
};

export default MainLayout;