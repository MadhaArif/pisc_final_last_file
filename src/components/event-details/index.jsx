import React from 'react';
import { Footer, Header, HeaderTwo } from '../../layout';
import BreadcrumbFour from '../breadcrumb/breadcrumb-4';
import EventDetailsArea from './event-details-area';

const EventDetails = ({event}) => {

    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar={true} />
                <BreadcrumbFour location={event?.location} title={event?.title} date={event?.date} time={event?.time} category={event?.category} />
                <EventDetailsArea event={event}/>
                <Footer />
            </div>
        </div>
    )
}

export default EventDetails;