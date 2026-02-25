import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import swadeshIcon from "../assets/AwardsRecognition/UpdatedSwadesStartupIcon.png";
import honeybeeIcon from "../assets/AwardsRecognition/HoneyBeeInclusive.webp";
import leapIcon from "../assets/AwardsRecognition/LeaptoUnicorn.webp";
import agriIcon from "../assets/AwardsRecognition/AgriIndiaHackathon.svg";
import swissIcon from "../assets/AwardsRecognition/UpdatedMassChallengeSwitzerland.png";

const awards = [
  { logo: swadeshIcon, label: "Winner", color: "#f9a825" },
  { logo: honeybeeIcon, label: "Awardee", color: "#66bb6a" },
  { logo: leapIcon, label: "Top 100", color: "#42a5f5" },
  { logo: agriIcon, label: "Winner", color: "#ab47bc" },
  { logo: swissIcon, label: "Winner", color: "#ef5350" },
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

// Award Card Component
const AwardCard = ({ item, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: { xs: "100%", sm: "45%", md: "18%" },
        maxWidth: { xs: 280, md: 200 },
        p: 3,
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: isHovered
          ? `0 15px 40px ${item.color}30`
          : "0 4px 20px rgba(0, 0, 0, 0.06)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: isHovered ? "translateY(-12px) scale(1.03)" : "translateY(0) scale(1)",
        position: "relative",
        overflow: "hidden",
        animation: isInView
          ? `fanIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`
          : "none",
        "@keyframes fanIn": {
          "0%": {
            opacity: 0,
            transform: `translateY(50px) rotate(${(index - 2) * 10}deg) scale(0.8)`,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) rotate(0) scale(1)",
          },
        },
      }}
    >
      {/* Shimmer overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "200%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
          animation: isHovered ? "shimmerSweep 0.8s ease-out" : "none",
          "@keyframes shimmerSweep": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
          },
        }}
      />

      {/* Glowing border on hover */}
      <Box
        sx={{
          position: "absolute",
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          borderRadius: "22px",
          background: `linear-gradient(45deg, ${item.color}, transparent, ${item.color})`,
          opacity: isHovered ? 0.5 : 0,
          transition: "opacity 0.3s ease",
          zIndex: -1,
        }}
      />

      {/* Trophy icon (shows on hover) */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-45deg)",
          transition: "all 0.3s ease",
        }}
      >
        <EmojiEventsIcon sx={{ color: item.color, fontSize: 24 }} />
      </Box>

      {/* Award Logo */}
      <Box
        component="img"
        src={item.logo}
        alt={`Award ${index + 1}`}
        sx={{
          width: "100%",
          maxWidth: { xs: 160, md: 180 },
          height: { xs: 120, md: 140 },
          objectFit: "contain",
          mb: 2,
          transition: "transform 0.4s ease",
          animation: isHovered ? "logoWiggle 0.5s ease" : "none",
          "@keyframes logoWiggle": {
            "0%, 100%": { transform: "rotate(0deg) scale(1)" },
            "25%": { transform: "rotate(-3deg) scale(1.05)" },
            "75%": { transform: "rotate(3deg) scale(1.05)" },
          },
        }}
      />

      {/* Label with animated underline */}
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: isHovered ? item.color : "text.primary",
            textAlign: "center",
            lineHeight: 1.4,
            transition: "color 0.3s ease",
          }}
        >
          {item.label}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            width: isHovered ? "100%" : "0%",
            height: 2,
            backgroundColor: item.color,
            transform: "translateX(-50%)",
            transition: "width 0.3s ease",
            borderRadius: 1,
          }}
        />
      </Box>

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          {[...Array(4)].map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: item.color,
                bottom: "20%",
                left: `${20 + i * 20}%`,
                animation: `floatUp 1s ease-out ${i * 0.1}s forwards`,
                "@keyframes floatUp": {
                  "0%": { transform: "translateY(0) scale(1)", opacity: 0.6 },
                  "100%": { transform: "translateY(-30px) scale(0)", opacity: 0 },
                },
              }}
            />
          ))}
        </>
      )}
    </Box>
  );
};

function Awards() {
  const [sectionRef, isInView] = useInView(0.2);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background circles */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "2px dashed rgba(211,182,154,0.2)",
          animation: "rotateSlow 20s linear infinite",
          "@keyframes rotateSlow": {
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
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "2px dashed rgba(166,124,82,0.15)",
          animation: "rotateSlow 25s linear infinite reverse",
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            animation: isInView ? "slideDown 0.8s ease-out both" : "none",
            "@keyframes slideDown": {
              "0%": { opacity: 0, transform: "translateY(-40px)" },
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
            Awards & Recognition
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            Celebrating milestones on a sustainable journey
          </Typography>
        </Box>

        {/* Awards Grid */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 3, md: 4 },
          }}
        >
          {awards.map((item, index) => (
            <AwardCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Awards;
