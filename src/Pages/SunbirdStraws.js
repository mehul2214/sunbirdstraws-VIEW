import React from "react";
import "./SunbirdStraws.css";

import product1 from "../assets/SunbirdStraws/Bobastraws.jpg";
import product2 from "../assets/SunbirdStraws/Bobastraws.jpg";
import product3 from "../assets/SunbirdStraws/Bobastraws.jpg";

function SunbirdStraws() {
  return (
    <section className="straws-page">
      {/* Hero Section */}
      <div className="straws-hero">
        <h1>Sunbird Straws</h1>
        <p>
          Our premium straws are crafted from dried coconut leaves — 100%
          biodegradable, chemical-free, and designed for elegance. Whether it’s
          smoothies, boba tea, or cocktails, Sunbird Straws offer a sustainable
          sip with style.
        </p>
      </div>

      {/* Product Showcase */}
      <div className="straws-gallery">
        <div className="product-card">
          <img src={product1} alt="Boba Straw" />
          <h3>Boba Straw</h3>
        </div>
        <div className="product-card">
          <img src={product2} alt="Regular Straw" />
          <h3>Regular Straw</h3>
        </div>
        <div className="product-card">
          <img src={product3} alt="Eco Pack" />
          <h3>Eco Pack</h3>
        </div>
      </div>

      {/* Call to Action */}
      <div className="straws-contact">
        <p>
          To buy Sunbird Straws, please <a href="/contact">contact us</a>.
        </p>
      </div>
    </section>
  );
}

export default SunbirdStraws;
