# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React-based portfolio website built with Vite and Tailwind CSS, designed to showcase AI-assisted projects for a Block Builder Fellowship application.

## Purpose

This portfolio is specifically built to demonstrate:
- AI-native building capabilities
- Projects built with AI-assisted tools (Cursor, Claude Code, goose, Copilot, etc.)
- Rapid prototyping and shipping mindset
- Technical work samples for the Block Builder Fellowship, Engineering role

See `.claude/DESCRIPTION.md` for the full fellowship program details and requirements.

## Tech Stack

- **React 19** - UI framework
- **Vite 6** - Build tool and dev server
- **Tailwind CSS v4** - Styling with `@tailwindcss/vite` plugin
- **ES Modules** - Modern JavaScript module system

## Architecture

**Component-based Structure**:
```
src/
├── components/
│   ├── Hero/Hero.jsx           - Hero section with parallax effect
│   ├── Projects/
│   │   ├── Projects.jsx        - Projects grid with scroll animations
│   │   └── ProjectCard.jsx     - Individual project card
│   ├── Footer/Footer.jsx       - Footer component
│   └── ScrollIndicator/        - Animated scroll indicator
├── data/projects.js            - Project data (customize this!)
├── App.jsx                     - Main app component
├── index.jsx                   - React entry point
└── index.css                   - Tailwind imports + custom styles
```

**Key Features**:
- **Parallax scrolling** in Hero component
- **Intersection Observer** for staggered project card animations
- **Responsive design** with Tailwind breakpoints
- **Custom gradients** for each project card

## Development Workflow

**Install dependencies**:
```bash
npm install
```

**Start dev server**:
```bash
npm run dev
```
Visit `http://localhost:5173`

**Build for production**:
```bash
npm run build
```

**Preview production build**:
```bash
npm run preview
```

## Customization Points

When personalizing this portfolio:

1. **Hero Section** (`src/components/Hero/Hero.jsx`):
   - Replace placeholder name and bio
   - Update profile image/emoji

2. **Projects Data** (`src/data/projects.js`):
   - Replace all 6 placeholder projects with real projects
   - Update titles, descriptions, gradients, and links
   - Consider highlighting which AI tools were used

3. **Footer** (`src/components/Footer/Footer.jsx`):
   - Update copyright name
   - Add social links if desired

4. **Styling** (`src/index.css`):
   - Tailwind v4 uses `@import "tailwindcss"` (no config file needed for basic setup)
   - Add custom CSS below the import if needed
   - Colors are inline via Tailwind classes

## Design System

- **Colors**: Dark theme (#000 bg) with blue accent (#0071e3)
- **Typography**: System font stack (SF Pro Display on Apple devices)
- **Responsive**: Mobile-first, handled by Tailwind
- **Animations**:
  - Fade-in-up for hero
  - Staggered fade-in for project cards
  - Bounce animation for scroll indicator
  - Parallax effect on hero content

## Tailwind CSS v4 Notes

This project uses the latest Tailwind v4 with the `@tailwindcss/vite` plugin:
- No separate `tailwind.config.js` or `postcss.config.js` needed
- Just `@import "tailwindcss"` in CSS file
- Theme customization done via CSS custom properties if needed
- Cleaner, simpler setup compared to v3

## Fellowship Context

The target role emphasizes:
- Shipping production-ready code with AI tools
- Rapid prototyping and building working demos
- Contributing to AI-first product experiences
- Active participation in AI builder communities

Portfolio should showcase evidence of: shipped projects, AI tool usage, builder mindset, and hands-on engineering fluency.

## Legacy Files

- `layout.html` - Original single-file HTML portfolio (kept for reference)
