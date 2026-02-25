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
      {/* HERO SECTION - Full Width Image Overlay */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "420px", sm: "520px", md: "620px" },
          mt: { xs: "64px", md: "80px" },
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Our Story"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            filter: "brightness(0.75) saturate(0.85)",
          }}
        />
        {/* Warm light overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(245, 235, 210, 0.25)",
          }}
        />
        {/* Text overlay - centered */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 800,
              color: "#2d4a1e",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              mb: 1,
              lineHeight: 1.1,
            }}
          >
            Our Story
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 700,
              color: "#2d4a1e",
              letterSpacing: "0.02em",
            }}
          >
            It all began with something simple: A Straw
          </Typography>
        </Box>
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
          <Grid container spacing={0} alignItems="stretch">
            {/* Left - Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                component="img"
                src={problemImage}
                alt="Plastic Straws Problem"
                sx={{
                  width: "100%",
                  height: { xs: "280px", md: "100%" },
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>
            {/* Right - Content */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  px: { xs: 3, md: 6 },
                  py: { xs: 4, md: 6 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.4rem" },
                    fontWeight: 800,
                    color: "#1a1a1a",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    mb: 4,
                  }}
                >
                  The Problem
                </Typography>
                <Typography sx={{ fontSize: { xs: "1rem", md: "1.05rem" }, color: "#444", lineHeight: 1.8, mb: 2.5 }}>
                  Something small that we use every day, yet one that leaves behind long-lasting environmental waste.
                </Typography>
                <Typography sx={{ fontSize: { xs: "1rem", md: "1.05rem" }, color: "#444", lineHeight: 1.8, mb: 2.5 }}>
                  Plastic straws pollute long before they reach our drinks, and paper ones don't last long, leaving chemicals behind.
                </Typography>
                <Typography sx={{ fontSize: { xs: "1rem", md: "1.05rem" }, color: "#444", lineHeight: 1.8, mb: 4 }}>
                  Somewhere between convenience and care, we forgot the cost of every sip.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontStyle: "italic",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                    color: "#1a1a1a",
                  }}
                >
                  "Can something so small be made right?"
                </Typography>
              </Box>
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
                      color: "text.primary",
                      fontWeight: 600,
                      fontStyle: "italic",
                      lineHeight: 1.8,
                    }}
                  >
                    Join us in making a difference - one straw at a time.
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      component={Link}
                      to="/initiatives"
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
                      Our Initiatives
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
