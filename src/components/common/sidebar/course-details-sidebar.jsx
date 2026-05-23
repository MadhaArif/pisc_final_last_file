import React from 'react';
import { Books } from '../../../svg';
import { colorMix } from 'tsparticles-engine';

const CourseDetailsSidebar = ({ course }) => {
    const { img, certificate, instructor, duration, language, timing, form_link, lesson } = course || {};

    return (
        <>
            <div className={`course-sidebar-3`} >
                <div className="edu-course-widget widget-course-summery" style={{ background: 'var(--color-primary)' }}>
                    <div className="inner">
                        <div className="content">
                            <h4 className="widget-title text-white">Course Includes:</h4>
                            <ul className="course-item">
                                {instructor && <li className='text-white'>
                                    <span className="label"><i className="icon-62"></i>Instrutor:</span>
                                    <span className="value">{instructor}</span>
                                </li>}

                                {duration && <li className='text-white'>
                                    <span className="label"><i className="icon-61"></i>Duration:</span>
                                    <span className="value">{duration}</span>
                                </li>}

                                {lesson && <li className='text-white'>
                                    <span className="label">
                                        <Books />
                                        Lectures:</span>
                                    <span className="value">{lesson}</span>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseDetailsSidebar;