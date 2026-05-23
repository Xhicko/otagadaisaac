# AGENTS.md

## Project Purpose

This repository is Isaac Otagada's personal portfolio website.

The portfolio must position Isaac as a:

**Full-Stack Web App Integration & Deployment Specialist**

The goal is not to present Isaac as a generic web designer. The website must show that he builds, completes, connects, secures, and deploys real web applications involving:

- Admin dashboards
- Application portals
- Authentication
- Databases
- Payment integrations
- Webhooks
- Document workflows
- AI knowledge systems
- QR verification
- Deployment and DNS setup
- Production-ready workflow systems

All project details, links, case studies, profile data, services, and portfolio content are stored in `DETAILS.md`.

Before making any implementation decision, read `DETAILS.md`.

---

## Core Instruction

Build a clean, professional, fast, responsive portfolio website that helps Fiverr clients, freelance clients, and technical reviewers quickly understand what Isaac can build.

The portfolio should answer these questions clearly:

1. What does Isaac specialize in?
2. What kind of systems has he built?
3. Which live projects can a client verify?
4. Which private/internal projects can be shown as case studies?
5. What services can a client hire him for?
6. How can a client contact him?

---

## Positioning Rule

Do not use weak generic positioning such as:

- Passionate web developer
- I build beautiful websites
- Creative developer
- Frontend enthusiast
- I love coding

Use strong, specific positioning instead:

- Full-stack web app integration
- Admin dashboard development
- Application portal development
- Auth, database, payment, and deployment setup
- Workflow automation systems
- AI knowledge-base systems
- Production deployment and debugging

---

## Privacy and Security Rules

Never expose private credentials.

Do not include any demo email or password in the UI, code comments, metadata, README, or portfolio content.

For login-based demos, use this wording only:

**Demo access available on request.**

Do not expose private admin URLs.

Do not expose screenshots that contain:

- user records
- applicant data
- payment data
- admin emails
- tokens
- private dashboards
- internal system names that should be hidden
- client-sensitive information

Private/internal systems must be shown as case studies only.

For private case studies, use wording like:

**Screenshots available with sensitive details hidden.**

---

## Implementation Rules

### General

- Do not install packages unless explicitly approved.
- Do not add unnecessary dependencies.
- Do not add authentication.
- Do not add a database.
- Do not add backend routes unless specifically requested.
- Keep this portfolio simple, static, fast, and easy to deploy.
- Prefer clean data-driven components.
- Do not hardcode project content in many places.
- Keep portfolio content centralized in one data file where possible.

### Shadcn UI

Shadcn UI is already installed. Use existing Shadcn components where appropriate.

Allowed / preferred Shadcn components:

- Button
- Card
- Badge
- Separator
- Tabs, only if useful
- Accordion, only if useful for FAQs or project details
- Dialog or Sheet only if truly needed

Rules:

- Do not run `shadcn init`.
- Do not reinstall Shadcn.
- Do not add new Shadcn components unless needed.
- If a Shadcn component is missing, ask before adding it.
- Prefer simple reusable portfolio components over over-engineering.
- Use `lucide-react` only if it is already installed. If not installed, ask before installing.

### If the project uses Next.js App Router

Use:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `src/data/portfolio.ts` or `data/portfolio.ts`
- `components/` for reusable sections/cards

### If the project uses Pages Router

Use:

- `pages/index.tsx`
- `pages/_app.tsx`
- `styles/globals.css`
- `data/portfolio.ts`
- `components/` for reusable sections/cards

---

## Design Direction

The design should feel:

- clean
- serious
- modern
- technical
- trustworthy
- client-ready
- mobile responsive

Avoid:

- childish colors
- too many animations
- fake 3D effects
- cluttered layouts
- excessive gradients
- lorem ipsum
- generic stock phrases
- overdesigned portfolio gimmicks

Use the approved color palette:

- Deep Navy: #0F172A
- Soft Slate Background: #F8FAFC
- White Cards: #FFFFFF
- Primary Blue: #2563EB
- Cyan Accent: #0EA5E9
- Emerald Accent: #10B981
- Body Slate: #334155
- Muted Slate: #64748B
- Border Slate: #E2E8F0

Design style:

- Professional
- Technical
- Clean
- Trustworthy
- Modern
- Fast
- Mobile responsive

Avoid:

- childish colors
- too many gradients
- too many animations
- overdesigned effects
- fake 3D
- generic “passionate developer” wording
- cluttered layouts

### Hero Image Rule

A personal image exists in `src/images`.

The agent must:

- inspect `src/images`
- identify the image filename
- use it in the hero section
- apply clean professional styling
- use alt text “Isaac Otagada”
- avoid editing the image file

Preferred structure:

1. Hero
2. Proof/positioning strip
3. Featured public projects
4. Private case studies
5. Services
6. Tech stack
7. Contact CTA
8. Footer

---

## Content Rules

Use the exact project facts from `DETAILS.md`.

Do not invent:

- fake metrics
- fake clients
- fake testimonials
- fake years of experience
- fake company names
- fake project outcomes
- fake live links
- fake screenshots
- fake technologies

If a project has no public link, treat it as a private case study.

If a project is login-based, show the link but do not show credentials.

---

## Project Priority

The strongest projects should appear first.

Priority order:

1. International Chaplaincy University
2. Special Chaplaincy Peace Corps
3. Admissions FAQ AI
4. AcadThreat MVP
5. SCIU / SCPC Admin & Application Operations Suite
6. Hospital Appointment Management System
7. ShowSage Ticketing Platform
8. Dreys Creative

Dreys Creative is useful, but it is not the strongest positioning project. Do not place it above the full-stack systems.

---

## Required Sections

### 1. Hero Section

Must include:

- Isaac Otagada / Xhicko
- Full-Stack Web App Integration & Deployment Specialist
- Short pitch:

“I build, complete, connect, secure, and deploy full-stack web applications — dashboards, portals, payments, auth, databases, documents, AI knowledge systems, QR verification, and production setup.”

CTA buttons:

- Email Me
- View Resume
- View LinkedIn
- Call Me

Recommended CTA order:

1. Email Me
2. View Resume
3. View LinkedIn
4. Call Me

---

### 2. Proof Strip

Show short proof points:

- Full-stack portals
- Admin dashboards
- Payments & webhooks
- AI knowledge systems
- Deployment & DNS
- QR verification

---

### 3. Featured Public Work

Render public projects as cards.

Each card should include:

- Title
- Category
- Description
- Highlights
- Stack tags
- Public links

---

### 4. Private Case Studies

Render private/internal projects separately.

Make it clear that these are case studies and that screenshots can be shared with sensitive details hidden.

Do not expose admin links.

---

### 5. Services

Service areas:

- Workflow Web Apps
- Auth & Admin Dashboards
- Payments & Integrations
- AI Knowledge Systems
- Database Modeling
- Deployment Setup

---

### 6. Tech Stack

Group technologies by:

- Frontend
- Backend
- Database
- Auth & Security
- Payments & Integrations
- AI / Knowledge Systems
- Deployment
- Documentation & Workflow

---

### 7. Contact CTA

Use this CTA:

“Send me your app link, current problem, and what needs to work in production.”

Contact:

- Email: otagadaisaac@gmail.com
- Phone: +234 903 165 9099
- LinkedIn: https://www.linkedin.com/in/isaac-otagada-418b9b171
- Resume: https://drive.google.com/file/d/1J4iAQvEnyX3HJJ7oY4RRptclQF2KJbsx/view?usp=sharing

Required CTA buttons:

- Email Me
- View Resume
- View LinkedIn
- Call Me

---

## Required Project Link Rules

For Admissions FAQ AI, include:

- Live Demo
- Admin Login
- Knowledge Source / What to Ask

Do not include credentials.

For AcadThreat, include:

- Demo Login

Do not include credentials.

For private projects:

- Do not expose private admin links.
- Use “Screenshots available with sensitive details hidden.”

---

## SEO Rules

Use metadata:

Title:

Isaac Otagada | Full-Stack Web App Integration & Deployment Specialist

Description:

Portfolio of Isaac Otagada, a full-stack developer building web apps, admin dashboards, workflow systems, payments, auth, databases, AI knowledge systems, QR verification, and deployment setups.

Keywords:

Isaac Otagada, Xhicko, full-stack developer, Next.js developer, React developer, PHP developer, admin dashboard developer, web app deployment, payment integration, AI FAQ system, Convex developer, Vercel deployment, Namecheap DNS

---

## Quality Bar

Before finalizing, check:

- Mobile responsiveness
- No exposed passwords
- No private admin URLs
- No fake claims
- No lorem ipsum
- No broken TypeScript types
- External links open correctly
- Projects are ordered by strength
- The page does not look like a beginner portfolio
- The positioning is not generic web design
- Contact section is easy to find

---

## Commands

Before running commands, inspect `package.json`.

Allowed without asking:

```bash
npm run lint
npm run build
npm run typecheck<!-- BEGIN:nextjs-agent-rules -->
```
