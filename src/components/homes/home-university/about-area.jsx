import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    title:[
        {
            active:true,target:'about-edu',title:'About us'
        },
        {
            target:'about-mission',title:'Our Mission'
        },
        {
            target:'about-vision',title:'Our Vision'
        }
    ],
    content:[
        {
            show:true,
            id:'about-edu',
            desc:"At Professional IT Skills College, Shadbagh Lahore, we offer IT courses in Lahore designed to transform your career and boost your confidence in the digital world. Our practical, hands-on training ensures you gain real-world experience with the latest software, tools, and technologies. Whether you’re starting fresh or looking to advance your skills, our career-oriented programs help you succeed not only in Lahore but also across Pakistan and internationally.",
            feature_list: []
        },
        {
            id:'about-mission',
            desc:"Our mission is to provide high-quality, affordable, and immersive computer short courses that equip students with cutting-edge technical skills and critical problem-solving abilities, preparing them to excel in today's dynamic digital landscape. We are committed to:",
            feature_list:[
                'Delivering up-to-date, industry-relevant curriculum.',
                'Fostering a dynamic and inclusive learning environment.',
                'Encouraging creativity, critical thinking, and innovation'
            ]
        },
        {
            id:'about-vision',
            desc:"Our vision is to become the leading center for IT education in Lahore, Pakistan, and beyond, recognized for innovative, career-focused computer training. We aspire to make technology education accessible to everyone, equipping students with the latest digital skills and industry-ready experience to thrive in a rapidly evolving global job market. By fostering a dynamic, inclusive, and future-ready learning environment, we aim to shape a generation of professionals who excel locally, nationally, and globally.",
            feature_list: [
                'Making technology education accessible to everyone.',
                'Preparing students for successful careers by providing industry-relevant knowledge and mentorship.'
            ]
        }
    ]
}

const AboutArea = ({img, img2}) => {
    const imgFile = img && img !== 0 && img !== '0' ? img : 'aboutus.png';
    const img2File = img2 && img2 !== 0 && img2 !== '0' ? img2 : 'aboutus2.png';

    return (
        <div className="edu-about-area about-style-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">About Us</span>
                                <h2 className="title sub-heading">We Equip You with Top Digital Skills.</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                            </div>
                            <ul className="nav nav-tabs" role="tablist"> 
                                {
                                    tabs.title.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            <div className="tab-content"> 
                                {tabs.content.map((item,i) => { const {desc,feature_list,id,show} = item; 
                                    return (
                                        <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                            <p>{desc}</p>
                                            <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                        </div> 
                                    )})
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <Image className="main-img-1" width={390} height={390} style={{width: '390px'}} data-sal-delay="100" data-sal="slide-up" data-sal-duration="800" src={`/assets/images/course/${imgFile}`} alt="About Image" />
                            <Image className="main-img-2" width={230} height={230} style={{width: '230px'}} data-sal-delay="100" data-sal="slide-left" data-sal-duration="800" src={`/assets/images/course/${img2File}`} alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutArea;
