import React from 'react';
import { BookLibrary, ScholarshipFacility, SkilledLecturers } from '../../../svg';

const categories = [
    {
        icon:<ScholarshipFacility/>,
        title:'Industry-Relevant Courses',
        text: 'Our courses follow industry trends, ensuring you learn in-demand skills.',
        color:'color-primary-style'
    },
    {
        icon:<SkilledLecturers/>,
        title:'Affordable & Flexible Programs',
        text:'We offer budget-friendly courses with flexible timings to fit your schedule.',
        color:'color-secondary-style'
    },
    {
        icon:<BookLibrary/>,
        title:'Career-Oriented Training Programs',
        text:'Our program is industry-oriented and updated to meet market demands.',
        color:'color-extra02-style'
    }
]

const CategoryArea = () => {
    return (
        <div className="features-area-3" style={{ marginTop: "-90px", position: "relative", zIndex: 10 }}>
            <div className="container">
                <div className="row g-5">
                    {categories.map((c,i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="features-box" style={{
                                backgroundColor: "#fff",
                                padding: "45px 35px",
                                borderRadius: "12px",
                                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                                display: "flex",
                                gap: "20px",
                                height: "100%",
                                transition: "all 0.3s ease",
                                border: "none"
                            }}>
                                <div className="icon" style={{
                                    fontSize: "40px",
                                    color: i === 0 ? "#1ab69d" : i === 1 ? "#ee4a62" : "#8e44ad",
                                    flexShrink: 0
                                }}>
                                    {c.icon}
                                </div>
                                <div className="content">
                                    <h4 className="title" style={{ fontSize: "19px", fontWeight: "700", marginBottom: "12px", color: "#1A2E39" }}>{c.title}</h4>
                                    <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", margin: 0 }}>{c.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;