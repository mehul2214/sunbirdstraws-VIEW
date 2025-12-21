import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#d3b69a',      // Accent/button color (tan/taupe)
      light: '#e8d4c3',
      dark: '#b08a6f',      // Hover state
      contrastText: '#3a2f2f',
    },
    secondary: {
      main: '#a67c52',      // Highlight (bronze)
      light: '#c4a07a',
      dark: '#8a6342',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fcf7f1',   // Primary background (warm beige)
      paper: '#ffffff',
      alt: '#f8f4ef',       // Section alternate background
    },
    text: {
      primary: '#3a2f2f',   // Dark brown
      secondary: '#5a4a42', // Muted brown
    },
    success: {
      main: '#007b5e',      // Green for CTA buttons
      dark: '#005f47',
    },
    error: {
      main: '#ff4d4d',      // Contact form button
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#3a2f2f',
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.3rem',
      fontWeight: 600,
      color: '#3a2f2f',
      '@media (max-width:768px)': {
        fontSize: '1.8rem',
      },
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#3a2f2f',
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 600,
      color: '#3a2f2f',
    },
    h5: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#3a2f2f',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#3a2f2f',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#5a4a42',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#5a4a42',
    },
    subtitle1: {
      fontSize: '1.2rem',
      color: '#5a4a42',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#a67c52',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 6,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,              // Match current breakpoint
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#fcf7f1',
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 6,
          padding: '0.5rem 1rem',
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#d3b69a',
          color: '#3a2f2f',
          '&:hover': {
            backgroundColor: '#c2a183',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
        outlinedPrimary: {
          borderColor: '#d3b69a',
          color: '#d3b69a',
          '&:hover': {
            backgroundColor: '#f5e9dd',
            borderColor: '#d3b69a',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 6,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width:600px)': {
            paddingLeft: 24,
            paddingRight: 24,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#5a4a42',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#b08a6f',
          },
        },
      },
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
});

export default theme;
