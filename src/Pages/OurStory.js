import React from "react";
import "./OurStory.css";

import heroImage from "../assets/OurStory/Welcomourstory.jpeg";
import problemImage from "../assets/OurStory/TheProblemImage.png";
import solutionImage from "../assets/OurStory/TheSolutionCoconut.png";
import mapImage from "../assets/OurStory/mapfromglobalshift.png"; // Map image
import finalImage from "../assets/OurStory/TheProblemImage.png"; // Replace with actual final section image if needed

function OurStory() {
  return (
    <section className="our-story">
      {/* HERO */}
      <header className="hero">
        <img src={heroImage} alt="Sunbird Story" className="hero__img" />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1>OUR STORY</h1>
          <p>It all began with something simple: A Straw</p>
        </div>
      </header>

      {/* THE PROBLEM */}
      <section className="problem section">
        <div className="container grid grid--2">
          <img
            src={problemImage}
            alt="Plastic Straws"
            className="problem__img"
          />
          <div className="problem__text">
            <h2>THE PROBLEM</h2>
            <p>
              Something small that we use every day, yet one that leaves behind
              long-lasting environmental waste.
            </p>
            <p>
              Plastic straws pollute long before they reach our drinks, and
              paper ones don’t last long, leaving chemicals behind.
            </p>
            <p>
              Somewhere between convenience and care, we forgot the cost of
              every sip.
            </p>
            <p className="highlight">
              <em>Can something so small be made right?</em>
            </p>
          </div>
        </div>
      </section>

      {/* THE ANSWER FROM NATURE */}
      <section className="solution section">
        <div className="container grid grid--2">
          <div className="solution__text">
            <h2>THE ANSWER FROM NATURE</h2>
            <p>
              When we searched for an answer, we looked towards nature. We found
              it in the fallen coconut leaf.
            </p>
            <p>
              Something that was once burned as waste is now a sustainable
              alternative, crafted into strong, safe, and earth-friendly straws.
            </p>
            <p>
              This simple shift showed us that meaningful innovation doesn’t
              damage nature—it teams with it.
            </p>
            <p>
              That’s how Sunbird began: with a commitment to sustainable choices
              and a better way to sip.
            </p>
          </div>
          <img
            src={solutionImage}
            alt="Nature Solution"
            className="solution__img"
          />
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section className="global section">
        <div className="container global__content">
          <img src={mapImage} alt="Global Impact Map" className="global__map" />
          <div className="global__text">
            <h2>From a Village Idea to a Global Shift</h2>
            <p>
              Our journey has always been about people and purpose.
              <br />
              From rural roots to 25+ countries, we have proven that meaningful
              change starts small and expands when the mission has purpose.
            </p>
            <p>
              Across five production centers in Kerala, Karnataka, and Tamil
              Nadu, Sunbird builds livelihoods for local women while rooted in
              nature.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="final section">
        <div className="container grid grid--2">
          <img src={finalImage} alt="Community Impact" className="final__img" />
          <div className="final__text">
            <p>
              Today, we take steps towards a cleaner planet and empower rural
              women with new skills and livelihoods. Join us in making a
              difference—one straw at a time.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default OurStory;
