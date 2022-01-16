import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { INDEX } from "../constants/Paths";
import Home from "../screens/Home";
const RoutesObelisk = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={INDEX} element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesObelisk;