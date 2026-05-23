export const owner = {
  name: "Isaac Otagada",
  brandName: "Xhicko",
  location: "Abuja, Nigeria",
  title: "Full-Stack Web App Integration & Deployment Specialist",
  pitch:
    "I build, complete, connect, secure, and deploy full-stack web applications — dashboards, portals, payments, auth, databases, documents, AI knowledge systems, QR verification, and production setup.",
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
    availability: "Screenshots available with sensitive details hidden.",
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
    availability: "Screenshots available with sensitive details hidden.",
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
    availability: "Screenshots available with sensitive details hidden.",
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
    title: "Workflow Web Apps",
    description:
      "Application portals, review flows, onboarding systems, dashboards, forms, approvals, and document workflows.",
  },
  {
    title: "Auth & Admin Dashboards",
    description:
      "RBAC, protected routes, admin panels, MFA, audit logs, verification flows, and secure operational tooling.",
  },
  {
    title: "Payments & Integrations",
    description:
      "Stripe, Paystack, webhooks, email notifications, OTP, APIs, PDF generation, and QR-code workflows.",
  },
  {
    title: "AI Knowledge Systems",
    description:
      "Controlled FAQ systems, knowledge-base design, retrieval flows, fallback handling, and chat persistence.",
  },
  {
    title: "Database Modeling",
    description:
      "Users, roles, payments, logs, documents, workflows, attempts, messages, and operational records.",
  },
  {
    title: "Deployment Setup",
    description:
      "Vercel, Namecheap, cPanel, DNS, subdomains, environment variables, GitHub Actions, and production debugging.",
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
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Shadcn UI",
      "Radix UI",
      "Framer Motion",
      "PHP Views",
    ],
  },
  {
    group: "Backend",
    items: [
      "PHP 8+",
      "Node.js",
      "Express.js",
      "Convex",
      "Next.js API routes",
      "REST APIs",
      "Custom MVC",
      "Service-Oriented Architecture",
      "Repository Pattern",
      "Dependency Injection",
    ],
  },
  {
    group: "Database",
    items: [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Convex Database",
      "SQL Migrations",
      "PDO",
      "Google Sheets/Forms",
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
      "Step-Up MFA",
      "CSRF Protection",
      "bcrypt",
      "Rate Limiting",
      "Audit Logs",
      "Security Logs",
      "Token-Based Public Verification",
    ],
  },
  {
    group: "Payments & Integrations",
    items: [
      "Stripe Checkout",
      "Stripe Webhooks",
      "Paystack",
      "PHPMailer",
      "Resend",
      "Webhooks",
      "QR Code Workflows",
      "OTP",
      "External APIs",
      "PDF generation",
    ],
  },
  {
    group: "AI / Knowledge Systems",
    items: [
      "Controlled FAQ systems",
      "Knowledge-base structuring",
      "Convex search",
      "Retrieval logic",
      "Source-restricted responses",
      "Fallback handling",
      "Query logging",
      "Chat persistence",
      "Metadata logging",
    ],
  },
  {
    group: "Deployment",
    items: [
      "Vercel",
      "Namecheap",
      "cPanel",
      "Git",
      "GitHub Actions",
      "FTP Deployment",
      "Composer",
      "DNS",
      "Subdomains",
      "Environment Variables",
      "Production Debugging",
    ],
  },
  {
    group: "Documentation & Workflow",
    items: [
      "Technical writing",
      "Academic project reports",
      "System design",
      "User guides",
      "Module planning",
      "Implementation checklists",
      "Training materials",
      "AI-assisted development workflows",
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
  privateCaseStudyMessage: "Screenshots available with sensitive details hidden.",
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
