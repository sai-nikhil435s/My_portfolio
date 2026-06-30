// ─── Types ────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "AI Project"
  | "AI / Full Stack"
  | "Web Development"
  | "Full Stack"
  | "Data / ML";

export type Project = {
  name: string;
  category: ProjectCategory;
  featured: boolean;
  problem: string;
  architecture: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  github: string;
  demo: string;
  screenshot: string;
};

// ─── Profile ──────────────────────────────────────────────────────────────────

export const profile = {
  name: "Mamidi Sai Nikhil ",
  role: "Aspiring AI/ML Engineer · Generative AI Enthusiast · Full-Stack Developer",
  location: "India",
  email: "mamidisainikhil@gmail.com",
  github: "https://github.com/sai-nikhil435s",
  linkedin: "https://www.linkedin.com/in/mamidi-sainikhil/",
  resume: "/SaiNikhil_Resume.pdf",
  availability: "Currently looking for full-time roles in Generative AI, AI/ML, and Full-Stack Development",
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navItems = [
  "Home",
  "Projects",
  "GitHub",
  "Resume",
  "Contact",
];

// ─── Skills ───────────────────────────────────────────────────────────────────

import {
  BrainCircuit,
  Sparkles,
  Bot,
  Terminal,
  Network,
  Zap,
  Code2,
  Layers3,
  Database,
  Rocket,
} from "lucide-react";
// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
    {
    name: "AI Resume Analyzer",
    category: "AI / Full Stack",
    featured: true,
    problem:
      "Job seekers and recruiters waste hours manually comparing resumes to job descriptions with no objective scoring system or skill gap visibility.",
    
    architecture:
      "Next.js frontend (Vercel) → FastAPI backend (Render) → pdfplumber PDF extraction → TF-IDF cosine similarity + keyword matching + Groq LLaMA 3.3 70B LLM scoring → hybrid weighted result → SQLite history storage.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "LangChain",
      "Groq API",
      "LLaMA 3.3 70B",
      "pdfplumber",
      "SQLite",
      "Vercel",
      "Render",
    ],
    features: [
      "Upload up to 8 resumes simultaneously",
      "Hybrid AI scoring (Semantic + Keyword + LLM)",
      "Ranked leaderboard with medal badges",
      "Matched / missing / bonus skill chips",
      "Score breakdown donut chart",
      "AI-generated strengths, gaps & improvement tips",
      "Side-by-side candidate comparison table",
      "Analysis history with SQLite persistence",
      "Stats footer (avg score, top skills, analysis time)",
      "Fully responsive dark dashboard UI",
    ],
    challenges: [
      "sentence-transformers exceeded Render free tier 512MB RAM limit — replaced with pure Python TF-IDF cosine similarity achieving comparable results at under 5MB memory",
      "LLM score inconsistency at temperature 0.3 — set to 0 for deterministic, reproducible scoring",
      "Deprecated LangChain v0.1 syntax — migrated to langchain-core LCEL pipe pattern",
      "Monorepo deployment — configured Root Directory in both Render and Vercel to point to backend/ and frontend/ subfolders respectively",
    ],
   
    
    github: "https://github.com/sai-nikhil435s/ai_resume_analyzer",
    demo: "https://ai-resume-analyzer-navy-ten.vercel.app",
    screenshot: "/projects/ai-resume-analyzer.png",
  },
  {
    name: "Balaji Kirana Store",
    category: "Web Development",
    featured: true,
    problem:
      "My family's small kirana business was managing products, and customer orders manually which was time-consuming and error-prone.",
    architecture:
      "React.js frontend → Node.js + Express.js REST API → MongoDB database → Deployed on Vercel.",
    technologies:["React.js", "JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB", "Git"],
    features: ["Add and manage products",  "Manage customer orders", "Product category management", "Responsive UI for mobile and desktop", "MongoDB-powered data storage"],
    challenges: ["Connecting React frontend with Node.js backend API", "Managing MongoDB data structure for inventory", "Deploying full-stack app on Vercel"],
    github: "https://github.com/sai-nikhil435s/Balaji-kirana",
    demo: "https://balaji-kirana.vercel.app",
    screenshot:"/projects/balaji-kirana.png",
  },
  {
    name: "Clinic AI Assistant",
    category: "AI Project",
    featured: true,
    problem:
      "Clinic staff needed to query patient records, appointments, and revenue data but had no SQL knowledge — every report required a developer.",
    architecture:
      "Streamlit frontend → Vanna AI 2.0 Agent → Groq LLM (LLaMA 3.3 70B) for NL2SQL → SQLite clinic database → Deployed on Streamlit Cloud.",
    technologies: [
      "Python", "Streamlit", "Vanna AI", "Groq API", "LLaMA 3.3 70B",
      "SQLite", "FastAPI", "Pandas", "Plotly", "Git"
    ],
    features: [
      "Ask questions in plain English — no SQL needed",
      "AI converts natural language to SQL using LLaMA 3.3 70B via Groq",
      "Displays results as interactive data tables",
      "15 pre-seeded Q&A examples for accurate query generation",
      "SQL injection protection — only SELECT queries allowed",
      "Chat history with expandable SQL view",
    ],
    challenges: [
      "Parsing structured data from Vanna AI's streaming async response chunks",
      "Merging FastAPI backend into a single Streamlit file for cloud deployment",
      "Seeding agent memory with domain-specific examples to improve SQL accuracy",
    ],
    github: "https://github.com/sai-nikhil435s/clinic-nl2sql",
    demo: "https://clinic-nl2sql-kq8bdfixjzewpegbckxxcu.streamlit.app/",
    screenshot: "/projects/clinic-ai.png",
  },
  {
    name: "AizenStudio",
    category: "Web Development",
    featured: true,
    problem:
        "Many startups, creators, and businesses struggle to establish a strong online presence with modern, responsive, and visually engaging websites that effectively showcase their services and attract potential clients.",
    
    architecture:
        "Frontend UI → Interactive Components → Responsive Layout System → Project Showcase Module → Contact & Lead Generation Forms → Deployment Pipeline",
    technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
   ],
    features: [
      "Modern responsive design",
      "Interactive animations",
      "Project showcase section",
      "Mobile-first optimization",
      "Contact form integration",
    ],

    challenges: [
      "Creating smooth animations without affecting performance",
      "Maintaining responsiveness across devices",
    ],

    github: "https://github.com/sai-nikhil435s/aizenstudio",

    demo: "https://aizenstudio.vercel.app/",

    screenshot: "/projects/aizenstudio.png",
  },
  {
    name: "Intelligent Task Planner",
    category: "AI Project",
    featured: true,
    problem:
      "Students and beginners struggle to execute projects due to lack of structured guidance, unclear task breakdowns, and no understanding of dependencies between tasks.",
    architecture:
      "Streamlit frontend → Python agent with intent detection → OpenRouter LLM API (Gemini 2.0 Flash) → SQLite memory → Plotly DAG visualizations → Deployed on Streamlit Cloud.",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "OpenRouter API",
      "Gemini 2.0 Flash",
      "Plotly",
      "Pandas",
      "SQLite",
      "ChromaDB",
      "ReportLab",
      "Git",
    ],
    features: [
      "Dynamic task decomposition with real technical guidance per domain",
      "Dependency graph (DAG) showing which tasks must be done before others",
      "Gantt-style project timeline respecting task dependencies",
      "PDF export of full task plan",
      "User authentication with SQLite",
      "Persistent task history per user",
    ],
    challenges: [
      "Replacing generic LLM output with domain-expert-level technical guidance using structured JSON prompts",
      "Replacing ChromaDB with SQLite for cross-platform compatibility on Streamlit Cloud",
      "Handling LLM JSON parsing failures gracefully with knowledge-based fallbacks",
    ],
    github: "https://github.com/sai-nikhil435s/intelligent-task-planner",
    demo: "https://intelligent-task-planner-dpvje5wjruwslfhbkzv7wx.streamlit.app",
    screenshot: "/projects/intelligent-task-planner.png",
  },
  
  
];

// ─── Derived lists (used in filter UI) ───────────────────────────────────────

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export const allCategories = Array.from(
  new Set(projects.map((p) => p.category))
);

