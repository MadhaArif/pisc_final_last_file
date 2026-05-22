import React, { useState, useEffect } from 'react';

const HeaderTopRight = () => {
    const [contact, setContact] = useState({ address: null, phone: null, phone_2: null, email: null, timing: null });
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
                const [address, phone, phone_2, email, timing] = result?.values[0]
                setContact({ address, phone, phone_2, email, timing });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const { address, phone, phone_2, email, timing } = contact

    return (
        <section style={{ padding: '8px 0', background: '#002147', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Left: Timing */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                         {timing && (
                             <div style={{ color: '#fff', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                 <i className="icon-71" style={{ color: '#F8B81F', fontSize: '16px', marginRight: '8px' }}></i>
                                 {timing}
                             </div>
                         )}
                     </div>

                     {/* Right: Phone & Email */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                        {phone && (
                            <a 
                                id="call-button"
                                href={`tel:${phone}`} 
                                onClick={() => {
                                    if (typeof window !== 'undefined' && window.gtag) {
                                        window.gtag('event', 'call_click', {
                                            'event_category': 'Contact',
                                            'event_label': 'Header Phone'
                                        });
                                    }
                                }}
                                style={{ color: '#fff', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                            >
                                <i className="icon-phone" style={{ color: '#F8B81F', fontSize: '16px', marginRight: '8px' }}></i>
                                {phone}
                            </a>
                        )}

                        {email && (
                            <a href={`mailto:${email}`} className="d-none d-lg-flex" style={{ color: '#fff', fontSize: '13px', fontWeight: '600', alignItems: 'center', textDecoration: 'none' }}>
                                <i className="icon-envelope" style={{ color: '#F8B81F', fontSize: '16px', marginRight: '8px' }}></i>
                                {email}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTopRight;