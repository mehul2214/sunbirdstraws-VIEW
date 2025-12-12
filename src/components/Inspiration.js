import React from "react";
import "./Inspiration.css";
import inspirationImage from "../assets/inspiration.jpeg";

function Inspiration() {
  return (
    <section className="inspo section tight section-alt section-shadow">
      <div className="container">
        <h1 className="inspo-title fade-in">Our Inspiration</h1>
        <div className="inspo-split">
          <div className="inspo-image zoom-in">
            <img
              src={inspirationImage}
              alt="Rural women working on eco-friendly straws"
            />
          </div>
          <div className="inspo-content slide-up">
            <h2 className="inspo-subheading">
              Preserving The Environment And Empowering Rural Communities
            </h2>
            <div className="inspo-paragraphs">
              <p>
                Given that climate change is the most significant disruptor of
                our time, preserving the environment and empowering rural
                communities—one green innovation at a time—are central to our
                philosophy.
              </p>
              <p>
                <strong>Sunbird Straws</strong> are made from anti-waste that
                would otherwise be burned, contributing to already high levels
                of carbon emissions.
              </p>
              <p>
                Our innovation aims to reduce the plastic threat endangering our
                oceans and aquatic life by promoting a sustainable lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
