# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React-based portfolio website built with Vite and Tailwind CSS, designed to showcase AI-assisted projects for a Block Builder Fellowship application.

**Live Site:** https://marioaderman.github.io/portfolio/

## Purpose

This portfolio is specifically built to demonstrate:
- AI-native building capabilities
- Projects built with AI-assisted tools (Cursor, Claude Code, goose, Copilot, etc.)
- Rapid prototyping and shipping mindset
- Technical work samples for the Block Builder Fellowship, Engineering role

See `.claude/DESCRIPTION.md` for the full fellowship program details and requirements.

## Tech Stack

- **React 19** - UI framework (JavaScript with JSX, not TypeScript)
- **Vite 6** - Build tool and dev server
- **Tailwind CSS v4** - Styling with `@tailwindcss/vite` plugin
- **GitHub Pages** - Deployment platform
- **ES Modules** - Modern JavaScript module system

## Architecture

**Component-based Structure**:
```
src/
├── components/
│   ├── Hero/Hero.jsx              - Hero with parallax, profile image, social links
│   ├── Projects/
│   │   ├── Projects.jsx           - Projects grid with scroll animations
│   │   └── ProjectCard.jsx        - Individual project card
│   ├── Footer/Footer.jsx          - Footer with copyright
│   └── ScrollIndicator/           - Animated scroll indicator
├── assets/                        - Images (ignored in git, binary files)
│   └── profile_2.JPG              - Profile picture
├── data/projects.js               - Project data array (customize this!)
├── App.jsx                        - Main app component
├── index.jsx                      - React entry point
└── index.css                      - Tailwind imports + custom styles
```

**Key Features**:
- **Profile section** with elliptical image, name, AI-focused bio, and social links
- **Social media icons** for LinkedIn, GitHub, Twitter, Kaggle
- **Parallax scrolling** effect on hero content
- **Intersection Observer** for staggered project card animations
- **Unified gradient backgrounds** across all sections
- **Responsive design** with Tailwind breakpoints

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

**Deploy to GitHub Pages**:
```bash
npm run deploy
```
Automatically builds and deploys to https://marioaderman.github.io/portfolio/

**Preview production build locally**:
```bash
npm run preview
```

## Important: Asset Handling

**Images must be imported in components**, not referenced by path:
```jsx
// ✅ Correct (works in production)
import profileImage from '../../assets/profile_2.JPG'
<img src={profileImage} alt="Profile" />

// ❌ Wrong (breaks in production)
<img src="/src/assets/profile_2.JPG" alt="Profile" />
```

This is because Vite processes imports and generates hashed filenames for production builds.

## Customization Points

**Current Status**: Hero section is personalized with Mario Aderman's info. Projects still use placeholder data.

**To customize further**:

1. **Hero Section** (`src/components/Hero/Hero.jsx`):
   - ✅ Name updated to Mario Aderman
   - ✅ Bio focuses on AI-native building with tools
   - ✅ Profile image (elliptical shape)
   - ✅ Social links: LinkedIn, GitHub, Twitter, Kaggle
   - Update URLs if they change

2. **Projects Data** (`src/data/projects.js`):
   - ⚠️ **Still placeholder data** - needs real AI projects
   - Replace all 6 projects with actual work
   - Highlight AI tools used in each project
   - Update titles, descriptions, gradients, and links

3. **Footer** (`src/components/Footer/Footer.jsx`):
   - ✅ Updated with Mario Aderman copyright

## Design System

- **Colors**: Dark theme (#000 bg) with blue accent (#0071e3)
- **Typography**: System font stack (SF Pro Display on Apple devices)
- **Gradients**: Radial gradients with blue/purple tones
- **Responsive**: Mobile-first, handled by Tailwind
- **Animations**:
  - Fade-in-up for hero (1s)
  - Staggered fade-in for project cards (100ms delay between each)
  - Bounce animation for scroll indicator (2s infinite)
  - Parallax effect on hero content (scroll-based)

## Tailwind CSS v4 Notes

This project uses the latest Tailwind v4 with the `@tailwindcss/vite` plugin:
- No separate `tailwind.config.js` or `postcss.config.js` needed
- Just `@import "tailwindcss"` in `src/index.css`
- Theme customization via inline Tailwind classes or CSS custom properties
- Cleaner, simpler setup compared to v3
- Arbitrary values supported: `text-[#0071e3]`, `rounded-[50%]`

## GitHub Pages Deployment

**Configuration:**
- `vite.config.js` has `base: '/portfolio/'` for correct asset paths
- `package.json` has homepage field and deploy scripts
- Deployed via `gh-pages` package to `gh-pages` branch
- Assets (images) are gitignored but bundled in deployment

**After making changes:**
1. Test locally: `npm run dev`
2. Commit changes: `git add . && git commit -m "message"`
3. Push to GitHub: `git push`
4. Deploy: `npm run deploy`

## Fellowship Context

The target role emphasizes:
- Shipping production-ready code with AI tools ✅
- Rapid prototyping and building working demos ⚠️ (need real project examples)
- Contributing to AI-first product experiences
- Active participation in AI builder communities

**Next Steps for Application:**
- Add real AI projects to `src/data/projects.js`
- Consider adding a blog/writing section if you have AI-related content
- Ensure all project links work and demos are live
- Highlight specific AI tools used in each project

## File Extensions

This project uses **JavaScript (`.js`/`.jsx`)**, not TypeScript:
- `.jsx` files contain React components with JSX syntax
- `.js` files are regular JavaScript (like `projects.js`)
- No `.ts` or `.tsx` files in this project
- TypeScript is optional; JS is preferred for rapid prototyping

## Legacy Files

- `layout.html` - Original single-file HTML portfolio (gitignored, kept locally for reference)
