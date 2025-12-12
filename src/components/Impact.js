import React from "react";
import "./Impact.css";
import strawIcon from "../assets/ImpactSection/Strawsicon.jpg";
import co2Icon from "../assets/ImpactSection/co2emission.jpg";
import womenIcon from "../assets/ImpactSection/ruralwomengraphic.webp";

function Impact() {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <h1 className="impact-title">Together, We Are Creating Change</h1>
        <p className="impact-subtitle">Making an impact, one straw at a time</p>

        <div className="impact-panels">
          <div className="impact-panel">
            <img
              src={strawIcon}
              alt="Plastic Straws Icon"
              className="impact-icon"
            />
            <div className="impact-text-box">
              <h2 className="impact-number">10M+</h2>
              <p className="impact-text">
                Plastic Straws kept out of our oceans
              </p>
            </div>
          </div>

          <div className="impact-panel">
            <img src={co2Icon} alt="CO₂ Icon" className="impact-icon" />
            <div className="impact-text-box">
              <h2 className="impact-number">415 kgs</h2>
              <p className="impact-text">of CO₂ emissions prevented</p>
            </div>
          </div>

          <div className="impact-panel">
            <img
              src={womenIcon}
              alt="Empowered Women Icon"
              className="impact-icon"
            />
            <div className="impact-text-box">
              <h2 className="impact-number">110+</h2>
              <p className="impact-text">Rural Women empowered with jobs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
