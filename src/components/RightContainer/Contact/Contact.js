import './Contact.css';
import ContactLink from './ContactLink';
import resume from '../../../img/Resume2023.pdf';

const Contact = () => {
    const gitHub = 'https://github.com/kaigoerg99';
    const email = 'mailto: goerg.k@northeastern.edu';
    const linkedIn = 'https://www.linkedin.com/in/kaigoerg/';
    return (
        <div className="ContactContainer">
            <ContactLink href={email} name='Email' icon="fa-solid fa-envelope"/>
            <ContactLink href={resume} name='Resume' rel="noreferrer" target="_blank" icon="fa-solid fa-file-lines"/>
            <ContactLink href={gitHub} name='GitHub' target="_blank" icon="fa-brands fa-square-github"/>
            <ContactLink href={linkedIn} name='LinkedIn' target="_blank" icon="fa-brands fa-linkedin"/>
        </div>
    )
}

export default Contact;