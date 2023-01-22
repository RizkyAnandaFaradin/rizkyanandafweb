import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank">
                <BsLinkedin />
            </a>
            <a href="https://github.com" target="_blank">
                <BsGithub />
            </a>
            <a href="https://instagram.com" target="_blank">
                <RiInstagramFill />
            </a>
        </div>
    );
};

export default HeaderSocials;
