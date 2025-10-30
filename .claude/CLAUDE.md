# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple, single-page HTML portfolio website designed to showcase AI-assisted projects for a Block Builder Fellowship application. The entire portfolio is self-contained in `layout.html` with embedded CSS and JavaScript.

## Purpose

This portfolio is specifically built to demonstrate:
- AI-native building capabilities
- Projects built with AI-assisted tools (Cursor, Claude Code, goose, Copilot, etc.)
- Rapid prototyping and shipping mindset
- Technical work samples for the Block Builder Fellowship, Engineering role

See `DESCRIPTION.md` for the full fellowship program details and requirements.

## Architecture

**Single-file Structure**: The entire portfolio is in `layout.html`:
- Embedded `<style>` block (lines 7-334): All CSS including responsive design, animations, and color variables
- HTML structure (lines 336-451): Hero section, projects grid, and footer
- Embedded `<script>` block (lines 453-483): Intersection Observer for scroll animations and parallax effects

**Key Sections**:
- **Hero Section**: Profile introduction with gradient background and scroll indicator
- **Projects Grid**: 6 project cards with unique gradient backgrounds, designed to be customized with real project details
- **Footer**: Copyright and attribution

## Development Workflow

**Viewing the Portfolio**:
```bash
# Option 1: Open directly in browser (from WSL2)
explorer.exe layout.html

# Option 2: Start local server
python3 -m http.server 8000
# Then visit: http://localhost:8000/layout.html
```

**Making Changes**:
- All edits happen in the single `layout.html` file
- CSS variables are defined in `:root` (lines 14-23) for easy theme customization
- Project cards start at line 355 and follow a repeating structure

## Customization Points

When personalizing this portfolio:

1. **Hero Section** (lines 339-346): Replace placeholder name and bio with applicant's information
2. **Project Cards** (lines 355-443): Each card needs:
   - Project title and description
   - Links to live demos, GitHub repos, or documentation
   - Consider highlighting which AI tools were used
3. **Profile Image** (line 340): Replace emoji with actual image if desired
4. **Color Scheme**: Modify CSS variables in `:root` for brand consistency
5. **Footer** (lines 448-451): Update copyright name

## Design System

- **Primary Colors**: Dark theme with blue accent (`#0071e3`)
- **Typography**: SF Pro Display fallback stack (Apple-style)
- **Responsive**: Mobile-first with breakpoints at 768px and 480px
- **Animations**: Staggered fade-in for project cards, parallax hero effect
- **Project Card Gradients**: Each card (nth-child) has a unique gradient (lines 150-168)

## Fellowship Context

The target role emphasizes:
- Shipping production-ready code with AI tools
- Rapid prototyping and building working demos
- Contributing to AI-first product experiences
- Active participation in AI builder communities

Portfolio should showcase evidence of: shipped projects, AI tool usage, builder mindset, and hands-on engineering fluency.
