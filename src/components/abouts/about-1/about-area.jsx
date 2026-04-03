import { useEffect, useState } from "react";

const AboutArea = ({ imgage }) => {
  const [data, setData] = useState([]);
  const [ceoSlideIndex, setCeoSlideIndex] = useState(0);
  const [isCeoPaused, setIsCeoPaused] = useState(false);
  const API_KEY = "AIzaSyCm3_Cs0m__byx-jAF2fVna5wU7oHh8p7o";
  const SPREADSHEET_ID = "1ofS_nOKGHmZbt3-VbMiofhcB5xbdY1EvfBdqUOXqFR4";
  const RANGE = "ceo";

  // get data from google excel sheet
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`,
        );
        const result = await response.json();
        result?.values.shift() && setData(result?.values);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const aboutImgFile = imgage && imgage !== "0" && imgage !== 0 ? imgage : null;
  const aboutImgSrc = aboutImgFile ? `/assets/images/course/${aboutImgFile}` : null;

  const ceoImgFile = data.length && data[0][0] && data[0][0] !== "0" && data[0][0] !== 0 ? data[0][0] : null;
  const img = ceoImgFile ? `/assets/images/course/${ceoImgFile}` : "/assets/images/ceo.jpg";
  const detail = data.length
    ? data[0][1]
    : "CEO details not available at the moment.";

  const detailParagraphs = (() => {
    const byNewLine = String(detail || "")
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);

    if (byNewLine.length > 1) return byNewLine;

    const sentences = String(detail || "").match(/[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g);
    if (!sentences || sentences.length <= 2) return byNewLine.length ? byNewLine : [String(detail || "")];

    const grouped = [];
    for (let i = 0; i < sentences.length; i += 2) {
      grouped.push(`${sentences[i] || ""}${sentences[i + 1] || ""}`.trim());
    }
    return grouped.filter(Boolean);
  })();

  const ceoSlides = [
    img,
    "/assets/images/course/ceo-slide-1.jpeg",
    "/assets/images/course/ceo-slide-2.png",
  ].filter(Boolean);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isCeoPaused) return;
    if (ceoSlides.length <= 1) return;
    const intervalId = window.setInterval(() => {
      setCeoSlideIndex((i) => (i + 1) % ceoSlides.length);
    }, 3200);
    return () => window.clearInterval(intervalId);
  }, [isCeoPaused, ceoSlides.length]);

  useEffect(() => {
    if (ceoSlideIndex >= ceoSlides.length) setCeoSlideIndex(0);
  }, [ceoSlideIndex, ceoSlides.length]);

  return (
    <div className="gap-top-equal about-style-7">
      <div className="container gap-bottom-equal">
        <div className=" row g-5 align-items-center">
          <div className="col-lg-6">
            <div style={{ paddingRight: "0" }} className="about-content">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <span className="pre-title">About us</span>
                <h2 className="title sub-heading">Inside PISC</h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <p style={{ textAlign: "justify" }}>
                  At Professional IT Skills College, Shadbagh Lahore, we are
                  dedicated to transforming careers through high-quality IT
                  education and practical training. Our mission is to make IT
                  courses in Lahore accessible to everyone, empowering students
                  with the digital, computer, and professional skills needed to
                  succeed in today&apos;s competitive job market. We provide
                  hands-on, career-focused programs that give learners
                  real-world experience with the latest software, tools, and
                  technologies. Whether you are starting fresh or aiming to
                  advance your skills, our experienced instructors and
                  supportive learning environment ensure every student is
                  prepared to excel locally, nationally, and internationally. We
                  also offer flexible scheduling, personalized guidance,
                  industry-relevant certifications, and continuous support to
                  help graduates confidently enter the technology sector. Join
                  us at Professional IT Skills College and take the first step
                  toward a successful tech career, staying ahead in a rapidly
                  evolving global digital world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image-gallery" style={{ display: "flex", justifyContent: "center", minHeight: "300px" }}>
              {aboutImgSrc && (
                <img
                  style={{
                    width: "100%",
                    maxWidth: "520px",
                    borderRadius: "22px",
                    boxShadow: "0 28px 70px rgba(10, 25, 47, 0.22)",
                    border: "1px solid rgba(255, 184, 0, 0.16)",
                  }}
                  className="main-img-1"
                  src={aboutImgSrc}
                  alt="About Image"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="gap-top-equal gap-bottom-equal"
        style={{ background: "var(--color-smoke)" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-6"
              style={{ borderRight: "3px solid var(--color-secondary)" }}
            >
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <h2 className="title sub-heading">
                  Our <span className="color-secondary">Mission</span>
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <div style={{ textAlign: "justify" }}>
                  At Professional IT Skills College, Shadbagh Lahore, our
                  mission is to deliver high-quality, affordable, and practical
                  IT courses that empower students with digital, computer, and
                  professional skills. Through hands-on training, real-world
                  projects, and expert mentorship, we prepare learners to solve
                  problems, think critically, and succeed in today&apos;s competitive
                  tech industry. Our programs are designed for beginners and
                  professionals alike, ensuring every student gains the
                  confidence and knowledge to achieve career growth locally,
                  nationally, and internationally.
                  <br /> <br />
                  We aim to achieve this by:
                  <ul>
                    <li>
                      Delivering practical IT courses in Lahore tailored to
                      industry demands.
                    </li>
                    <li>
                      Providing hands-on & real-world training for immediate
                      skill application.
                    </li>
                    <li>
                      Equipping students with critical thinking, problem-solving
                      & professional skills.
                    </li>
                    <li>
                      Offering expert mentorship and guidance to ensure
                      effective learning.
                    </li>
                    <li>
                      Preparing learners for career success in the digital and
                      tech sectors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="section-title section-left"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <h2 className="title sub-heading">
                  Our <span className="color-secondary">Vision</span>
                </h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
                <div style={{ textAlign: "justify" }}>
                  Our vision is to become the leading center for IT education in
                  Lahore, Pakistan, and beyond, recognized for innovative,
                  career-focused computer training. We aspire to make technology
                  education accessible to everyone, equipping students with the
                  latest digital skills and industry-ready experience to thrive
                  in a rapidly evolving global job market. By fostering a
                  dynamic, inclusive, and future-ready learning environment, we
                  aim to shape a generation of professionals who excel locally,
                  nationally, and globally.
                  <br /> <br />
                  We aim to achieve this by:
                  <ul>
                    <li>
                      Providing cutting-edge IT courses in Lahore that meet
                      industry demands.
                    </li>
                    <li>
                      Offering hands-on, practical training for real-world
                      career readiness.
                    </li>
                    <li>
                      Encouraging creativity, critical thinking, and
                      problem-solving skills.
                    </li>
                    <li>
                      Fostering a dynamic, inclusive, and supportive learning
                      environment.
                    </li>
                    <li>
                      Preparing students for success locally, nationally, and
                      globally in the digital era.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.length && (
        <div className="gap-top-equal gap-bottom-equal">
          <div className="container">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-7">
                <div className="section-title section-left">
                  <h2 className="title sub-heading mt-0">
                    About <span className="color-secondary">CEO</span>
                  </h2>

                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>

                {detailParagraphs.map((text, idx) => (
                  <p key={idx} style={{ textAlign: "justify", color: "black", marginBottom: idx === detailParagraphs.length - 1 ? 0 : "14px" }}>
                    {text}
                  </p>
                ))}
                </div>
              </div>

              <div className="col-lg-5">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    onMouseEnter={() => setIsCeoPaused(true)}
                    onMouseLeave={() => setIsCeoPaused(false)}
                    style={{
                      width: "100%",
                      maxWidth: "320px",
                      position: "relative",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 26px 65px rgba(10, 25, 47, 0.22)",
                      border: "1px solid rgba(255, 184, 0, 0.22)",
                      background: "rgba(10, 25, 47, 0.06)",
                      aspectRatio: "4 / 5",
                    }}
                  >
                    {ceoSlides.map((src, idx) => (
                      <div
                        key={`${src}-${idx}`}
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: idx === ceoSlideIndex ? 1 : 0,
                          transition: "opacity 520ms ease",
                        }}
                      >
                        <img
                          src={src}
                          alt="CEO"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "radial-gradient(circle at 30% 20%, rgba(255, 184, 0, 0.14) 0%, transparent 55%), linear-gradient(180deg, rgba(10, 25, 47, 0.10) 0%, rgba(10, 25, 47, 0.28) 100%)",
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                    ))}
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "12px",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "8px",
                        pointerEvents: "none",
                      }}
                    >
                      {ceoSlides.map((_, idx) => (
                        <span
                          key={idx}
                          style={{
                            width: idx === ceoSlideIndex ? "18px" : "7px",
                            height: "7px",
                            borderRadius: "999px",
                            background: idx === ceoSlideIndex ? "#FFB800" : "rgba(255, 255, 255, 0.75)",
                            boxShadow: idx === ceoSlideIndex ? "0 0 0 3px rgba(10, 25, 47, 0.28)" : "none",
                            transition: "width 220ms ease, background 220ms ease",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "14px" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      background: "rgba(255, 184, 0, 0.16)",
                      border: "1px solid rgba(255, 184, 0, 0.35)",
                      color: "#0A192F",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                    }}
                  >
                    CEO & Founder
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "22px", fontWeight: 900, color: "#0A192F", lineHeight: 1.2 }}>
                    Muhammad Azam Tariq
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 600, color: "rgba(10, 25, 47, 0.75)" }}>
                    Professional IT Skills College
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutArea;
