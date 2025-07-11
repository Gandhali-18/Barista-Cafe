import React from "react";

const Contact = () => {
  return (
    <div className="map">
      <div className="frame">
        <iframe
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3022259141944!2d73.828651!3d18.5152398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf900d4a885d%3A0xe30e6af754109d47!2sBarista%20-%20Law%20College%20Pune!5e0!3m2!1sen!2sin!4v1751695240597!5m2!1sen!2sin"
          width="100%"
          height="650"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="contact">
          <div className="contact-details">
            <h1>Contact Us</h1>
            <h3>Barista - Wal College Mumbai</h3>
            <p>
              Ground Floor, Plot No 92/1 Wal College Rd,
              <br />
              Gandhinagar, Pune, Maharashtra 41108
            </p>

            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="orange"
                className="bi bi-telephone-fill"
                viewBox="0 0 35 35"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
              <h4>+91 594954845</h4>
            </div>

            <div className="SVG2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="orange"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4zm0 1.383v6.634l5.803-3.482L0 5.383zM6.761 8.83l-6.76 4.06A2 2 0 0 0 2 14h12a2 2 0 0 0 1.999-1.11l-6.76-4.06L8 9.583l-1.239-.753z" />
              </svg>
              <h4>baristaMumbai@example.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
