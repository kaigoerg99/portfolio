import React from "react";
import Navbar from "../Navbar/Navbar.js"
import Name from "./Name/Name.js"
import Subtitle from "./Subtitle/Subtitle.js";
import './LeftContainer.css';

const LeftContainer = () => {
    return (
        <div className="LeftContainer">
            <Name/>
            <Subtitle/>
            <Navbar/>
        </div>
    );
}

export default LeftContainer;