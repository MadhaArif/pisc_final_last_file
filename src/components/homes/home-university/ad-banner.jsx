import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const AdBanner = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image" style={{ background: 'var(--color-primary)'}}>
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title sub-heading" style={{ color: '#fff', marginBottom: 0 }}><span style={{ color: 'var(--color-secondary)' }}></span>PISC Learn Digital Skills</h2>
                                <h2 className="title" style={{ color: '#fff', fontSize: '22px', marginBottom: 0 }}> Offer Valuable Digital Skills Program With <span style={{ color: 'var(--color-secondary)' }}>Certificate in Pakistan</span></h2>
                                <p style={{ color: 'white', margin: '10px 0 0 0' }}>
                                    Enhance your career with high-quality, industry-relevant programs delivered by experts.
                                </p>
                                <p style={{color: 'white', fontWeight: 800, marginTop: '0' }}>
                                    Grow your skills confidently to achieve professional excellence.
                                </p>
                                <Link href="/course">
                                    <a className="edu-btn btn-secondary1">Get started now <i className="icon-4"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdBanner;