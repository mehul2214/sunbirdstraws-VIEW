import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function PrivacyPolicy() {
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
          PRIVACY POLICY
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
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            This privacy policy sets out how BROWN REED AGRI-WASTE INNOVATIONS
            PRIVATE LIMITED uses and protects any information that you give when
            you use this website.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            We are committed to ensuring that your privacy is protected. Should
            we ask you to provide certain information by which you can be
            identified when using this website, you can be assured that it will
            only be used in accordance with this privacy statement.
          </Typography>
          <Typography sx={{ mb: 3, fontSize: "1rem" }}>
            BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED may change this
            policy from time to time by updating this page. You should check
            this page periodically to ensure that you are happy with any
            changes.
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
            Information We Collect and How We Use It
          </Typography>
          <List sx={{ pl: 2, mb: 3 }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Name and job title" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Contact information including email address" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Demographic information such as postcode, preferences and interests" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Other information relevant to customer surveys and/or offers" />
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
            What We Do with the Information We Gather
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </Typography>
          <List sx={{ pl: 2, mb: 3 }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Internal record keeping" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="We may use the information to improve our products and services" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address you have provided" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="From time to time, we may use your information to contact you for market research purposes via email, phone, fax or mail" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="We may use the information to customise the website according to your interests" />
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
            Controlling Your Personal Information
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            You may choose to restrict the collection or use of your personal
            information in the following ways:
          </Typography>
          <List sx={{ pl: 2, mb: 3 }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes" />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText
                primary={
                  <>
                    If you have previously agreed to us using your personal
                    information for direct marketing purposes, you may change your
                    mind at any time by writing to or emailing us at{" "}
                    <strong>info@sunbirdstraws.com</strong>
                  </>
                }
              />
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
            Security
          </Typography>
          <Typography sx={{ mb: 3, fontSize: "1rem" }}>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorized access or disclosure, we have put in
            place suitable physical, electronic and managerial procedures to
            safeguard and secure the information we collect online.
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
            How We Use Cookies
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            A cookie is a small file which asks permission to be placed on your
            computer's hard drive. Once you agree, the file is added and the
            cookie helps analyze web traffic or lets you know when you visit a
            particular site.
          </Typography>
          <Typography sx={{ mb: 3, fontSize: "1rem" }}>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer.
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
            Links to Other Websites
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
          </Typography>
          <Typography sx={{ mb: 3, fontSize: "1rem" }}>
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy statement.
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
            Correction of Information
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to or email us as soon as
            possible. We will promptly correct any information found to be
            incorrect.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default PrivacyPolicy;
