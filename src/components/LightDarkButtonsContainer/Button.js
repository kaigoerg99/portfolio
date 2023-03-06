import React from "react";

const Button = (props) => {
    return (
        <>
            <div className={props.selected ? "Button Button-selected" : 'Button'} onClick={() => props.onClick()}/>
            <div className="ButtonText">
                {props.text}
            </div>
        </>
    );
}

export default Button;