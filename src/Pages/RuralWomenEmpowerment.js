import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid
} from '@mui/material';

// Image Imports
import StoriesChangeImg from '../assets/Rural Women Empowerment.jpeg';
import Muthulakshmi1 from '../assets/Muthulakshmi1.jpg';
import MuthulakshmiFamily from '../assets/Muthulakshmi Family Image.png';

// SPECIFIC GALLERY IMAGES FOR THE BOTTOM ROW
import WomenEmpowerment2 from '../assets/Women Empowerment2.jpg';
import WomenEmpowerment3 from '../assets/Women Empowerment3.jpg';
import WomenEmpowerment4 from '../assets/Women Empowerment4.jpeg';

const RuralWomenEmpowerment = () => {
  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh', color: '#000000', pb: 10 }}>
      
      {/* 1. HERO SECTION */}
      <Box sx={{ pt: { xs: 14, md: 16 }, pb: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
              Rural Women Empowerment
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, color: '#913175', letterSpacing: 1 }}>
              #Just a Straw
            </Typography>
          </Box>

          <Box sx={{ 
            position: 'relative', 
            maxWidth: '1100px', 
            mx: 'auto', 
            overflow: 'hidden',
            borderRadius: '4px',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.1)'
          }}>
            <Box
              component="img"
              src={StoriesChangeImg}
              sx={{ width: '100%', height: '450px', objectFit: 'cover', display: 'block' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '5%', 
                transform: 'translateY(-50%)',
                width: { xs: '85%', md: '50%' }, 
                bgcolor: 'rgba(255, 255, 255, 0.85)', 
                p: { xs: 3, md: 5 },
                textAlign: 'left',
                zIndex: 2,
              }}
            >
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 2, color: '#000000' }}>
                From whispered dreams to fearless action, we stand with every woman at each step of their journey.
              </Typography>
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, mb: 2, color: '#000000' }}>
                Together, we imagine a future where every woman can rise, lead, and shine with dignity.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. STORY SECTION: WALK WITH MUTHULAKSHMI */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ fontWeight: 800, mb: 8, fontSize: { xs: '2rem', md: '2.5rem' } }}
        >
          Walk with Muthulakshmi on her journey
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography 
                sx={{ 
                  fontSize: '1.15rem', 
                  lineHeight: 1.8, 
                  mb: 6, 
                  color: '#000',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                Meet Muthulakshmi, whose radiant smile brightens our Thoothukudi factory daily.
                <br />
                Deaf and previously unemployed.
                <br />
                Her life transformed when she found work close to home.
                <br />
                Once reliant on her husband's income and earning ₹175 per day,
                <br />
                <strong>Muthulakshmi's perseverance has seen her salary grow to ₹250 per day.</strong>
                <br />
                Her improved income not only enhanced her standard of living but also enabled her to
                <br />
                achieve financial independence and secure loans from the bank.
                <br />
                Today, <strong>Muthulakshmi is one of our most active workers, overcoming challenges with extraordinary dedication.</strong>
              </Typography>

              <Box
                component="img"
                src={MuthulakshmiFamily}
                sx={{ width: '100%', maxWidth: '420px', borderRadius: '12px', display: 'block', mx: 'auto' }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={Muthulakshmi1}
              sx={{ width: '100%', maxWidth: '450px', height: 'auto', display: 'block', mx: 'auto' }}
            />
          </Grid>
        </Grid>

        {/* 3. FINAL SECTION: CENTERED TEXT & THE SMALL ROW OF IMAGES */}
        <Box sx={{ textAlign: 'center', mt: 15, mb: 6 }}>
           <Typography sx={{ fontSize: '1.25rem', fontWeight: 400, mb: 0.5, color: '#000' }}>
             Her story highlights the transformative power of opportunity and our commitment to inclusion.
           </Typography>
           <Typography sx={{ fontSize: '1.25rem', fontWeight: 400, color: '#000' }}>
             Celebrate Muthulakshmi’s empowerment and the change we can foster together!
           </Typography>
        </Box>

        {/* This Box ensures they are SMALL and in ONE LINE */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 2, 
          maxWidth: '850px', 
          mx: 'auto',
          flexWrap: 'nowrap' // Prevents wrapping to second line
        }}>
          <Box 
            component="img" 
            src={WomenEmpowerment3} 
            sx={{ width: '33%', height: '220px', objectFit: 'cover', borderRadius: '4px' }} 
          />
          <Box 
            component="img" 
            src={WomenEmpowerment2} 
            sx={{ width: '33%', height: '220px', objectFit: 'cover', borderRadius: '4px' }} 
          />
          <Box 
            component="img" 
            src={WomenEmpowerment4} 
            sx={{ width: '33%', height: '220px', objectFit: 'cover', borderRadius: '4px' }} 
          />
        </Box>
      </Container>
    </Box>
  );
};

export default RuralWomenEmpowerment;