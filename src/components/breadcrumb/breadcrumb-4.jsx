const BreadcrumbFour = ({ title, date, time, category, location }) => {
    return (
        <div className="breadcrumb-video-wrapper position-relative">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
            >
                <source src="/assets/images/particle.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="edu-breadcrumb-area position-relative text-white py-6">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            {/* Category */}
                            {category && <span className="pre-title d-block mb-2">{category}</span>}

                            {/* Title */}
                            {title && (
                                <h1
                                    className="display-5 fw-bold text-white mb-4 sub-heading"
                                >
                                    {title}
                                </h1>
                            )}

                            {/* Meta Info */}
                            <ul className="course-meta d-flex justify-content-center gap-4 flex-wrap">
                                {date && (
                                    <li className="d-flex align-items-center gap-2">
                                        <i style={{ color: 'var(--color-secondary)' }} className="icon-27"></i>
                                        <span style={{color: "white"}}>{date}</span>
                                    </li>
                                )}
                                {time && (
                                    <li className="d-flex align-items-center gap-2">
                                        <i style={{ color: 'var(--color-secondary)'}} className="icon-33"></i>
                                        <span style={{ color: "white" }}>{time}</span>
                                    </li>
                                )}
                                {location && (
                                    <li className="d-flex align-items-center gap-2">
                                        <i style={{ color: 'var(--color-secondary)' }} className="icon-40"></i>
                                        <span style={{ color: "white" }}>{location}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BreadcrumbFour;
