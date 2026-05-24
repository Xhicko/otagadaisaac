export const owner = {
  name: "Isaac Otagada",
  brandName: "Xhicko",
  location: "Abuja, Nigeria",
  title: "Full-Stack Web App Integration & Deployment Specialist",
  pitch:
    "I build, complete, connect, secure, and deploy full-stack web applications, dashboards, portals, payments, auth, databases, documents, AI knowledge systems, QR verification, and production setup.",
  email: "otagadaisaac@gmail.com",
  phone: "+234 903 165 9099",
  phoneHref: "tel:+2349031659099",
  linkedIn: "https://www.linkedin.com/in/isaac-otagada-418b9b171",
  resume:
    "https://drive.google.com/file/d/1J4iAQvEnyX3HJJ7oY4RRptclQF2KJbsx/view?usp=sharing",
};

export const personalImage = {
  src: "src/images/isaac-otagada.png",
  originalSrc: "src/images/Passport.PNG",
  alt: "Isaac Otagada",
  usage:
    "Use in the hero section with a professional object-cover crop. The lowercase copy exists for Turbopack compatibility; do not modify or overwrite the original image file.",
};

export const ctas = [
  {
    label: "Email Me",
    href: `mailto:${owner.email}`,
    priority: 1,
  },
  {
    label: "View Resume",
    href: owner.resume,
    priority: 2,
    external: true,
  },
  {
    label: "View LinkedIn",
    href: owner.linkedIn,
    priority: 3,
    external: true,
  },
  {
    label: "Call Me",
    href: owner.phoneHref,
    priority: 4,
  },
];

export const colorSystem = {
  direction:
    "Professional dark navy, white, slate, blue, cyan, and small emerald accents.",
  palette: {
    deepNavy: "#0F172A",
    pageBackground: "#F8FAFC",
    cardBackground: "#FFFFFF",
    primaryAccentBlue: "#2563EB",
    secondaryAccentCyan: "#0EA5E9",
    securitySuccessAccentEmerald: "#10B981",
    bodyTextSlate: "#334155",
    mutedText: "#64748B",
    borderColor: "#E2E8F0",
  },
  usageRules: [
    "Use deep navy for strong headings, footer, and selected dark sections.",
    "Use white and soft slate backgrounds for clean readability.",
    "Use blue for primary CTAs.",
    "Use cyan sparingly for technical highlights.",
    "Use emerald sparingly for security/proof badges.",
    "Do not use too many colors.",
    "Do not make the site look childish, flashy, or like a beginner design.",
    "Avoid heavy gradients, unless very subtle.",
    "Prioritize trust, clarity, and professionalism.",
  ],
};

export const seo = {
  title: "Isaac Otagada | Full-Stack Web App Integration & Deployment Specialist",
  description:
    "Portfolio of Isaac Otagada, a full-stack developer building web apps, admin dashboards, workflow systems, payments, auth, databases, AI knowledge systems, QR verification, and deployment setups.",
  keywords: [
    "Isaac Otagada",
    "Xhicko",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "PHP developer",
    "admin dashboard developer",
    "web app deployment",
    "payment integration",
    "AI FAQ system",
    "Convex developer",
    "Vercel deployment",
    "Namecheap DNS",
  ],
};

export const proofPoints = [
  "Full-stack portals",
  "Admin dashboards",
  "Payments & webhooks",
  "AI knowledge systems",
  "Deployment & DNS",
  "QR verification",
];

export const publicProjects = [
  {
    title: "International Chaplaincy University",
    category: "University Website & Portal Ecosystem",
    description:
      "Public university website and portal ecosystem supporting admissions visibility, programme access, student entry points, payment/document workflows, and institutional web presence.",
    highlights: [
      "Public university website",
      "Admission-facing portal structure",
      "Programme-specific portal access",
      "Education workflow support",
      "Payment and document workflow experience",
      "Institutional web presence",
    ],
    stack: [
      "PHP",
      "MySQL/MariaDB",
      "JavaScript",
      "HTML",
      "CSS",
      "Payments",
      "Document workflows",
      "Admin dashboards",
    ],
    links: [
      { label: "Website", href: "https://interchapuni.com/" },
      { label: "Undergraduate Portal", href: "https://ug.interchapuni.com/" },
      { label: "Diploma / SCP Portal", href: "https://scp.interchapuni.com/" },
    ],
  },
  {
    title: "Special Chaplaincy Peace Corps",
    category: "Membership Website, Application Portal & Verification System",
    description:
      "Membership and application platform covering public web presence, application start flow, identity verification, payment handling, admin operations, CBT-related workflows, and QR-code validation.",
    highlights: [
      "Member application flow",
      "QR identity verification",
      "Token-based validation",
      "Public verification page",
      "Admin operations support",
      "Payment workflow experience",
      "CBT and membership system experience",
    ],
    stack: [
      "PHP",
      "MySQL/MariaDB",
      "Next.js",
      "TypeScript",
      "Convex",
      "Better Auth",
      "Stripe",
      "PHPMailer",
      "Vercel",
      "Namecheap DNS",
      "QR Codes",
      "RBAC",
      "Audit Logging",
    ],
    links: [
      { label: "Website", href: "https://scpc.us/" },
      { label: "Application Start", href: "https://scpc.us/application/start" },
      { label: "QR Verification", href: "https://verify.scpc.us/" },
    ],
  },
  {
    title: "Admissions FAQ AI",
    category: "Controlled AI Knowledge-Base System",
    description:
      "Admissions FAQ chatbot designed to answer from approved programme data, track conversations, handle fallback responses, and support controlled knowledge-base improvement.",
    note: "The knowledge source shows the programme and admission data the FAQ/RAG system was trained or structured around, so demo users know what type of questions to ask. Demo access available on request.",
    highlights: [
      "Controlled answers",
      "Knowledge-base retrieval",
      "Chat persistence",
      "Fallback handling",
      "Admin knowledge review",
      "Source-restricted response behavior",
      "Unknown-question improvement path",
      "Metadata logging",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Convex",
      "AI/RAG Concepts",
      "Knowledge-base design",
      "Vercel",
    ],
    links: [
      { label: "Live Demo", href: "https://admissions-faq-ai.vercel.app" },
      { label: "Admin Login", href: "https://admissions-faq-ai.vercel.app/login" },
      {
        label: "Knowledge Source / What to Ask",
        href: "https://drive.google.com/file/d/1MSR4G0MTgg2TYQHVlBQqgSr0-1CzUEMJ/view?usp=sharing",
      },
    ],
  },
  {
    title: "AcadThreat MVP",
    category: "Cybersecurity Monitoring Dashboard",
    description:
      "Cybersecurity dashboard MVP for monitoring alerts, suspicious activity, threat indicators, scoring, and trend visibility using simulated logs and URLHaus threat intelligence flow.",
    note: "Demo access available on request.",
    highlights: [
      "Threat indicators",
      "Alert dashboard",
      "Scoring logic",
      "Security visibility",
      "URLHaus integration concept",
      "Simulated log testing",
      "Cybersecurity product thinking",
    ],
    stack: [
      "Next.js",
      "React",
      "Cybersecurity Dashboard",
      "URLHaus",
      "Vercel",
      "Security alerts",
      "Dashboard design",
    ],
    links: [{ label: "Demo Login", href: "https://acadthreat.vercel.app/login" }],
  },
  {
    title: "Dreys Creative",
    category: "Responsive Creative Portfolio Website",
    description:
      "Responsive portfolio website for a creative agency with polished visual sections, motion, gallery presentation, and reusable frontend components.",
    highlights: [
      "Responsive frontend",
      "Portfolio showcase",
      "Motion effects",
      "Client brand presence",
      "Visual presentation",
      "Reusable components",
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion", "Radix UI", "Vercel"],
    links: [{ label: "Live Website", href: "https://dreys-creative.vercel.app/" }],
  },
];

export const projectPriority = [
  "International Chaplaincy University",
  "Special Chaplaincy Peace Corps",
  "Admissions FAQ AI",
  "AcadThreat MVP",
  "SCIU / SCPC Admin & Application Operations Suite",
  "Hospital Appointment Management System",
  "ShowSage Ticketing Platform",
  "Dreys Creative",
];

export const privateCaseStudies = [
  {
    title: "SCIU / SCPC Admin & Application Operations Suite",
    category: "Private Case Study",
    description:
      "Internal operations suite covering scoped admin dashboards, CP and affiliation application portals, users, payments, receipts, disputes, documents, exams, approvals, exports, application forms, PDF receipts, and deployment automation.",
    availability: "Private case study. More details available during a project discussion.",
    highlights: [
      "Secure admin dashboards with MFA, RBAC, audit logs, and step-up verification",
      "Application workflows with email verification, payments, document uploads, summaries, and PDFs",
      "Database models for users, applications, payments, receipts, disputes, documents, exams, logs, and final submissions",
      "Payment operations including receipts, verification, disputes, exports, and activation",
      "Exam administration features",
      "Document review workflows",
      "GitHub Actions deployment to Namecheap using Composer and FTP release exclusions",
    ],
    stack: [
      "PHP 8",
      "MySQL/MariaDB",
      "Custom MVC",
      "Composer PSR-4",
      "Stripe",
      "PHPMailer",
      "Resend",
      "mPDF",
      "MFA/TOTP",
      "RBAC",
      "CSRF",
      "Rate Limiting",
      "Audit Logs",
      "GitHub Actions",
      "Namecheap",
    ],
  },
  {
    title: "Hospital Appointment Management System",
    category: "Private / Institutional Case Study",
    description:
      "Medical onboarding and appointment workflow system with student and doctor/admin portals, medical history submission, conflict-free scheduling, and notifications.",
    availability: "Private case study. More details available during a project discussion.",
    highlights: [
      "Reduced paperwork time from about 60 minutes to 3 minutes",
      "Supported onboarding for 1,000+ students",
      "Student and doctor/admin portals",
      "Medical history submission",
      "Conflict-free scheduling",
      "Notifications",
      "Atomic RPC operations",
      "State-machine workflow logic",
    ],
    stack: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL RPC",
      "Zustand",
      "Authentication",
      "Notifications",
    ],
  },
  {
    title: "ShowSage Ticketing Platform",
    category: "Product Case Study",
    description:
      "Ticketing platform concept covering event discovery, secure payments, QR-code tickets, seller/admin management, and contactless entry verification.",
    availability: "Private case study. More details available during a project discussion.",
    highlights: [
      "Role-based workflows for users, sellers, and admins",
      "Paystack webhook verification",
      "QR ticketing and transaction workflows",
      "Event discovery",
      "Secure payments",
      "Contactless entry verification",
      "Seller/admin management",
    ],
    stack: ["React", "Express.js", "MongoDB", "Paystack", "QR Codes", "JWT", "RBAC", "Webhooks"],
  },
];

export const services = [
  {
    title: "Full-Stack Web Apps & Portals",
    description:
      "I build custom web applications that match the client’s workflow. Examples from my past work include application portals, membership systems, student platforms, onboarding flows, internal tools, dashboards, forms, approvals, and document workflows.",
  },
  {
    title: "Admin Dashboards & Secure Operations",
    description:
      "I build secure admin areas for managing users, records, reviews, payments, documents, and operational activity. My experience includes RBAC, protected routes, MFA/step-up MFA flows, audit logs, verification flows, review queues, and operational dashboards.",
  },
  {
    title: "Payments, Webhooks & Transaction Flows",
    description:
      "I help connect payment flows into real applications. My experience includes Stripe, Paystack, payment attempts, webhook verification, receipt handling, payment status updates, duplicate-payment prevention, PDF receipts, and transaction-safe workflows.",
  },
  {
    title: "DNS, Domains & Multi-Host Setup",
    description:
      "I help connect domains, subdomains, and hosting platforms so applications open correctly in production. My experience includes Cloudflare, Namecheap, cPanel, Vercel, CNAME/A/TXT records, SSL mode, proxy settings, DNS validation, and hybrid hosting setups.",
  },
  {
    title: "Cloudflare, Namecheap & cPanel Debugging",
    description:
      "I help troubleshoot domain and hosting issues across Cloudflare, Namecheap, cPanel, Apache, and app folders. My experience includes subdomain setup, Apache recognition, .htaccess routing, folder mapping, index fallback fixes, default hosting pages, SSL issues, and propagation delays.",
  },
  {
    title: "Vercel, cPanel & Shared Hosting Deployment",
    description:
      "I deploy and configure web applications across modern and shared-hosting environments. My experience includes Next.js deployment on Vercel, PHP/Composer deployment on Namecheap/cPanel, GitHub Actions FTP deployment, environment setup, production configuration, and release troubleshooting.",
  },
  {
    title: "Local Development Domains & Stable Demo URLs",
    description:
      "I set up local and temporary development access for testing apps properly. My experience includes Windows hosts file setup, Apache VirtualHost, .env URL configuration, XAMPP, custom .local domains, DNS cache flushing, and Cloudflare Tunnel stable HTTPS demo URLs.",
  },
  {
    title: "Business Email & Transactional Email Setup",
    description:
      "I help set up app and business email flows for real system use. My experience includes Resend, PHPMailer, Nodemailer, Google SMTP, ZeptoMail, Cloudflare Email Routing, SPF/DKIM/DMARC, OTP emails, verification/reset emails, contact forms, and app notification emails.",
    shortDescription:
      "I help set up app and business email flows for real system use. My experience includes Resend, PHPMailer, Nodemailer, Google SMTP, ZeptoMail, Cloudflare Email Routing, SPF/DKIM/DMARC, OTP emails, verification/reset emails, contact forms, and app notification emails.",
  },
  {
    title: "AI Knowledge Systems & RAG-Style FAQ Tools",
    description:
      "I build controlled AI/FAQ systems that answer from approved knowledge instead of guessing. My experience includes knowledge-base structuring, source-restricted answers, Convex-powered retrieval, fallback handling, unknown-question logging, chat persistence, metadata logging, and admin knowledge review.",
  },
  {
    title: "Database Modeling & Workflow Records",
    description:
      "I design data structures for systems with real operational records. My experience includes users, roles, applications, payments, receipts, disputes, documents, exams, verification logs, audit logs, security logs, chat messages, form sections, attempts, and workflow records.",
  },
  {
    title: "Technical Documentation & Client Handoff",
    description:
      "I prepare documentation that helps clients, users, or future developers understand the system. My experience includes setup guides, deployment runbooks, DNS playbooks, troubleshooting notes, user guides, system documentation, training materials, and AI-agent implementation instructions.",
  },
  {
    title: "AI-Assisted Development Workflow Setup",
    description:
      "I help structure development work so AI tools and coding agents follow the right plan. My experience includes AGENTS.md files, implementation chunks, Codex/Copilot workflow control, tmux session guidance, debugging checklists, and safe staged development workflows.",
  },
];

export const techStack = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Radix UI",
      "Framer Motion",
      "Bootstrap",
    ],
  },
  {
    group: "Backend",
    items: [
      "PHP 8+",
      "Node.js",
      "Express.js",
      "Convex",
      "REST APIs",
      "Composer",
      "Custom MVC",
      "Service-Oriented Architecture",
    ],
  },
  {
    group: "Databases",
    items: [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Convex Database",
      "PDO",
      "SQL Migrations",
    ],
  },
  {
    group: "Auth & Security",
    items: [
      "Better Auth",
      "Auth.js",
      "Auth0",
      "Custom Auth",
      "JWT",
      "RBAC",
      "MFA/TOTP",
      "CSRF",
      "bcrypt",
      "Rate Limiting",
      "Audit Logs",
    ],
  },
  {
    group: "Payments & Email",
    items: [
      "Stripe",
      "Paystack",
      "Resend",
      "PHPMailer",
      "Nodemailer",
      "Google SMTP",
      "ZeptoMail",
      "Cloudflare Email Routing",
      "Webhooks",
    ],
  },
  {
    group: "DNS, Hosting & Deployment",
    items: [
      "Vercel",
      "Namecheap",
      "cPanel",
      "Cloudflare",
      "GitHub Actions",
      "FTP Deployment",
      "DNS Records",
      "Subdomains",
      "Cloudflare Tunnel",
    ],
  },
  {
    group: "AI & Knowledge Systems",
    items: [
      "Controlled FAQ Systems",
      "RAG-Style Workflows",
      "Convex Search",
      "Retrieval Logic",
      "Fallback Handling",
      "Chat Persistence",
    ],
  },
  {
    group: "Documentation & Workflow",
    items: [
      "Technical Writing",
      "System Design",
      "Runbooks",
      "User Guides",
      "AGENTS.md",
      "Implementation Checklists",
      "AI-Assisted Development",
    ],
  },
];

export const contact = {
  email: owner.email,
  phone: owner.phone,
  phoneHref: owner.phoneHref,
  linkedIn: owner.linkedIn,
  resume: owner.resume,
  cta: "Send me your app link, current problem, and what needs to work in production.",
};

export const contentWarnings = {
  loginDemoMessage: "Demo access available on request.",
  privateCaseStudyMessage:
    "Private case study. More details available during a project discussion.",
  neverExpose: [
    "demo passwords",
    "test credentials",
    "private admin URLs",
    "private screenshots with visible data",
    "sensitive client records",
    "payment records",
    "applicant records",
    "raw tokens",
    "internal secrets",
    "environment variables",
    "fake metrics",
    "fake testimonials",
  ],
};
