import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Fade, Zoom } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

import slide1 from "../assets/landingpage.png";
import slide2 from "../assets/GoGreen.jpeg";
import slide3 from "../assets/imageforstatr.jpg";

// Mascot images
import JojoTurtle from "../assets/WhatsApp_Image_2025-12-29_at_20.38.43-removebg-preview.png";
import JillBird from "../assets/WhatsApp_Image_2025-12-29_at_20.38.43__1_-removebg-preview.png";

const slides = [
  {
    image: slide1,
    heading: "World's First Premium Straws & Pens From",
    highlight: "coconut leaves",
    subtext:
      "Innovative, sustainable and stylish alternatives to traditional plastics.",
    accentColor: "#f9a825",
  },
  {
    image: slide2,
    heading: "Eco-Friendly Products That Make a",
    highlight: "Difference",
    subtext: "Join the movement toward conscious consumption and zero waste.",
    accentColor: "#66bb6a",
  },
  {
    image: slide3,
    heading: "Innovation Rooted in",
    highlight: "Nature",
    subtext:
      "Crafted with care, designed for impact — redefining everyday essentials.",
    accentColor: "#8d6e63",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateIn(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimateIn(true);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { image, heading, highlight, subtext, accentColor } = slides[currentSlide];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        mt: 0,
        pt: { xs: "100px", md: "120px" },
        background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 50%, #fcf7f1 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Main Content Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 1300,
          mx: "auto",
          px: { xs: 1, md: 4 },
          gap: { xs: 4, md: 6 },
          textAlign: { xs: "center", md: "left" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Content */}
        <Fade in={animateIn} timeout={500}>
          <Box
            sx={{
              flex: 1,
              color: "text.primary",
              maxWidth: { xs: "100%", md: "50%" },
            }}
          >
            {/* Heading */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
                color: "text.primary",
                letterSpacing: "-0.02em",
              }}
            >
              {heading}{" "}
              <Box
                component="span"
                sx={{
                  color: "#2e7d32",
                  fontWeight: 700,
                }}
              >
                {highlight}
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.15rem" },
                mb: 4,
                lineHeight: 1.7,
                color: "text.secondary",
                maxWidth: { xs: "100%", md: "90%" },
              }}
            >
              {subtext}
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                component={Link}
                to="/sunbird-straws"
                variant="contained"
                startIcon={<LocalFloristIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(211, 182, 154, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 25px rgba(211, 182, 154, 0.5)",
                  },
                }}
              >
                Explore Our Products
              </Button>

              <Button
                component={Link}
                to="/our-story"
                variant="outlined"
                sx={{
                  px: 3,
                  py: 1.5,
                  borderColor: "primary.main",
                  color: "text.primary",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "1rem",
                  borderWidth: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.dark",
                    backgroundColor: "rgba(211, 182, 154, 0.1)",
                    borderWidth: 2,
                  },
                }}
              >
                Our Story
              </Button>
            </Box>

            {/* Trust Indicators */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mt: 4,
                pt: 4,
                borderTop: "1px solid",
                borderColor: "rgba(211, 182, 154, 0.3)",
                justifyContent: { xs: "center", md: "flex-start" },
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "primary.dark",
                    lineHeight: 1,
                  }}
                >
                  25+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Countries
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "1px",
                  height: 40,
                  backgroundColor: "rgba(211, 182, 154, 0.4)",
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "primary.dark",
                    lineHeight: 1,
                  }}
                >
                  20M+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Straws Sold
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "1px",
                  height: 40,
                  backgroundColor: "rgba(211, 182, 154, 0.4)",
                }}
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#2e7d32",
                    lineHeight: 1,
                  }}
                >
                  100%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Biodegradable
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>

        {/* Right Side - Mascots with Banner */}
        <Zoom in={animateIn} timeout={600}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
            }}
          >
            {/* Background Circle */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: "320px", sm: "420px", md: "520px" },
                height: { xs: "320px", sm: "420px", md: "520px" },
                borderRadius: "50%",
                background: `radial-gradient(circle, ${accentColor}20 0%, transparent 70%)`,
                transition: "background 0.5s ease",
              }}
            />

            {/* Mascots Container */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Mascots and Banner Row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                {/* Jojo the Turtle */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    marginRight: { xs: "-25px", sm: "-40px", md: "-60px" },
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={JojoTurtle}
                    alt="Jojo the Turtle"
                    sx={{
                      width: { xs: 140, sm: 200, md: 280 },
                      height: "auto",
                      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.18))",
                    }}
                  />
                </Box>

                {/* Banner */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      background: "linear-gradient(180deg, #c4956a 0%, #a67c52 100%)",
                      borderRadius: "12px",
                      padding: { xs: "14px 24px", sm: "18px 40px", md: "24px 55px" },
                      boxShadow: "0 10px 35px rgba(141, 110, 99, 0.35)",
                      border: "4px solid #8d6e63",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.4rem" },
                        fontWeight: 700,
                        color: "#fff",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.25)",
                        fontFamily: "'Segoe UI', sans-serif",
                        whiteSpace: "nowrap",
                      }}
                    >
                      You are Strawesome!
                    </Typography>
                  </Box>
                </Box>

                {/* Jill the Bird */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    marginLeft: { xs: "-25px", sm: "-40px", md: "-60px" },
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={JillBird}
                    alt="Jill the Bird"
                    sx={{
                      width: { xs: 120, sm: 175, md: 245 },
                      height: "auto",
                      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.18))",
                    }}
                  />
                </Box>
              </Box>

              {/* Name Tags */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: { xs: "300px", sm: "420px", md: "540px" },
                  mt: 2,
                  px: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    fontWeight: 600,
                    color: "#2e7d32",
                  }}
                >
                  Jojo
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    fontWeight: 600,
                    color: "#e65100",
                  }}
                >
                  Jill
                </Typography>
              </Box>
            </Box>
          </Box>
        </Zoom>
      </Box>
    </Box>
  );
}

export default Hero;
