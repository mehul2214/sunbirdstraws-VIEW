import React from "react";
import "./Awards.css";

import swadeshIcon from "../assets/AwardsRecognition/UpdatedSwadesStartupIcon.png";
import honeybeeIcon from "../assets/AwardsRecognition/HoneyBeeInclusive.webp";
import leapIcon from "../assets/AwardsRecognition/LeaptoUnicorn.webp";
import agriIcon from "../assets/AwardsRecognition/AgriIndiaHackathon.svg";
import swissIcon from "../assets/AwardsRecognition/UpdatedMassChallengeSwitzerland.png";

const awards = [
  { logo: swadeshIcon, label: "Winner" },
  { logo: honeybeeIcon, label: "Awardee" },
  { logo: leapIcon, label: "Top 100" },
  { logo: agriIcon, label: "Winner" }, // Row 2
  { logo: swissIcon, label: "Winner" }, // Row 2
];

function Awards() {
  return (
    <section className="awards section">
      <div className="container">
        <h1 className="awards-heading">Awards & Recognition</h1>
        <p className="awards-subheading">
          Celebrating milestones on a sustainable journey
        </p>

        <div className="awards-grid">
          {awards.map((item, index) => (
            <div className="award-tile" key={index}>
              <img
                src={item.logo}
                alt={`Award ${index + 1}`}
                className="award-logo"
              />
              <p className="award-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
