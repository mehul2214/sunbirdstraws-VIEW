import React, { useRef, useState, useEffect } from "react";
import "./Testimonials.css";

import LeelaLogo from "../assets/Testimonals /TheLeelaPalaceHotels.png";
import GrandMercureLogo from "../assets/Testimonals /GrandMercure.png";
import ChaiDaysLogo from "../assets/Testimonals /ChaiDays.png";
import FourSeasonLogo from "../assets/Testimonals /FourSeasonslogo.png";

const testimonials = [
  {
    logo: LeelaLogo,
    quote:
      "One of the kind product! Never believed it was made from coconut leaves, the premium quality and the customised packaging was hooked.",
    author: "Apachu Ajay",
  },
  {
    logo: GrandMercureLogo,
    quote:
      "Sunbird Straws have not only received an overwhelming response from our guests but they have also aligned perfectly with our sustainability goal.",
    author: "Keshav",
  },
  {
    logo: FourSeasonLogo,
    quote:
      "Amazing products, we were using at least two paper straws, it was getting soggy within a minute inside the beverage. This product is right on spot.",
    author: "Nanda Kumar",
  },
  {
    logo: ChaiDaysLogo,
    quote:
      "A game changer in food and beverage industry. The eco-friendly straws have drastically reduced the wastage we generate everyday.",
    author: "Rasheed Babu",
  },
];

function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 32; // card + gap
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction) => {
    const newIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, testimonials.length - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 320 + 32;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const track = scrollRef.current;
    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="testimonials section">
      <div className="testimonials-container">
        <div className="testimonials-left">
          <h1 className="testimonials-title">Testimonials</h1>
          <p className="testimonials-subtitle">We Go Extra Miles Together</p>
        </div>

        <div className="testimonial-marquee">
          <div className="testimonial-scroll-wrapper">
            <button className="arrow" onClick={() => scroll("left")}>
              &#8592;
            </button>

            <div className="testimonial-track" ref={scrollRef}>
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index}>
                  <img
                    src={item.logo}
                    alt={item.author}
                    className="testimonial-logo"
                  />
                  <blockquote>“{item.quote}”</blockquote>
                  <cite>- {item.author}</cite>
                </div>
              ))}
            </div>

            <button className="arrow" onClick={() => scroll("right")}>
              &#8594;
            </button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
