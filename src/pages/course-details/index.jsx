import React from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import CourseDetailsMain from '../../components/course-details';

export async function getServerSideProps({ query }) {
    const id = query?.id ? String(query.id).trim() : null;
    if (!id) return { props: { initialId: null, initialCourse: null } };

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
            id: id ?? null,
            title: title ?? null,
            category: category ?? null,
            level: level ?? null,
            course_outline: course_outline ?? null,
            duration: duration ?? null,
            lesson: lesson ?? null,
            img: img ?? null,
            short_desc: short_desc ?? null,
            instructor: instructor ?? null,
            language: language ?? null,
            certificate: certificate ?? null,
            course_desc: course_desc ?? null,
            course_desc_2: course_desc_2 ?? null,
            learn_list: learn_list ?? null,
            course_desc_3: course_desc_3 ?? null,
            timing: timing ?? null,
            form_link: form_link ?? null,
            detail_img: detail_img ?? null,
            detail_img_2: detail_img_2 ?? null,
            sub_title: sub_title ?? null
        };
    };

    try {
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        const result = await response.json();
        const rows = (result?.values || []).slice(1);
        const match = rows.find((r) => String(r?.[0] ?? '').trim() === id);
        return { props: { initialId: id, initialCourse: match ? parseCourseRow(match) : null } };
    } catch {
        return { props: { initialId: id, initialCourse: null } };
    }
}

const CourseDetails = ({ initialId, initialCourse }) => {
    const router = useRouter();
    const hasFullCourseData = Boolean(router.query?.course_desc);
    const course = hasFullCourseData ? router.query : (initialCourse || {});
    const courseId = initialId || course?.id;

    return (
        <Wrapper>
            <SEO
                pageTitle={course?.title ? course.title : 'Course Details'}
                pageUrl={courseId ? `/course-details?id=${courseId}` : '/course-details'}
            />
            <CourseDetailsMain course={course || {}} />
        </Wrapper>
    )
}

export default CourseDetails;
