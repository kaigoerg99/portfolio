import React, { useContext } from "react";
import { DarkModeContext } from "../../context/themeContext";

const Button = (props) => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <>
            <div className={props.selected ? 
                darkMode ? "Button Button-dark-selected" : 'Button Button-light-selected' :
                darkMode ? "Button Button-dark-not-selected" : "Button Button-light-not-selected"
                } 
                onClick={() => props.onClick()}/>
            <div className={darkMode ? "ButtonText ButtonText-dark" : "ButtonText ButtonText-light"}>{props.text}</div>
        </>
    );
}

export default Button;