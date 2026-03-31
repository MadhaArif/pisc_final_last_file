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
        <section style={{ padding: '10px 0', background: '#0A192F' }}>
            <section className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {timing && <p className='mb-0' style={{ color: '#fff', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '18px', marginRight: '8px' }}>⏰</span> {timing}
                    </p>}
                </div>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    {phone && <p className='mb-0' style={{ color: '#fff', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                        <i className="icon-phone" style={{ color: '#FFB800', marginRight: '8px' }}></i> {phone}
                    </p>}

                    {email && <p className='mb-0 d-none d-lg-flex ms-5' style={{ color: '#fff', fontSize: '14px', fontWeight: '500', alignItems: 'center' }}>
                        <i className="icon-envelope" style={{color: '#FFB800', marginRight: '8px'}}></i> {email}
                    </p>}
                </div>
            </section>
        </section>
    )
}

export default HeaderTopRight;