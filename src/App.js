import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Inspiration from "./components/Inspiration";
import Awards from "./components/Awards";
import SupportedBy from "./components/SupportedBy";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import TermsandCondition from "./Pages/TermsandCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CancellationRefund from "./Pages/CancellationRefund";
import ShippingPolicy from "./Pages/ShippingPolicy";

import News from "./Pages/News";
import Gallery from "./Pages/Gallery";
import SunbirdStraws from "./Pages/SunbirdStraws";
import OurStory from "./Pages/OurStory";
import OurTeam from "./Pages/OurTeam";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div id="dropdown-root"></div>
              <Header />
              <div className="page-fade">
                <Hero />
                <Impact />
                <Inspiration />
                <Awards />
                <SupportedBy />
                <Testimonials />
                <Footer />
              </div>
            </>
          }
        />

        {/* Legal Pages */}
        <Route
          path="/terms-and-conditions"
          element={
            <>
              <Header />
              <div className="page-fade">
                <TermsandCondition />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Header />
              <div className="page-fade">
                <PrivacyPolicy />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/cancellation-refund-policy"
          element={
            <>
              <Header />
              <div className="page-fade">
                <CancellationRefund />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/shipping-policy"
          element={
            <>
              <Header />
              <div className="page-fade">
                <ShippingPolicy />
                <Footer />
              </div>
            </>
          }
        />

        {/* Media Pages */}
        <Route
          path="/news"
          element={
            <>
              <Header />
              <div className="page-fade">
                <News />
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Header />
              <div className="page-fade">
                <Gallery />
                <Footer />
              </div>
            </>
          }
        />

        {/* Product Page */}
        <Route
          path="/sunbird-straws"
          element={
            <>
              <Header />
              <div className="page-fade">
                <SunbirdStraws />
                <Footer />
              </div>
            </>
          }
        />

        {/* Story Page */}
        <Route
          path="/our-story"
          element={
            <>
              <Header />
              <div className="page-fade">
                <OurStory />
                <Footer />
              </div>
            </>
          }
        />

        {/* Our Team Page */}
        <Route
          path="/our-team"
          element={
            <>
              <Header />
              <div className="page-fade">
                <OurTeam />
                <Footer />
              </div>
            </>
          }
        />

        {/* Contact Us Page */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <div className="page-fade">
                <ContactUs />
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
