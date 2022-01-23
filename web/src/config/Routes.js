import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { INDEX, NOT_FOUND, PRICING } from "../constants/Paths";
import NotFound from "../screens/error/NotFound";
import Home from "../screens/Home";
import Pricing from "../screens/Pricing";
const RoutesObelisk = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={INDEX} element={<Home />} />
                <Route path={NOT_FOUND} element={<NotFound />} />
                <Route path={PRICING} element={<Pricing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesObelisk;