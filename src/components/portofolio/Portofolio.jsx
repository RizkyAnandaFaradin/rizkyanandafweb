import React from 'react';
import './portofolio.css';
import IMG1 from '../../assets/img1.jpeg';
import IMG2 from '../../assets/img2.jpeg';
import IMG3 from '../../assets/img3.png';
import IMG4 from '../../assets/img4.jpeg';
import IMG5 from '../../assets/img5.jpeg';
import IMG6 from '../../assets/img6.jpeg';
import IMG7 from '../../assets/img7.jpeg';

const data = [
    {
        id: 7,
        image: IMG7,
        title: 'Todo List Application with PHP and MySQL',
        github: 'https://github.com/RizkyAnandaFaradin/Todolist',
        livetrial: 'http://todolist-ranf.infinityfreeapp.com/',
    },
    {
        id: 1,
        image: IMG1,
        title: 'MaBOOK Library Website Prototype',
        github: 'https://github.com/RizkyAnandaFaradin/MaBOOK',
        livetrial: '',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Cisco Packet Tracer Project',
        github: 'https://github.com/RizkyAnandaFaradin/CiscoPacketTracer',
        livetrial: '#',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Scissor Project Using SolidWorks',
        github: 'https://github.com/RizkyAnandaFaradin/SolidWorkProjects',
        livetrial: '#',
    },
    {
        id: 4,
        image: IMG4,
        title: 'SnakeGame Project Using MatLab',
        github: 'https://github.com/RizkyAnandaFaradin/SnakeGameMatlab',
        livetrial: '#',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Final Project D3 Wifi Coin Website',
        github: 'https://github.com/RizkyAnandaFaradin/WifiKoin',
        livetrial: '#',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Microcontroller Prototype Projects',
        github: 'https://github.com/RizkyAnandaFaradin/MiconProject',
        livetrial: '#',
    },
];

const Portofolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portofolio__container">
                {/* ini akan membuat object array sesuai dengan data pada map yang telah dibuat */}
                {data.map(({ id, image, title, github, livetrial }) => {
                    return (
                        <article key={id} className="portofolio__item">
                            <div className="portofolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portofolio__item-cta">
                                <a href={github} className="btn btn-primary">
                                    Github
                                </a>
                                <a href={livetrial} className="btn btn-primary">
                                    Live Trial
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portofolio;
