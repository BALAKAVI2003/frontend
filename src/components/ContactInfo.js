// src/components/ContactInfo.js
import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Follow us on social media for the latest trends!</p>
      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
