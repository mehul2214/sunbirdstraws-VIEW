import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/Logo New .webp";

function Footer() {
  const footerLinks = [
    { label: "Home Page", path: "/" },
    { label: "Contact Us", path: "/contact" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Cancellation & Refund Policy", path: "/cancellation-refund-policy" },
    { label: "Shipping Policy", path: "/shipping-policy" },
  ];

  const linkStyles = {
    fontSize: "1rem",
    color: "#000000",
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "primary.dark",
    },
  };

  const socialLinkStyles = {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: "text.primary",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#4caf50",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f9f9f9",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        color: "text.primary",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Logo Section */}
          <Box
            sx={{
              flex: "1 1 200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Sunbird Logo"
              sx={{
                maxWidth: 220,
                height: "auto",
              }}
            />
          </Box>

          {/* Address Section */}
          <Box sx={{ flex: "1 1 200px", mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 2,
                color: "text.primary",
              }}
            >
              Company Address
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#000000", mb: 0.75 }}>
              Brown Reed Agri-Waste Innovations Pvt Ltd
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#000000", mb: 0.75 }}>
              #59 D, Group Employees Layout, 1st A Block,
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#000000", mb: 0.75 }}>
              Lingadeeranahalli, Bangalore, Karnataka, India - 560091
            </Typography>
          </Box>

          {/* Information Section */}
          <Box sx={{ flex: "1 1 200px", mb: { xs: 3, md: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 2,
                color: "text.primary",
              }}
            >
              Information
            </Typography>
            <Stack spacing={0.75}>
              {footerLinks.map((link) => (
                <Box
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={linkStyles}
                >
                  {link.label}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Contact & Social Section */}
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 2,
                color: "text.primary",
              }}
            >
              Contact
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#000000", mb: 0.75 }}>
              Ph No. +91 90350 78109
            </Typography>
            <Typography sx={{ fontSize: "1rem", color: "#000000", mb: 0.75 }}>
              Email - info@sunbirdstraws.com
            </Typography>

            <Box sx={{ height: "1.5rem" }} />

            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 600,
                mb: 2,
                color: "text.primary",
              }}
            >
              Follow
            </Typography>
            <Stack
              spacing={1}
              sx={{
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                component="a"
                href="https://www.instagram.com/sunbirdstraws"
                target="_blank"
                rel="noopener noreferrer"
                sx={socialLinkStyles}
              >
                <InstagramIcon sx={{ fontSize: "1.2rem" }} />
                <span>Instagram</span>
              </Box>
              <Box
                component="a"
                href="https://in.linkedin.com/company/sunbirdstraws"
                target="_blank"
                rel="noopener noreferrer"
                sx={socialLinkStyles}
              >
                <LinkedInIcon sx={{ fontSize: "1.2rem" }} />
                <span>LinkedIn</span>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
