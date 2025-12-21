import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import logo from "../assets/Logo New .webp";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [mediaAnchorEl, setMediaAnchorEl] = useState(null);
  const [aboutMobileOpen, setAboutMobileOpen] = useState(false);
  const [mediaMobileOpen, setMediaMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const aboutOpen = Boolean(aboutAnchorEl);
  const mediaOpen = Boolean(mediaAnchorEl);

  // Track scroll for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleMediaClick = (event) => {
    setMediaAnchorEl(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAboutAnchorEl(null);
  };

  const handleMediaClose = () => {
    setMediaAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMobileNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  // Check if current path matches
  const isActive = (path) => location.pathname === path;
  const isAboutActive = ["/our-story", "/our-team"].includes(location.pathname);
  const isMediaActive = ["/news", "/gallery"].includes(location.pathname);

  const navLinkStyles = {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "text.primary",
    textTransform: "none",
    padding: "8px 16px",
    minWidth: "auto",
    borderRadius: "8px",
    position: "relative",
    transition: "all 0.3s ease",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "4px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0%",
      height: "2px",
      backgroundColor: "primary.main",
      transition: "width 0.3s ease",
      borderRadius: "2px",
    },
    "&:hover": {
      backgroundColor: "rgba(211, 182, 154, 0.1)",
      "&::after": {
        width: "60%",
      },
    },
  };

  const activeNavLinkStyles = {
    ...navLinkStyles,
    color: "primary.dark",
    "&::after": {
      ...navLinkStyles["&::after"],
      width: "60%",
    },
  };

  const dropdownButtonStyles = {
    ...navLinkStyles,
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  };

  const menuItemStyles = {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "text.primary",
    py: 1.2,
    px: 2.5,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(211, 182, 154, 0.15)",
      color: "primary.dark",
      pl: 3,
    },
  };

  // Mobile Drawer Content
  const drawer = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid",
          borderColor: "rgba(211, 182, 154, 0.3)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocalFloristIcon sx={{ color: "primary.main", fontSize: 28 }} />
          <Typography
            sx={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            Sunbird Straws
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "text.primary",
            "&:hover": {
              backgroundColor: "rgba(211, 182, 154, 0.2)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Navigation */}
      <List sx={{ flex: 1, pt: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleMobileNavClick("/")}
            sx={{
              py: 1.5,
              px: 3,
              backgroundColor: isActive("/") ? "rgba(211, 182, 154, 0.15)" : "transparent",
              borderLeft: isActive("/") ? "3px solid" : "3px solid transparent",
              borderColor: isActive("/") ? "primary.main" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(211, 182, 154, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontWeight: 600,
                color: isActive("/") ? "primary.dark" : "text.primary",
              }}
            />
          </ListItemButton>
        </ListItem>

        {/* About Us Dropdown */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setAboutMobileOpen(!aboutMobileOpen)}
            sx={{
              py: 1.5,
              px: 3,
              backgroundColor: isAboutActive ? "rgba(211, 182, 154, 0.15)" : "transparent",
              borderLeft: isAboutActive ? "3px solid" : "3px solid transparent",
              borderColor: isAboutActive ? "primary.main" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(211, 182, 154, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="About Us"
              primaryTypographyProps={{
                fontWeight: 600,
                color: isAboutActive ? "primary.dark" : "text.primary",
              }}
            />
            {aboutMobileOpen ? (
              <ExpandLessIcon sx={{ color: "primary.main" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "text.secondary" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={aboutMobileOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
            <ListItemButton
              sx={{ pl: 5, py: 1.2 }}
              onClick={() => handleMobileNavClick("/our-story")}
            >
              <ListItemText
                primary="Our Story"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: isActive("/our-story") ? "primary.dark" : "text.secondary",
                  fontWeight: isActive("/our-story") ? 600 : 400,
                }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 5, py: 1.2 }}
              onClick={() => handleMobileNavClick("/our-team")}
            >
              <ListItemText
                primary="Our Team"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: isActive("/our-team") ? "primary.dark" : "text.secondary",
                  fontWeight: isActive("/our-team") ? 600 : 400,
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 5, py: 1.2 }}>
              <ListItemText
                primary="Initiatives"
                primaryTypographyProps={{ fontSize: "0.9rem", color: "text.secondary" }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 5, py: 1.2 }}>
              <ListItemText
                primary="Blog"
                primaryTypographyProps={{ fontSize: "0.9rem", color: "text.secondary" }}
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Media Dropdown */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMediaMobileOpen(!mediaMobileOpen)}
            sx={{
              py: 1.5,
              px: 3,
              backgroundColor: isMediaActive ? "rgba(211, 182, 154, 0.15)" : "transparent",
              borderLeft: isMediaActive ? "3px solid" : "3px solid transparent",
              borderColor: isMediaActive ? "primary.main" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(211, 182, 154, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Media"
              primaryTypographyProps={{
                fontWeight: 600,
                color: isMediaActive ? "primary.dark" : "text.primary",
              }}
            />
            {mediaMobileOpen ? (
              <ExpandLessIcon sx={{ color: "primary.main" }} />
            ) : (
              <ExpandMoreIcon sx={{ color: "text.secondary" }} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={mediaMobileOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
            <ListItemButton
              sx={{ pl: 5, py: 1.2 }}
              onClick={() => handleMobileNavClick("/news")}
            >
              <ListItemText
                primary="News"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: isActive("/news") ? "primary.dark" : "text.secondary",
                  fontWeight: isActive("/news") ? 600 : 400,
                }}
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 5, py: 1.2 }}
              onClick={() => handleMobileNavClick("/gallery")}
            >
              <ListItemText
                primary="Gallery"
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  color: isActive("/gallery") ? "primary.dark" : "text.secondary",
                  fontWeight: isActive("/gallery") ? 600 : 400,
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => handleMobileNavClick("/contact")}
            sx={{
              py: 1.5,
              px: 3,
              backgroundColor: isActive("/contact") ? "rgba(211, 182, 154, 0.15)" : "transparent",
              borderLeft: isActive("/contact") ? "3px solid" : "3px solid transparent",
              borderColor: isActive("/contact") ? "primary.main" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(211, 182, 154, 0.1)",
              },
            }}
          >
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{
                fontWeight: 600,
                color: isActive("/contact") ? "primary.dark" : "text.primary",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Drawer Footer with CTA */}
      <Box sx={{ p: 3, borderTop: "1px solid", borderColor: "rgba(211, 182, 154, 0.3)" }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleMobileNavClick("/sunbird-straws")}
          startIcon={<LocalFloristIcon />}
          sx={{
            py: 1.5,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(211, 182, 154, 0.4)",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "#fff",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(211, 182, 154, 0.5)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Explore Our Products
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.1)"
          : "none",
        transition: "all 0.4s ease",
        borderBottom: scrolled ? "1px solid rgba(211, 182, 154, 0.25)" : "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          py: scrolled ? 0.5 : 1,
          px: { xs: 2, md: 4 },
          transition: "padding 0.3s ease",
        }}
      >
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            gap: 1.5,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
            },
          }}
        >
          {/* Logo Image with glow effect */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Sunbird Straws Logo"
              sx={{
                height: { xs: 55, md: scrolled ? 60 : 75 },
                objectFit: "contain",
                transition: "all 0.3s ease",
                filter: "drop-shadow(0 2px 8px rgba(211, 182, 154, 0.3))",
              }}
            />
          </Box>

          {/* Brand Text (hidden on very small screens) */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "1.1rem", md: "1.3rem" },
                fontWeight: 700,
                color: "text.primary",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Sunbird Straws
            </Typography>
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "primary.main",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Eco-Friendly Living
            </Typography>
          </Box>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              component="nav"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Button
                component={Link}
                to="/"
                sx={isActive("/") ? activeNavLinkStyles : navLinkStyles}
              >
                Home
              </Button>

              {/* About Us Dropdown */}
              <Box
                onMouseEnter={handleAboutClick}
                onMouseLeave={handleAboutClose}
                sx={{ position: "relative" }}
              >
                <Button
                  sx={isAboutActive ? { ...dropdownButtonStyles, color: "primary.dark" } : dropdownButtonStyles}
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "1.2rem",
                        transform: aboutOpen ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  }
                >
                  About Us
                </Button>
                <Menu
                  anchorEl={aboutAnchorEl}
                  open={aboutOpen}
                  onClose={handleAboutClose}
                  MenuListProps={{
                    onMouseLeave: handleAboutClose,
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "background.paper",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
                      borderRadius: "12px",
                      minWidth: 180,
                      mt: 1,
                      border: "1px solid",
                      borderColor: "rgba(211, 182, 154, 0.2)",
                      overflow: "hidden",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/our-story"
                    onClick={handleAboutClose}
                    sx={{
                      ...menuItemStyles,
                      backgroundColor: isActive("/our-story") ? "rgba(211, 182, 154, 0.15)" : "transparent",
                    }}
                  >
                    Our Story
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/our-team"
                    onClick={handleAboutClose}
                    sx={{
                      ...menuItemStyles,
                      backgroundColor: isActive("/our-team") ? "rgba(211, 182, 154, 0.15)" : "transparent",
                    }}
                  >
                    Our Team
                  </MenuItem>
                  <Divider sx={{ my: 0.5, borderColor: "rgba(211, 182, 154, 0.2)" }} />
                  <MenuItem onClick={handleAboutClose} sx={menuItemStyles}>
                    Initiatives
                  </MenuItem>
                  <MenuItem onClick={handleAboutClose} sx={menuItemStyles}>
                    Blog
                  </MenuItem>
                </Menu>
              </Box>

              {/* Media Dropdown */}
              <Box
                onMouseEnter={handleMediaClick}
                onMouseLeave={handleMediaClose}
                sx={{ position: "relative" }}
              >
                <Button
                  sx={isMediaActive ? { ...dropdownButtonStyles, color: "primary.dark" } : dropdownButtonStyles}
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "1.2rem",
                        transform: mediaOpen ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  }
                >
                  Media
                </Button>
                <Menu
                  anchorEl={mediaAnchorEl}
                  open={mediaOpen}
                  onClose={handleMediaClose}
                  MenuListProps={{
                    onMouseLeave: handleMediaClose,
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "background.paper",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
                      borderRadius: "12px",
                      minWidth: 160,
                      mt: 1,
                      border: "1px solid",
                      borderColor: "rgba(211, 182, 154, 0.2)",
                      overflow: "hidden",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/news"
                    onClick={handleMediaClose}
                    sx={{
                      ...menuItemStyles,
                      backgroundColor: isActive("/news") ? "rgba(211, 182, 154, 0.15)" : "transparent",
                    }}
                  >
                    News
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/gallery"
                    onClick={handleMediaClose}
                    sx={{
                      ...menuItemStyles,
                      backgroundColor: isActive("/gallery") ? "rgba(211, 182, 154, 0.15)" : "transparent",
                    }}
                  >
                    Gallery
                  </MenuItem>
                </Menu>
              </Box>

              <Button
                component={Link}
                to="/contact"
                sx={isActive("/contact") ? activeNavLinkStyles : navLinkStyles}
              >
                Contact Us
              </Button>
            </Box>

            {/* Explore Button */}
            <Button
              component={Link}
              to="/sunbird-straws"
              variant="contained"
              startIcon={<LocalFloristIcon sx={{ fontSize: "1.1rem" }} />}
              sx={{
                ml: 2,
                px: 2.5,
                py: 1,
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: "10px",
                boxShadow: "0 4px 14px rgba(211, 182, 154, 0.35)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  color: "#fff",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(211, 182, 154, 0.45)",
                },
              }}
            >
              Explore Products
            </Button>
          </Box>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            aria-label="Toggle menu"
            sx={{
              color: "text.primary",
              backgroundColor: "rgba(211, 182, 154, 0.1)",
              borderRadius: "10px",
              p: 1,
              "&:hover": {
                backgroundColor: "rgba(211, 182, 154, 0.2)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "background.paper",
            boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.1)",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Header;
