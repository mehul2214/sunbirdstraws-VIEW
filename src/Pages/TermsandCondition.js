import React from "react";
import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

function TermsandCondition() {
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
          TERMS AND CONDITIONS
        </Typography>
        <Typography
          sx={{
            fontSize: "0.95rem",
            color: "text.secondary",
            textAlign: "center",
            mb: 4,
          }}
        >
          <strong>Last updated: Jan 7th, 2025</strong>
        </Typography>

        <Box sx={{ color: "text.primary", lineHeight: 1.8 }}>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            The Website Owner, including subsidiaries and affiliates ("Website"
            or "Website Owner" or "we" or "us" or "our") provides the
            information contained on the website or any of the pages comprising
            the website ("website") to visitors ("visitors") (cumulatively
            referred to as "you" or "your" hereinafter) subject to the terms and
            conditions set out in these website terms and conditions, the
            privacy policy and any other relevant terms and conditions, policies
            and notices which may be applicable to a specific section or module
            of the website.
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            Welcome to our website. If you continue to browse and use this
            website you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern BROWN REED AGRI-WASTE INNOVATIONS PRIVATE
            LIMITED's relationship with you in relation to this website.
          </Typography>
          <Typography sx={{ mb: 3, fontSize: "1rem" }}>
            The term 'BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED' or 'us'
            or 'we' refers to the owner of the website whose
            registered/operational office is 595 D, Group Employees Layout, 1st
            A Block, Lingadheeranahalli, Bangalore, KARNATAKA 560091. The term
            'you' refers to the user or viewer of our website.
          </Typography>

          <Typography sx={{ mb: 2, fontSize: "1rem", fontWeight: 600 }}>
            The use of this website is subject to the following terms of use:
          </Typography>
          <List sx={{ pl: 2, mb: 3 }}>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="The content of the pages of this website is for your general information and use only. It is subject to change without notice." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="You may not create a link to this website from another website or document without BROWN REED AGRI-WASTE INNOVATIONS PRIVATE LIMITED's prior written consent." />
            </ListItem>
            <ListItem sx={{ display: "list-item", listStyleType: "disc", py: 0.5 }}>
              <ListItemText primary="Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority." />
            </ListItem>
          </List>

          <Typography
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: "rgba(211, 182, 154, 0.1)",
              borderRadius: "8px",
              fontSize: "0.95rem",
              fontStyle: "italic",
            }}
          >
            We as a merchant shall be under no liability whatsoever in respect
            of any loss or damage arising directly or indirectly out of the
            decline of authorization for any Transaction, on Account of the
            Cardholder having exceeded the preset limit mutually agreed by us
            with our acquiring bank from time to time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default TermsandCondition;
