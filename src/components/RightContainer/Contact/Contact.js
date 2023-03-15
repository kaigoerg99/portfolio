import './Contact.css';
import ContactLink from './ContactLink';

const Contact = () => {
    return (
        <div className="ContactContainer">
            <ContactLink href='mailto: goerg.k@northeastern.edu' name='Email' className="EmailIcon" icon="fa-regular fa-envelope"/>
            <ContactLink href='https://www.linkedin.com/in/kaigoerg/' name='LinkedIn' target="_blank" className="LinkedinIcon" icon="fa-brands fa-linkedin"/>
        </div>
    )
}

export default Contact;