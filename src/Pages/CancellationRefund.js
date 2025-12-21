import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function CancellationRefund() {
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
          CANCELLATION & REFUND POLICY
        </Typography>
        <Typography
          sx={{
            fontSize: "0.95rem",
            color: "text.secondary",
            textAlign: "center",
            mb: 4,
          }}
        >
          <strong>Last updated on June 7th 2025</strong>
        </Typography>

        <Box sx={{ color: "text.primary", lineHeight: 1.8 }}>
          <Typography sx={{ mb: 3, fontSize: "1rem" }}>
            At BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED, we strive to
            deliver quality products and services. If you are not entirely
            satisfied with your purchase, we're here to help.
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "text.primary",
              mt: 3,
              mb: 2,
            }}
          >
            Cancellation Policy
          </Typography>
          <List sx={{ pl: 2, mb: 3 }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText
                primary={
                  <>
                    To cancel, please contact our support team at{" "}
                    <strong>info@sunbirdstraws.com</strong>.
                  </>
                }
              />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Once the order is processed or shipped, cancellation is not possible." />
            </ListItem>
          </List>

          <Typography
            variant="h3"
            sx={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "text.primary",
              mt: 3,
              mb: 2,
            }}
          >
            Refund Policy
          </Typography>
          <List sx={{ pl: 2, mb: 3 }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Refunds are applicable only for damaged products." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="To request a refund, please email us with photos of the product within 24 hours of delivery." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Approved refunds will be processed within 7–10 business days." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Shipping charges are non-refundable." />
            </ListItem>
          </List>

          <Typography sx={{ fontSize: "1rem" }}>
            For any questions regarding cancellation or refund, feel free to
            reach out to us at <strong>info@sunbirdstraws.com</strong>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CancellationRefund;
