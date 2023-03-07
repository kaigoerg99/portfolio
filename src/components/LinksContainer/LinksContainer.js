import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/themeContext";
import './LinksContainer.css'

const LinksContainer = () => {
    const {darkMode} = useContext(DarkModeContext);
    const linkClass = darkMode ? "Link Link-dark" : "Link Link-light";
    return (
        <div className="LinksContainer">
            <Link className={linkClass} to="/">Home</Link>
            <Link className={linkClass} to="/projects">Projects</Link>
            <Link className={linkClass} to="/contact">Contact</Link>   
        </div>
    );
}

export default LinksContainer;