import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, IconButton, Card } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import LeelaLogo from "../assets/Testimonals/TheLeelaPalaceHotels.png";
import GrandMercureLogo from "../assets/Testimonals/GrandMercure.png";
import ChaiDaysLogo from "../assets/Testimonals/ChaiDays.png";
import FourSeasonLogo from "../assets/Testimonals/FourSeasonslogo.png";

const testimonials = [
  {
    logo: LeelaLogo,
    quote:
      "One of the kind product! Never believed it was made from coconut leaves, the premium quality and the customised packaging was hooked.",
    author: "Apachu Ajay",
    rating: 5,
    color: "#f9a825",
  },
  {
    logo: GrandMercureLogo,
    quote:
      "Sunbird Straws have not only received an overwhelming response from our guests but they have also aligned perfectly with our sustainability goal.",
    author: "Keshav",
    rating: 5,
    color: "#66bb6a",
  },
  {
    logo: FourSeasonLogo,
    quote:
      "Amazing products, we were using at least two paper straws, it was getting soggy within a minute inside the beverage. This product is right on spot.",
    author: "Nanda Kumar",
    rating: 5,
    color: "#42a5f5",
  },
  {
    logo: ChaiDaysLogo,
    quote:
      "A game changer in food and beverage industry. The eco-friendly straws have drastically reduced the wastage we generate everyday.",
    author: "Rasheed Babu",
    rating: 5,
    color: "#ab47bc",
  },
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

// Testimonial Card Component
const TestimonialCard = ({ item, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        flex: "0 0 auto",
        minWidth: { xs: 280, md: 320 },
        maxWidth: { xs: 280, md: 320 },
        p: 4,
        textAlign: "center",
        borderRadius: "20px",
        boxShadow: isHovered
          ? `0 20px 50px ${item.color}30`
          : "0 4px 20px rgba(0, 0, 0, 0.06)",
        transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transform: isHovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Quote icon decoration */}
      <Box
        sx={{
          position: "absolute",
          top: 15,
          left: 15,
          opacity: isHovered ? 0.2 : 0.1,
          transform: isHovered ? "scale(1.2) rotate(-10deg)" : "scale(1) rotate(0deg)",
          transition: "all 0.3s ease",
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 50, color: item.color }} />
      </Box>

      {/* Shimmer effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "200%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, ${item.color}15, transparent)`,
          animation: isHovered ? "cardShimmer 0.8s ease-out" : "none",
          "@keyframes cardShimmer": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
          },
        }}
      />

      {/* Logo */}
      <Box
        component="img"
        src={item.logo}
        alt={item.author}
        sx={{
          maxWidth: 120,
          maxHeight: 60,
          objectFit: "contain",
          mb: 3,
          transition: "transform 0.3s ease",
          animation: isHovered ? "logoPop 0.5s ease" : "none",
          "@keyframes logoPop": {
            "0%, 100%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.1)" },
          },
        }}
      />

      {/* Stars */}


      {/* Quote */}
      <Typography
        component="blockquote"
        sx={{
          fontSize: "1rem",
          color: "text.secondary",
          lineHeight: 1.7,
          mb: 3,
          fontStyle: "italic",
          position: "relative",
          zIndex: 1,
        }}
      >
        "{item.quote}"
      </Typography>

      {/* Author with animated underline */}
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <Typography
          component="cite"
          sx={{
            fontWeight: 600,
            color: isHovered ? item.color : "text.primary",
            fontSize: "0.95rem",
            fontStyle: "normal",
            transition: "color 0.3s ease",
          }}
        >
          — {item.author}
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
    </Card>
  );
};

function Testimonials() {
  const scrollRef = useRef(null);
  const [sectionRef, isInView] = useInView(0.2);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 32;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction) => {
    const newIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, testimonials.length - 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % testimonials.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 320 + 32;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const track = scrollRef.current;
    if (track) {
      track.addEventListener("scroll", handleScroll);
      return () => track.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #f5ebe0 0%, #fcf7f1 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          opacity: 0.05,
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 150, color: "#d3b69a" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          opacity: 0.03,
          transform: "rotate(180deg)",
        }}
      >
        <FormatQuoteIcon sx={{ fontSize: 100, color: "#a67c52" }} />
      </Box>

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
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1.5,
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            We go extra miles together
          </Typography>
        </Box>

        {/* Testimonial Cards Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, md: 4 },
              width: "100%",
            }}
          >
            {/* Left Arrow */}
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                backgroundColor: "#ffffff",
                border: "2px solid",
                borderColor: "primary.main",
                width: 48,
                height: 48,
                color: "primary.dark",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#ffffff",
                  transform: "scale(1.15) translateX(-3px)",
                  boxShadow: "0 6px 20px rgba(211, 182, 154, 0.4)",
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            {/* Scrollable Track */}
            <Box
              ref={scrollRef}
              sx={{
                display: "flex",
                overflowX: "auto",
                scrollBehavior: "smooth",
                gap: 4,
                pr: 4,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {testimonials.map((item, index) => (
                <TestimonialCard
                  key={index}
                  item={item}
                  index={index}
                  isActive={activeIndex === index}
                />
              ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                backgroundColor: "#ffffff",
                border: "2px solid",
                borderColor: "primary.main",
                width: 48,
                height: 48,
                color: "primary.dark",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#ffffff",
                  transform: "scale(1.15) translateX(3px)",
                  boxShadow: "0 6px 20px rgba(211, 182, 154, 0.4)",
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          {/* Animated Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              gap: 1.5,
            }}
          >
            {testimonials.map((item, index) => (
              <Box
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                sx={{
                  width: activeIndex === index ? 28 : 10,
                  height: 10,
                  borderRadius: activeIndex === index ? "5px" : "50%",
                  backgroundColor:
                    activeIndex === index ? item.color : "rgba(0,0,0,0.15)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                  "&:hover": {
                    backgroundColor:
                      activeIndex === index ? item.color : "rgba(0,0,0,0.25)",
                    transform: "scale(1.2)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonials;
