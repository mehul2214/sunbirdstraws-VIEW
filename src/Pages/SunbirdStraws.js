import React from "react";
import { Box, Typography, Card, CardContent, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

import product1 from "../assets/SunbirdStraws/Bobastraws.jpg";
import product2 from "../assets/SunbirdStraws/Bobastraws.jpg";
import product3 from "../assets/SunbirdStraws/Bobastraws.jpg";

const products = [
  { image: product1, name: "Boba Straw" },
  { image: product2, name: "Regular Straw" },
  { image: product3, name: "Eco Pack" },
];

function SunbirdStraws() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        maxWidth: 1200,
        mx: "auto",
        textAlign: "center",
        mt: { xs: "80px", md: "100px" },
      }}
    >
      {/* Hero Section */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            color: "text.primary",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Sunbird Straws
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "text.secondary",
            mb: 4,
            lineHeight: 1.6,
            maxWidth: 800,
            mx: "auto",
          }}
        >
          Our premium straws are crafted from dried coconut leaves - 100%
          biodegradable, chemical-free, and designed for elegance. Whether it's
          smoothies, boba tea, or cocktails, Sunbird Straws offer a sustainable
          sip with style.
        </Typography>
      </Box>

      {/* Product Showcase */}
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "background.default",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                p: 2,
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.1rem",
                    color: "text.primary",
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box>
        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "text.primary",
          }}
        >
          To buy Sunbird Straws, please{" "}
          <MuiLink
            component={Link}
            to="/contact"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              textDecoration: "underline",
              "&:hover": {
                color: "primary.dark",
              },
            }}
          >
            contact us
          </MuiLink>
          .
        </Typography>
      </Box>
    </Box>
  );
}

export default SunbirdStraws;
