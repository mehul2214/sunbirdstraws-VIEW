import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import strawIcon from "../assets/ImpactSection/Strawsicon.jpg";
import co2Icon from "../assets/ImpactSection/co2emission.jpg";
import womenIcon from "../assets/ImpactSection/ruralwomengraphic.webp";

const impactData = [
  {
    icon: strawIcon,
    number: "10M+",
    text: "Plastic Straws kept out of our oceans",
    color: "#2e7d32",
  },
  {
    icon: co2Icon,
    number: "415",
    suffix: " kgs",
    text: "of CO₂ emissions prevented",
    color: "#1976d2",
  },
  {
    icon: womenIcon,
    number: "110+",
    text: "Rural Women empowered with jobs",
    color: "#a67c52",
  },
];

// Counter Animation Hook
const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }

    const endValue = parseInt(end.replace(/[^0-9]/g, "")) || 0;
    const startTime = Date.now();

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(endValue * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(updateCount);
      }
    };

    countRef.current = requestAnimationFrame(updateCount);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, duration, startCounting]);

  const suffix = end.replace(/[0-9]/g, "");
  return `${count}${suffix}`;
};

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

// Impact Card Component
const ImpactCard = ({ item, index, isInView }) => {
  const displayNumber = useCountUp(item.number, 2500, isInView);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setTilt({ x: -y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Box
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: { xs: "100%", md: 300 },
        maxWidth: { xs: 320, md: 300 },
        mx: { xs: "auto", md: 0 },
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        boxShadow: isHovered
          ? "0 15px 40px rgba(0, 0, 0, 0.15)"
          : "0 4px 20px rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
        transform: `
          perspective(1000px)
          rotateX(${tilt.x}deg)
          rotateY(${tilt.y}deg)
          translateY(${isHovered ? -10 : 0}px)
        `,
        animation: isInView
          ? `cardFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s both`
          : "none",
        "@keyframes cardFlyIn": {
          "0%": {
            opacity: 0,
            transform: "translateY(60px) rotateX(10deg) scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) rotateX(0) scale(1)",
          },
        },
      }}
    >
      {/* Icon Container */}
      <Box
        sx={{
          width: "100%",
          py: 3,
          px: 2,
          backgroundColor: "#faf7f4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            animation: isHovered ? "shimmer 0.8s ease-out" : "none",
            "@keyframes shimmer": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(100%)" },
            },
          }}
        />
        <Box
          component="img"
          src={item.icon}
          alt={item.text}
          sx={{
            width: { xs: 90, md: 100 },
            height: { xs: 90, md: 100 },
            objectFit: "contain",
            transition: "transform 0.3s ease",
            animation: isHovered ? "iconBounce 0.6s ease" : "none",
            "@keyframes iconBounce": {
              "0%, 100%": { transform: "scale(1)" },
              "25%": { transform: "scale(1.15) rotate(-5deg)" },
              "50%": { transform: "scale(0.95)" },
              "75%": { transform: "scale(1.05) rotate(5deg)" },
            },
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: 3,
          textAlign: "center",
          backgroundColor: "primary.light",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Animated background particles */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  position: "absolute",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  opacity: 0.3,
                  left: `${20 + i * 15}%`,
                  bottom: 0,
                  animation: `particleRise 1s ease-out ${i * 0.1}s forwards`,
                  "@keyframes particleRise": {
                    "0%": { transform: "translateY(0)", opacity: 0.3 },
                    "100%": { transform: "translateY(-40px)", opacity: 0 },
                  },
                }}
              />
            ))}
          </>
        )}

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", md: "2.2rem" },
            fontWeight: 700,
            color: item.color,
            mb: 0.5,
            animation: isInView
              ? `numberPop 0.5s ease-out ${index * 0.15 + 0.3}s both`
              : "none",
            "@keyframes numberPop": {
              "0%": { transform: "scale(0.5)", opacity: 0 },
              "50%": { transform: "scale(1.2)" },
              "100%": { transform: "scale(1)", opacity: 1 },
            },
          }}
        >
          {displayNumber}
          {item.suffix || ""}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.9rem",
            color: "text.secondary",
            lineHeight: 1.4,
          }}
        >
          {item.text}
        </Typography>
      </Box>
    </Box>
  );
};

function Impact() {
  const [sectionRef, isInView] = useInView(0.2);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        background: "linear-gradient(180deg, #f5ebe0 0%, #ffffff 100%)",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(211,182,154,0.15) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "3%",
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(166,124,82,0.1) 0%, transparent 70%)",
          animation: "float 8s ease-in-out 1s infinite",
        }}
      />

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            animation: isInView ? "headerSlide 0.8s ease-out both" : "none",
            "@keyframes headerSlide": {
              "0%": { opacity: 0, transform: "translateY(-30px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "secondary.main",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 1,
              animation: isInView ? "bounceIn 0.6s ease-out 0.2s both" : "none",
              "@keyframes bounceIn": {
                "0%": { opacity: 0, transform: "scale(0.5)" },
                "50%": { transform: "scale(1.1)" },
                "100%": { opacity: 1, transform: "scale(1)" },
              },
            }}
          >
            Our Impact
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1.5,
            }}
          >
            Together, We Are Creating Change
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            Making an impact, one straw at a time
          </Typography>
        </Box>

        {/* Impact Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 3, md: 4 },
            flexWrap: "wrap",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
          }}
        >
          {impactData.map((item, index) => (
            <ImpactCard key={index} item={item} index={index} isInView={isInView} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Impact;
