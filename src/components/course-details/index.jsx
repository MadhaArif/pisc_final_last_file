import React from 'react';
import { Footer, Header, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseDetailsArea from './course-details-area';

const index = ({ course }) => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar={true} />
                <BreadcrumbThree title={course?.title} subtitle={course?.sub_title} />
                <CourseDetailsArea course={course} />
                <Footer />
            </div>
        </div>
    )
}

export default index;
