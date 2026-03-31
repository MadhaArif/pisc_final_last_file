import React, { useEffect } from 'react';
import CourseDetailsSidebar from '../common/sidebar/course-details-sidebar';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CourseDetailsArea = ({ course }) => {
  const {
    course_desc,
    course_desc_2,
    learn_list,
    course_desc_3,
    detail_img,
    title,
    form_link,
    detail_img_2
  } = course || {};
  const { push } = useRouter();

  useEffect(() => {
    if (!course?.course_desc) {
      push('/course');
    }
  }, [course?.course_desc, push]);

  const emphasizeInitials = (text) => {
    return text
      ?.split(' ')
      ?.map((word) => {
        const firstChar = word?.charAt(0);
        const rest = word?.slice(1);
        return `<span style="font-size:60px">${firstChar}</span>${rest}`;
      })
      ?.join(' ');
  };

  return (
    <section className='edu-section-gap course-details-area'>
      <div className='container'>
        <div className='row row--30'>
          <div className='col-lg-8'>
            <div className='course-details-content'>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='overview'
                  role='tabpanel'
                  aria-labelledby='overview-tab'
                >
                  <div className='course-overview'>
                    <h3
                      className='heading-title sub-heading'
                      style={{ fontWeight: '500' }}
                      dangerouslySetInnerHTML={{
                        __html: emphasizeInitials(title)
                      }}
                    />
                    {/* Desc */}
                    {course_desc && <p>{course_desc}</p>}

                    <div className='read-more-btn'>
                      <a href={form_link} target='_blank' rel='noreferrer' className='edu-btn'>
                        Enroll Now <i className='icon-4'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mb--60'>
            <CourseDetailsSidebar course={course} />
          </div>

          <div className='col-lg-12'>
            <div className='course-details-content'>
              <div className='tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='overview'
                  role='tabpanel'
                  aria-labelledby='overview-tab'
                >
                  <div className='course-overview'>
                    <h3 className='heading-title' style={{ fontSize: '40px' }}>
                      What{`'`}s included in {title} Course | PISC College
                    </h3>

                    <h3 className='heading-title' style={{ fontSize: '25px' }}>
                      Introduction of the {title}
                    </h3>
                    {/* Desc 2 */}
                    {course_desc_2 && <p className='mb--60'>{course_desc_2}</p>}
                    <h5 className='title' style={{ fontSize: '25px' }}>
                      What You{`'`}ll Learn?
                    </h5>
                    {/* Learn List */}
                    {learn_list && (
                      <ul className='mb--60'>
                        {learn_list &&
                          JSON.parse(learn_list?.replace(/'/g, '"'))?.map(
                            (l, i) => <li key={i}>{l}</li>
                          )}
                      </ul>
                    )}
                    <h3 className='heading-title' style={{ fontSize: '25px' }}>
                      Why Join PISC College
                    </h3>
                    {/* Desc 3 */}
                    {course_desc_3 && <p>{course_desc_3}</p>}

                    <img
                    className='d-none d-md-block'
                      style={{ width: '100%', height: '250px' }}
                      src={`assets/images/course/${detail_img_2}`}
                      alt=''
                    />

                    <div className='text-center mt-5' data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <Link href="/course">
                        <a className="edu-btn">View all courses<i className="icon-4"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsArea;
