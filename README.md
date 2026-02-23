# Sunbird Straws - Website

A React.js marketing website for Sunbird Straws, a startup producing eco-friendly coconut leaf straws and pens.

## Tech Stack

- **React** v19.1.1
- **React Router** v7.8.2 (Client-side routing)
- **Material-UI (MUI)** v7.3.6 (UI component library)
- **MUI Icons** v7.3.6 (Icon library)
- **Emotion** v11.14.0 (CSS-in-JS styling)
- **Create React App** (Build tooling)
- **gh-pages** v6.3.0 (GitHub Pages deployment)

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
| `npm run deploy` | Deploy to GitHub Pages |
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
    │   ├── Hero.js                 # Hero section with mascots and carousel
    │   ├── Impact.js               # Impact statistics cards
    │   ├── Inspiration.js          # Call-to-action section
    │   ├── Awards.js               # Awards & recognition
    │   ├── SupportedBy.js          # Partner logos grid
    │   ├── Testimonials.js         # Auto-rotating testimonials
    │   ├── Initiatives.js          # Initiatives component variant
    │   └── Footer.js               # Site footer with contact info
    │
    ├── Pages/                      # Page components (routes)
    │   ├── OurStory.js             # Company story (5-section layout)
    │   ├── OurTeam.js              # Team & founder page
    │   ├── SunbirdStraws.js        # Products page
    │   ├── News.js                 # Media coverage grid
    │   ├── Gallery.js              # Image gallery
    │   ├── ContactUs.js            # Contact form with animation
    │   ├── Initiatives.js          # Purple Parity Pledge page
    │   ├── RuralWomenEmpowerment.js # Women empowerment stories
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
        ├── parity-pledge.png       # Parity pledge image
        ├── Equality.png            # Equality icon
        ├── Fairness.png            # Fairness icon
        ├── Transparency.png        # Transparency icon
        ├── Women empowerment logo.png # Women empowerment icon
        ├── WhatsApp_Image_*.png    # Mascot images (Jojo & Jill)
        │
        ├── AwardsRecognition/      # Award logos (5 files)
        ├── ImpactSection/          # Impact section images (4 files)
        ├── MediaNews/              # Media logos (8 files)
        ├── OurStory/               # Story page images (4 files)
        ├── RuralWomenEmpowerment/  # Women empowerment photos (3 files)
        ├── SunbirdStraws/          # Product images
        ├── Supported by/           # Partner logos (15 files)
        ├── Team/                   # Team images
        └── Testimonals/            # Testimonial logos (5 files)
```

## Theme Configuration

The app uses a custom MUI theme with the following color palette:

| Property | Value | Description |
|----------|-------|-------------|
| Primary | `#d3b69a` | Tan/Taupe |
| Primary Light | `#e8d4c3` | Light Tan |
| Primary Dark | `#b08a6f` | Dark Tan |
| Secondary | `#a67c52` | Bronze |
| Background | `#fcf7f1` | Warm Beige |
| Background Alt | `#f8f4ef` | Section alternate |
| Text Primary | `#3a2f2f` | Dark Brown |
| Text Secondary | `#5a4a42` | Muted Brown |
| Success | `#007b5e` | Green |
| Error | `#ff4d4d` | Red |

### Typography

- Font Family: `'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif`
- Responsive font sizes with media queries at 768px breakpoint

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with all sections |
| `/our-story` | Our Story | Company mission and history |
| `/our-team` | Our Team | Team members & founder |
| `/sunbird-straws` | Sunbird Straws | Product showcase |
| `/initiatives` | Initiatives | Purple Parity Pledge program |
| `/rural-women-empowerment` | Rural Women Empowerment | Women empowerment stories |
| `/news` | News | Media coverage and press |
| `/gallery` | Gallery | Image gallery |
| `/contact` | Contact Us | Contact form and info |
| `/terms-and-conditions` | Terms & Conditions | Legal terms |
| `/privacy-policy` | Privacy Policy | Privacy information |
| `/cancellation-refund-policy` | Cancellation & Refund | Refund policy |
| `/shipping-policy` | Shipping Policy | Shipping information |

## Components Overview

### Layout Components
- **Header** - AppBar with scroll effects, dropdown menus (About Us, Media), mobile drawer
- **Footer** - Site footer with company address, links, contact info, and social media icons (Instagram, LinkedIn)

### Home Page Sections
- **Hero** - Animated section with mascots (Jojo the Turtle & Jill the Bird), auto-rotating slides (8s intervals), trust indicators
- **Impact** - Statistics cards with hover effects
- **Inspiration** - CTA section with gradient background
- **Awards** - Awards showcase with card containers
- **SupportedBy** - Partner logos grid with hover effects
- **Testimonials** - Auto-rotating testimonials (5s intervals)

### Page Features
- **Our Story** - 5-section layout with split hero, problem/solution narrative
- **Our Team** - Founder bio, women empowerment section, join us CTA
- **Initiatives** - Purple Parity Pledge with sections on Equality, Fairness, Transparency, Women Empowerment, Stories of Change
- **Rural Women Empowerment** - Muthulakshmi's story, gallery of empowerment
- **News** - Featured article card, media coverage grid, press contact
- **Contact Us** - Split layout with animated illustration, contact cards

## Navigation Structure

```
├── Home
├── About Us (dropdown)
│   ├── Our Story
│   ├── Our Team
│   ├── Initiatives
│   └── Blog (placeholder)
├── Media (dropdown)
│   ├── News
│   └── Gallery
├── Contact Us
└── Explore Products (CTA button)
```

## Design System

All components follow a unified design system:

| Property | Value |
|----------|-------|
| Section Padding | `py: { xs: 6, md: 8 }` |
| Card Border Radius | `12px` |
| Card Shadow | `0 4px 12px rgba(0, 0, 0, 0.05)` |
| Hover Effect | `translateY(-2px) to (-5px)` |
| Transitions | `all 0.3s ease` |
| Background Pattern | Alternating warm gradients |
| Page Fade In | `600ms` timeout |

### Responsive Breakpoints

| Breakpoint | Value |
|------------|-------|
| xs | 0px |
| sm | 600px |
| md | 768px |
| lg | 1200px |
| xl | 1536px |

## Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` and deploys the build folder to GitHub Pages using `gh-pages`.

## Company Information

- **Company**: Brown Reed Agri-Waste Innovations Pvt Ltd
- **Location**: Bangalore, Karnataka, India
- **Contact**: +91 90350 78109
- **Email**: info@sunbirdstraws.com
- **Social**: Instagram (@sunbirdstraws), LinkedIn

## License

Private project - All rights reserved.
