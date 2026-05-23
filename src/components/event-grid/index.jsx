import React from 'react';
import { Footer, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import EventArea from './event-area';

const EventGrid = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo />
                <BreadcrumbThree title="Upcoming Innovative Events" />
                <EventArea/>
                <Footer />
            </div>
        </div>
    )
}

export default EventGrid;