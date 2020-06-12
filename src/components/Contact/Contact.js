import React from "react";
import ContactSocial from "./ContactSocial";
import ContactForm from "./ContactForm";

const Contact = () => (
    <div className='contact-section-container'>
        <div className='contact__bg contact-section-content'>
            <h3 className='contact-section-title'>Contact</h3>
            <hr className='bar-white' />
            <ContactForm />
            <ContactSocial />
        </div>
    </div>
);

export default Contact;
