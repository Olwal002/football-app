import React from 'react';

const ContactDetails = () => {
return (
  <div>
<div className="contact"></div>
<div align="center">
 <div className="row">
<div className="col-md-4">
  <i className="fas fa-phone-alt"></i>
  <div className="contact_phone">
  <h3>CONTACT</h3>
  <p>Our lines are available 24/7 365
+254 792091028/ +254 735085431 / +254 793544359 </p>
  </div>
  </div>
  <div className="col-md-4">
  <i className="far fa-envelope"></i>
  <div className="contact_email">
  <h3>EMAIL</h3>
  <p>Do you have any questions, comments or suggestions? Feel free to drop us a line
info@kcfa.com</p>
  </div>
  </div>
  <div className="col-md-4">
  <i className="fas fa-location-arrow"></i>
  <div className="contact_location">
  <h3>LOCATION</h3>
<p>Manyatta School | Alongside Koyango Market
View On Google Map</p>
  </div>
  </div>
  </div>
  </div>
  </div>
)
}

export default ContactDetails;