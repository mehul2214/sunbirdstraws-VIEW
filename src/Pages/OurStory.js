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
  Public as GlobeIcon,
  Groups as PeopleIcon,
  EnergySavingsLeaf as EcoIcon,
  ArrowForward as ArrowIcon,
  LocalFlorist as FlowerIcon,
} from "@mui/icons-material";

import heroImage from "../assets/OurStory/Welcomourstory.jpeg";
import problemImage from "../assets/OurStory/TheProblemImage.png";
import solutionImage from "../assets/OurStory/TheSolutionCoconut.png";
import mapImage from "../assets/OurStory/mapfromglobalshift.png";

function OurStory() {
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
                    Our Journey
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
                    It All Began With Something Simple
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
                    A straw. Something small we use every day, yet one that leaves
                    behind long-lasting environmental impact. We believed there had
                    to be a better way.
                  </Typography>

                  {/* CTA Buttons */}
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      component={Link}
                      to="/sunbird-straws"
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
                      Our Products
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
                      Get in Touch
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
                      src={heroImage}
                      alt="Sunbird Story"
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
                    <SpaIcon sx={{ fontSize: "28px", color: "secondary.main" }} />
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
                    <LeafIcon sx={{ fontSize: "24px", color: "primary.main" }} />
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
                    <EcoIcon sx={{ fontSize: "20px", color: "success.main" }} />
                  </Box>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* THE PROBLEM SECTION */}
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
                The Challenge
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
                The Problem We Saw
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Every convenience comes with a hidden cost to our planet
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade in timeout={800}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={problemImage}
                    alt="Plastic Straws Problem"
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    Something small that we use every day, yet one that leaves behind
                    long-lasting environmental waste.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    Plastic straws pollute long before they reach our drinks, and
                    paper ones don't last long, leaving chemicals behind.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    Somewhere between convenience and care, we forgot the cost of
                    every sip.
                  </Typography>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: "rgba(211, 182, 154, 0.15)",
                      borderRadius: "12px",
                      borderLeft: "4px solid",
                      borderColor: "secondary.main",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontStyle: "italic",
                        fontSize: { xs: "1.1rem", md: "1.2rem" },
                        color: "text.primary",
                      }}
                    >
                      "Can something so small be made right?"
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* THE ANSWER FROM NATURE SECTION */}
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
          <SpaIcon sx={{ fontSize: "80px", color: "primary.main" }} />
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
                The Solution
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
                The Answer From Nature
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                When we searched for an answer, we looked towards nature
              </Typography>
            </Box>
          </Fade>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <Fade in timeout={1000}>
                <Box>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    We found our answer in the fallen coconut leaf. Something that was
                    once burned as waste is now a sustainable alternative, crafted into
                    strong, safe, and earth-friendly straws.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 2.5,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    This simple shift showed us that meaningful innovation doesn't
                    damage nature - it teams with it.
                  </Typography>
                  <Typography
                    sx={{
                      mb: 3,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    That's how Sunbird began: with a commitment to sustainable choices
                    and a better way to sip.
                  </Typography>

                  {/* Feature Points */}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {[
                      { icon: <EcoIcon />, text: "100% Natural & Biodegradable" },
                      { icon: <FlowerIcon />, text: "Made from Fallen Coconut Leaves" },
                      { icon: <PeopleIcon />, text: "Empowering Rural Communities" },
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
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
              <Fade in timeout={800}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={solutionImage}
                    alt="Nature Solution - Coconut Leaf"
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* GLOBAL IMPACT SECTION */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 100%)",
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
                Our Reach
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
                From a Village Idea to a Global Shift
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "650px",
                  mx: "auto",
                }}
              >
                Our journey has always been about people and purpose. From rural roots
                to 25+ countries, we've proven that meaningful change starts small.
              </Typography>
            </Box>
          </Fade>

          {/* Map Image */}
          <Fade in timeout={800}>
            <Box
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: 5,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box
                component="img"
                src={mapImage}
                alt="Global Impact Map"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Fade>

          {/* Impact Stats */}
          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <GlobeIcon />, value: "25+", label: "Countries Reached" },
              { icon: <PeopleIcon />, value: "500+", label: "Women Empowered" },
              { icon: <EcoIcon />, value: "5", label: "Production Centers" },
            ].map((stat, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Fade in timeout={800 + index * 200}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      backgroundColor: "#fff",
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
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(211, 182, 154, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        color: "secondary.main",
                      }}
                    >
                      {React.cloneElement(stat.icon, { sx: { fontSize: "28px" } })}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        fontWeight: 700,
                        color: "text.primary",
                        mb: 0.5,
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
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Additional Info */}
          <Fade in timeout={1200}>
            <Box
              sx={{
                mt: 5,
                p: 4,
                backgroundColor: "rgba(211, 182, 154, 0.1)",
                borderRadius: "16px",
                textAlign: "center",
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                Across five production centers in Kerala, Karnataka, and Tamil Nadu,
                Sunbird builds livelihoods for local women while staying rooted in nature.
                Every straw represents a step towards a cleaner planet and stronger communities.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* FINAL CTA SECTION */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #ffffff 0%, #fcf7f1 100%)",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade in timeout={800}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={problemImage}
                    alt="Join Our Mission"
                    sx={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </Box>
              </Fade>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade in timeout={1000}>
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
                    Join Us
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
                    Be Part of the Change
                  </Typography>

                  <Typography
                    sx={{
                      mb: 3,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      color: "text.secondary",
                      lineHeight: 1.8,
                    }}
                  >
                    Today, we take steps towards a cleaner planet and empower rural
                    women with new skills and livelihoods. Join us in making a
                    difference - one straw at a time.
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      component={Link}
                      to="/sunbird-straws"
                      variant="contained"
                      endIcon={<ArrowIcon />}
                      sx={{
                        py: 1.5,
                        px: 3,
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
                      Explore Our Products
                    </Button>
                    <Button
                      component={Link}
                      to="/our-team"
                      variant="outlined"
                      sx={{
                        py: 1.5,
                        px: 3,
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
                      Meet Our Team
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default OurStory;
