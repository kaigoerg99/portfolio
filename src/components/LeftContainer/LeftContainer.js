import React from "react";
import LinksContainer from "../LinksContainer/LinksContainer";
import NameContainer from "../NameContainer/NameContainer";
import RolesContainer from "../RolesContainer/RolesContainer";
import './LeftContainer.css';

const LeftContainer = () => {
    return (
        <div className="LeftContainer">
            <NameContainer/>
            <RolesContainer/>
            <LinksContainer/>
        </div>
    );
}

export default LeftContainer;