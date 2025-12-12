import React from "react";
import "./Footer.css";
import logo from "../assets/Logo New .webp";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Sunbird Logo" className="footer-logo-img" />
        </div>

        {/* Address Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Company Address</h3>
          <p className="footer-text">
            Brown Reed Agri-Waste Innovations Pvt Ltd
          </p>
          <p className="footer-text">
            #59 D, Group Employees Layout, 1st A Block,
          </p>
          <p className="footer-text">
            Lingadeeranahalli, Bangalore, Karnataka, India - 560091
          </p>
        </div>

        {/* Information Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Information</h3>
          <div className="footer-link-group">
            <Link to="/" className="footer-link">
              Home Page
            </Link>{" "}
            {/* ✅ Linked to homepage */}
          </div>
          <div className="footer-link-group">
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>{" "}
            {/* ✅ Linked to contact page */}
          </div>
          <div className="footer-link-group">
            <Link to="/terms-and-conditions" className="footer-link">
              Terms & Conditions
            </Link>
          </div>
          <div className="footer-link-group">
            <Link to="/privacy-policy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
          <div className="footer-link-group">
            <Link to="/cancellation-refund-policy" className="footer-link">
              Cancellation & Refund Policy
            </Link>
          </div>
          <div className="footer-link-group">
            <Link to="/shipping-policy" className="footer-link">
              Shipping Policy
            </Link>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">Ph No. +91 90350 78109</p>
          <p className="footer-text">Email - info@sunbirdstraws.com</p>
          <div className="footer-spacer" />
          <h3 className="footer-heading">Follow</h3>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/sunbirdstraws"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram className="social-icon" />
              <span>Instagram</span>
            </a>
            <a
              href="https://in.linkedin.com/company/sunbirdstraws"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
