import React from 'react';
import { Footer, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import AdBanner from '../homes/home-university/ad-banner';
import GalleryArea from './gallery-area';

const GalleryGrid = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo />
                <BreadcrumbThree title="Gallery" />
                <GalleryArea/>
                <Footer />
            </div>
        </div>
    )
}

export default GalleryGrid;