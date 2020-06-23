import React from "react";

const ContactForm = () => {
  return (
    <div className='contact__form'>
      <form method='POST' action='https://formspree.io/yinze_fan@hotmail.com'>
        <div className='contact__info'>
          <label>
            <span>Your Name</span>
            <input type='text' name='name' />
          </label>

          <label>
            <span>Your Email</span>
            <input type='email' name='_replyto' />
          </label>
        </div>

        <div className='contact__textbox'>
          <label>
            <span>Your Message</span>
            <textarea name='message'></textarea>
          </label>
        </div>

        <div className='submit__wrap'>
          <input type='submit' value='Send' className='contact__submit' />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
