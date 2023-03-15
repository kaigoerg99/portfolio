import './Contact.css';
import ContactLink from './ContactLink';
import resume from '../../../img/Resume2023.pdf';

const Contact = () => {
    return (
        <div className="ContactContainer">
            <ContactLink href='mailto: goerg.k@northeastern.edu' name='Email' icon="fa-solid fa-envelope"/>
            <ContactLink href={resume} name='Resume' rel="noreferrer" target="_blank" icon="fa-solid fa-file-lines"/>
            <ContactLink href='https://github.com/kaigoerg99' name='GitHub' target="_blank" icon="fa-brands fa-square-github"/>
            <ContactLink href='https://www.linkedin.com/in/kaigoerg/' name='LinkedIn' target="_blank" icon="fa-brands fa-linkedin"/>
        </div>
    )
}

export default Contact;