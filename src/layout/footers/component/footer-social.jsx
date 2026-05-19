import React, { useState, useEffect } from 'react';

const FooterSocial = ({ black = false }) => {
    const [social, setSocial] = useState({
        facebook: null,
        twitter: null,
        linked_in: null,
        youtube: null,
        instagram: null,
    });
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "social-icon";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values.shift();
                const [facebook, twitter, linked_in, youtube, instagram, tiktok] = result?.values[0];
                setSocial({
                    facebook, twitter, instagram, linked_in, youtube, tiktok
                });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const { facebook, youtube, instagram, linked_in, twitter, tiktok } = social

    const social_share = [
        { link: facebook, target: '_blank', icon: 'icon-facebook', color: 'color-fb', name: 'Facebook' },
        { link: twitter, target: '_blank', icon: 'icon-twitter', color: 'color-twitter', name: 'Twitter' },
        { link: linked_in, target: '_blank', icon: 'icon-linkedin2', color: 'color-linkd', name: 'LinkedIn' },
        { link: youtube, target: '_blank', icon: 'icon-youtube', color: 'color-yt', name: 'YouTube' },
        { link: instagram, target: '_blank', icon: 'icon-instagram', color: 'color-ig', name: 'Instagram' },
        { link: tiktok, target: '_blank', icon: 'icon-tiktok', color: 'color-ig', name: 'TikTok' },
    ]

    return (
        <>
            {social_share.map((social, i) => (
                social.link && (
                    <li key={i}>
                        <a
                            href={social.link}
                            target={social.target ? social.target : ''}
                            className={social.color}
                            aria-label={social.name}
                        >
                            {/* Handle TikTok separately */}
                            {social.icon === 'icon-tiktok' ? (
                                black ? (
                                    <i className="icon-tiktok-black"></i>
                                ) : (
                                    <i className="icon-tiktok" style={{ color: 'white' }}></i>
                                )
                            ) : (
                                black ? (
                                    <i className={social.icon}></i>
                                ) : (
                                    <i className={social.icon} style={{ color: 'white' }}></i>
                                )
                            )}
                        </a>
                    </li>
                )
            ))}

        </>
    )
}

export default FooterSocial;