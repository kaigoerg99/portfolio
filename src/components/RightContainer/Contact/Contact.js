import './Contact.css';
import ContactLink from './ContactLink';

const Contact = () => {
    return (
        <div className="ContactContainer">
            <ContactLink href='mailto: goerg.k@northeastern.edu' name='Email'/>
            <ContactLink href='https://www.linkedin.com/in/kaigoerg/' name='LinkedIn' target="_blank"/>
        </div>
    )
}

export default Contact;