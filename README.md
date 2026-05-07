# Gill Mobile Shop - iPhone Specialist Edition

![Gill Mobile](https://img.shields.io/badge/iPhone-Specialists-orange?style=for-the-badge&logo=apple)
![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css)

> Premium iPhone restoration, repair, and buyback. Apple-certified specialists with surgical precision.

## ✨ Features

- **3D iPhone Model**: Interactive Three.js model with React Three Fiber
- **Premium Animations**: Framer Motion powered smooth transitions
- **Responsive Design**: Mobile-first approach with glassmorphism effects
- **Custom Cursor**: Interactive cursor with hover effects
- **3D Tilt Cards**: Services section with perspective transforms
- **Sticky Scroll**: Value reveal section with scroll-based animations
- **3D Carousel**: Testimonials with 3D rotation effects
- **WhatsApp Integration**: Direct contact button
- **SEO Optimized**: Meta tags and structured data
- **Performance Focused**: Optimized for Core Web Vitals

## 🚀 Tech Stack

- **Framework**: Next.js 14.2.3 (App Router)
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.3
- **3D Graphics**: Three.js 0.160.0 + React Three Fiber 8.15.14
- **Animations**: Framer Motion 10.18.0
- **Icons**: Custom emoji-based design system
- **Deployment**: Vercel-ready configuration

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gill-mobile-shop.git
   cd gill-mobile-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
gill-mobile-shop/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & utilities
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Home page component
│   ├── components/
│   │   ├── CustomCursor.tsx     # Interactive cursor
│   │   ├── Navbar.tsx           # Navigation component
│   │   ├── Hero.tsx             # Hero section with 3D iPhone
│   │   ├── TrustBar.tsx         # Trust indicators
│   │   ├── Services.tsx         # Services with 3D tilt cards
│   │   ├── ValueReveal.tsx      # Value calculator with sticky scroll
│   │   ├── WhyUs.tsx            # Why choose us section
│   │   ├── Testimonials.tsx     # 3D carousel testimonials
│   │   ├── Footer.tsx           # Footer component
│   │   └── WhatsAppButton.tsx   # WhatsApp contact button
│   └── types/                   # TypeScript type definitions
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── vercel.json                 # Vercel deployment config
├── tailwind.config.ts          # Tailwind CSS configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

## 🎨 Design System

### Colors
- **Space Black**: `#0A0A0A` - Primary background
- **Titanium**: `#C5C5C7` - Text and accents
- **Specialist Orange**: `#FF6B35` - Brand color
- **Glass Effects**: Semi-transparent overlays

### Typography
- **Display Font**: Custom font for headings
- **Body Font**: System font stack for readability
- **Sizes**: Responsive scaling from mobile to desktop

### Animations
- **Pulse Glow**: Breathing effect for CTAs
- **Float**: Subtle upward movement
- **Shimmer**: Gradient animation for highlights
- **3D Transforms**: Perspective and rotation effects

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Deploy**
   ```bash
   npx vercel --prod
   ```

### Manual Build

```bash
npm run build
npm start
```

## 📱 Components Overview

### CustomCursor
Interactive cursor that changes on hover with smooth animations.

### Hero
3D iPhone model with floating particles and premium typography.

### Services
3D tilt cards with hover effects and service information.

### ValueReveal
Sticky scroll section with progress-based animations.

### Testimonials
3D carousel with drag interactions and auto-rotation.

### WhatsAppButton
Floating contact button with 3D hover effects.

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality

- **ESLint**: Configured for React/Next.js best practices
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (if configured)

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Optimized for real user metrics
- **Bundle Size**: Tree-shaken and optimized
- **Images**: WebP format with lazy loading

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Location**: Connaught Place, New Delhi
- **Phone**: +91 98765 43210
- **WhatsApp**: Direct integration available

## 🙏 Acknowledgments

- Apple for the iPhone design inspiration
- Three.js community for 3D graphics
- Framer Motion for animations
- Vercel for hosting platform

---

**Built with ❤️ for iPhone enthusiasts worldwide**