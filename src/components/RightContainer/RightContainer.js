import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Home.js';
import Layout from "../LinksContainer/Layout.js";
import About from '../NoPage';
import './RightContainer.css';

const RightContainer = () => {
    return (
        <div className="RightContainer">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>} />
                    <Route path="blogs" element={<About/>} />
                </Route>
            </Routes>
        </div>     
    );
}

export default RightContainer;