# Sunbird Straws - Website

A React.js marketing website for Sunbird Straws, a startup producing eco-friendly coconut leaf straws and pens.

## Tech Stack

- **React** v19.1.1
- **React Router** v7.8.2 (Client-side routing)
- **React Icons** v5.5.0 (Social media icons)
- **AOS** v2.3.4 (Animate On Scroll library)
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
    ├── index.css                   # Global styles
    ├── App.js                      # Main app with routing
    ├── App.css                     # App-level styles
    ├── App.test.js                 # App component tests
    ├── logo.svg                    # Default CRA logo
    ├── reportWebVitals.js          # Performance monitoring
    ├── setupTests.js               # Jest test setup
    │
    ├── components/                 # Reusable UI components
    │   ├── Header.js               # Navigation header
    │   ├── Header.css
    │   ├── Hero.js                 # Hero carousel section
    │   ├── Hero.css
    │   ├── Impact.js               # Impact statistics section
    │   ├── Impact.css
    │   ├── Inspiration.js          # Call-to-action section
    │   ├── Inspiration.css
    │   ├── Awards.js               # Awards & recognition
    │   ├── Awards.css
    │   ├── SupportedBy.js          # Partner logos section
    │   ├── SupportedBy.css
    │   ├── Testimonials.js         # Customer testimonials
    │   ├── Testimonials.css
    │   ├── Footer.js               # Site footer
    │   └── Footer.css
    │
    ├── Pages/                      # Page components (routes)
    │   ├── OurStory.js             # About/story page
    │   ├── OurStory.css
    │   ├── OurTeam.js              # Team page
    │   ├── OurTeam.css
    │   ├── SunbirdStraws.js        # Products page
    │   ├── SunbirdStraws.css
    │   ├── News.js                 # Media coverage page
    │   ├── News.css
    │   ├── Gallery.js              # Image gallery page
    │   ├── Gallery.css
    │   ├── ContactUs.js            # Contact page
    │   ├── ContactUs.css
    │   ├── TermsandCondition.js    # Terms & Conditions
    │   ├── TermsandCondition.css
    │   ├── PrivacyPolicy.js        # Privacy Policy
    │   ├── PrivacyPolicy.css
    │   ├── CancellationRefund.js   # Refund policy
    │   ├── CancellationRefund.css
    │   ├── ShippingPolicy.js       # Shipping policy
    │   └── ShippingPolicy.css
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
        │   ├── AgriIndiaHackathon.svg
        │   ├── HoneyBeeInclusive.webp
        │   ├── LeaptoUnicorn.webp
        │   ├── UpdatedMassChallengeSwitzerland.png
        │   └── UpdatedSwadesStartupIcon.png
        │
        ├── ImpactSection/          # Impact section images (4 files)
        │   ├── Strawsicon.jpg
        │   ├── adobexp.jpeg
        │   ├── co2emission.jpg
        │   └── ruralwomengraphic.webp
        │
        ├── MediaNews/              # Media logos (8 files)
        │   ├── DWtravels.jpeg
        │   ├── ForbesIndia.jpeg
        │   ├── SBSMalayalam.webp
        │   ├── TheHinduLogo.png
        │   ├── TimesofIndia.png
        │   ├── betterIndia.png
        │   ├── humansofbombay.png
        │   └── mathurbhuminews.jpg
        │
        ├── OurStory/               # Story page images (4 files)
        │   ├── TheProblemImage.png
        │   ├── TheSolutionCoconut.png
        │   ├── Welcomourstory.jpeg
        │   └── mapfromglobalshift.png
        │
        ├── RuralWomenEmpowerment/  # Women empowerment photos (3 files)
        │   ├── Women1.jpeg
        │   ├── Women2.jpeg
        │   └── Women3.jpeg
        │
        ├── SunbirdStraws/          # Product images (1 file)
        │   └── Bobastraws.jpg
        │
        ├── Supported by/           # Partner logos (15 files)
        │   ├── ChristBangalore.png
        │   ├── Cummins.png
        │   ├── HDFCgrants.jpg
        │   ├── IIM.webp
        │   ├── JubilantFoodWorks.png
        │   ├── PernodRicard.png
        │   ├── SIDBIGIAN.png
        │   ├── Sidley.png
        │   ├── climatekic.jpeg
        │   ├── elevatelogo.jpg
        │   ├── keralaargiculturaluniversity.jpg
        │   ├── millercentre.png
        │   ├── selcologo.png
        │   ├── socialalpha .jpeg
        │   └── wwfIndia .jpg
        │
        ├── Team/                   # Team images (1 file)
        │   └── TeamCover.jpeg
        │
        └── Testimonals/            # Testimonial logos (5 files)
            ├── ChaiDays.png
            ├── ChefPillai.jpg
            ├── FourSeasonslogo.png
            ├── GrandMercure.png
            └── TheLeelaPalaceHotels.png
```

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with all sections |
| `/our-story` | Our Story | Company mission and history |
| `/our-team` | Our Team | Team members |
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
- **Header** - Navigation bar with dropdown menus and mobile hamburger menu
- **Footer** - Site footer with links, address, and social media icons

### Home Page Sections
- **Hero** - Auto-rotating image carousel (8-second intervals)
- **Impact** - Statistics and impact metrics display
- **Inspiration** - Call-to-action section
- **Awards** - Awards and recognition showcase
- **SupportedBy** - Partner and investor logos grid
- **Testimonials** - Customer testimonials carousel

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## License

Private project - All rights reserved.
