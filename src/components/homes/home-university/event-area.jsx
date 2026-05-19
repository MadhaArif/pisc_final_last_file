import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import EventItem from '../../event-grid/event-item';

const EventArea = ({ event_2 }) => {
    const [filterData, setData] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "events";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift()
                setData(result?.values?.splice(0, 3));
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={`edu-event-area ${event_2 ? 'event-area-2' : 'event-area-1 gap-large-text'}`}>
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Events & News</span>
                    <h2 className="title">Popular Events & News</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="row g-5">
                    {filterData?.length ? filterData?.map((item) => {
                        return (
                            <div key={nanoid()} className="col-lg-4 col-md-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-event event-style-1">
                                    <EventItem event={item} />
                                </div>
                            </div>
                        )
                    }) : <h3 className="view-text">No Upcomming Event</h3>}
                </div>

                <div className="event-view-all-btn" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                    <h3 className="view-text">Our Latest Events <Link href="/event">
                        <a className="btn-transparent">View All <i className="icon-4"></i></a>
                    </Link>
                    </h3>
                </div>

                <ul className="shape-group">
                    <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <img className="rotateit" src="/assets/images/about/shape-13.png" width={186} height={186} alt="Shape" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EventArea;