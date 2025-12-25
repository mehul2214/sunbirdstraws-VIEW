import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, Fade } from "@mui/material";
import theme from "./theme/theme";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div id="dropdown-root"></div>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <Hero />
                    <Impact />
                    <Inspiration />
                    <Awards />
                    <SupportedBy />
                    <Testimonials />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />

          {/* Legal Pages */}
          <Route
            path="/terms-and-conditions"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <TermsandCondition />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <PrivacyPolicy />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />
          <Route
            path="/cancellation-refund-policy"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <CancellationRefund />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />
          <Route
            path="/shipping-policy"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <ShippingPolicy />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />

          {/* Media Pages */}
          <Route
            path="/news"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <News />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <Gallery />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />

          {/* Product Page */}
          <Route
            path="/sunbird-straws"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <SunbirdStraws />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />

          {/* Story Page */}
          <Route
            path="/our-story"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <OurStory />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />

          {/* Our Team Page */}
          <Route
            path="/our-team"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <OurTeam />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />

          {/* Contact Us Page */}
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Fade in timeout={600}>
                  <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <ContactUs />
                    <Footer />
                  </Box>
                </Fade>
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
