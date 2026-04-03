import { useEffect, useState } from "react";
import Link from "next/link";

export default function TestimonialArea() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [testimonial, setTestimonial] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "testimonial";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                setTestimonial(result?.values);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const update = () => {
            const w = window.innerWidth;
            setSlidesPerView(w >= 577 ? 2 : 1);
        };
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
    }, []);

    const items = testimonial.length ? testimonial.slice(1) : [];
    const maxIndex = Math.max(0, items.length - slidesPerView);

    useEffect(() => {
        if (activeIndex > maxIndex) setActiveIndex(0);
    }, [activeIndex, maxIndex]);

    useEffect(() => {
        if (items.length <= slidesPerView) return;
        const intervalId = window.setInterval(() => {
            setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
        }, 3500);
        return () => window.clearInterval(intervalId);
    }, [items.length, slidesPerView, maxIndex]);

    return (
        <div style={{ background: 'var(--color-smoke)'}} className="testimonial-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-lg-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" style={{marginBottom: '0'}} data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Testimonials</span>
                                <h2 className="title sub-heading">What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Discover how PISC has helped transform careers through practical, industry-relevant training. Our students share their experiences of gaining valuable digital skills.</p>
                                <Link href="/gallery">
                                    <a className="edu-btn btn-primary">Successful Stories <i className="icon-4"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="home-one-testimonial-activator" style={{ overflow: "hidden", marginLeft: "-10px", marginRight: "-10px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    transform: `translate3d(-${(100 / slidesPerView) * activeIndex}%, 0, 0)`,
                                    transition: "transform 500ms ease",
                                    willChange: "transform",
                                }}
                            >
                                {items.map((item, i) => {
                                    const [id, img, desc, ratings, name, title] = item;
                                    const imgsrc = `/assets/images/course/${img}`;
                                    const isActiveView = i >= activeIndex && i < activeIndex + slidesPerView;

                                    return (
                                        <div key={i} style={{ 
                                            flex: `0 0 ${100 / slidesPerView}%`, 
                                            paddingLeft: "10px", 
                                            paddingRight: "10px",
                                            opacity: isActiveView ? 1 : 0,
                                            pointerEvents: isActiveView ? "auto" : "none",
                                            transition: "opacity 400ms ease"
                                        }}>
                                            <div className="testimonial-grid">
                                                <div className="thumbnail">
                                                    {!!img && img !== "0" && <img style={{width: '95px',}} src={imgsrc} alt="Testimonial" />}
                                                    <span className="qoute-icon"><i className="icon-26"></i></span>
                                                </div>
                                                <div className="content">
                                                    <p>{desc}</p>
                                                    <div className="rating-icon">
                                                        {Array.from({ length: ratings }, (_, index) => (
                                                            <i key={index} className="icon-23" />
                                                        ))}
                                                    </div>
                                                    <h5 className="title">{name}</h5>
                                                    <span className="subtitle">{title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
