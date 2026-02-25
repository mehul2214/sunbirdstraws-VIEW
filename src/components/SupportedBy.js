import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";

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

// Logo Card Component
const LogoCard = ({ logo, index, isPaused }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        flex: "0 0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: isHovered
          ? "0 10px 30px rgba(0, 0, 0, 0.15)"
          : "0 2px 12px rgba(0, 0, 0, 0.04)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: isHovered
          ? "translateY(-8px) scale(1.05)"
          : "translateY(0) scale(1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shimmer effect on hover */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "200%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(211,182,154,0.3), transparent)",
          animation: isHovered ? "logoShimmer 0.6s ease-out" : "none",
          "@keyframes logoShimmer": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
          },
        }}
      />

      <Box
        component="img"
        src={logo}
        alt={`Partner ${index + 1}`}
        sx={{
          maxWidth: { xs: 120, md: 140 },
          maxHeight: { xs: 70, md: 80 },
          objectFit: "contain",
          filter: isHovered ? "none" : "grayscale(20%)",
          opacity: isHovered ? 1 : 0.85,
          transition: "all 0.3s ease",
        }}
      />
    </Box>
  );
};

function SupportedBy() {
  const [sectionRef, isInView] = useInView(0.2);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f5ebe0 100%)",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "2px dashed rgba(211,182,154,0.2)",
          animation: "rotateDeco 15s linear infinite",
          "@keyframes rotateDeco": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "2px dashed rgba(166,124,82,0.15)",
          animation: "rotateDeco 20s linear infinite reverse",
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            animation: isInView ? "headerFadeIn 0.8s ease-out both" : "none",
            "@keyframes headerFadeIn": {
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
            Supported By
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            Trusted partners in our sustainability journey
          </Typography>
        </Box>

        {/* Scroll Container */}
        <Box
          sx={{ overflow: "hidden", width: "100%" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
              animation: "scrollLogos 45s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              willChange: "transform",
              "@keyframes scrollLogos": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {/* Original logos */}
            {logos.map((logo, index) => (
              <LogoCard key={index} logo={logo} index={index} isPaused={isPaused} />
            ))}
            {/* Duplicate for seamless scroll */}
            {logos.map((logo, index) => (
              <LogoCard
                key={`dup-${index}`}
                logo={logo}
                index={index}
                isPaused={isPaused}
              />
            ))}
          </Box>
        </Box>

        {/* Hover instruction */}
        <Typography
          sx={{
            mt: 3,
            fontSize: "0.85rem",
            color: "text.secondary",
            opacity: 0.7,
            animation: isInView ? "fadeIn 0.6s ease-out 0.8s both" : "none",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 0.7 },
            },
          }}
        >
          Hover to pause and explore our partners
        </Typography>
      </Container>
    </Box>
  );
}

export default SupportedBy;
