import React from "react";
import { Box, Container, Typography, Fade } from "@mui/material";
import strawIcon from "../assets/ImpactSection/Strawsicon.jpg";
import co2Icon from "../assets/ImpactSection/co2emission.jpg";
import womenIcon from "../assets/ImpactSection/ruralwomengraphic.webp";

const impactData = [
  {
    icon: strawIcon,
    number: "10M+",
    text: "Plastic Straws kept out of our oceans",
  },
  {
    icon: co2Icon,
    number: "415 kgs",
    text: "of CO₂ emissions prevented",
  },
  {
    icon: womenIcon,
    number: "110+",
    text: "Rural Women empowered with jobs",
  },
];

function Impact() {
  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(180deg, #f5ebe0 0%, #ffffff 100%)",
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
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
            <Fade in key={index} timeout={600 + index * 200}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "100%", md: 300 },
                  maxWidth: { xs: 320, md: 300 },
                  mx: { xs: "auto", md: 0 },
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: "100%",
                    py: 3,
                    px: 2,
                    backgroundColor: "#faf7f4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.icon}
                    alt={item.text}
                    sx={{
                      width: { xs: 90, md: 100 },
                      height: { xs: 90, md: 100 },
                      objectFit: "contain",
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
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.8rem", md: "2rem" },
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 0.5,
                    }}
                  >
                    {item.number}
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
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Impact;
