import React from 'react';
import Counter from '../../common/counter';

const counter_data = [
    {
        color: 'primary-color',
        delay: '50',
        count: 700,
        text: '+',
        title: 'Student Enrolled',
        decimal: 0
    },
    {
        color: 'secondary-color',
        delay: '100',
        count: 100,
        text: '+',
        title: 'Class Completed',
        decimal: 0
    },
    {
        color: 'extra02-color',
        delay: '150',
        count: 100,
        text: '%',
        title: 'Satisfaction Rate'
    },
    {
        color: 'extra05-color',
        delay: '200',
        count: 20,
        text: '+',
        title: 'Top Instructors'
    }
]

const CounterArea = ({ home_3 = false, home_8 = false }) => {
    return (
        <div style={{ background: 'var(--color-primary)' }} className={`edu-section-gap`}>
            <div className="container">
                <div className="row g-5">
                    <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <h2 className="title sub-heading" style={{ color: 'white' }}>Our Achivements</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                    </div>

                    {counter_data.map((c, i) => (
                        <div key={i} className="col-lg-3 col-sm-6" data-sal-delay={c.delay} data-sal="slide-up" data-sal-duration="800">
                            <div style={{ background: 'white' }} className={`edu-counterup counterup-style-${home_3 ? '1' : '5'} ${!home_3 && c.color}`}>
                                <h2 className={`counter-item count-number ${home_3 && c.color}`}>
                                    <span className="odometer">
                                        <Counter number={parseFloat(c.count)} text={c.text} decimal={c.decimal} />
                                    </span>
                                </h2>
                                <h3 className="title">{c.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CounterArea;