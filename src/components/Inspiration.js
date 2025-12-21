import React from "react";
import { Box, Container, Typography, Fade } from "@mui/material";
import inspirationImage from "../assets/inspiration.jpeg";

function Inspiration() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "linear-gradient(180deg, #ffffff 0%, #fcf7f1 100%)",
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
            Our Inspiration
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            Preserving the environment through sustainable innovation
          </Typography>
        </Box>

        {/* Content */}
        <Fade in timeout={800}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Image Block */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "0 1 45%" },
                maxWidth: { xs: "100%", md: 500 },
              }}
            >
              <Box
                component="img"
                src={inspirationImage}
                alt="Rural women working on eco-friendly straws"
                sx={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Box>

            {/* Text Block */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "0 1 50%" },
                maxWidth: { xs: "100%", md: 550 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  color: "text.primary",
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Preserving The Environment And Empowering Rural Communities
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  Given that climate change is the most significant disruptor of
                  our time, preserving the environment and empowering rural
                  communities - one green innovation at a time - are central to our
                  philosophy.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
                    Sunbird Straws
                  </Box>{" "}
                  are made from anti-waste that would otherwise be burned,
                  contributing to already high levels of carbon emissions.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    color: "text.secondary",
                    lineHeight: 1.7,
                  }}
                >
                  Our innovation aims to reduce the plastic threat endangering our
                  oceans and aquatic life by promoting a sustainable lifestyle.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Inspiration;
