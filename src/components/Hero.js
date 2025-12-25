import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Fade, Zoom } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import SpaIcon from "@mui/icons-material/Spa";
import GrassIcon from "@mui/icons-material/Grass";

import slide1 from "../assets/landingpage.png";
import slide2 from "../assets/GoGreen.jpeg";
import slide3 from "../assets/imageforstatr.jpg";

const slides = [
  {
    image: slide1,
    heading: (
      <>
        World's First Premium Straws & Pens From{" "}
        <Box component="span" sx={{ color: "#2e7d32", fontWeight: 700 }}>
          coconut leaves
        </Box>
      </>
    ),
    subtext:
      "Innovative, sustainable and stylish alternatives to traditional plastics.",
    accentColor: "#f9a825",
  },
  {
    image: slide2,
    heading: "Eco-Friendly Products That Make a Difference",
    subtext: "Join the movement toward conscious consumption and zero waste.",
    accentColor: "#66bb6a",
  },
  {
    image: slide3,
    heading: (
      <Box component="span" sx={{ color: "#5a3e2b", fontWeight: 700 }}>
        Innovation Rooted in Nature
      </Box>
    ),
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
      }, 400);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { image, heading, subtext, accentColor } = slides[currentSlide];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: { xs: "100vh", md: "100vh" },
        mt: 0,
        pt: { xs: "100px", md: "140px" },
        background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 30%, #fcf7f1 60%, #f5ebe0 100%)",
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
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* Large decorative circle - extends behind navbar */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-15%", md: "-20%" },
            right: { xs: "-20%", md: "0%" },
            width: { xs: "90vw", md: "60vw" },
            height: { xs: "90vw", md: "60vw" },
            maxWidth: "900px",
            maxHeight: "900px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accentColor}25 0%, ${accentColor}10 50%, transparent 70%)`,
            transition: "background 0.8s ease",
          }}
        />

        {/* Floating leaf decorations */}
        <Fade in={animateIn} timeout={1200}>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "15%", md: "20%" },
              right: { xs: "5%", md: "8%" },
              opacity: 0.15,
              transform: "rotate(25deg)",
            }}
          >
            <SpaIcon sx={{ fontSize: { xs: 40, md: 60 }, color: "#2e7d32" }} />
          </Box>
        </Fade>

        <Fade in={animateIn} timeout={1400}>
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "20%", md: "25%" },
              right: { xs: "15%", md: "35%" },
              opacity: 0.12,
              transform: "rotate(-15deg)",
            }}
          >
            <GrassIcon sx={{ fontSize: { xs: 35, md: 50 }, color: "#8d6e63" }} />
          </Box>
        </Fade>

        <Fade in={animateIn} timeout={1600}>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "60%", md: "65%" },
              left: { xs: "5%", md: "10%" },
              opacity: 0.1,
              transform: "rotate(45deg)",
            }}
          >
            <LocalFloristIcon sx={{ fontSize: { xs: 30, md: 45 }, color: "#d3b69a" }} />
          </Box>
        </Fade>

        {/* Subtle pattern dots */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "repeat(5, 8px)",
            gap: "12px",
            opacity: 0.15,
          }}
        >
          {[...Array(15)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#d3b69a",
              }}
            />
          ))}
        </Box>
      </Box>

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
        <Fade in={animateIn} timeout={600}>
          <Box
            sx={{
              flex: 1,
              color: "text.primary",
              maxWidth: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
                fontWeight: 700,
                mb: 3,
                lineHeight: 1.2,
                color: "text.primary",
                letterSpacing: "-0.02em",
              }}
            >
              {heading}
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
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 25px rgba(211, 182, 154, 0.5)",
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

            {/* Trust indicators */}
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
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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

        {/* Hero Image */}
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
          {/* Image container with decorative background */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Circular background behind image */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: "280px", sm: "350px", md: "420px" },
                height: { xs: "280px", sm: "350px", md: "420px" },
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
                boxShadow: `0 20px 60px ${accentColor}40`,
                transition: "all 0.8s ease",
              }}
            />

            {/* Secondary decorative ring */}
            <Box
              sx={{
                position: "absolute",
                width: { xs: "320px", sm: "400px", md: "480px" },
                height: { xs: "320px", sm: "400px", md: "480px" },
                borderRadius: "50%",
                border: "2px dashed",
                borderColor: `${accentColor}40`,
                transition: "border-color 0.8s ease",
                animation: "spin 30s linear infinite",
                "@keyframes spin": {
                  "0%": { transform: "rotate(0deg)" },
                  "100%": { transform: "rotate(360deg)" },
                },
              }}
            />

            {/* Product Image */}
            <Zoom in={animateIn} timeout={800}>
              <Box
                component="img"
                src={image}
                alt="Hero Slide"
                sx={{
                  position: "relative",
                  width: { xs: "260px", sm: "320px", md: "400px" },
                  height: { xs: "260px", sm: "320px", md: "400px" },
                  objectFit: "cover",
                  borderRadius: "50%",
                  zIndex: 2,
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.15))",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.05) rotate(2deg)",
                  },
                }}
              />
            </Zoom>

            {/* Floating badge */}
            <Fade in={animateIn} timeout={1200}>
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: "10%", md: "15%" },
                  left: { xs: "-5%", md: "-10%" },
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  px: 2,
                  py: 1.5,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  zIndex: 3,
                }}
              >
                <SpaIcon sx={{ color: "#2e7d32", fontSize: 24 }} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      color: "text.secondary",
                      lineHeight: 1,
                    }}
                  >
                    Made from
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#2e7d32",
                      lineHeight: 1.2,
                    }}
                  >
                    Coconut Leaves
                  </Typography>
                </Box>
              </Box>
            </Fade>

            {/* Another floating element */}
            <Fade in={animateIn} timeout={1400}>
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "5%", md: "10%" },
                  right: { xs: "-5%", md: "-15%" },
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: { xs: 50, md: 65 },
                  height: { xs: 50, md: 65 },
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                }}
              >
                <GrassIcon sx={{ color: "#8d6e63", fontSize: { xs: 24, md: 32 } }} />
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default Hero;
