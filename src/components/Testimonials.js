import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, IconButton, Card } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
  },
  {
    logo: GrandMercureLogo,
    quote:
      "Sunbird Straws have not only received an overwhelming response from our guests but they have also aligned perfectly with our sustainability goal.",
    author: "Keshav",
  },
  {
    logo: FourSeasonLogo,
    quote:
      "Amazing products, we were using at least two paper straws, it was getting soggy within a minute inside the beverage. This product is right on spot.",
    author: "Nanda Kumar",
  },
  {
    logo: ChaiDaysLogo,
    quote:
      "A game changer in food and beverage industry. The eco-friendly straws have drastically reduced the wastage we generate everyday.",
    author: "Rasheed Babu",
  },
];

function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = 320 + 32; // card + gap
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
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #f5ebe0 0%, #fcf7f1 100%)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
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
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#ffffff",
                  transform: "scale(1.1)",
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
                <Card
                  key={index}
                  sx={{
                    flex: "0 0 auto",
                    minWidth: { xs: 280, md: 320 },
                    maxWidth: { xs: 280, md: 320 },
                    p: 4,
                    textAlign: "center",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={item.logo}
                    alt={item.author}
                    sx={{
                      maxWidth: 120,
                      maxHeight: 60,
                      objectFit: "contain",
                      mb: 3,
                    }}
                  />
                  <Typography
                    component="blockquote"
                    sx={{
                      fontSize: "1rem",
                      color: "text.secondary",
                      lineHeight: 1.7,
                      mb: 3,
                      fontStyle: "italic",
                    }}
                  >
                    "{item.quote}"
                  </Typography>
                  <Typography
                    component="cite"
                    sx={{
                      fontWeight: 600,
                      color: "text.primary",
                      fontSize: "0.95rem",
                      fontStyle: "normal",
                    }}
                  >
                    — {item.author}
                  </Typography>
                </Card>
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
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "#ffffff",
                  transform: "scale(1.1)",
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>

          {/* Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              gap: 1,
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                sx={{
                  width: activeIndex === index ? 24 : 10,
                  height: 10,
                  borderRadius: activeIndex === index ? "5px" : "50%",
                  backgroundColor: index === activeIndex ? "primary.main" : "rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: index === activeIndex ? "primary.main" : "rgba(0,0,0,0.25)",
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
