import React from "react";
import { Box, Container, Typography } from "@mui/material";

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

function SupportedBy() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #f5ebe0 100%)",
        textAlign: "center",
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
        <Box sx={{ overflow: "hidden", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              animation: "scrollLogos 60s linear infinite",
              willChange: "transform",
              "@keyframes scrollLogos": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {/* Original logos */}
            {logos.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    maxWidth: { xs: 120, md: 140 },
                    maxHeight: { xs: 70, md: 80 },
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
            {/* Duplicate for seamless scroll */}
            {logos.map((logo, index) => (
              <Box
                key={`dup-${index}`}
                sx={{
                  flex: "0 0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  sx={{
                    maxWidth: { xs: 120, md: 140 },
                    maxHeight: { xs: 70, md: 80 },
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SupportedBy;
