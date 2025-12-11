import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Phone:</strong> +91 90350 78109
          </p>
          <p>
            <strong>Email:</strong> info@sunbirdstraws.com
          </p>
          <p>
            <strong>Address:</strong> Brown Reed Agri-Waste Innovations Pvt Ltd
            #595 D, Group Employees Layout, 1st A Block, Lingadheeranahalli,
            Bangalore, Karanataka, India - 560091
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">YOUR NAME *</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">YOUR EMAIL *</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">YOUR PHONE *</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">YOUR MESSAGE *</label>
            <textarea id="message" name="message" rows="6" required></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
