// Content mirrored from ../my-app (lib/site.ts, lib/knowledge.ts, components/sections/*)

export const PROFILE = {
  name: "Noor ul Ain",
  short: "Noor",
  role: "Agentic AI & Full Stack Developer",
  email: "aina25239@gmail.com",
  github: "https://github.com/Noor-ul-ain001",
  linkedin: "https://linkedin.com/in/noor-mudasir",
  resume: "/noorulain.pdf",
  photo: "/img/noor.jpg",
};

export const STACK = ["Python", "FastAPI", "Next.js", "TypeScript", "OpenAI Agents SDK", "MCP", "PostgreSQL", "Docker"];

export const CONTRIBUTIONS = { closed: 76, merged: 73, open: 2, repo: "github/spec-kit" };

// Background tint used behind each case study while it is pinned
const tints = ["#141a12", "#0f1114", "#1a1410", "#140f12", "#11121a", "#0d1416", "#16120e"];

const projectData = [
  {
    title: "Kilo Strength Club",
    subtitle: "Barbell Gym Website",
    category: "UI / Frontend",
    description:
      "A one-page, scroll-animated site for a barbell gym: a condensed hero that scrubs through a clean-and-press clip frame by frame as you scroll, followed by programs, a six-week beginner course, schedule, coaches and pricing.",
    tags: ["React", "Vite", "GSAP", "Lenis"],
    image: "/img/gym.webp",
    live: "https://kilo-strength-club.vercel.app",
    code: "https://github.com/Noor-ul-ain001/kilo-strength-club",
  },
  {
    title: "Jesko Jets",
    subtitle: "Private Aviation Landing Page",
    category: "UI / Frontend",
    description:
      "A dark, editorial landing page for a private-jet charter brand: an oversized airplane-window hero framing the sky, expanded display type, a page loader and scroll-revealed sections for the fleet and global coverage.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "CSS Modules"],
    image: "/img/jesko-jets.webp",
    live: "https://jesko-jets-app.vercel.app",
    code: "https://github.com/Noor-ul-ain001/jesko-jets-app",
  },
  {
    title: "Palmo",
    subtitle: "3D Coconut Drinks Landing Page",
    category: "UI / Frontend",
    description:
      "A playful product page for a coconut-water brand: a real-time 3D coconut and can built with React Three Fiber, GSAP scroll choreography, flavour cards, a basket drawer and a mini-game hidden in the footer.",
    tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    image: "/img/palmo.webp",
    live: "https://palmo-coconut.vercel.app",
    code: "https://github.com/Noor-ul-ain001/palmo-coconut",
  },
  {
    title: "Aurelia",
    subtitle: "Luxury Fragrance Storefront",
    category: "UI / Frontend",
    description:
      "A multi-page eau de parfum storefront: a scroll-driven film hero that follows a single drop into the bottle, a mega menu, a custom cursor, collections, gift sets and a cart, all choreographed with GSAP.",
    tags: ["React", "TypeScript", "GSAP", "Vite"],
    image: "/img/perfume.webp",
    live: "https://aurelia-parfum.vercel.app",
    code: "https://github.com/Noor-ul-ain001/aurelia-parfum",
  },
  {
    title: "The Buzz Crew",
    subtitle: "Agency Portfolio",
    category: "UI / Frontend",
    description:
      "A lavender-toned portfolio for a Karachi-based digital agency serving Pakistan, the UAE and the UK: a script-and-serif hero with device mockups, followed by about, services, process and client work.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis"],
    image: "/img/buzzcrew.webp",
    live: "https://thebuzzcrew.vercel.app",
    code: "https://github.com/Noor-ul-ain001/buzz-crew",
  },
  {
    title: "Buzz Crew Web",
    subtitle: "Digital Agency Website",
    category: "Full Stack",
    description:
      "A full-stack agency website: a night-sky globe hero and a service constellation, plus about, services, work, blog and contact pages with lead capture, served by a Next.js front end and a FastAPI API.",
    tags: ["Next.js", "FastAPI", "Tailwind CSS", "React Hook Form"],
    image: "/img/crew-website.webp",
    live: "https://buzz-crew-web.vercel.app/",
    code: "https://github.com/Noor-ul-ain001/buzz-crew-website",
  },
  {
    title: "Buzz Crew Admin",
    subtitle: "Admin Dashboard",
    category: "Full Stack",
    description:
      "The admin side of the Buzz Crew website: leads, conversion rate and newsletter sign-ups, 30-day activity charts, a lead pipeline, and team, subscriber and content management on the same FastAPI service.",
    tags: ["Next.js", "FastAPI", "Recharts", "Zod"],
    image: "/img/admin.webp",
    live: "https://buzz-crew-web.vercel.app/admin",
    code: "https://github.com/Noor-ul-ain001/buzz-crew-website",
  },
  {
    title: "Visionary",
    subtitle: "Agency Command Center",
    category: "Full Stack",
    description:
      "An agency operations dashboard for managing clients, tracking website and CRM connections, monitoring sync health and viewing pipeline performance, with a public landing page and real persistence.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/img/vision.webp",
    live: "https://visionary-hq.vercel.app",
    code: "https://github.com/Noor-ul-ain001/visionary",
  },
  {
    title: "Digital Marketplace",
    subtitle: "Multi-vendor Products Store",
    category: "Full Stack",
    description:
      "A multi-vendor marketplace where creators sell ebooks, templates, courses and software: a Next.js storefront with faceted browsing and seller-owned product management, backed by FastAPI and Neon Postgres.",
    tags: ["Next.js", "FastAPI", "Neon Postgres", "Clerk"],
    image: "/img/ecommerce.webp",
    live: "https://ecommerce-app.vercel.app",
    code: "https://github.com/Noor-ul-ain001/ecommerce-app",
  },
  {
    title: "DentaCare",
    subtitle: "Clinic Booking Platform",
    category: "Full Stack",
    description:
      "A dental clinic site with live appointment scheduling by service, doctor, date and time, plus an optional voice AI assistant patients can talk to instead of filling out a form.",
    tags: ["Next.js", "Drizzle ORM", "Neon Postgres", "Vapi AI"],
    image: "/img/denta.webp",
    live: "https://dentalclinic-neon.vercel.app",
    code: "https://github.com/Noor-ul-ain001/dentalclinic",
  },
  {
    title: "DocMind",
    subtitle: "RAG Document Q&A",
    category: "RAG",
    description:
      "A multi-tenant platform where organizations upload PDF and DOCX files and ask questions over their own isolated knowledge base, with every answer cited to the source page and tagged with a confidence level.",
    tags: ["Next.js", "FastAPI", "Qdrant", "Claude"],
    image: "/img/rag.webp",
    live: "https://rag-document-qa-platform.vercel.app",
    code: "https://github.com/Noor-ul-ain001/rag-document-qa-platform",
  },
  {
    title: "CatalogIQ",
    subtitle: "Catalog Optimization Loop",
    category: "AI Agents",
    description:
      "An autonomous maker-checker pipeline that turns raw product CSVs into market-ready listings. A Writer agent drafts, SEO and brand-safety checkers grade, and nothing publishes without human approval.",
    tags: ["Next.js", "FastAPI", "Multi-Agent", "SSE"],
    image: "/img/intelligenceiq.webp",
    live: "https://ecommerce-catalog-intelligence.vercel.app",
    code: "https://github.com/Noor-ul-ain001/ecommerce-catalog-intelligence",
  },
  {
    title: "Supply Chain Tower",
    subtitle: "Agentic Control Tower",
    category: "AI Agents",
    description:
      "An enterprise-grade control tower where nine autonomous agents monitor suppliers, inventory and shipments, surface disruptions and route recommended actions through human approval.",
    tags: ["Next.js", "Prisma", "SQLite", "Multi-Agent"],
    image: "/img/inventory.webp",
    live: "https://supply-chain-inventory.vercel.app",
    code: "https://github.com/Noor-ul-ain001/supplychain",
  },
];

export const PROJECTS = projectData.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, "0"),
  tint: tints[i % tints.length],
}));

export const SERVICES = [
  {
    title: "Agentic AI",
    full: "Agentic AI Development",
    time: "2–5 weeks",
    description: "Multi-agent systems, tool-calling pipelines and autonomous workflows that plan, act and self-correct.",
    stack: ["OpenAI Agents SDK", "MCP", "Python"],
  },
  {
    title: "Full Stack Web",
    full: "Full Stack Web Development",
    time: "3–8 weeks",
    description: "End-to-end web applications, from the interface a user touches to the database behind it.",
    stack: ["Next.js", "TypeScript", "FastAPI"],
  },
  {
    title: "RAG Systems",
    full: "RAG & Knowledge Systems",
    time: "2–4 weeks",
    description: "Retrieval-augmented assistants over your own documents and data, with answers you can trust.",
    stack: ["Vector DB", "Hybrid Search", "LangChain"],
  },
  {
    title: "APIs & Backend",
    full: "API & Backend Engineering",
    time: "2–6 weeks",
    description: "Robust, well-tested APIs and services designed to scale cleanly as usage grows.",
    stack: ["FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "Open Source",
    full: "Open Source Collaboration",
    time: "Ongoing, per PR",
    description: "Hands-on contributions, code review and maintenance support for existing codebases.",
    stack: ["Git", "GitHub Actions", "Python"],
  },
];

export const CERTIFICATES = [
  { title: "General Agents Fundamentals Part 1 Exam", issuer: "Panaversity", issued: "Apr 2026", href: "https://panaversity.org/p/aina25239-vdey" },
  { title: "Model Context Protocol", issuer: "Anthropic", issued: "Mar 2026" },
  { title: "Claude Code in Action", issuer: "Anthropic", issued: "Mar 2026" },
  { title: "React Fundamental", issuer: "Freeacademy", issued: "Mar 2026" },
  { title: "Micro Claude Projects Artifacts", issuer: "Freeacademy", issued: "Mar 2026" },
  { title: "Claude 101", issuer: "Anthropic", issued: "Feb 2026" },
  {
    title: "Vista Equity Partners: AI in Action",
    issuer: "Forage",
    issued: "Mar 2026",
    href: "https://www.theforage.com/completion-certificates/BotenCEjm3LFxtq9A/EregFenDKXDDeTGR2_BotenCEjm3LFxtq9A_69b65035fc1ffcbc5a892c3e_1773643854220_completion_certificate.pdf",
  },
  {
    title: "Resume Writing with AI Support",
    issuer: "Forage",
    issued: "Mar 2026",
    href: "https://www.theforage.com/completion-certificates/rm6of58ywoJoNuiBt/ohm6nvufSdZc2aQAA_rm6of58ywoJoNuiBt_69b65035fc1ffcbc5a892c3e_1773642402079_completion_certificate.pdf",
  },
  {
    title: "Skyscanner: Front-End Software Engineering",
    issuer: "Forage",
    issued: "Mar 2026",
    href: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_69b65035fc1ffcbc5a892c3e_1773595607687_completion_certificate.pdf",
  },
];
