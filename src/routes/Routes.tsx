import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/product_details";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:product_id" element={<ProductDetails/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;