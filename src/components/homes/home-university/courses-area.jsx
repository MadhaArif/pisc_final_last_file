import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CourseTypeSix from '../../course/course-type-six';

const CoursesArea = () => {
    const [courses, setCourses] = useState([]);
    const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
    const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
    const RANGE = "courses";

    // get data from google excel sheet
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                result?.values?.shift()
                setCourses(result?.values?.splice(0, 3));
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="edu-course-area course-area-3 section-gap-large ">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Popular Courses</span>
                    <h2 className="title sub-heading">Our Top Courses</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="isotope-wrapper">
                    <div className="row g-5" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        {courses.map((course) => {
                            return (
                                <div key={course[0]} className="col-md-6 col-lg-4">
                                    <CourseTypeSix course={course} />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='text-center mt-5' data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <Link href="/course">
                        <a className="edu-btn btn-secondary">View all<i className="icon-4"></i>
                        </a>
                    </Link>
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1">
                    <img className="d-block-shape-light" src="/assets/images/others/map-shape-3.png" width={698} height={659} alt="Shape" />
                    <img className="d-none-shape-dark" src="/assets/images/others/3-Home-1.png" width={522} height={593} alt="Shape" />
                </li>
                <li className="shape-2">
                    <img className="d-block-shape-light" src="/assets/images/others/map-shape-3.png" width={698} height={659} alt="Shape" />
                    <img className="d-none-shape-dark" src="/assets/images/others/dark-map-shape-3.png" width={522} height={593} alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default CoursesArea;