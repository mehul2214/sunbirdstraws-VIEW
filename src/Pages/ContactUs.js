import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Fade,
  Zoom,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Send as SendIcon,
  Spa as SpaIcon,
  EmojiNature as LeafIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <Box
      component="section"
      sx={{
        background: "linear-gradient(180deg, #fcf7f1 0%, #ffffff 50%, #fcf7f1 100%)",
        minHeight: "100vh",
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* Left Side - Form */}
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
                  Get in Touch
                </Typography>

                {/* Main Heading */}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                    color: "text.primary",
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Let's Chat, Reach Out to Us
                </Typography>

                {/* Subtitle */}
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                    mb: 4,
                    lineHeight: 1.7,
                    maxWidth: "450px",
                  }}
                >
                  Have questions or feedback? We're here to help. Send us a
                  message, and we'll respond within 24 hours.
                </Typography>

                {/* Contact Form */}
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                >
                  {/* First Name & Last Name Row */}
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          mb: 1,
                        }}
                      >
                        First Name
                      </Typography>
                      <TextField
                        fullWidth
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "#f8f5f2",
                            borderRadius: "8px",
                            "& fieldset": {
                              borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                              borderColor: "primary.light",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: "2px",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "text.primary",
                            py: 1.5,
                            "&::placeholder": {
                              color: "text.secondary",
                              opacity: 0.7,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Typography
                        sx={{
                          color: "text.primary",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          mb: 1,
                        }}
                      >
                        Last Name
                      </Typography>
                      <TextField
                        fullWidth
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "#f8f5f2",
                            borderRadius: "8px",
                            "& fieldset": {
                              borderColor: "transparent",
                            },
                            "&:hover fieldset": {
                              borderColor: "primary.light",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                              borderWidth: "2px",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "text.primary",
                            py: 1.5,
                            "&::placeholder": {
                              color: "text.secondary",
                              opacity: 0.7,
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>

                  {/* Email Address */}
                  <Box>
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        mb: 1,
                      }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f8f5f2",
                          borderRadius: "8px",
                          "& fieldset": {
                            borderColor: "transparent",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.light",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "text.primary",
                          py: 1.5,
                          "&::placeholder": {
                            color: "text.secondary",
                            opacity: 0.7,
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Message */}
                  <Box>
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        mb: 1,
                      }}
                    >
                      Message
                    </Typography>
                    <TextField
                      fullWidth
                      name="message"
                      placeholder="Leave us a message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "#f8f5f2",
                          borderRadius: "8px",
                          "& fieldset": {
                            borderColor: "transparent",
                          },
                          "&:hover fieldset": {
                            borderColor: "primary.light",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "primary.main",
                            borderWidth: "2px",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "text.primary",
                          "&::placeholder": {
                            color: "text.secondary",
                            opacity: 0.7,
                          },
                        },
                      }}
                    />
                  </Box>

                  {/* Privacy Policy Checkbox */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agreeToPolicy"
                        checked={formData.agreeToPolicy}
                        onChange={handleChange}
                        sx={{
                          color: "primary.main",
                          "&.Mui-checked": {
                            color: "primary.main",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
                        I agree to our friendly{" "}
                        <Link
                          to="/privacy-policy"
                          style={{
                            color: "#a67c52",
                            textDecoration: "underline",
                          }}
                        >
                          privacy policy
                        </Link>
                      </Typography>
                    }
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      backgroundColor: "primary.main",
                      color: "text.primary",
                      fontWeight: 600,
                      borderRadius: "8px",
                      fontSize: "1rem",
                      textTransform: "none",
                      alignSelf: "flex-start",
                      boxShadow: "0 4px 14px rgba(211, 182, 154, 0.4)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(211, 182, 154, 0.5)",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Fade>
          </Grid>

          {/* Right Side - Animated Illustration & Contact Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative" }}>
              {/* Animated Illustration Container */}
              <Zoom in timeout={1000}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "300px", sm: "380px", md: "420px" },
                    height: { xs: "320px", sm: "400px", md: "440px" },
                    mx: "auto",
                    mb: 4,
                  }}
                >
                  {/* Rounded Square Card Background */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "8%",
                      left: "8%",
                      width: "88%",
                      height: "88%",
                      borderRadius: "24px",
                      background: "linear-gradient(145deg, #f5ebe0 0%, #e8d4c3 100%)",
                      boxShadow: "0 20px 60px rgba(166, 124, 82, 0.25), 0 8px 24px rgba(0, 0, 0, 0.1)",
                      transform: "rotate(-3deg)",
                    }}
                  />

                  {/* Second Card Layer */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "4%",
                      left: "4%",
                      width: "88%",
                      height: "88%",
                      borderRadius: "24px",
                      background: "linear-gradient(145deg, #fff 0%, #fcf7f1 100%)",
                      boxShadow: "0 15px 50px rgba(166, 124, 82, 0.2)",
                      transform: "rotate(2deg)",
                    }}
                  />

                  {/* Inner Circle - Main Background with Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: { xs: "200px", sm: "260px", md: "280px" },
                      height: { xs: "200px", sm: "260px", md: "280px" },
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #d3b69a 0%, #a67c52 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 15px 50px rgba(166, 124, 82, 0.35), 0 5px 15px rgba(0, 0, 0, 0.1)",
                      border: "5px solid #fff",
                      zIndex: 2,
                    }}
                  >
                    {/* Main Person Icon */}
                    <PersonIcon
                      sx={{
                        fontSize: { xs: "80px", md: "100px" },
                        color: "#fff",
                        animation: "float 3s ease-in-out infinite",
                        "@keyframes float": {
                          "0%, 100%": { transform: "translateY(0)" },
                          "50%": { transform: "translateY(-10px)" },
                        },
                      }}
                    />
                  </Box>

                  {/* Floating Leaf Icons in white circles */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "5%",
                      right: "5%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1.5,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatLeaf 4s ease-in-out infinite",
                      "@keyframes floatLeaf": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-10px)" },
                      },
                    }}
                  >
                    <SpaIcon sx={{ fontSize: "28px", color: "secondary.main" }} />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "10%",
                      left: "5%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1.2,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatLeaf2 5s ease-in-out infinite",
                      "@keyframes floatLeaf2": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-8px)" },
                      },
                    }}
                  >
                    <LeafIcon sx={{ fontSize: "24px", color: "primary.main" }} />
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      top: "30%",
                      left: "0%",
                      zIndex: 3,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      p: 1,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      animation: "floatLeaf3 6s ease-in-out infinite",
                      "@keyframes floatLeaf3": {
                        "0%, 100%": { transform: "translateY(0)" },
                        "50%": { transform: "translateY(-6px)" },
                      },
                    }}
                  >
                    <SpaIcon sx={{ fontSize: "20px", color: "secondary.light" }} />
                  </Box>
                </Box>
              </Zoom>

              {/* Contact Info Cards */}
              <Fade in timeout={1200}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Email Card */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      p: 2.5,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(211, 182, 154, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EmailIcon sx={{ color: "secondary.main", fontSize: "24px" }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: "1rem",
                        }}
                      >
                        Email
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
                        info@sunbirdstraws.com
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone Card */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      p: 2.5,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(211, 182, 154, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <PhoneIcon sx={{ color: "secondary.main", fontSize: "24px" }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: "1rem",
                        }}
                      >
                        Phone
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
                        +91 90350 78109
                      </Typography>
                    </Box>
                  </Box>

                  {/* Address Card */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      p: 2.5,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(211, 182, 154, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <LocationIcon sx={{ color: "secondary.main", fontSize: "24px" }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontSize: "1rem",
                        }}
                      >
                        Address
                      </Typography>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6 }}>
                        Brown Reed Agri-Waste Innovations Pvt Ltd, #595 D, Group Employees Layout,
                        1st A Block, Lingadheeranahalli, Bangalore, Karnataka, India - 560091
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUs;
