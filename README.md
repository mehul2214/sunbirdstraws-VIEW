# Sunbird Straws - Website

A React.js marketing website for Sunbird Straws, a startup producing eco-friendly coconut leaf straws and pens.

## Tech Stack

- **React** v19.1.1
- **React Router** v7.8.2 (Client-side routing)
- **Material-UI (MUI)** v7.3.6 (UI component library)
- **MUI Icons** v7.3.6 (Icon library)
- **Emotion** v11.14.0 (CSS-in-JS styling)
- **Create React App** (Build tooling)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sunbirdstraws-VIEW
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run eject` | Eject from CRA (one-way) |

## Project Structure

```
sunbirdstraws-VIEW/
├── package.json                    # Project config & dependencies
├── package-lock.json               # Dependency lock file
├── README.md                       # Project documentation
├── .gitignore                      # Git ignore rules
│
├── public/                         # Static public assets
│   ├── index.html                  # Main HTML template
│   ├── favicon.ico                 # Website favicon
│   ├── logo192.png                 # PWA logo (192x192)
│   ├── logo512.png                 # PWA logo (512x512)
│   ├── manifest.json               # PWA manifest
│   └── robots.txt                  # SEO robots directive
│
└── src/                            # Source code
    ├── index.js                    # React entry point
    ├── index.css                   # Minimal global styles
    ├── App.js                      # Main app with routing
    ├── App.test.js                 # App component tests
    ├── logo.svg                    # Default CRA logo
    ├── reportWebVitals.js          # Performance monitoring
    ├── setupTests.js               # Jest test setup
    │
    ├── theme/                      # MUI Theme configuration
    │   └── theme.js                # Custom theme with colors & typography
    │
    ├── components/                 # Reusable UI components (MUI styled)
    │   ├── Header.js               # Navigation header with scroll effects
    │   ├── Hero.js                 # Hero carousel with decorations
    │   ├── Impact.js               # Impact statistics cards
    │   ├── Inspiration.js          # Call-to-action section
    │   ├── Awards.js               # Awards & recognition
    │   ├── SupportedBy.js          # Partner logos grid
    │   ├── Testimonials.js         # Auto-rotating testimonials
    │   └── Footer.js               # Site footer
    │
    ├── Pages/                      # Page components (routes)
    │   ├── OurStory.js             # Company story (5-section layout)
    │   ├── OurTeam.js              # Team & founder page
    │   ├── SunbirdStraws.js        # Products page
    │   ├── News.js                 # Media coverage grid
    │   ├── Gallery.js              # Image gallery
    │   ├── ContactUs.js            # Contact form with animation
    │   ├── TermsandCondition.js    # Terms & Conditions
    │   ├── PrivacyPolicy.js        # Privacy Policy
    │   ├── CancellationRefund.js   # Refund policy
    │   └── ShippingPolicy.js       # Shipping policy
    │
    └── assets/                     # Media files and images
        ├── Logo New .webp          # Main logo
        ├── landingpage.png         # Hero slide 1
        ├── GoGreen.jpeg            # Hero slide 2
        ├── imageforstatr.jpg       # Hero slide 3
        ├── inspiration.jpeg        # Inspiration section
        ├── worldmapimage.jpg       # World map image
        │
        ├── AwardsRecognition/      # Award logos (5 files)
        ├── ImpactSection/          # Impact section images (4 files)
        ├── MediaNews/              # Media logos (8 files)
        ├── OurStory/               # Story page images (4 files)
        ├── RuralWomenEmpowerment/  # Women empowerment photos (3 files)
        ├── SunbirdStraws/          # Product images (1 file)
        ├── Supported by/           # Partner logos (15 files)
        ├── Team/                   # Team images (1 file)
        └── Testimonals/            # Testimonial logos (5 files)
```

## Theme Configuration

The app uses a custom MUI theme with the following color palette:

| Property | Value | Description |
|----------|-------|-------------|
| Primary | `#d3b69a` | Tan/Taupe |
| Secondary | `#a67c52` | Bronze |
| Background | `#fcf7f1` | Warm Beige |
| Text Primary | `#3a2f2f` | Dark Brown |
| Text Secondary | `#5a4a42` | Muted Brown |
| Success | `#007b5e` | Green |

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with all sections |
| `/our-story` | Our Story | Company mission and history |
| `/our-team` | Our Team | Team members & founder |
| `/sunbird-straws` | Sunbird Straws | Product showcase |
| `/news` | News | Media coverage and press |
| `/gallery` | Gallery | Image gallery |
| `/contact` | Contact Us | Contact form and info |
| `/terms-and-conditions` | Terms & Conditions | Legal terms |
| `/privacy-policy` | Privacy Policy | Privacy information |
| `/cancellation-refund-policy` | Cancellation & Refund | Refund policy |
| `/shipping-policy` | Shipping Policy | Shipping information |

## Components Overview

### Layout Components
- **Header** - AppBar with scroll effects, dropdown menus, mobile drawer
- **Footer** - Site footer with links, address, and social media icons

### Home Page Sections
- **Hero** - Auto-rotating carousel (8s intervals) with decorative elements
- **Impact** - Statistics cards with hover effects
- **Inspiration** - CTA section with gradient background
- **Awards** - Awards showcase with card containers
- **SupportedBy** - Partner logos grid with hover effects
- **Testimonials** - Auto-rotating testimonials (5s intervals)

### Page Features
- **Our Story** - 5-section layout with split hero, problem/solution narrative
- **Our Team** - Founder bio, women empowerment section, join us CTA
- **News** - Featured article card, media coverage grid, press contact
- **Contact Us** - Split layout with animated illustration, contact cards

## Design System

All components follow a unified design system:

| Property | Value |
|----------|-------|
| Section Padding | `py: { xs: 6, md: 8 }` |
| Card Border Radius | `16px` |
| Card Shadow | `0 4px 20px rgba(0, 0, 0, 0.06)` |
| Hover Effect | `translateY(-5px)` |
| Transitions | `all 0.3s ease` |
| Background Pattern | Alternating warm gradients |

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## License

Private project - All rights reserved.
