import { useEffect } from "react";
import Image from "next/image";
import HomeUniversity from "../components/homes/home-university";
import SEO from "../components/seo";
import { Wrapper } from "../layout";

export default function Home() {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ Modal }) => {
        const modalElement = document.getElementById("admissionPopup");
        if (modalElement) {
          const modal = new Modal(modalElement);
          modal.show();
        }
      });
    }, 500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '923166474545';
    const message = 'Hello, I am interested in Microsoft Office Course';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Wrapper>
      <div
        className="modal fade"
        id="admissionPopup"
        tabIndex="-1"
        aria-hidden="true"
        style={{ zIndex: 99999 }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ border: 'none', borderRadius: '15px', overflow: 'hidden', backgroundColor: 'transparent' }}>
            <div className="modal-body p-0" style={{ position: 'relative' }}>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 100,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: "10px",
                  opacity: 0.8,
                  border: 'none',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}
              ></button>

              <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 4", borderRadius: '15px', overflow: 'hidden' }}>
                <Image
                  src="/assets/images/admission-popup.jpeg"
                  alt="Admissions Open"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              
              <div className="p-3 text-center" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0' }}>
                <style jsx>{`
                  @keyframes pulse-glow {
                    0% { box-shadow: 0 0 0 0 rgba(248, 184, 31, 0.7); }
                    70% { box-shadow: 0 0 0 15px rgba(248, 184, 31, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(248, 184, 31, 0); }
                  }
                  @keyframes shimmer {
                    0% { transform: translateX(-150%) rotate(45deg); }
                    100% { transform: translateX(150%) rotate(45deg); }
                  }
                  .btn-apply-now {
                    position: relative;
                    overflow: hidden;
                    animation: pulse-glow 2s infinite;
                  }
                  .btn-apply-now::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                      to right,
                      transparent,
                      rgba(255, 255, 255, 0.4),
                      transparent
                    );
                    transform: translateX(-150%) rotate(45deg);
                    animation: shimmer 2.5s infinite;
                  }
                  .btn-apply-now:hover {
                    background: #f8b81f !important;
                    color: #002147 !important;
                    transform: scale(1.05) translateY(-3px);
                    box-shadow: 0 20px 40px rgba(248, 184, 31, 0.5) !important;
                  }
                  .btn-apply-now:active {
                    transform: scale(0.98);
                  }
                `}</style>
                <button 
                  onClick={handleWhatsAppClick}
                  className="edu-btn btn-apply-now"
                  style={{ 
                    background: '#002147', 
                    border: '2px solid #f8b81f', 
                    color: '#f8b81f',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                    padding: '16px 45px',
                    borderRadius: '50px',
                    fontWeight: '900',
                    fontSize: '20px',
                    boxShadow: '0 10px 30px rgba(0, 33, 71, 0.5)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    cursor: 'pointer'
                  }}
                >
                  <i className="ri-whatsapp-fill" style={{ fontSize: '28px' }}></i>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SEO pageTitle={"Home"} />
      <HomeUniversity />
    </Wrapper>
  );
}
