import React from "react";
import "./SupportedBy.css";

// Import logos
import ChristLogo from "../assets/Supported by/ChristBangalore.png";
import SidbiLogo from "../assets/Supported by/ SIDBIGIAN.png";
import ClimatekicLogo from "../assets/Supported by/climatekic.jpeg";
import CumminsLogo from "../assets/Supported by/Cummins.png";
import ElevateLogo from "../assets/Supported by/elevatelogo.jpg";
import HDFCGrantLogo from "../assets/Supported by/HDFCgrants.jpg";
import IIMLogo from "../assets/Supported by/IIM.webp";
import JubilantLogo from "../assets/Supported by/JubilantFoodWorks.png";
import keralaagriLogo from "../assets/Supported by/keralaargiculturaluniversity.jpg";
import MillercentreLogo from "../assets/Supported by/millercentre.png";
import PernodLogo from "../assets/Supported by/PernodRicard.png";
import SelcoLogo from "../assets/Supported by/selcologo.png";
import SidleyLogo from "../assets/Supported by/Sidley.png";
import wwfLogo from "../assets/Supported by/wwfIndia .jpg";

const logos = [
  ChristLogo,
  SidbiLogo,
  ClimatekicLogo,
  CumminsLogo,
  ElevateLogo,
  HDFCGrantLogo,
  IIMLogo,
  JubilantLogo,
  keralaagriLogo,
  MillercentreLogo,
  PernodLogo,
  SelcoLogo,
  SidleyLogo,
  wwfLogo,
];

function SupportedBy() {
  return (
    <section className="partners section tight">
      <div className="container">
        <h1 className="supported-heading">Supported By</h1>
        <div className="logo-scroll">
          <div className="logos">
            {logos.map((logo, index) => (
              <div className="logo-tile" key={index}>
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {logos.map((logo, index) => (
              <div className="logo-tile" key={`dup-${index}`}>
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportedBy;
