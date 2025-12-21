import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Fade,
  Zoom,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Spa as SpaIcon,
  EmojiNature as LeafIcon,
  Groups as PeopleIcon,
  Favorite as HeartIcon,
  ArrowForward as ArrowIcon,
  WorkspacePremium as AwardIcon,
} from "@mui/icons-material";

import teamCover from "../assets/Team/TeamCover.jpeg";
import founderImage from "../assets/RuralWomenEmpowerment/Women1.jpeg";
import womenImage2 from "../assets/RuralWomenEmpowerment/Women2.jpeg";
import womenImage3 from "../assets/RuralWomenEmpowerment/Women3.jpeg";

function OurTeam() {
  return (
    <Box component="section" sx={{ lineHeight: 1.6 }}>
      {/* HERO SECTION - Split Layout */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 50%, #f5ebe0 100%)",
          pt: { xs: "100px", md: "120px" },
          pb: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Left Side - Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade in timeout={800}>
                <Box>
                  {/* Accent Text */}
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontWeight: 600,
                      fontSize: "1rem",
                      mb: 1,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Meet Our People
                  </Typography>

                  {/* Main Heading */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    The Passionate Team Behind Sunbird
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      mb: 3,
                      lineHeight: 1.7,
                      maxWidth: "500px",
                    }}
                  >
                    United by a shared vision of sustainability, our diverse team works
                    tirelessly to create eco-friendly alternatives that make a real
                    difference for our planet.
                  </Typography>

                  {/* CTA Buttons */}
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      component={Link}
                      to="/our-story"
                      variant="contained"
                      endIcon={<ArrowIcon />}
                      sx={{
                        py: 1.5,
                        px: 3,
                        backgroundColor: "primary.main",
                        color: "text.primary",
                        fontWeight: 600,
                        borderRadius: "8px",
                        fontSize: "1rem",
                        textTransform: "none",
                        boxShadow: "0 4px 14px rgba(211, 182, 154, 0.4)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(211, 182, 154, 0.5)",
                        },
                      }}
                    >
                      Our Story
                    </Button>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      sx={{
                        py: 1.5,
                        px: 3,
                        borderColor: "primary.main",
                        color: "text.primary",
                        fontWeight: 600,
                        borderRadius: "8px",
                        fontSize: "1rem",
                        textTransform: "none",
                        borderWidth: "2px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.dark",
                          backgroundColor: "rgba(211, 182, 154, 0.1)",
                          borderWidth: "2px",
                        },
                      }}
                    >
                      Join Us
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            {/* Right Side - Image with Card Background */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Zoom in timeout={1000}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "300px", sm: "380px", md: "450px" },
                    height: { xs: "320px", sm: "400px", md: "470px" },
                    mx: "auto",
                  }}
                >
                  {/* Background Card - Rotated */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "5%",
                      left: "5%",
                      width: "92%",
                      height: "92%",
                      borderRadius: "24px",
                      background: "linear-gradient(145deg, #f5ebe0 0%, #e8d4c3 100%)",
                      boxShadow: "0 20px 60px rgba(166, 124, 82, 0.25), 0 8px 24px rgba(0, 0, 0, 0.1)",
                      transform: "rotate(-3deg)",
                    }}
                  />

                  {/* Image Card - Main */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "2%",
                      left: "2%",
                      width: "92%",
                      height: "92%",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 15px 50px rgba(166, 124, 82, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1)",
                      border: "5px solid #fff",
                      zIndex: 2,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={teamCover}
                      alt="Our Team"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Box>

                  {/* Floating Icons */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-5%",
                      right: "5%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1.5,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatIcon 4s ease-in-out infinite",
                      "@keyframes floatIcon": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                      },
                    }}
                  >
                    <PeopleIcon sx={{ fontSize: "28px", color: "secondary.main" }} />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "0%",
                      left: "-3%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1.2,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatIcon2 5s ease-in-out infinite",
                      "@keyframes floatIcon2": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-8px)" },
                      },
                    }}
                  >
                    <HeartIcon sx={{ fontSize: "24px", color: "error.main" }} />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: "25%",
                      left: "-5%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatIcon3 6s ease-in-out infinite",
                      "@keyframes floatIcon3": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-6px)" },
                      },
                    }}
                  >
                    <SpaIcon sx={{ fontSize: "20px", color: "success.main" }} />
                  </Box>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FOUNDER SECTION */}
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
          <Fade in timeout={600}>
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                  letterSpacing: "0.5px",
                }}
              >
                Leadership
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Meet Our Founder
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                The visionary behind Sunbird's mission
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Fade in timeout={800}>
                <Box
                  sx={{
                    position: "relative",
                    maxWidth: "400px",
                    mx: "auto",
                  }}
                >
                  {/* Background decoration */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "5%",
                      left: "5%",
                      width: "100%",
                      height: "100%",
                      borderRadius: "16px",
                      background: "linear-gradient(145deg, #e8d4c3 0%, #d3b69a 100%)",
                      transform: "rotate(-3deg)",
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                      border: "4px solid #fff",
                      zIndex: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={founderImage}
                      alt="Rishabh Shah - Founder"
                      sx={{
                        width: "100%",
                        height: { xs: "350px", md: "450px" },
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Box>

                  {/* Name Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      px: 3,
                      py: 1.5,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      zIndex: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "text.primary",
                      }}
                    >
                      Rishabh Shah
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "secondary.main",
                        fontWeight: 500,
                      }}
                    >
                      Founder & CEO
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Fade in timeout={1000}>
                <Box sx={{ mt: { xs: 4, md: 0 } }}>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    Apart from having founded an organization that has gone on to become
                    one of the world's largest youth-run organizations, Rishabh is a
                    visiting faculty at various colleges.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    Via his organization I.I.M.U.N., he has been a mentor to thousands
                    of students - many of those who have worked with him are now elected
                    members of government, civil servants, lawyers, business leaders,
                    doctors, and authors who now spread their own ideas of India.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 3,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    He also runs multiple initiatives focused on youth empowerment,
                    civic engagement, and leadership development, making a lasting
                    impact across sectors.
                  </Typography>

                  {/* Achievement Points */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {[
                      { icon: <PeopleIcon />, text: "Mentored 10,000+ Students" },
                      { icon: <AwardIcon />, text: "Founded I.I.M.U.N." },
                      { icon: <LeafIcon />, text: "Leading Sustainability Innovation" },
                    ].map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(211, 182, 154, 0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "secondary.main",
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Typography
                          sx={{
                            color: "text.primary",
                            fontWeight: 500,
                            fontSize: "1rem",
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WOMEN EMPOWERMENT SECTION */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #ffffff 0%, #fcf7f1 100%)",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          position: "relative",
        }}
      >
        {/* Subtle Floating Decoration */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            opacity: 0.1,
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}
        >
          <HeartIcon sx={{ fontSize: "80px", color: "primary.main" }} />
        </Box>

        <Container maxWidth="lg">
          {/* Section Header */}
          <Fade in timeout={600}>
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                  letterSpacing: "0.5px",
                }}
              >
                Our Strength
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Empowering Rural Women
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "650px",
                  mx: "auto",
                }}
              >
                At the heart of Sunbird are the skilled women artisans who craft
                each straw with care and precision
              </Typography>
            </Box>
          </Fade>

          {/* Women Images Grid */}
          <Grid container spacing={3} justifyContent="center">
            {[
              { image: founderImage, name: "Production Team", location: "Kerala" },
              { image: womenImage2, name: "Artisan Group", location: "Karnataka" },
              { image: womenImage3, name: "Crafting Unit", location: "Tamil Nadu" },
            ].map((woman, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Fade in timeout={800 + index * 200}>
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                      },
                      "&:hover img": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={woman.image}
                      alt={woman.name}
                      sx={{
                        width: "100%",
                        height: { xs: "280px", md: "320px" },
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    {/* Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                        p: 2.5,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                        }}
                      >
                        {woman.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "0.9rem",
                        }}
                      >
                        {woman.location}
                      </Typography>
                    </Box>
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Stats */}
          <Fade in timeout={1200}>
            <Box
              sx={{
                mt: 5,
                p: 4,
                backgroundColor: "rgba(211, 182, 154, 0.1)",
                borderRadius: "16px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 3, md: 6 },
              }}
            >
              {[
                { value: "500+", label: "Women Employed" },
                { value: "5", label: "Production Centers" },
                { value: "3", label: "States Covered" },
              ].map((stat, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: 700,
                      color: "secondary.main",
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "1rem",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* JOIN US CTA SECTION */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #fcf7f1 0%, #f5ebe0 100%)",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="md">
          <Fade in timeout={800}>
            <Box
              sx={{
                textAlign: "center",
                p: { xs: 4, md: 6 },
                backgroundColor: "#fff",
                borderRadius: "24px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Typography
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                  letterSpacing: "0.5px",
                }}
              >
                Be Part of Our Journey
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Join Our Mission
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 4,
                  maxWidth: "500px",
                  mx: "auto",
                  lineHeight: 1.7,
                }}
              >
                Whether you're looking to partner with us, join our team, or simply
                support our cause - we'd love to hear from you.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  endIcon={<ArrowIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    backgroundColor: "success.main",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "8px",
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(0, 123, 94, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#005f47",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(0, 123, 94, 0.4)",
                    },
                  }}
                >
                  Get in Touch
                </Button>
                <Button
                  component={Link}
                  to="/sunbird-straws"
                  variant="outlined"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderColor: "text.secondary",
                    color: "text.primary",
                    fontWeight: 600,
                    borderRadius: "8px",
                    fontSize: "1rem",
                    textTransform: "none",
                    borderWidth: "2px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "text.primary",
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                      borderWidth: "2px",
                    },
                  }}
                >
                  View Products
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}

export default OurTeam;
