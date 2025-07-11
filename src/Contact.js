import React from "react";

const Contact = () => {
  return (
    <div className="component">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60532.83561462711!2d73.75243334863283!3d18.515239800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf900d4a885d%3A0xe30e6af754109d47!2sBarista%20-%20Law%20College%20Pune!5e0!3m2!1sen!2sin!4v1752247887232!5m2!1sen!2sin"
          width="800"
          height="650"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Barista Law College Map"
        ></iframe>
      </div>

      <div className="contact-details">
        <h1>Contact Us</h1>

        <div className="phone">
          <div className="phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="orange"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c..."
              />
            </svg>
            <h4>+91 546874864</h4>
          </div>

          <h4 style={{ display: "inline", marginLeft: "10px" }}>
            +91 546874864
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
