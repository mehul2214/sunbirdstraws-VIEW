import React from "react";
import "./OurTeam.css";
import teamCover from "../assets/Team/TeamCover.jpeg";
import founderImage from "../assets/RuralWomenEmpowerment/Women1.jpeg"; // Replace with actual path

function OurTeam() {
  return (
    <section className="team-page">
      {/* Hero Section */}
      <div className="team-hero">
        <img src={teamCover} alt="Our Team" className="team-image" />
        <div className="team-overlay">
          <h1>Our Team</h1>
        </div>
      </div>

      {/* Core Team Heading */}
      <div className="core-heading">
        <h2>CORE TEAM</h2>
      </div>

      {/* Core Member Section */}
      <div className="core-member-box">
        <div className="core-image-wrapper">
          <img src={founderImage} alt="Rishabh Shah" className="core-img" />
          <h3 className="core-name">Rishabh Shah</h3>
          <p className="core-title">Founder</p>
        </div>
        <div className="core-text-scroll">
          <div className="core-text-content">
            <p>
              Apart from having founded an organization that has gone on to
              become one of the world's largest youth-run organizations, Rishabh
              is a visiting faculty at various colleges. Via his organization
              I.I.M.U.N., he has been a mentor to thousands of students — many
              of those who have worked with him are now elected members of
              government, civil servants, lawyers, business leaders, doctors,
              and authors who now spread their own ideas of India. He also runs
              multiple initiatives focused on youth empowerment, civic
              engagement, and leadership development, making a lasting impact
              across sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
