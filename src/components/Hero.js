import React from "react";
import { Box, Typography } from "@mui/material";

// Mascot images
import JojoTurtle from "../assets/WhatsApp_Image_2025-12-29_at_20.38.43-removebg-preview.png";
import JillBird from "../assets/WhatsApp_Image_2025-12-29_at_20.38.43__1_-removebg-preview.png";

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: { xs: "auto", md: "70vh" },
        mt: 0,
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        background: "#fcf7f1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Main Container - Jill | Message | Jojo */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 6 },
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Jill the Bird - LEFT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            order: { xs: 1, md: 0 },
          }}
        >
          <Box
            component="img"
            src={JillBird}
            alt="Jill the Bird"
            sx={{
              width: { xs: 180, sm: 250, md: 320 },
              height: "auto",
            }}
          />
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 600,
              color: "#e65100",
            }}
          >
            Jill
          </Typography>
        </Box>

        {/* Center Message */}
        <Box
          sx={{
            textAlign: "center",
            order: { xs: 0, md: 1 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "2rem" },
              fontFamily: "'Howdybun', cursive",
              color: "text.secondary",
              mb: 2,
            }}
          >
            Together, we are
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
              fontFamily: "'Howdybun', cursive",
              color: "#2e7d32",
              mb: 1,
            }}
          >
            #people against poverty
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
              fontFamily: "'Howdybun', cursive",
              color: "#1565c0",
              mb: 3,
            }}
          >
            #people against pollution
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
              fontFamily: "'Howdybun', cursive",
              color: "text.primary",
            }}
          >
            Join the community today
          </Typography>
        </Box>

        {/* Jojo the Turtle - RIGHT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            order: { xs: 2, md: 2 },
          }}
        >
          <Box
            component="img"
            src={JojoTurtle}
            alt="Jojo the Turtle"
            sx={{
              width: { xs: 200, sm: 280, md: 360 },
              height: "auto",
            }}
          />
          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
              fontWeight: 600,
              color: "#2e7d32",
            }}
          >
            Jojo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
