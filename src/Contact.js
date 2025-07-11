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
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="orange"
          class="bi bi-telephone-fill"
          viewBox="0 0 30 30"
        >
          <path
            fill-rule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
          />
         
        </svg>
       <h4>+91 546874864</h4>
        
      </div>
    </div>
  );
};

export default Contact;
