import React from "react";
import NameContainer from "../NameContainer/NameContainer";
import RolesContainer from "../RolesContainer/RolesContainer";
import './LeftContainer.css';

const LeftContainer = () => {
    return (
        <div className="LeftContainer">
            <NameContainer/>
            <RolesContainer/>
        </div>
    );
}

export default LeftContainer;