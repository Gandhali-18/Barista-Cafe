import React from "react";

const Contact = () => {
  const handleClick = () => {
    alert("Message sent successfully!");}
  return (
    <div className="component">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60532.83561462711!2d73.75243334863283!3d18.515239800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf900d4a885d%3A0xe30e6af754109d47!2sBarista%20-%20Law%20College%20Pune!5e0!3m2!1sen!2sin!4v1752247887232!5m2!1sen!2sin"
          
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Barista Law College Map"
        ></iframe>
      </div>

      <div className="contact-details">
        <h1>Contact Us</h1>

        <h2>Barista Cafe-Wal College</h2>
        <p>Ground floor ,plot no 92/1 Wal college rd,</p>
        <p style={{ marginBottom: "6%" }}>Erandawana,Pune,Maharashtra 410000</p>

        <h4 style={{ marginBottom: "4%" }}>
          {" "}
          <i class="bi bi-telephone-fill"> +91 489648578</i>
        </h4>
        <h4>
          <i class="bi bi-envelope-fill">{"  "}mybarista@mail.com</i>
        </h4>
        <br />
        <label>Name</label>
        <input type="text"></input>
        <label>Email Address</label>
        <input type="email"></input>
        <label>Message</label>
        <input type="text"></input>
        
      <button id="ok" onClick={handleClick} >send</button>
      </div>
    </div>
  );
};

export default Contact;
