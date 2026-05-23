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
    const message = 'Hello, I am interested in the Matric Complete course.';
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
                  @keyframes pulse-green {
                    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
                    70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
                    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
                  }
                  .btn-apply-now {
                    animation: pulse-green 2s infinite;
                  }
                `}</style>
                <button 
                  onClick={handleWhatsAppClick}
                  className="edu-btn btn-apply-now"
                  style={{ 
                    background: 'linear-gradient(to right, #25D366, #128C7E)', 
                    border: 'none', 
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '14px 40px',
                    borderRadius: '50px',
                    fontWeight: '800',
                    fontSize: '18px',
                    boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  <i className="ri-whatsapp-fill" style={{ fontSize: '26px' }}></i>
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
