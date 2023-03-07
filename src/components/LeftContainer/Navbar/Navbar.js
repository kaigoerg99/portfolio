import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../../context/themeContext";
import './Navbar.css'

const Navbar = () => {
    const {darkMode} = useContext(DarkModeContext);
    const linkClass = darkMode ? "Link Link-dark" : "Link Link-light";
    return (
        <nav className="Navbar">
            <NavLink className={linkClass} to="/">About</NavLink>
            <NavLink className={linkClass} to="/projects">Projects</NavLink>
            <NavLink className={linkClass} to="/contact">Contact</NavLink>   
        </nav>
    );
}

export default Navbar;