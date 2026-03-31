import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const EventDetailsArea = ({ event }) => {
    const { push } = useRouter();

    useEffect(() => {
        if (!event?.sm_desc) {
            push('/event')
        }
    }, [event?.sm_desc, push])


    return (
        <section className="event-details-area edu-section-gap">
            <div className="container">
                <div className="event-details">
                    {event?.img && <div className="main-thumbnail">
                        <img src={`/assets/images/event/${event?.detail_img}`} alt="Event" />
                    </div>}
                    <div className="row row--30">
                        <div className="col-lg-12">
                            <div className="details-content">
                                <h3>About The Event</h3>
                                {event?.sm_desc && <p>{event?.sm_desc}</p>}
                                {event?.sm_desc_2 && <p>{event?.sm_desc_2}</p>}

                                <ul>
                                    {event?.bullets && JSON.parse(event?.bullets?.replace(/'/g, '"'))?.length && JSON.parse(event?.bullets.replace(/'/g, '"'))?.map((bullet, index) => <li key={index}>{bullet}</li>)}
                                </ul>

                                {/* it will be static */}
                                <h3>Event Location</h3>
                                <ul className="event-meta">
                                    {event?.location && <li><i className="icon-40"></i>{event?.location}</li>}
                                    {event?.contact && JSON.parse(event?.contact?.replace(/'/g, '"'))?.length && JSON.parse(event?.contact.replace(/'/g, '"'))?.map((contact, index) => <li key={index}><i className="icon-71"></i>{contact}</li>)}
                                </ul>

                                <div className="gmap_canvas">
                                    <iframe id="gmap_canvas" title="Event Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.1850377161236!2d74.33592427507266!3d31.601389143135737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64d5fee12350f50d%3A0x614779dd4bb7947c!2sProfessional%20IT%20Skills%20College!5e0!3m2!1sen!2s!4v1739114330166!5m2!1sen!2s" ></iframe>
                                </div>

                                <div className="read-more-btn">
                                    <a href={event?.form_link || '#'} target='_blank' rel='noreferrer' className="edu-btn" style={{ width: '100%', marginTop: '40px', cursor: 'pointer' }}>Join Now <i className="icon-4"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetailsArea;