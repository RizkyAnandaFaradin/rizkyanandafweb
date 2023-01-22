import React from 'react';
import './footer.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                RizkyAnandaF
            </a>
            <ul className="permalinks">
                <li>
                    {' '}
                    <a href="#">Home</a>
                </li>
                <li>
                    {' '}
                    <a href="#about">About</a>
                </li>
                <li>
                    {' '}
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    {' '}
                    <a href="#activity">Activity</a>
                </li>{' '}
                <a href="#portfolio">Portfolio</a>
                <li>
                    {' '}
                    <a href="#testimonials">Course</a>
                </li>
                <li>
                    {' '}
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/rizkyanandafaradin/">
                    <AiFillFacebook />
                </a>
                <a href="https://www.instagram.com/_nandarizkyf_/">
                    <AiFillInstagram />
                </a>

                <a href="https://www.linkedin.com/in/rizky-ananda-f-210731205/">
                    <BsLinkedin />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; RizkyAnandaF. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
