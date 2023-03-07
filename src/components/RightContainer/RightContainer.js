import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from '../Home.js';
import About from '../NoPage';
import './RightContainer.css';

const RightContainer = () => {
    return (
        <div className="RightContainer">
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path="projects" element={<About/>}/>
                    <Route path="contact" element={<About/>}/>
                </Route>
            </Routes>
        </div>     
    );
}

export default RightContainer;