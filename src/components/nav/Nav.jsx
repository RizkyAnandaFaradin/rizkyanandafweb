import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEngineering } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { BsTelephone } from 'react-icons/bs';
import { useState } from 'react';
const Nav = () => {
    // ini adalah hookstate
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            {/* ketika kita mengklik href#, maka classname akan menjadi aktif, ketika tidak maka class dihapus */}
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <AiOutlineHome />
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <AiOutlineUser />
            </a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
                <MdOutlineEngineering />
            </a>
            <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}>
                <TbCertificate />
            </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
                <BsTelephone />
            </a>
        </nav>
    );
};

export default Nav;
