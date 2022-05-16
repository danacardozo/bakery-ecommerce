import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us</h5>
            <p>+54 1234 567 891</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <i className="fas fa-envelope-open"></i>
            </div>
            <h5>Email</h5>
            <p>Bakery@gmail.com</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Location</h5>
            <p>CABA, 123</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactInfo;