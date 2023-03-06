import React, {useState, useEffect, useContext} from "react";
import { DarkModeContext } from "../../context/themeContext";
import LeftContainer from "../LeftContainer/LeftContainer";
import LightDarkButtons from "../LightDarkButtonsContainer/LightDarkButtons";
import RightContainer from "../RightContainer/RightContainer";
import './MainContainer.css';

const MainContainer = () => {
    const {darkMode} = useContext(DarkModeContext);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div
            className={darkMode ? "MainContainer MainContainer-dark" : "MainContainer MainContainer-light"}
            style={{
                width: windowSize[0] - 100,
                height: windowSize[1] - 100
            }}
        >
            <LeftContainer/>
            <RightContainer/>
            <LightDarkButtons/>
        </div>
    )
}

export default MainContainer;