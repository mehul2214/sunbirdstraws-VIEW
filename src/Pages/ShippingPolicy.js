import React from "react";
import { Box, Container, Typography } from "@mui/material";

function ShippingPolicy() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        mt: { xs: "80px", md: "100px" },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: 700,
            color: "text.primary",
            textAlign: "center",
            mb: 1,
          }}
        >
          SHIPPING POLICY
        </Typography>
        <Typography
          sx={{
            fontSize: "0.95rem",
            color: "text.secondary",
            textAlign: "center",
            mb: 4,
          }}
        >
          <strong>Last updated on Jun 7th 2025</strong>
        </Typography>

        <Box sx={{ color: "text.primary", lineHeight: 1.8 }}>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            For International buyers, orders are shipped and delivered through
            registered international courier companies and/or International
            speed post only.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            For domestic buyers, orders are shipped through registered domestic
            courier companies and/or speed post only.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            Orders are shipped within 3–5 days or as per the delivery date
            agreed at the time of order confirmation, and delivery of the
            shipment is subject to courier company / post office norms.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED is not liable for
            any delay in delivery by the courier company / postal authorities
            and only guarantees to hand over the consignment to the courier
            company or postal authorities within 3–5 days from the date of the
            order and payment, or as per the delivery date agreed at the time of
            order confirmation.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            Delivery of all orders will be to the address provided by the buyer.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            Delivery of our services will be confirmed on your mail ID as
            specified during registration.
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>
            For any issues in utilizing our services, you may contact our
            helpdesk at <strong>info@sunbirdstraws.com</strong>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default ShippingPolicy;
