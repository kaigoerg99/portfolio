import React, {useContext} from "react";
import Button from "./Button";
import { DarkModeContext } from "../../context/themeContext";
import './LightDarkButtons.css';
const LightDarkButtons = () => {
    const {darkMode, setDarkMode} = useContext(DarkModeContext);

    return (
            <div className="ButtonsContainer">
                <Button text={'LIGHT'} selected={!darkMode} onClick={() => setDarkMode(false)}/>
                <Button text={'DARK'} selected={darkMode} onClick={() => setDarkMode(true)}/>
            </div>
    );
}

export default LightDarkButtons;