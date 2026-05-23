import React from 'react';
import { Footer, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import ContactMap from './contact-map';
import ContactUsArea from './contact-us-area';

const ContactUs = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo />
                <BreadcrumbThree title="Contact Us" />
                <ContactUsArea/>
                <ContactMap/>
                <Footer />
            </div>
        </div>
    )
}

export default ContactUs;