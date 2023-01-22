import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/Desain2.jpg';
import AVTR2 from '../../assets/IT.jpg';
import AVTR3 from '../../assets/JS.jpg';
import AVTR4 from '../../assets/visual.jpg';
import AVTR5 from '../../assets/sertikom.jpg';
import AVTR6 from '../../assets/cloud.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR5,
        name: 'Certificate of Competence With Competency Computer Network Junior Technician',
        link: 'https://drive.google.com/file/d/1izLW0drNq5qDZRqcsWgoq9mTVK3Nb-JL/view?usp=sharing',
    },
    {
        avatar: AVTR1,
        name: 'CorelDRAW and Adobe Photoshop Course',
        link: 'https://albarcollege.com/verifikasi-sertifikat/?certificate_id=ELC-1667612732-7329-33117',
    },
    {
        avatar: AVTR2,
        name: 'IT Support Google Course',
        link: 'https://coursera.org/verify/professional-cert/DAGDAA3YD6L3',
    },
    {
        avatar: AVTR3,
        name: 'Javascript Fundamental Course',
        link: 'dicoding.com/certificates/L4PQ636L2PO1',
    },
    {
        avatar: AVTR4,
        name: 'Data Visualization Fundamental Course',
        link: 'https://www.dicoding.com/certificates/0LZ01WG53P65',
    },

    {
        avatar: AVTR6,
        name: 'Cloud Practitioner Essentials ',
        link: 'https://www.dicoding.com/certificates/81P2849RJPOY',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>My Recent Course</h5>
            <h2>Course</h2>

            <Swiper
                className="container testimonials__container" // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, link }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={avatar} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <div className="testimonial__item-cta">
                                <a href={link} className="btntesti btntesti-primary">
                                    <h5>Display Credentials</h5>
                                </a>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
