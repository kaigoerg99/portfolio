import React, { useContext } from 'react';
import { DarkModeContext } from '../../../context/themeContext';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import importIcons from '../../../icons/icons';

importIcons();

const ContactLink = (props) => {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <a className={darkMode ? 'ContactLink ContactLink-dark' : 'ContactLink ContactLink-light'} rel={props.rel} href={props.href} target={props.target}>
            <FontAwesomeIcon icon={props.icon} className={props.className}/>
            <span className='ContactLinkText'>{props.name}</span>
        </a>
    );
}

export default ContactLink;