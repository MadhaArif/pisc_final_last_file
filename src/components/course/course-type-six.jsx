import React from 'react';
import Link from 'next/link';

const CourseTypeSix = ({ course, color }) => {
    const [id, title, category, level, course_outline, duration, lesson, img, short_desc, instructor, language, certificate, course_desc, course_desc_2, learn_list, course_desc_3, timing, form_link, detail_img, detail_img_2, sub_title] = course || []
    const imgFile = img && img !== '0' && img !== 0 ? img : 'popup.png';

    return (
        <Link href={{
            pathname: `/course-details`, query: {
                id, title, category, level, course_outline, duration, lesson, img, short_desc, instructor, language, certificate, course_desc, course_desc_2, learn_list, course_desc_3, timing, form_link, detail_img, detail_img_2, sub_title
            }
        }}>
            <div className={`edu-course course-style-3`}>
                <div className="inner">
                    <div className="thumbnail">
                        <a>
                            <img src={`/assets/images/course/${imgFile}`} alt="Course Meta" />
                        </a>

                        <div className="time-top">
                            <span className="duration"><i className="icon-61"></i>{course_outline}</span>
                        </div>
                    </div>

                    <div className="content">
                        <span className="course-level">{level}</span>
                        <h5 className="title">
                            <a style={{ fontSize: '25px' }}>{title}</a>
                        </h5>
                        <p>{short_desc}</p>

                        <div className="read-more-btn">
                            <a className="edu-btn btn-small btn-secondary" style={{ cursor: 'pointer' }}>
                                View Detail
                                <i className="icon-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CourseTypeSix;
