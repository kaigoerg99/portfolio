import React from "react";
import './RightContainer.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const RightContainer = () => {
    return (
        <div className="RightContainer">
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </div>     
    );
}

export default RightContainer;