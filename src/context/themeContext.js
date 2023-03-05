import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>
    );
}

export {DarkModeContext, DarkModeProvider}