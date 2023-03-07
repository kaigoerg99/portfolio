import React from "react";
import Navbar from "../Navbar/Navbar.js"
import NameContainer from "../NameContainer/NameContainer";
import RolesContainer from "../RolesContainer/RolesContainer";
import './LeftContainer.css';

const LeftContainer = () => {
    return (
        <div className="LeftContainer">
            <NameContainer/>
            <RolesContainer/>
            <Navbar/>
        </div>
    );
}

export default LeftContainer;