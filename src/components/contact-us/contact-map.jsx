import React from "react";

const ContactMap = () => {
  const placeQuery =
    "Professional IT Skills College (PISC), Sheikh Jamal Ghulzar road,Near to the Jawa Barost, toky wala chowk, Shadbagh Rd, Shad Bagh, Lahore, 54000, Pakistan";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&output=embed`;

  return (
    <div className="google-map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Google Map"
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
