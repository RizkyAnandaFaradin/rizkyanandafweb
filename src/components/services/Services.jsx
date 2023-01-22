import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
    return (
        <section id="activity">
            <h5>What I Doing</h5>
            <h2>Activity</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Training</h3>
                        <h5>IT Support Google</h5>
                        <h5 className="text-light">Baparekraf Digital Talent 2022 Batch 2</h5>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Technical Support Fundamentals</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>The Bits and Bytes of Computer Networking</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Operating Systems and You: Becoming a Power User</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>System Administration and IT Infrastructure Services</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>IT Security: Defense against the digital dark arts</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Training */}

                <article className="service">
                    <div className="service__head">
                        <h3>Internship </h3>
                        <h5>Technical Operation Support</h5>
                        <h5 className="text-light">PT Mandiri Daya Utama Nusantara</h5>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Handling Trouble Tickets by splicing fber optics using a fusion splicer at the cut point on the interrupted link</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Perform preventive maintenance by using OTDR on a predetermined site</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Conducting patrols to see public works that have fber optic lines and do documentation</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Making OTDR graphical analysis reports, critical incident reports, patrol results reports using Microsoft Excel and Microsoft Word</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Internship */}

                <article className="service">
                    <div className="service__head">
                        <h3>Final Project D3</h3>
                        <h5>DESIGN AND BUILD WIFI RENTAL SYSTEM WITH COINS BASED ON ADNROID</h5>
                        <h5 className="text-light">Politeknik Negeri Jakarta</h5>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Able to design a website for a WiFi rental system with coins android based</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Be able to find out the speed of the internet network from the provider after make rentals</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Able to test the performance of the internet network at the time of the website used for rental</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Training */}
            </div>
        </section>
    );
};

export default Services;
