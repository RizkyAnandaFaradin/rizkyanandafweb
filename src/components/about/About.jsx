import React from 'react';
import './about.css';
import ME2 from '../../assets/me2.png';
import { FaAward } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { HiDocumentDuplicate } from 'react-icons/hi';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME2} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>-3 Months Working</small>
                        </article>

                        <article className="about__card">
                            <AiFillFolderOpen className="about__icon" />
                            <h5>College Project</h5>
                            <small>10+ Completed</small>
                        </article>

                        <article className="about__card">
                            <HiDocumentDuplicate className="about__icon" />
                            <h5>Certificate</h5>
                            <small>10+ Certificate</small>
                        </article>
                    </div>

                    <p>
                        I am a graduate majoring in electrical engineering with a D3 telecommunications study program at the Jakarta State Polytechnic. Experience working as a technical operation support at PT MANDAU. <br></br> I have
                        interest in networking and programming. This is evidenced by Google's IT Support certifcate facilitated by Baparekraf Digital Talent 2022 which I attended for 2 months in which there were 5 courses covering
                        networking and programming.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
