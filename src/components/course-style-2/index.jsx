import React from 'react';
import { Footer, HeaderTwo } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseTwoArea from './course-2-area';
import CounterArea from '../homes/home-university/counter-area';
import TestimonialArea from '../homes/home-university/testimonial-area';

const CourseStyleTwo = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderTwo no_top_bar />
                <BreadcrumbThree title="Digital Skills Program" />
                <CourseTwoArea/>
                <CounterArea />
                <TestimonialArea />
                <Footer />
            </div>
        </div>
    )
}

export default CourseStyleTwo;