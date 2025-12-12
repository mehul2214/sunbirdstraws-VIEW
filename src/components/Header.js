import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/Logo New .webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const aboutRef = useRef(null);
  const mediaRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(e.target) &&
        mediaRef.current &&
        !mediaRef.current.contains(e.target)
      ) {
        setAboutOpen(false);
        setMediaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="nav-container" role="navigation" aria-label="Primary">
        <Link className="brand" to="/">
          <img
            src={logo}
            alt="Sunbird Straws Logo"
            className="brand-logo-large"
          />
        </Link>

        {/* ✅ Right-aligned nav and button */}
        <div className="nav-right">
          <nav id="menu" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link to="/">Home</Link>

            <div
              className="nav-dropdown"
              ref={aboutRef}
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="nav-link"
                onClick={() => setAboutOpen((prev) => !prev)}
              >
                About Us <span className="nav-arrow">&#9662;</span>
              </button>
              {aboutOpen && (
                <div className="dropdown-menu">
                  <Link to="/our-story">Our Story</Link>
                  <Link to="/our-team">Our Team</Link>
                  <a href="#initiatives">Initiatives</a>
                  <a href="#blog">Blog</a>
                </div>
              )}
            </div>

            <div
              className="nav-dropdown"
              ref={mediaRef}
              onMouseEnter={() => setMediaOpen(true)}
              onMouseLeave={() => setMediaOpen(false)}
            >
              <button
                className="nav-link"
                onClick={() => setMediaOpen((prev) => !prev)}
              >
                Media <span className="nav-arrow">&#9662;</span>
              </button>
              {mediaOpen && (
                <div className="dropdown-menu">
                  <Link to="/news">News</Link>
                  <Link to="/gallery">Gallery</Link>
                </div>
              )}
            </div>

            <Link to="/contact">Contact Us</Link>
          </nav>

          <Link to="/sunbird-straws" className="btn-explore-header">
            Explore Our Products
          </Link>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
