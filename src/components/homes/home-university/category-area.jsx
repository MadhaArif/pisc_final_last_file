import React, { useState } from 'react';
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
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="features-area-3" style={{ marginTop: "-90px", position: "relative", zIndex: 10 }}>
            <div className="container">
                <div className="row g-5">
                    {categories.map((c,i) => {
                        const isHovered = hoverIndex === i;
                        const themeColor = i === 0 ? "#1ab69d" : i === 1 ? "#ee4a62" : "#8e44ad";
                        const lightThemeColor = i === 0 ? "#eaf7f5" : i === 1 ? "#fdedef" : "#f4ecf7";
                        
                        return (
                            <div key={i} className="col-lg-4 col-md-6">
                                <div 
                                    className="features-box" 
                                    onMouseEnter={() => setHoverIndex(i)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    style={{
                                        backgroundColor: isHovered ? lightThemeColor : "#fff",
                                        padding: "45px 35px",
                                        borderRadius: "12px",
                                        boxShadow: isHovered ? `0 20px 40px ${themeColor}20` : "0 15px 40px rgba(0,0,0,0.08)",
                                        display: "flex",
                                        gap: "20px",
                                        height: "100%",
                                        transition: "all 0.4s ease",
                                        border: "none",
                                        transform: isHovered ? "translateY(-10px)" : "translateY(0)"
                                    }}>
                                    <div className="icon" style={{
                                        fontSize: "40px",
                                        color: themeColor,
                                        flexShrink: 0,
                                        transition: "all 0.4s ease",
                                        transform: isHovered ? "scale(1.1)" : "scale(1)"
                                    }}>
                                        {c.icon}
                                    </div>
                                    <div className="content">
                                        <h2 className="title" style={{ 
                                            fontSize: "19px", 
                                            fontWeight: "700", 
                                            marginBottom: "12px", 
                                            color: isHovered ? themeColor : "#1A2E39",
                                            transition: "color 0.4s ease" 
                                        }}>
                                            {c.title}
                                        </h2>
                                        <p style={{ 
                                            fontSize: "15px", 
                                            color: "#666", 
                                            lineHeight: "1.6", 
                                            margin: 0,
                                            transition: "color 0.4s ease" 
                                        }}>
                                            {c.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryArea;