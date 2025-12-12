import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import slide1 from "../assets/landingpage.png";
import slide2 from "../assets/GoGreen.jpeg";
import slide3 from "../assets/imageforstatr.jpg";

const slides = [
  {
    image: slide1,
    heading: (
      <>
        World’s First Premium Straws & Pens From{" "}
        <span className="highlight-green">coconut leaves</span>
      </>
    ),
    subtext:
      "Innovative, sustainable and stylish alternatives to traditional plastics.",
  },
  {
    image: slide2,
    heading: "Eco-Friendly Products That Make a Difference",
    subtext: "Join the movement toward conscious consumption and zero waste.",
  },
  {
    image: slide3,
    heading: (
      <span className="highlight-brown">Innovation Rooted in Nature</span>
    ),
    subtext:
      "Crafted with care, designed for impact — redefining everyday essentials.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimateKey((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { image, heading, subtext } = slides[currentSlide];

  return (
    <section className="hero-section">
      <div className="hero-container" key={animateKey}>
        <div className="hero-content rise-in">
          <h1>{heading}</h1>
          <p>{subtext}</p>
          <Link to="/sunbird-straws" className="btn-explore">
            Explore Our Products
          </Link>
        </div>

        <div className="hero-image-wrapper rise-in">
          <img src={image} alt="Hero Slide" className="hero-image" />
        </div>

        {/* ✅ Vertical Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => {
                setCurrentSlide(index);
                setAnimateKey((prev) => prev + 1);
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
