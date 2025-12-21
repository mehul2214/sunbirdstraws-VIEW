import React from "react";
import { Box, Container, Typography, Fade } from "@mui/material";

import swadeshIcon from "../assets/AwardsRecognition/UpdatedSwadesStartupIcon.png";
import honeybeeIcon from "../assets/AwardsRecognition/HoneyBeeInclusive.webp";
import leapIcon from "../assets/AwardsRecognition/LeaptoUnicorn.webp";
import agriIcon from "../assets/AwardsRecognition/AgriIndiaHackathon.svg";
import swissIcon from "../assets/AwardsRecognition/UpdatedMassChallengeSwitzerland.png";

const awards = [
  { logo: swadeshIcon, label: "Winner" },
  { logo: honeybeeIcon, label: "Awardee" },
  { logo: leapIcon, label: "Top 100" },
  { logo: agriIcon, label: "Winner" },
  { logo: swissIcon, label: "Winner" },
];

function Awards() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 100%)",
        textAlign: "center",
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
        <Fade in timeout={800}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 3, md: 4 },
            }}
          >
            {awards.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: { xs: "100%", sm: "45%", md: "18%" },
                  maxWidth: { xs: 280, md: 200 },
                  p: 3,
                  backgroundColor: "#ffffff",
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
                  alt={`Award ${index + 1}`}
                  sx={{
                    width: "100%",
                    maxWidth: { xs: 140, md: 160 },
                    height: { xs: 100, md: 120 },
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "text.primary",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Awards;
