import React from 'react';
import { Box, Typography, Container, Grid, Button, TextField } from '@mui/material';

const Initiatives = () => {
  return (
    <Box sx={{ bgcolor: '#913175', color: 'white', py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        
        {/* --- SECTION 1: PURPLE PARITY PLEDGE --- */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'white' }}>
            Purple Parity Pledge
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, color: 'white', opacity: 0.9 }}>
            About Our Initiative
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={10} sx={{ textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 2, fontWeight: 500 }}>
                Our Purple Parity Pledge reflects our commitment to people.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 2 }}>
                It is our promise that each person in this journey benefits with dignity, fairness, and opportunity.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 2 }}>
                At Sunbird, sustainability is not only about what we make, it is about who we uplift along the way.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 2 }}>
                An ecosystem where people matter as much as the planet. No compromises. No exceptions.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* --- SECTION 2: WHY OUR PLEDGE MATTERS --- */}
        <Box sx={{ mb: 15 }}>
          <Typography variant="h5" textAlign="center" sx={{ mb: 6, fontWeight: 'bold' }}>
            Why Our Pledge Matters
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: 'Equality', icon: '⚖️' },
              { title: 'Fairness', icon: '🤝' },
              { title: 'Transparency', icon: '📋' },
              { title: 'Women Empowerment', icon: '♀️' }
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Box sx={{ 
                  bgcolor: 'white', 
                  color: '#913175', 
                  p: 4, 
                  borderRadius: '12px', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <Typography variant="h2" sx={{ mb: 2 }}>{item.icon}</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Button variant="contained" sx={{ 
                    bgcolor: '#68bb59', 
                    borderRadius: '50px', 
                    textTransform: 'lowercase',
                    px: 3,
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#58a349' } 
                  }}>
                    read more
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- SECTION 3: STORIES OF CHANGE --- */}
        <Box sx={{ bgcolor: 'white', color: '#913175', p: { xs: 4, md: 8 }, borderRadius: '24px', mb: 12 }}>
          <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', mb: 1 }}>
            Stories of Change
          </Typography>
          <Typography variant="subtitle1" textAlign="center" sx={{ mb: 6 }}>
            Because "just a straw" can change an entire life.
          </Typography>
          
          <Box sx={{ textAlign: 'center', maxWidth: '850px', mx: 'auto' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
              Ayya: From Charcoal to a Greener Tomorrow
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
              Under the burning Chettikulam sun, Ayya once produced charcoal, a job that harmed his lungs, the environment, and his hopes for better days.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
              Everything changed when he joined a Sunbird training program. He learned to collect and process fallen coconut leaves, turning waste into biodegradable straws.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
              Today, Ayya earns a steady income, breathes cleaner air, and takes pride in work that heals the planet.
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              "Just a straw... but for Ayya, it became the foundation of a healthier livelihood and a greener future."
            </Typography>
          </Box>
        </Box>

        {/* --- SECTION 4: GIVING BACK --- */}
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>Giving Back to Society</Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>Real change begins with participation.</Typography>
          <Typography variant="body1" sx={{ maxWidth: '900px', mx: 'auto', mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
            Purple Parity Pledge takes shape on the ground through shared spaces where people come together to learn, question, create, and act.
          </Typography>
        </Box>

        {/* --- SECTION 5: IMPACT FOOTER --- */}
        <Grid container alignItems="center" sx={{ pt: 8, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Ready to Make an Impact?</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 4, md: 0 } }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Join the Sunbird community
            </Typography>
            <TextField 
              placeholder="Drop your email here" 
              variant="outlined" 
              fullWidth
              sx={{ 
                bgcolor: 'white', 
                borderRadius: '50px',
                '& .MuiOutlinedInput-root': { borderRadius: '50px' },
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
              }} 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Initiatives;