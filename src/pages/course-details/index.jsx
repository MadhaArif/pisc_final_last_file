import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';

const CourseDetails = () => {
    const router = useRouter();
    const [course, setCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!router.isReady) return;

        const id = router.query?.id ? String(router.query.id) : null;
        const hasFullCourseData = Boolean(router.query?.course_desc);

        if (hasFullCourseData) {
            setCourse(router.query);
            setIsLoading(false);
            return;
        }

        if (!id) {
            setCourse(router.query);
            setIsLoading(false);
            return;
        }

        const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
        const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
        const RANGE = "courses";

        const parseCourseRow = (row) => {
            const [
                id,
                title,
                category,
                level,
                course_outline,
                duration,
                lesson,
                img,
                short_desc,
                instructor,
                language,
                certificate,
                course_desc,
                course_desc_2,
                learn_list,
                course_desc_3,
                timing,
                form_link,
                detail_img,
                detail_img_2,
                sub_title
            ] = row || [];

            return {
                id,
                title,
                category,
                level,
                course_outline,
                duration,
                lesson,
                img,
                short_desc,
                instructor,
                language,
                certificate,
                course_desc,
                course_desc_2,
                learn_list,
                course_desc_3,
                timing,
                form_link,
                detail_img,
                detail_img_2,
                sub_title
            };
        };

        const fetchCourse = async () => {
            try {
                const response = await fetch(
                    `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
                );
                const result = await response.json();
                const rows = (result?.values || []).slice(1);
                const match = rows.find((r) => String(r?.[0] ?? '').trim() === id);
                setCourse(match ? parseCourseRow(match) : null);
            } catch {
                setCourse(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourse();
    }, [router.isReady, router.query]);

    return (
        <Wrapper>
            <SEO
                pageTitle={course?.title ? course.title : 'Course Details'}
                pageUrl={course?.id ? `/course-details?id=${course.id}` : '/course-details'}
            />
            {isLoading ? (
                <div style={{ padding: '80px 0', textAlign: 'center' }}>
                    <img
                        style={{ width: '200px', margin: '0 auto' }}
                        src="/assets/images/loader.gif"
                        alt="Loading"
                    />
                </div>
            ) : (
                <CourseDetailsMain course={course || {}} />
            )}
        </Wrapper>
    )
}

export default CourseDetails;
