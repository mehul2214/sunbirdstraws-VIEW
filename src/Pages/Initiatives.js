import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
  InputBase
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Image Imports
import ParityPledge from '../assets/parity-pledge.png';
import EqualityLogo from '../assets/Equality.png';
import FairnessLogo from '../assets/Fairness.png';
import TransparencyLogo from '../assets/Transparency.png';
import WomenEmpowermentLogo from '../assets/Women empowerment logo.png';
import GivingBack1 from '../assets/Giving back to society1.jpg';
import GivingBack2 from '../assets/Giving back to society2.jpg';
import StoriesOfChangeImg from '../assets/Stories of changes.png'; 
import ReadyToMakeImpactImg from '../assets/Ready to make impact.jpg'; 

const Initiatives = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(null);

  const handleOpen = (id) => setOpenDialog(id);
  const handleClose = () => setOpenDialog(null);

  const dialogData = {
    equality: { 
      title: "Equality", 
      text: (
        <>
          <strong>Everyone deserves to be seen, heard, and valued.</strong> At Sunbird, Every face in our community tells a different story, yet they all deserve the same rhythm of respect. From the voices often silenced to the dreams deferred, we are writing a new chapter where opportunity is a shared right. Walk with us as we build a space where each person is valued, every voice adds meaning, and no one is left unseen.
        </>
      )
    },
    fairness: { 
      title: "Fairness", 
      text: (
        <>
          <strong>Barriers don’t define potential.</strong> We break barriers, create real opportunities, and provide support where it’s needed most. Because everyone deserves a fair chance to succeed, no matter the obstacles in their path.
        </>
      )
    },
    transparency: { 
      title: "Transparency", 
      text: (
        <>
          <strong>Trust grows where honesty leads.</strong> Honesty lights the path, and trust grows deeper as we move ahead. We believe in open actions, clear intentions, and shared responsibility. With transparency in every step, we build a community rooted in trust and accountability.
        </>
      )
    },
    women: {
      title: "Women Empowerment",
      text: "Sunbird straws empower women by creating meaningful livelihood opportunities through sustainable craftsmanship.",
      showLink: true
    }
  };

  return (
    <Box sx={{ bgcolor: '#913175', minHeight: '100vh', color: '#ffffff', pb: 0 }}>

      {/* 1. PURPLE PARITY PLEDGE SECTION */}
      <Container maxWidth="lg" sx={{ py: 10, pt: { xs: 14, md: 16 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" sx={{ fontWeight: 700, color: '#fff', fontSize: { xs: '2.4rem', md: '3.2rem' } }}>
            Purple Parity Pledge
          </Typography>
          <Typography variant="h4" sx={{ mt: 4, fontWeight: 500, color: '#fff' }}>
            About Our Initiative
          </Typography>
        </Box>

        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ 
              fontSize: '1.2rem', 
              lineHeight: 1.5, 
              maxWidth: 580, 
              fontWeight: 400, 
              color: '#ffffff' 
            }}>
              Our Purple Parity Pledge reflects our commitment to people. It is our promise that each person in this journey benefits with dignity, fairness, and opportunity. At Sunbird, sustainability is not only about what we make, It is about who we uplift along the way. An ecosystem where people matter as much as the planet.
              No compromises. No exceptions.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', pl: { md: 10 } }}>
            <Box 
              component="img" 
              src={ParityPledge} 
              sx={{ 
                width: 420, 
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' 
              }} 
            />
          </Grid>
        </Grid>
      </Container>

      {/* 2. WHY OUR PLEDGE MATTERS SECTION */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 6, color: '#fff' }}>
          Why Our Pledge Matters
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {[
            { id: 'equality', img: EqualityLogo, label: 'Equality' },
            { id: 'fairness', img: FairnessLogo, label: 'Fairness' },
            { id: 'transparency', img: TransparencyLogo, label: 'Transparency' },
            { id: 'women', img: WomenEmpowermentLogo, label: <>Women <br /> Empowerment</> }
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{
                bgcolor: '#fff', p: 3, borderRadius: 2, textAlign: 'center', width: '100%', maxWidth: '280px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', minHeight: '220px'
              }}>
                <Box component="img" src={item.img} sx={{ height: 80, mb: 2 }} />
                <Typography sx={{ color: '#913175', fontWeight: 600, mb: 2 }}>{item.label}</Typography>
                
                <Button 
                  onClick={() => handleOpen(item.id)} 
                  sx={{ 
                    background: 'linear-gradient(to right, #00a859, #8dc63f)', 
                    color: '#fff', 
                    textTransform: 'none', 
                    borderRadius: '50px', 
                    px: 3,
                    fontWeight: 600,
                    '&:hover': { 
                      background: 'linear-gradient(to right, #008f4c, #7ab336)',
                    }, 
                    mt: 'auto' 
                  }}
                >
                  read more
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Divider sx={{ bgcolor: '#ffffff', height: '1.5px', opacity: 0.8 }} />
      </Container>

      {/* 3. GIVING BACK TO SOCIETY SECTION */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', pb: 8 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, color: '#ffffff', fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
          Giving Back to Society
        </Typography>
        <Typography variant="h5" sx={{ mb: 3, color: '#ffffff', fontWeight: 400, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
          Real change begins with participation.
        </Typography>
        
        <Box sx={{ maxWidth: '1000px', mx: 'auto', mb: 5 }}>
            <Typography sx={{ 
                fontSize: '1.15rem', 
                lineHeight: 1.3, 
                color: '#ffffff',
                textAlign: 'center'
            }}>
                Purple Parity Pledge takes shape on the ground through shared spaces where people come together to learn, question, create, and act.
                The sessions are designed not as lectures, but as conversations, where knowledge moves both ways and every voice holds value.
                By engaging women, youth, and local communities in hands-on activities, we make sustainability inclusive for all.
            </Typography>
        </Box>

        <Typography sx={{ fontSize: '1.15rem', fontWeight: 600, mb: 4, mt: 12, color: '#ffffff' }}>
          Glimpse of Activity Conducted
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, maxWidth: '1100px', mx: 'auto', mb: 4 }}>
          <Box component="img" src={GivingBack1} sx={{ width: '48%', height: '380px', objectFit: 'cover', borderRadius: '4px' }} />
          <Box component="img" src={GivingBack2} sx={{ width: '48%', height: '380px', objectFit: 'cover', borderRadius: '4px' }} />
        </Box>

        <Box sx={{ maxWidth: '800px', mx: 'auto', mt: 2 }}>
            <Typography sx={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 500, mb: 1 }}>
                These moments matter because they build confidence, and the belief that change is possible when it is collective.
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 500 }}>
                Here, learning does not stop at understanding.
            </Typography>
        </Box>
      </Container>

      {/* 4. STORIES OF CHANGE SECTION */}
      <Box sx={{ bgcolor: '#ffffff', py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#913175' }}>Stories of Change</Typography>
            <Typography sx={{ color: '#913175', fontSize: '1.25rem', mt: 1 }}>Because “just a straw” can change an entire life.</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
            <Box sx={{ flex: 1.2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#913175', mb: 4 }}>Ayya: From Charcoal to a Greener Tomorrow</Typography>
              <Box sx={{ color: '#913175', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Typography sx={{ fontSize: '1.15rem', lineHeight: 1.5, color: '#913175' }}>Under the burning Chettikulam sun, Ayya once produced charcoal, a job that harmed his lungs, the environment, and his hopes for better days.</Typography>
                <Typography sx={{ fontSize: '1.15rem', lineHeight: 1.5, color: '#913175' }}>Everything changed when he joined a Sunbird training program.</Typography>
                <Typography sx={{ fontSize: '1.15rem', lineHeight: 1.5, color: '#913175' }}>He learned to collect and process fallen coconut leaves, turning waste into biodegradable straws.</Typography>
                <Typography sx={{ fontSize: '1.15rem', lineHeight: 1.5, color: '#913175' }}>Today, Ayya earns a steady income, breathes cleaner air, and takes pride in work that heals the planet.</Typography>
                <Typography sx={{ fontSize: '1.15rem', mt: 1, fontStyle: 'italic', color: '#913175' }}>“Just a straw… but for Ayya, it became the foundation of a healthier livelihood and a greener future.”</Typography>
              </Box>
            </Box>
            <Box sx={{ flex: 0.8, display: 'flex', justifyContent: 'flex-end' }}>
              <Box component="img" src={StoriesOfChangeImg} sx={{ width: '100%', maxWidth: '380px', height: '420px', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 5. READY TO MAKE IMPACT SECTION - INTEGRATED NEW CODE */}
      <Box sx={{ bgcolor: '#913175', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">

            {/* LEFT IMAGE CARD */}
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                component="img"
                src={ReadyToMakeImpactImg}
                sx={{
                  width: '100%',
                  maxWidth: '380px',
                  height: 'auto',
                  display: 'block',
                  borderRadius: 2,
                }}
              />
            </Grid>

            {/* RIGHT CONTENT */}
            <Grid item xs={12} md={7}>
              <Box sx={{ maxWidth: '600px' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: '#ffffff'
                  }}
                >
                  Ready to Make an Impact?
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    lineHeight: 1.4,
                    mb: 4,
                    color: '#ffffff'
                  }}
                >
                  It starts with a simple switch and ends with a better story for the
                  planet, for people, for a greener tomorrow.
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    mb: 3,
                    color: '#ffffff',
                    fontWeight: 500
                  }}
                >
                  Join the Sunbird community
                </Typography>

                {/* EMAIL INPUT */}
                <Box
                  sx={{
                    bgcolor: '#ffffff',
                    borderRadius: '999px',
                    px: 4,
                    paddingTop: 1.8,
                    paddingBottom: 1.8,
                    maxWidth: '420px'
                  }}
                >
                  <InputBase
                    placeholder="Drop your email here"
                    fullWidth
                    sx={{
                      color: '#913175',
                      fontSize: '1.1rem',
                      '& input::placeholder': {
                        color: '#913175',
                        opacity: 0.7
                      }
                    }}
                    inputProps={{ style: { textAlign: 'center' } }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. DIALOGS */}
      <Dialog open={Boolean(openDialog)} onClose={handleClose} maxWidth="sm" fullWidth>
        {openDialog && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', color: '#913175', fontWeight: 700 }}>
              {dialogData[openDialog].title}
              <IconButton onClick={handleClose} sx={{ color: '#913175' }}><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ color: '#913175', lineHeight: 1.6 }}>
                {dialogData[openDialog].text}
              </Typography>
              {dialogData[openDialog].showLink && (
                <Typography 
                  sx={{ 
                    mt: 2, 
                    cursor: 'pointer', 
                    textDecoration: 'underline', 
                    color: '#913175', 
                    fontWeight: 600 
                  }} 
                  onClick={() => { handleClose(); navigate('/rural-women-empowerment'); }}
                >
                  Read the stories that create sustainable change
                </Typography>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Initiatives;