import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  const slides = useMemo(
    () => [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=60&auto=format&fit=crop",
        subtitle: "Welcome to PISC",
        title: "Master the Future with IT Excellence",
        description:
          "Join Pakistan's leading IT training institute. Expert-led courses in Web, AI & Design with 10,000+ successful graduates.",
        buttonText: "Explore Programs",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=60&auto=format&fit=crop",
        subtitle: "Learn from Industry Experts",
        title: "Practical Skills for Real Success",
        description:
          "Hands-on training with modern technologies. Get certified, build projects, and launch your tech career with confidence.",
        buttonText: "Start Learning",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&q=60&auto=format&fit=crop",
        subtitle: "Build Your Dream Career",
        title: "Industry-Ready Professional Programs",
        description:
          "Comprehensive courses in coding, design & digital marketing. Flexible schedules, job support, and recognized certifications.",
        buttonText: "View Courses",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    if (!slides.length) return;
    const intervalId = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slides.length]);

  const goPrev = () => setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);

  return (
    <div
      className="hero-banner hero-style-modern"
      style={{ position: "relative", minHeight: "75vh", overflow: "hidden", marginTop: "-1px", backgroundColor: "#0A192F" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style jsx global>{`
        .hero-banner .slide {
          position: relative;
          height: 75vh;
          width: 100%;
        }
        .hero-banner .image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hero-banner .slide.active .image-container {
          animation: kenburns 20s infinite alternate;
        }
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .hero-banner .slide-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          background: linear-gradient(135deg, rgba(0, 33, 71, 0.7) 0%, rgba(0, 33, 71, 0.45) 100%);
        }
        .hero-banner .slide-content .container {
          max-width: 100%;
          padding-left: 0;
          padding-right: 0;
        }
        .hero-banner .slide-content .row {
          margin-left: 0;
          margin-right: 0;
        }
        .hero-banner .slide-content [class*="col-"] {
          display: flex;
          justify-content: center;
        }
        .hero-banner .content-box {
          max-width: 850px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: auto;
          margin-right: auto;
          padding: 30px 50px;
          background: rgba(0, 33, 71, 0.88);
          backdrop-filter: blur(30px);
          border-radius: 28px;
          border: 2px solid rgba(248, 184, 31, 0.45);
          box-shadow: 0 30px 80px rgba(0, 33, 71, 0.6), 
                      0 0 50px rgba(248, 184, 31, 0.25),
                      inset 0 0 30px rgba(255, 255, 255, 0.05);
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: gentleFloat 6s ease-in-out infinite;
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-banner .content-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #f8b81f 0%, #002147 50%, #f8b81f 100%);
          box-shadow: 0 2px 10px rgba(248, 184, 31, 0.5);
        }
        .hero-banner .subtitle {
          color: var(--color-secondary);
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 12px;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 4px;
          position: relative;
          padding-bottom: 8px;
        }
        .hero-banner .subtitle::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(248, 184, 31, 0.4);
        }
        .hero-banner .title {
          font-size: 42px;
          line-height: 1.15;
          margin-bottom: 15px;
          color: var(--color-white);
          font-weight: 800;
          letter-spacing: -0.8px;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);
        }
        .hero-banner .description {
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 25px;
          color: rgba(255, 255, 255, 0.95);
          max-width: 720px;
          font-weight: 400;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
        .hero-banner .cta-button {
          padding: 16px 45px;
          font-size: 16px;
          font-weight: 700;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 13px;
          background: linear-gradient(135deg, var(--color-secondary) 0%, #f8b71f 100%);
          color: var(--color-primary);
          text-decoration: none;
          box-shadow: 0 12px 35px rgba(248, 184, 31, 0.5), 
                      0 0 25px rgba(248, 184, 31, 0.35);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }
        .hero-banner .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%);
          transition: left 0.65s ease;
        }
        .hero-banner .cta-button:hover::before {
          left: 100%;
        }
        .hero-banner .cta-button:hover {
          background: linear-gradient(135deg, var(--color-white) 0%, #f0f4f5 100%);
          transform: translateY(-6px) scale(1.08);
          box-shadow: 0 16px 45px rgba(255, 255, 255, 0.6), 
                      0 0 35px rgba(248, 184, 31, 0.5);
          border-color: var(--color-white);
          color: var(--color-primary);
        }
        .hero-banner .slide-prev, .hero-banner .slide-next {
          width: 65px;
          height: 65px;
          background: rgba(255, 255, 255, 0.15) !important;
          border: 2px solid rgba(255, 255, 255, 0.5) !important;
          backdrop-filter: blur(20px);
          border-radius: 50%;
          color: #fff;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          cursor: pointer;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
                      inset 0 2px 0 rgba(255, 255, 255, 0.2);
        }
        .hero-banner .slide-prev:hover, .hero-banner .slide-next:hover {
          background: linear-gradient(135deg, #f8b81f 0%, #f8b71f 100%) !important;
          border-color: #f8b81f !important;
          transform: translateY(-50%) scale(1.2) rotate(0deg);
          box-shadow: 0 15px 40px rgba(248, 184, 31, 0.6),
                      0 0 30px rgba(248, 184, 31, 0.4),
                      inset 0 2px 0 rgba(255, 255, 255, 0.3);
        }
        .hero-banner .slide-prev { left: 45px; }
        .hero-banner .slide-next { right: 45px; }
        
        /* Decorative elements */
        .hero-banner::before {
          content: '';
          position: absolute;
          top: -8%;
          right: -4%;
          width: 550px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(248, 184, 31, 0.12) 0%, rgba(248, 184, 31, 0.04) 60%, transparent 70%);
          z-index: 5;
          pointer-events: none;
        }
        .hero-banner::after {
          content: '';
          position: absolute;
          bottom: -12%;
          left: -8%;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 33, 71, 0.1) 0%, rgba(0, 51, 102, 0.04) 60%, transparent 70%);
          z-index: 5;
          pointer-events: none;
        }
        
        @media only screen and (max-width: 1199px) {
          .hero-banner, .hero-banner .slide { height: 75vh; min-height: 75vh; }
          .hero-banner .title { font-size: 36px; }
          .hero-banner .content-box { padding: 30px 40px; max-width: 750px; min-height: 380px; }
        }
        @media only screen and (max-width: 991px) {
          .hero-banner, .hero-banner .slide { height: 70vh; min-height: 70vh; }
          .hero-banner .title { font-size: 32px; }
          .hero-banner .description { font-size: 15px; margin-bottom: 22px; }
          .hero-banner .content-box { padding: 25px 35px; max-width: 650px; min-height: 350px; }
        }
        @media only screen and (max-width: 767px) {
          .hero-banner, .hero-banner .slide { height: 65vh; min-height: 65vh; }
          .hero-banner .title { font-size: 24px; line-height: 1.2; margin-bottom: 12px; }
          .hero-banner .description { font-size: 14px; line-height: 1.5; margin-bottom: 18px; }
          .hero-banner .slide-prev, .hero-banner .slide-next { display: none !important; }
          .hero-banner .content-box { padding: 25px 20px; border-radius: 20px; max-width: 92%; min-height: 300px; }
          .hero-banner .subtitle { font-size: 11px; letter-spacing: 2px; margin-bottom: 10px; }
          .hero-banner .cta-button { padding: 10px 25px; font-size: 14px; }
        }
      `}</style>

      {/* Custom Navigation Buttons */}
      <button className="slide-prev" aria-label="Previous Slide" onClick={goPrev} type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="slide-next" aria-label="Next Slide" onClick={goNext} type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`slide ${idx === activeIndex ? "active" : ""}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: idx === activeIndex ? 1 : 0,
            transition: "opacity 500ms ease",
          }}
        >
          <div className="image-container">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={slide.id === 1}
              sizes="100vw"
              quality={60}
              style={{ filter: "brightness(0.65) contrast(1.05)" }}
            />
          </div>
          <div className="slide-content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="content-box animated fadeInUp">
                    <span className="subtitle">{slide.subtitle}</span>
                    <h1 className="title">{slide.title}</h1>
                    <p className="description">{slide.description}</p>
                    <Link href="/course">
                      <a className="cta-button">
                        {slide.buttonText} <i className="icon-4"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
