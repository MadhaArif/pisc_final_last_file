import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import ContactUsForm from '../forms/contact-us-form';
import FooterSocial from '../../layout/footers/component/footer-social';

const ContactUsArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
     const [contact, setContact] = useState({ address: null, phone: null, phone_2: null, email: null });
        const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
        const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
        const RANGE = "contact-info";

        const correctedLocationName = "Professional IT Skills College (PISC)";
        const correctedAddress = "Sheikh Jamal Ghulzar road,Near to the Jawa Barost, toky wala chowk, Shadbagh Rd, Shad Bagh, Lahore, 54000, Pakistan";
        const correctedRating = "5.0(288)";
    
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
    
        const {address, phone, phone_2, email} = contact

    return (
        <section className="contact-us-area" style={{background: 'var(--color-smoke)'}}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-us-info">
                            <h3 className="heading-title" style={{fontSize: '35px'}}>Need guidance on courses, admissions & online classes? Contact us now!</h3>
                            <ul className="address-list">
                                <li>
                                    <h5 className="title" style={{fontSize: '25px'}}>Address</h5>
                                    <p style={{ marginBottom: 0 }}>{correctedLocationName}</p>
                                    <p style={{ marginBottom: 0 }}>{correctedAddress}</p>
                                    <p style={{ marginBottom: 0 }}>{correctedRating}</p>
                                </li>
                                <li>
                                    <h5 className="title" style={{ fontSize: '25px' }}>Email</h5>
                                    <p><a href="">{email}</a></p>
                                </li>
                                <li>
                                    <h5 className="title" style={{ fontSize: '25px' }}>Phone</h5>
                                    <p style={{marginBottom: '5px'}}>{phone}</p>
                                    <p>{phone_2}</p>
                                </li>
                            </ul>
                            <ul className="social-share icon-transparent">
                                <FooterSocial black={true} />
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form form-style-2">
                            <div className="section-title">
                                <h4 className="title" style={{ fontSize: '25px' }}>Get In Touch</h4>
                                <p>Fill out this form for booking a consultant advising session.</p>
                            </div>
                            {/* form start */}
                            <ContactUsForm />
                            {/* form end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsArea;
