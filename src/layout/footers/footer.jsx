import { useState, useEffect } from "react";
import Link from "next/link";
import FooterSocial from "./component/footer-social";

const { desc, widgets } = {
    desc: `At Professional IT Skills College, Shadbagh Lahore, we provide practical, career-focused IT courses that prepare you for real-world success in today’s digital era. Our hands-on training, expert instructors, and supportive learning environment help you build in-demand digital and professional skills. Whether you're starting your IT journey or upgrading your expertise, our industry-relevant programs empower you to excel in Lahore, across Pakistan, and internationally. Join us today and take the first confident step toward a successful, future-ready tech career.`,
    widgets: [
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Links',
            footer_links: [
                { link: '/', title: 'Home' },
                { link: '/about', title: 'About' },
                { link: '/course', title: 'Courses' },
                { link: '/event', title: "Events" },
                { link: '/contact-us', title: 'Contact' }
            ]
        }
    ]
}

const Footer = ({ style_2, dark_bg, home_4 }) => {
    const [contact, setContact] = useState({ address: null, phone: null, phone_2: null, email: null });
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "contact-info";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result.values.shift();
                const [address, phone, phone_2, email] = result?.values[0]
                setContact({ address, phone, phone_2, email });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const { address, phone, phone_2, email } = contact

    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            {!dark_bg && <img style={{ width: '100px' }} className="logo-light" src='/assets/images/logo/logo-dark.svg' width={100} height={100} alt="Corporate Logo" />}
                                        </a>
                                    </Link>

                                    <Link href={'/'}>
                                        <a>
                                            {dark_bg && <img style={{ width: '100px' }} className="logo-light" src={home_4 ? '/assets/images/logo/logo-white.svg' : '/assets/images/logo/logo-white.svg'} width={100} height={100} alt="Corporate Logo" />}
                                        </a>
                                    </Link>
                                </div>

                                <p className="description" style={{ color: 'white' }}>{desc}</p>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title" style={{ fontSize: '25px' }}>{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i} style={{ color: 'white' }}><Link href={`${l.link}`}><a>{l.title}</a></Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title" style={{ fontSize: '25px', color: 'white' }}>Contact Us</h4>
                                <div className="inner">
                                    <div className="input-group footer-subscription-form">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                {address && <li style={{ color: 'white' }}>
                                                    <i className="ri-home-university-fill" style={{ color: 'var(--color-secondary)' }}></i>&nbsp;&nbsp;
                                                    <strong style={{ marginRight: '10px' }}>Address:</strong>{address}</li>}
                                                {phone && <li style={{ color: 'white' }}>
                                                    <i className="icon-phone" style={{ color: 'var(--color-secondary)' }}></i>&nbsp;&nbsp;
                                                    <strong style={{ marginRight: '10px' }}>Mobile:</strong>{phone}</li>}
                                                {phone_2 && <li style={{ color: 'white' }}>
                                                    <i className="icon-phone" style={{ color: 'var(--color-secondary)' }}></i>&nbsp;&nbsp;
                                                    <strong style={{ marginRight: '10px' }}>Phone:</strong>{phone_2}</li>}
                                                {email && <li style={{ color: 'white' }}><i className="icon-envelope" style={{ color: 'var(--color-secondary)' }}></i>&nbsp;&nbsp;
                                                    <strong style={{ marginRight: '10px' }}>Email:</strong>{email}</li>}
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area" style={{ background: 'var(--color-primary)', borderTop: '1px solid gray' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p style={{ color: 'white' }}>Copyright {new Date().getFullYear()} PISC Designed By <a href="https://www.cadresol.com" rel="noreferrer" target="_blank" >Cadresol</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer;