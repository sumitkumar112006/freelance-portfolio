export const projectsData = [
  {
    id: "web-automation",
    title: "Web Automation – Agentic Browser Platform",
    tagline: "Autonomous browser automation engine with visual DAG workflows, Stagehand v4, & Trigger.dev",
    category: "AI & Full-Stack",
    status: "Live",
    featured: true,
    year: "2026",
    stars: "",
    metrics: [
      { label: "AI Engine", value: "Stagehand v4", change: "Browserbase SDK" },
      { label: "Workflow Studio", value: "React Flow", change: "Multiplayer Canvas" },
      { label: "Task Engine", value: "Trigger.dev", change: "Toposort DAGs" },
      { label: "Database & Auth", value: "Neon + Clerk", change: "Drizzle ORM" }
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Stagehand v4",
      "Browserbase",
      "Trigger.dev",
      "React Flow",
      "Liveblocks",
      "Neon Postgres",
      "Drizzle ORM",
      "Clerk Auth",
      "Tailwind CSS",
      "Sentry"
    ],
    description: "An enterprise-grade agentic browser automation platform that transforms natural language and visual node graphs into resilient, self-healing browser execution pipelines. Users can visually construct automation workflows using an interactive canvas, collaborate in real time with Liveblocks, and orchestrate autonomous AI agents powered by Stagehand v4 and Browserbase to navigate, interact with, and extract data from complex modern web applications.",
    architecture: {
      diagram: [
        { stage: "Auth & Multi-Tenancy", desc: "Clerk-authenticated user sessions with team organization workspaces and protected route middleware" },
        { stage: "Visual Flow Studio", desc: "Interactive DAG canvas built with React Flow (@xyflow/react) and real-time Liveblocks collaboration" },
        { stage: "Task Orchestrator", desc: "Trigger.dev background job runner executing topologically-sorted node pipelines with automatic retries" },
        { stage: "Stagehand Browser Engine", desc: "Browserbase cloud browser integration for AI-driven act, observe, and structured DOM data extraction" },
        { stage: "Persistence & Telemetry", desc: "Neon serverless PostgreSQL with Drizzle ORM schemas and Sentry edge/server error observability" }
      ],
      highlights: [
        "Architected an interactive drag-and-drop workflow canvas with custom trigger and action nodes (Open URL, Act, Observe, Extract, AI Agent, Send Email).",
        "Integrated Stagehand v4 with Browserbase cloud browsers to enable AI-powered natural language browser navigation and self-healing action execution.",
        "Built a robust background execution pipeline using Trigger.dev and toposort DAG graph resolution for cycle detection and fault-tolerant execution.",
        "Implemented real-time multiplayer collaboration with Liveblocks alongside multi-tenant Clerk auth, Neon serverless PostgreSQL, and Drizzle ORM."
      ]
    },
    liveUrl: "https://web-automation-zxvp.onrender.com/",
    githubUrl: "https://github.com/sumitkumar112006/Web-automation",
    accent: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "kivi-ai",
    title: "Kivi AI – Interview Simulator",
    tagline: "AI-powered mock interview platform with real-time feedback",
    category: "AI & Full-Stack",
    status: "Live",
    featured: true,
    year: "2026",
    stars: "",
    metrics: [
      { label: "AI Engine", value: "Gemini AI", change: "Real-time Q&A" },
      { label: "Interview Modes", value: "Multiple", change: "Role-based" },
      { label: "Stack", value: "React + Node", change: "Full-Stack" },
      { label: "Auth", value: "JWT Secure", change: "User Accounts" }
    ],
    tech: ["React", "Node.js", "Gemini AI", "JWT", "MongoDB", "Tailwind CSS"],
    description: "Kivi AI is an intelligent interview preparation platform that simulates real interview scenarios using Google Gemini AI. Users can select a role, answer dynamic AI-generated questions, and receive instant feedback on their responses — sharpening their interview skills through structured, realistic practice sessions.",
    architecture: {
      diagram: [
        { stage: "Auth Layer", desc: "JWT-based secure login and user session management" },
        { stage: "AI Engine", desc: "Gemini AI integration for dynamic question generation and answer evaluation" },
        { stage: "Interview Flow", desc: "Role-based question sets with real-time response feedback" },
        { stage: "Result Store", desc: "MongoDB persistence for session history and progress tracking" }
      ],
      highlights: [
        "Integrated Google Gemini AI for dynamic, role-specific interview question generation.",
        "Built secure authentication with JWT and protected user interview sessions.",
        "Designed an adaptive feedback system that evaluates answers in real-time."
      ]
    },
    liveUrl: "https://ai-interviewer-silk.vercel.app/login",
    githubUrl: "https://github.com/sumitkumar112006/ai-interviewer",
    accent: "from-violet-500/20 to-purple-500/10"
  },
  {
    id: "beauty-parlour",
    title: "Lady Boss – Beauty Parlour",
    tagline: "Elegant bridal studio website for Tanmatra Makeup Artist",
    category: "Web Design",
    status: "Live",
    featured: true,
    year: "2025",
    stars: "",
    metrics: [
      { label: "Services Listed", value: "6 Packages", change: "Bridal & Party" },
      { label: "Sections", value: "Gallery & Reviews", change: "Full Landing Page" },
      { label: "Booking CTA", value: "Direct Contact", change: "Appointment Flow" },
      { label: "Design", value: "Elegant UI", change: "Mobile Responsive" }
    ],
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    description: "A premium beauty parlour landing page designed for 'Lady Boss by Tanmatra Makeup Artist', a bridal studio based in Meerut, UP. Features a royal aesthetic with sections for services, portfolio gallery, client reviews, and a direct booking flow — crafted to attract and convert bridal clients.",
    architecture: {
      diagram: [
        { stage: "Hero Section", desc: "Bold headline with Book Now and View Portfolio CTAs" },
        { stage: "Services Grid", desc: "Cards showcasing Bridal, Pre-Bridal, Hair, Party, Facials, and Nail packages" },
        { stage: "Gallery", desc: "Royal Transformations portfolio with bride story images" },
        { stage: "Contact & Booking", desc: "Direct contact form with appointment booking flow" }
      ],
      highlights: [
        "Designed a premium, elegant royal UI to match a high-end bridal studio brand identity.",
        "Implemented a smooth multi-section scroll layout with responsive design across all devices.",
        "Built a clear service showcase with structured packages to improve client conversion."
      ]
    },
    liveUrl: "https://sumitkumar112006.github.io/Beauty_Parlour/",
    githubUrl: "https://github.com/sumitkumar112006/Beauty_Parlour",
    accent: "from-pink-500/20 to-rose-500/10"
  },
  {
    id: "agency-ui",
    title: "Agency UI – Creative Agency Site",
    tagline: "Modern creative agency landing page with bold design",
    category: "Web Design",
    status: "Live",
    featured: true,
    year: "2025",
    stars: "",
    metrics: [
      { label: "Design System", value: "Custom CSS", change: "Brand Consistent" },
      { label: "Layout", value: "Responsive", change: "All Viewports" },
      { label: "Sections", value: "Multi-section", change: "Full Landing Page" },
      { label: "Deployment", value: "GitHub Pages", change: "Static Hosting" }
    ],
    tech: ["HTML", "CSS", "JavaScript", "Vite", "GitHub Pages"],
    description: "A bold and modern creative agency UI built from scratch with a strong visual identity. Features a polished landing page layout with clear service sections, smooth navigation, and a professional structure suited for digital agencies and creative studios.",
    architecture: {
      diagram: [
        { stage: "Navigation", desc: "Sticky navbar with smooth section anchors and CTA" },
        { stage: "Hero Block", desc: "High-impact headline with brand messaging and primary actions" },
        { stage: "Services", desc: "Organized service cards with icon-led descriptions" },
        { stage: "Contact Footer", desc: "Professional footer with contact and social links" }
      ],
      highlights: [
        "Built a pixel-perfect agency UI with bold typography and strong visual hierarchy.",
        "Implemented a fully responsive layout optimized for desktop and mobile screens.",
        "Deployed as a static site on GitHub Pages with zero-dependency performance."
      ]
    },
    liveUrl: "https://sumitkumar112006.github.io/Agency_Project/",
    githubUrl: "https://github.com/sumitkumar112006/Agency_Project",
    accent: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1 – Personal Site",
    tagline: "First-generation personal developer portfolio",
    category: "Portfolio",
    status: "Live",
    featured: false,
    year: "2024",
    stars: "",
    metrics: [
      { label: "Sections", value: "Skills & Projects", change: "Full Portfolio" },
      { label: "Font Stack", value: "Outfit + Great Vibes", change: "Premium Typography" },
      { label: "Stack", value: "React + Vite", change: "Modern Build" },
      { label: "Hosting", value: "Vercel", change: "Auto-Deploy" }
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
    description: "My first personal developer portfolio built with React and Vite, featuring a clean dark design with premium typography using Outfit and Great Vibes fonts. Showcases my skills, projects, and journey as a Full-Stack Developer with smooth navigation and a professional presentation.",
    architecture: {
      diagram: [
        { stage: "Hero", desc: "Personal introduction with role title and key highlights" },
        { stage: "Skills", desc: "Tech stack display with categorized skill badges" },
        { stage: "Projects", desc: "Project cards linking to live demos and repositories" },
        { stage: "Contact", desc: "Contact section for client and collaboration inquiries" }
      ],
      highlights: [
        "Built a fully responsive personal portfolio using React and Vite with zero-config deployment on Vercel.",
        "Applied premium Google Font pairing (Outfit + Great Vibes) for a distinctive typographic identity.",
        "Structured clear project and skill showcases to communicate technical capabilities to recruiters and clients."
      ]
    },
    liveUrl: "https://myportfolio-lovat-phi-37.vercel.app/",
    githubUrl: "https://github.com/sumitkumar112006/myportfolio",
    accent: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2 – Upgraded Developer Site",
    tagline: "Second-generation portfolio with refined design and content",
    category: "Portfolio",
    status: "Live",
    featured: false,
    year: "2025",
    stars: "",
    metrics: [
      { label: "Design", value: "Upgraded UI", change: "v2 Refinement" },
      { label: "Content", value: "Expanded", change: "More Projects" },
      { label: "Stack", value: "React + Vite", change: "Modern Build" },
      { label: "Hosting", value: "Vercel", change: "Auto-Deploy" }
    ],
    tech: ["React", "Vite", "CSS", "Vercel"],
    description: "An upgraded version of my personal portfolio with refined design, improved content structure, and a more polished presentation. Reflects growth in design taste and development skills since the first version, with expanded project showcases and a more professional visual identity.",
    architecture: {
      diagram: [
        { stage: "Hero", desc: "Polished introduction with updated personal branding" },
        { stage: "Projects", desc: "Expanded project showcase with detailed descriptions" },
        { stage: "Skills", desc: "Updated tech stack reflecting current capabilities" },
        { stage: "Contact", desc: "Professional contact and social media links" }
      ],
      highlights: [
        "Refined the visual design system with improved spacing, typography, and color usage.",
        "Expanded project showcase to reflect growth and new full-stack and AI projects.",
        "Deployed on Vercel with continuous deployment linked to GitHub repository."
      ]
    },
    liveUrl: "https://ss-portfolio-nu.vercel.app/",
    githubUrl: "https://github.com/sumitkumar112006/ss-portfolio",
    accent: "from-amber-500/20 to-orange-500/10"
  }
];
