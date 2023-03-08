import React, { useContext } from 'react';
import { DarkModeContext } from '../../../context/themeContext';
import './Contact.css';

const ContactLink = (props) => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <a className={darkMode ? 'ContactLink ContactLink-dark' : 'ContactLink ContactLink-light'} href={props.href} target={props.target}>{props.name}</a>
    );
}

export default ContactLink;