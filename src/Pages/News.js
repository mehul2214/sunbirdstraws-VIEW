import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Fade,
  Zoom,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Article as ArticleIcon,
  TrendingUp as TrendingIcon,
  OpenInNew as ExternalIcon,
  Newspaper as NewsIcon,
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

import forbesImg from "../assets/MediaNews/ForbesIndia.jpeg";
import toiImg from "../assets/MediaNews/TimesofIndia.png";
import dwImg from "../assets/MediaNews/DWtravels.jpeg";
import hinduImg from "../assets/MediaNews/TheHinduLogo.png";
import sbsImg from "../assets/MediaNews/SBSMalayalam.webp";
import betterIndiaImg from "../assets/MediaNews/betterIndia.png";
import HumansofbombayImg from "../assets/MediaNews/humansofbombay.png";

const newsItems = [
  {
    source: "Forbes India",
    date: "Jul 11, 2022",
    title:
      "Bengaluru English prof whose innovation is replacing single-use plastic straws",
    image: forbesImg,
    link: "https://www.forbesindia.com/audio/forbes-india-daily-tech-conver-sation/meet-the-bengaluru-english-prof-whose-innovation-is-replacing-singleuse-plastic-straws/77991",
    featured: true,
  },
  {
    source: "The Times of India",
    date: "Sep 22, 2022",
    title:
      "English professor in Bengaluru innovates straws from coconut leaf, exports to 25 countries",
    image: toiImg,
    link: "https://timesofindia.indiatimes.com/city/bengaluru/english-prof-innovates-straw-from-coconut-leaf-exports-to-25-countries/articleshow/78223719.cms",
  },
  {
    source: "DW",
    title: "English professor makes straws made from waste coconut leaves",
    image: dwImg,
    link: "https://www.youtube.com/watch?v=q551KrZxu9Y",
  },
  {
    source: "The Hindu",
    date: "Oct 30, 2020",
    title: "Now, take a sip using straws made of fallen coconut leaves",
    image: hinduImg,
    link: "https://www.thehindu.com/sci-tech/energy-and-environment/now-take-a-sip-using-straws-made-of-fallen-coconut-leaves/article32971496.ece",
  },
  {
    source: "SBS Malayalam",
    title:
      "Sip coconut water with coconut palm straw: Malayalee man makes eco-friendly straws from coconut leaves to export to Australia",
    image: sbsImg,
    link: "https://www.sbs.com.au/language/malayalam/en/podcast-episode/sip-coconut-water-with-coconut-palm-straw-malayalee-makes-straws-from-coconut-palm-plans-to-export-to-australia/zms5qzrb8",
  },
  {
    source: "The Better India",
    date: "June 14, 2023",
    title:
      "Professor Makes 100% Biodegradable Straws Using Coconut Leaves, Has Sold 20 Million",
    image: betterIndiaImg,
    link: "https://thebetterindia.com/320826/bengaluru-professor-saji-varghese-makes-sunbird-straws-from-coconut-leaves-watch-video/",
  },
  {
    source: "The Hindu",
    date: "Feb 09, 2024",
    title:
      "NSRCEL at IIM-Bengaluru is incubating over 100 social impact ventures from eco-friendly innovations to education initiatives",
    image: hinduImg,
    link: "https://www.thehindu.com/news/national/karnataka/nsrcel-at-iim-bengaluru-is-incubating-over-100-social-impact-ventures-from-eco-friendly-innovations-to-education-initiatives/article67830020.ece",
  },
  {
    source: "Humans of Bombay",
    title: "I'd always come to campus a little before my morning lecture...",
    image: HumansofbombayImg,
    link: "https://www.linkedin.com/posts/humans-of-bombay_nature-environment-ecofriendly-activity-6959379496319741952-1AJ0/?trk=public_profile",
  },
];

function News() {
  const featuredNews = newsItems[0];
  const otherNews = newsItems.slice(1);

  return (
    <Box component="section" sx={{ lineHeight: 1.6 }}>
      {/* HERO SECTION - Split Layout */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 50%, #f5ebe0 100%)",
          pt: { xs: "100px", md: "120px" },
          pb: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Left Side - Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Fade in timeout={800}>
                <Box>
                  {/* Accent Text */}
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontWeight: 600,
                      fontSize: "1rem",
                      mb: 1,
                      letterSpacing: "0.5px",
                    }}
                  >
                    Media Coverage
                  </Typography>

                  {/* Main Heading */}
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                      fontWeight: 700,
                      color: "text.primary",
                      mb: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    Sunbird in the News
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      mb: 3,
                      lineHeight: 1.7,
                      maxWidth: "500px",
                    }}
                  >
                    Explore how Sunbird is making headlines across the globe. From Forbes
                    to The Hindu, our story of sustainable innovation continues to inspire.
                  </Typography>

                  {/* Stats Row */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: 3, md: 4 },
                      mb: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      { value: "50+", label: "Media Features" },
                      { value: "8+", label: "Major Publications" },
                      { value: "Global", label: "Coverage" },
                    ].map((stat, index) => (
                      <Box key={index}>
                        <Typography
                          sx={{
                            fontSize: { xs: "1.8rem", md: "2rem" },
                            fontWeight: 700,
                            color: "secondary.main",
                            lineHeight: 1,
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            color: "text.secondary",
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* CTA Buttons */}
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      component={Link}
                      to="/our-story"
                      variant="contained"
                      endIcon={<ArrowIcon />}
                      sx={{
                        py: 1.5,
                        px: 3,
                        backgroundColor: "primary.main",
                        color: "text.primary",
                        fontWeight: 600,
                        borderRadius: "8px",
                        fontSize: "1rem",
                        textTransform: "none",
                        boxShadow: "0 4px 14px rgba(211, 182, 154, 0.4)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(211, 182, 154, 0.5)",
                        },
                      }}
                    >
                      Our Story
                    </Button>
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      sx={{
                        py: 1.5,
                        px: 3,
                        borderColor: "primary.main",
                        color: "text.primary",
                        fontWeight: 600,
                        borderRadius: "8px",
                        fontSize: "1rem",
                        textTransform: "none",
                        borderWidth: "2px",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.dark",
                          backgroundColor: "rgba(211, 182, 154, 0.1)",
                          borderWidth: "2px",
                        },
                      }}
                    >
                      Press Contact
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>

            {/* Right Side - Featured News Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Zoom in timeout={1000}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "300px", sm: "380px", md: "450px" },
                    height: { xs: "320px", sm: "400px", md: "470px" },
                    mx: "auto",
                  }}
                >
                  {/* Background Card - Rotated */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "5%",
                      left: "5%",
                      width: "92%",
                      height: "92%",
                      borderRadius: "24px",
                      background: "linear-gradient(145deg, #f5ebe0 0%, #e8d4c3 100%)",
                      boxShadow: "0 20px 60px rgba(166, 124, 82, 0.25), 0 8px 24px rgba(0, 0, 0, 0.1)",
                      transform: "rotate(-3deg)",
                    }}
                  />

                  {/* Featured Card - Main */}
                  <Card
                    component="a"
                    href={featuredNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      position: "absolute",
                      top: "2%",
                      left: "2%",
                      width: "92%",
                      height: "92%",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 15px 50px rgba(166, 124, 82, 0.3), 0 5px 15px rgba(0, 0, 0, 0.1)",
                      border: "5px solid #fff",
                      zIndex: 2,
                      transition: "transform 0.3s ease",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    {/* Image Section */}
                    <Box
                      sx={{
                        height: "55%",
                        backgroundColor: "#f9f4ef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 3,
                      }}
                    >
                      <Box
                        component="img"
                        src={featuredNews.image}
                        alt={featuredNews.source}
                        sx={{
                          maxHeight: "100%",
                          maxWidth: "80%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                    {/* Content Section */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 3,
                        backgroundColor: "#fff",
                      }}
                    >
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          backgroundColor: "rgba(211, 182, 154, 0.2)",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "20px",
                          width: "fit-content",
                          mb: 1.5,
                        }}
                      >
                        <TrendingIcon sx={{ fontSize: "16px", color: "secondary.main" }} />
                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            color: "secondary.main",
                            fontWeight: 600,
                          }}
                        >
                          Featured
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: "text.secondary",
                          mb: 1,
                        }}
                      >
                        {featuredNews.source} • {featuredNews.date}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          fontWeight: 600,
                          color: "text.primary",
                          lineHeight: 1.4,
                        }}
                      >
                        {featuredNews.title}
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* Floating Icons */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-5%",
                      right: "5%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1.5,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatIcon 4s ease-in-out infinite",
                      "@keyframes floatIcon": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                      },
                    }}
                  >
                    <NewsIcon sx={{ fontSize: "28px", color: "secondary.main" }} />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "0%",
                      left: "-3%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1.2,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatIcon2 5s ease-in-out infinite",
                      "@keyframes floatIcon2": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-8px)" },
                      },
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: "24px", color: "primary.main" }} />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: "25%",
                      left: "-5%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatIcon3 6s ease-in-out infinite",
                      "@keyframes floatIcon3": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-6px)" },
                      },
                    }}
                  >
                    <TrendingIcon sx={{ fontSize: "20px", color: "success.main" }} />
                  </Box>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ALL NEWS SECTION */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #f5ebe0 0%, #ffffff 100%)",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Fade in timeout={600}>
            <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                  letterSpacing: "0.5px",
                }}
              >
                Press & Publications
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                All Media Coverage
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Read about our journey in leading publications worldwide
              </Typography>
            </Box>
          </Fade>

          {/* News Grid */}
          <Grid container spacing={3}>
            {otherNews.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Fade in timeout={800 + index * 100}>
                  <Card
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      textDecoration: "none",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(0,0,0,0.05)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
                      },
                      "&:hover .news-image": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        height: 160,
                        backgroundColor: "#f9f4ef",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Box
                        component="img"
                        className="news-image"
                        src={item.image}
                        alt={item.source}
                        sx={{
                          maxHeight: "80%",
                          maxWidth: "70%",
                          objectFit: "contain",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: 2.5,
                        backgroundColor: "#fff",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "secondary.main",
                          mb: 1,
                          fontWeight: 600,
                        }}
                      >
                        {item.source} {item.date && `• ${item.date}`}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          color: "text.primary",
                          mb: 2,
                          lineHeight: 1.5,
                          fontWeight: 500,
                          flexGrow: 1,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "primary.main",
                          mt: "auto",
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: "0.9rem",
                          }}
                        >
                          Read Article
                        </Typography>
                        <ExternalIcon sx={{ fontSize: "16px" }} />
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PRESS CONTACT CTA SECTION */}
      <Box
        component="section"
        sx={{
          background: "linear-gradient(180deg, #ffffff 0%, #fcf7f1 100%)",
          py: { xs: 6, md: 8 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="md">
          <Fade in timeout={800}>
            <Box
              sx={{
                textAlign: "center",
                p: { xs: 4, md: 6 },
                backgroundColor: "#fff",
                borderRadius: "24px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(211, 182, 154, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                }}
              >
                <ArticleIcon sx={{ fontSize: "35px", color: "secondary.main" }} />
              </Box>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "1rem",
                  mb: 1,
                  letterSpacing: "0.5px",
                }}
              >
                Media Inquiries
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Want to Feature Us?
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 4,
                  maxWidth: "500px",
                  mx: "auto",
                  lineHeight: 1.7,
                }}
              >
                We're always happy to share our story. For press inquiries, interviews,
                or media partnerships, please reach out to us.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  endIcon={<ArrowIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    backgroundColor: "success.main",
                    color: "#fff",
                    fontWeight: 600,
                    borderRadius: "8px",
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 4px 14px rgba(0, 123, 94, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#005f47",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(0, 123, 94, 0.4)",
                    },
                  }}
                >
                  Contact Press Team
                </Button>
                <Button
                  component={Link}
                  to="/our-story"
                  variant="outlined"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderColor: "text.secondary",
                    color: "text.primary",
                    fontWeight: 600,
                    borderRadius: "8px",
                    fontSize: "1rem",
                    textTransform: "none",
                    borderWidth: "2px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "text.primary",
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                      borderWidth: "2px",
                    },
                  }}
                >
                  Read Our Story
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}

export default News;
