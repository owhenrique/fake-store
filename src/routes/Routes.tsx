import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/product_details";
import Favorites from "../pages/favorites";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:product_id" element={<ProductDetails/>} />
                <Route path="/favorites" element={<Favorites />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;