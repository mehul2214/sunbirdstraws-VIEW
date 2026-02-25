import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import NatureIcon from "@mui/icons-material/Nature";
import inspirationImage from "../assets/inspiration.jpeg";

// Intersection Observer Hook
const useInView = (threshold = 0.3) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

function Inspiration() {
  const [sectionRef, isInView] = useInView(0.2);
  const [imageHovered, setImageHovered] = useState(false);

  const paragraphs = [
    "Given that climate change is the most significant disruptor of our time, preserving the environment and empowering rural communities - one green innovation at a time - are central to our philosophy.",
    "Sunbird Straws are made from agri-waste that would otherwise be burned, contributing to already high levels of carbon emissions.",
    "Our innovation aims to reduce the plastic threat endangering our oceans and aquatic life by promoting a sustainable lifestyle.",
  ];

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #fcf7f1 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating background decorations */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "5%",
          opacity: 0.08,
          animation: "floatLeaf1 8s ease-in-out infinite",
          "@keyframes floatLeaf1": {
            "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
            "50%": { transform: "translateY(-20px) rotate(15deg)" },
          },
        }}
      >
        <SpaIcon sx={{ fontSize: 60, color: "#2e7d32" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "8%",
          opacity: 0.06,
          animation: "floatLeaf2 10s ease-in-out 2s infinite",
          "@keyframes floatLeaf2": {
            "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
            "50%": { transform: "translateY(-25px) rotate(-10deg)" },
          },
        }}
      >
        <NatureIcon sx={{ fontSize: 50, color: "#8d6e63" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: "15%",
          opacity: 0.05,
          animation: "floatLeaf3 12s ease-in-out 1s infinite",
          "@keyframes floatLeaf3": {
            "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
            "50%": { transform: "translateY(-15px) rotate(10deg)" },
          },
        }}
      >
        <SpaIcon sx={{ fontSize: 40, color: "#d3b69a" }} />
      </Box>

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            animation: isInView ? "fadeSlideDown 0.8s ease-out both" : "none",
            "@keyframes fadeSlideDown": {
              "0%": { opacity: 0, transform: "translateY(-30px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1.5,
            }}
          >
            Our Inspiration
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            Preserving the environment through sustainable innovation
          </Typography>
        </Box>

        {/* Content */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Image Block with floating decoration */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 1 45%" },
              maxWidth: { xs: "100%", md: 500 },
              position: "relative",
              animation: isInView ? "slideInLeft 0.8s ease-out 0.3s both" : "none",
              "@keyframes slideInLeft": {
                "0%": { opacity: 0, transform: "translateX(-50px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            {/* Decorative circle behind image */}
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                width: "50%",
                height: "50%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(211,182,154,0.3) 0%, transparent 70%)",
                animation: "pulse 4s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
                  "50%": { transform: "scale(1.1)", opacity: 0.5 },
                },
              }}
            />

            <Box
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
              sx={{ position: "relative" }}
            >
              <Box
                component="img"
                src={inspirationImage}
                alt="Rural women working on eco-friendly straws"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: imageHovered
                    ? "0 20px 50px rgba(0, 0, 0, 0.2)"
                    : "0 8px 30px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: imageHovered ? "scale(1.02) rotate(1deg)" : "scale(1) rotate(0deg)",
                }}
              />

            </Box>
          </Box>

          {/* Text Block with staggered animation */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 1 50%" },
              maxWidth: { xs: "100%", md: 550 },
              textAlign: { xs: "center", md: "left" },
              animation: isInView ? "slideInRight 0.8s ease-out 0.4s both" : "none",
              "@keyframes slideInRight": {
                "0%": { opacity: 0, transform: "translateX(50px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.4rem", md: "1.6rem" },
                color: "text.primary",
                mb: 3,
                fontWeight: 600,
                animation: isInView ? "fadeIn 0.6s ease-out 0.5s both" : "none",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0 },
                  "100%": { opacity: 1 },
                },
              }}
            >
              Preserving The Environment And Empowering Rural Communities
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {paragraphs.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: "text.secondary",
                    lineHeight: 1.7,
                    animation: isInView
                      ? `paragraphSlide 0.6s ease-out ${0.6 + index * 0.15}s both`
                      : "none",
                    "@keyframes paragraphSlide": {
                      "0%": { opacity: 0, transform: "translateY(20px)" },
                      "100%": { opacity: 1, transform: "translateY(0)" },
                    },
                  }}
                >
                  {index === 1 ? (
                    <>
                      <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
                        Sunbird Straws
                      </Box>{" "}
                      are made from agri-waste that would otherwise be burned, contributing to
                      already high levels of carbon emissions.
                    </>
                  ) : (
                    text
                  )}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Inspiration;
