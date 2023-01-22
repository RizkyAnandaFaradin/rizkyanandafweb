import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__editing">
                    <h3>Editing</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Photoshop</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CorelDraw</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_programming">
                    <h3>Programming</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience__networking">
                    <h3>Networking</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Basic Networking</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Cisco</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Wireshark</h4>
                                <small className="text-light">beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
