import React from 'react';
import { Footer, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import FaqArea from './query-area';


const Queries = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar />
                <BreadcrumbThree title="New Queries From Students" />
                <FaqArea/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default Queries;