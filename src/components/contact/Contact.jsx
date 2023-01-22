import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iggw7y2', 'template_balzxbd', form.current, 'MGRo-rpn1RE-bpmo8').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5 className="text-light">rizkyanandafaradin@gmail.com</h5>
                        <a href="mailto:rizkyanandafaradin@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5 className="text-light">rizkyanandafaradin</h5>
                        <a href="https://m.me/rizkyanandafaradin">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5 className="text-light">+62895314...</h5>
                        <a href="https://api.whatsapp.com/send?phone=6289531436718">Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button typeof="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
