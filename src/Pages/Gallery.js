import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Gallery() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        mt: { xs: "80px", md: "100px" },
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "text.primary",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Gallery
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "text.secondary",
          }}
        >
          Coming soon...
        </Typography>
      </Container>
    </Box>
  );
}

export default Gallery;
