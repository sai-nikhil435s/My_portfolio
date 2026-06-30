"use client";
import { ProjectWorkflow } from "@/components/sections/ProjectWorkflow";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Award, BriefcaseBusiness, Calendar,
  CheckCircle2, Code2, FileText, Github, GitBranch,
  GraduationCap, Linkedin, Mail, Network,
  Rocket, Send, Sparkles, Star, Trophy, Wrench,
} from "lucide-react";
import { Section } from "@/components/ui";
import { profile } from "@/data/portfolio";

// ─── Shared gradient map ───────────────────────────────────────────────────────
const GRADIENTS = {
  cyan:    "from-cyan-400 to-blue-500",
  violet:  "from-violet-400 to-purple-600",
  pink:    "from-pink-400 to-rose-500",
  emerald: "from-emerald-400 to-teal-500",
  amber:   "from-amber-400 to-orange-500",
  indigo:  "from-indigo-400 to-blue-600",
};

// ─── Tech Stack Visualization ─────────────────────────────────────────────────
const techOrbitStatic = [
  { tech: "Python",     x: 165,  y: 0,    color: "from-blue-400 to-cyan-400" },
  { tech: "Next.js",   x: 128,  y: 105,  color: "from-slate-400 to-slate-600" },
  { tech: "LLMs",      x: 51,   y: 157,  color: "from-purple-400 to-violet-500" },
  { tech: "RAG",       x: -51,  y: 157,  color: "from-emerald-400 to-teal-500" },
  { tech: "TypeScript",x: -128, y: 105,  color: "from-blue-500 to-indigo-500" },
  { tech: "Tailwind",  x: -165, y: 0,    color: "from-cyan-400 to-sky-500" },
  { tech: "FastAPI",   x: -128, y: -105, color: "from-green-400 to-emerald-500" },
  { tech: "APIs",      x: -51,  y: -157, color: "from-orange-400 to-amber-500" },
  { tech: "ML",        x: 51,   y: -157, color: "from-pink-400 to-rose-500" },
  { tech: "Vercel",    x: 128,  y: -105, color: "from-slate-300 to-slate-500" },
];

export function TechStackVisualization() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <Section id="tech-stack">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="section-kicker"><Network className="h-4 w-4" /> Tech Stack</span>
          <h2 className="section-heading">Tools and technologies I work with.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A visual map of my core tech stack across AI, backend, and frontend development.
          </p>
        </div>
        <div className="glass relative min-h-[430px] overflow-hidden rounded-[2rem] p-8 shadow-card">
          <div className="absolute inset-0 bg-radial-grid bg-[length:24px_24px] opacity-50" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/5 blur-2xl" />
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-500/20 bg-brand-500/10 blur-sm" />
          <div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-center font-black text-white shadow-glow ring-2 ring-brand-500/30 dark:from-white dark:to-slate-100 dark:text-slate-950">
            AI + Web
          </div>
          {techOrbitStatic.map(({ tech, x, y, color }, index) => (
            <motion.div
              key={tech}
              className={`absolute left-1/2 top-1/2 cursor-default rounded-2xl bg-gradient-to-r ${color} px-4 py-2 text-sm font-black text-white shadow-md`}
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              animate={{ y: [0, -8, 0] }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 3 + (index % 4), repeat: Infinity, delay: index * 0.12, ease: "easeInOut" }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── GitHub & Open Source ─────────────────────────────────────────────────────
export function GitHubOpenSource() {
  const username = "sai-nikhil435s";

  const pinnedRepos = [
    {
      name: "AI-Resume-Analyzer",
      url: "https://github.com/sai-nikhil435s/ai_resume_analyzer",
      label: "AI Resume Analyzer",
      visibility: "Public",
      description: "AI powered resume analyzer that scores resumes and provides improvement suggestions.",
      tech: ["Python", "FastAPI", "Next.js", "Groq"],
      forks: 0,
      gradient: GRADIENTS.cyan,
      glowColor: "shadow-cyan-500/20",
      borderHover: "hover:border-cyan-400/50",
      icon: (
        <svg width="32" height="32" viewBox="0 0 72 72" fill="none">
          <rect x="14" y="8" width="32" height="42" rx="4" stroke="white" strokeWidth="1.8"/>
          <line x1="20" y1="18" x2="40" y2="18" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="20" y1="24" x2="36" y2="24" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="20" y1="30" x2="38" y2="30" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="48" cy="50" r="14" fill="rgba(255,255,255,0.15)" stroke="#facc15" strokeWidth="2"/>
          <text x="48" y="55" textAnchor="middle" fontSize="13" fontWeight="800" fill="#facc15">#1</text>
          <path d="M48 38 L49.5 42 L54 42 L50.5 44.5 L52 49 L48 46.5 L44 49 L45.5 44.5 L42 42 L46.5 42 Z" fill="#facc15"/>
        </svg>
      ),
      tag: "AI",
      tagColor: "bg-cyan-500",
    },
    {
      name: "Balaji-kirana",
      label: "Balaji Kirana Store",
      visibility: "Public",
      description: "Grocery store management system built for my family business.",
      tech: ["React.js", "Node.js", "MongoDB"],
      forks: 0,
      gradient: GRADIENTS.violet,
      glowColor: "shadow-violet-500/20",
      borderHover: "hover:border-violet-400/50",
      icon: (
        <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="16" width="40" height="30" rx="5" stroke="white" strokeWidth="2"/>
          <path d="M10 24h40" stroke="white" strokeWidth="1.5"/>
          <circle cx="20" cy="50" r="4" stroke="white" strokeWidth="1.5"/>
          <circle cx="40" cy="50" r="4" stroke="white" strokeWidth="1.5"/>
          <path d="M4 10h4l6 28h32" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M26 33h4M28 31v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      tag: "Web",
      tagColor: "bg-violet-500",
    },
    {
      name: "aizenstudio",
      label: "Aizen Studio",
      visibility: "Public",
      description: "Creative studio website with modern animations and responsive design.",
      tech: ["React", "Next.js", "Tailwind"],
      forks: 0,
      gradient: GRADIENTS.pink,
      glowColor: "shadow-pink-500/20",
      borderHover: "hover:border-pink-400/50",
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <path d="M3 36 L14 6 L25 36" fill="none" stroke="#2d4ef5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="8" y1="25" x2="20" y2="25" stroke="#2d4ef5" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M14 13 C12 17 10 20 10.5 22.5 C11 25 13 26 14 26 C15 26 17 25 17.5 22.5 C18 20 16 17 14 13Z" fill="#ffffff"/>
            <circle cx="32" cy="9" r="3" fill="#2d4ef5"/>
            <line x1="32" y1="16" x2="32" y2="36" stroke="#2d4ef5" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
      ),
      tag: "Studio",
      tagColor: "bg-pink-500",
    },
    {
      name: "clinic-nl2sql",
      label: "Clinic NL2SQL",
      visibility: "Public",
      description: "Natural language to SQL chatbot for clinic management using Vanna AI and Groq.",
      tech: ["Python", "Streamlit", "SQLite", "Groq"],
      forks: 0,
      gradient: GRADIENTS.emerald,
      glowColor: "shadow-emerald-500/20",
      borderHover: "hover:border-emerald-400/50",
      icon: (
        <svg width="32" height="32" viewBox="0 0 72 72" fill="none">
          <rect x="20" y="18" width="32" height="26" rx="6" stroke="white" strokeWidth="2"/>
          <circle cx="29" cy="30" r="4" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.5"/>
          <circle cx="43" cy="30" r="4" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.5"/>
          <circle cx="29" cy="30" r="1.5" fill="white"/>
          <circle cx="43" cy="30" r="1.5" fill="white"/>
          <rect x="26" y="37" width="20" height="3" rx="1.5" fill="white" opacity=".5"/>
          <line x1="36" y1="18" x2="36" y2="10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="36" cy="8" r="3" stroke="white" strokeWidth="1.5"/>
          <rect x="14" y="26" width="6" height="10" rx="2" stroke="white" strokeWidth="1.5"/>
          <rect x="52" y="26" width="6" height="10" rx="2" stroke="white" strokeWidth="1.5"/>
          <path d="M28 44 L28 52 M44 44 L44 52" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 52 L48 52" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      tag: "AI",
      tagColor: "bg-emerald-500",
    },
  ];

  const activity = [
    { label: "Issues Opened",     value: "5" },
    { label: "Pull Requests",     value: "10" },
    { label: "Repositories",      value: "10" },
    { label: "Commits This Year", value: "50+" },
  ];

  return (
    <Section id="github">
      <style>{`
        .repo-desc {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        @media (min-width: 640px) {
          .repo-desc {
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-4xl font-black tracking-tight">
            GitHub &amp; <span className="gradient-text">Open Source</span>
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Every repository here started with a question, a problem, or a curiosity.
            Some became complete products, others were learning experiments — but each one taught me something valuable.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold dark:border-slate-700">
            <Github className="h-4 w-4" /> @{username}
          </span>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:from-white dark:to-slate-100 dark:text-slate-950"
          >
            View GitHub Profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Pinned Repos */}
      <div className="mt-8 glass rounded-3xl p-4 pb-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-black">
            <Sparkles className="h-5 w-5 text-brand-500" /> Pinned Repositories
          </p>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline dark:text-brand-300"
          >
            Explore More Repos <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-3 grid gap-2.5 sm:gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url ?? `https://github.com/${username}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/50 p-2.5 sm:p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/40 focus-ring ${repo.borderHover} ${repo.glowColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${repo.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-[0.07] rounded-2xl`} />
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${repo.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative">
                {/* Icon + tag row */}
                <div className="flex items-start justify-between">
                  <div className={`grid h-7 w-7 sm:h-10 sm:w-10 place-items-center rounded-lg sm:rounded-xl bg-gradient-to-br ${repo.gradient} text-lg sm:text-2xl shadow-md`}>
                    {repo.icon}
                  </div>
                  <span className={`rounded-full ${repo.tagColor} px-2 py-0.5 text-[9px] sm:text-xs font-black text-white`}>
                    {repo.tag}
                  </span>
                </div>

                {/* Name + visibility */}
                <div className="mt-1.5 sm:mt-3 flex items-center justify-between gap-1">
                  <p className="truncate text-xs sm:text-sm font-black">{repo.name}</p>
                  <span className="shrink-0 rounded-full border border-slate-200 px-1.5 py-0.5 text-[9px] sm:text-xs font-semibold dark:border-slate-700">
                    {repo.visibility}
                  </span>
                </div>

                <p className="repo-desc mt-1 text-[11px] sm:text-xs leading-4 sm:leading-5 text-slate-600 dark:text-slate-300 overflow-hidden">
                  {repo.description}
                </p>

                <div className="mt-1.5 sm:mt-2.5 flex flex-wrap gap-1">
                  {repo.tech.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-bold dark:border-slate-700">{t}</span>
                  ))}
                  {repo.tech.length > 3 && (
                    <span className="hidden sm:inline rounded-full border border-slate-200 px-2 py-0.5 text-xs font-bold dark:border-slate-700">{repo.tech[3]}</span>
                  )}
                </div>
              </div>

              {/* Gradient CTA pill — desktop hover only, hidden on mobile to save space */}
              <div className="relative mt-2 sm:mt-3 hidden sm:block">
                <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${repo.gradient} px-4 py-1.5 text-xs font-black text-white shadow-md opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0`}>
                  {repo.label} <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <ProjectWorkflow />
      </div>
    </Section>
  );
}

// ─── Resume & Achievements ────────────────────────────────────────────────────
export function ResumeAndAchievements() {

  const highlights = [
    { text: "Built end-to-end AI projects using LLMs, RAG, and vector databases", icon: Sparkles },
    { text: "Led an AI event with 400+ participants",                               icon: Trophy },
    { text: "District-level Volleyball player",                                    icon: Star },
    { text: "Deployed full-stack web applications on cloud platforms",             icon: Rocket },
  ];

  const experience = [
    "Designed and deployed end-to-end AI/ML systems using Python, REST APIs, and Microsoft Azure.",
    "Developed Generative AI applications leveraging LLMs, RAG pipelines, and vector databases.",
    "Implemented scalable model deployment workflows and integrated APIs for production-grade systems.",
  ];

  const techSkills = [
    { label: "Languages",      value: "Python, SQL, HTML, CSS, JavaScript" },
    { label: "AI/ML & DL",     value: "TensorFlow, Scikit-learn, NumPy, Pandas, Deep Learning" },
    { label: "Generative AI",  value: "OpenAI API, LangChain, RAG, Prompt Engineering, LLMs" },
    { label: "Frameworks",     value: "FastAPI, REST APIs, Telegram API, Speech-to-Text" },
    { label: "Databases",      value: "ChromaDB, FAISS, Vector DBs, MySQL" },
    { label: "Cloud & DevOps", value: "Microsoft Azure, Docker, CI/CD, MLflow" },
  ];

  const certsList = [
    {
      name: "AI Data Scientist",
      org: "Government of Telangana",
      year: "2023",
      gradient: GRADIENTS.cyan,
      url: "https://drive.google.com/file/d/13zVrbODlEdWPzAMMDU6QJdS7BEvzmeR7/view?usp=drive_link",
    },
    {
      name: "Database Programming with SQL",
      org: "Oracle Academy",
      year: "2024",
      gradient: GRADIENTS.violet,
      url: "https://drive.google.com/file/d/1q5AHT9cUxFvZ9ZQFMQOTSmCaYt0c9-G3/view?usp=drive_link",
    },
    {
      name: "Python for Data Science",
      org: "IBM",
      year: "2025",
      gradient: GRADIENTS.emerald,
      url: "https://drive.google.com/file/d/1JhTBomtIi2JHcyQU__qY13IBRrobIfQi/view?usp=drive_link",
    },
  ];

  const tools = ["Git & GitHub", "Docker", "Streamlit", "WordPress", "Power Apps", "Overleaf", "MLflow", "CI/CD Pipelines"];

  return (
         <Section id="resume">
          {/* Section header — outside the cards */}
          <div className="mb-6 flex items-center gap-4">
            <span className="section-kicker"><FileText className="h-4 w-4" /> Resume</span>
            <div className="h-px flex-1 bg-slate-200/50 dark:bg-slate-700/50" />
          </div>

         <div className="grid gap-8 lg:grid-cols-2">

    {/* Left: Resume */}
    <div className="glass rounded-[2rem] p-6 shadow-card">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            AI/ML Engineer &amp;<br className="hidden sm:block" /> Full-Stack Developer
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Aspiring AI/ML Engineer with hands-on experience building scalable AI systems using Python,
            LLMs, RAG, and modern frameworks. Passionate about building intelligent, production-ready solutions.
          </p>

          {/* Experience */}
          <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-500">
              <BriefcaseBusiness className="h-4 w-4" /> Experience
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/40">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0"></div>
                <div>
                  <p className="font-black">AI/ML Project Developer</p>
                  <p className="mt-0.5 text-xs text-brand-500 dark:text-brand-400">Self-Driven · Academic Projects</p>
                </div>
                <span className="shrink-0 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-600 dark:text-brand-300">
                  Present
                </span>
              </div>
              <div className="mt-3 grid gap-2">
                {experience.map((item) => (
                  <p key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-500">
              <GraduationCap className="h-4 w-4" /> Education
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/40">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-black">B.Tech – Computer Engineering (AI)</p>
                   <p className="mt-0.5 text-xs text-brand-500 dark:text-brand-400">Marwadi University</p>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  2022 – 2026
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">CGPA: 7.78 / 10</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-500">
              <Code2 className="h-4 w-4" /> Technical Skills
            </p>
            <div className="grid gap-2">
              {techSkills.map(({ label, value }) => (
                <div
                  key={label}
                  className="group flex gap-3 rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 transition-all duration-200 hover:border-brand-400/40 hover:bg-brand-50/20 dark:border-slate-800 dark:bg-slate-950/30 dark:hover:bg-brand-950/20"
                >
                  <span className="w-24 shrink-0 text-xs font-black text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="min-w-0 flex-1 text-xs leading-5 text-slate-700 dark:text-slate-300">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/Sai_Nikhil_cv.pdf"
              download="Sai_Nikhil_Resume.pdf"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-cyan-400/30 hover:shadow-lg"
            >
              Download Resume <FileText className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-5 py-2.5 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200"
            >
              Request Updated Resume <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: Certifications & Achievements */}
        <div id="certifications" className="glass rounded-[2rem] p-6 shadow-card">
          <span className="section-kicker"><Award className="h-4 w-4" /> Certifications &amp; Achievements</span>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Proof of learning<br className="hidden sm:block" /> and participation.
          </h2>

          {/* Certifications */}
          <div className="mt-5">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-500">
              <Award className="h-4 w-4" /> Certifications
            </p>
            <div className="grid gap-3">
              {certsList.map(({ name, org, year, gradient, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-brand-400/40 dark:border-slate-800 dark:bg-slate-950/40 focus-ring"
                >
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-black text-sm">{name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{org}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {year}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-brand-500" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-500">
              <Star className="h-4 w-4" /> Highlights
            </p>
            <div className="grid gap-2">
              {highlights.map(({ text, icon: Icon }) => (
                <div
                  key={text}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/50 px-4 py-3 transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-50/20 dark:border-slate-800 dark:bg-slate-950/30 dark:hover:bg-emerald-950/20"
                >
                  <Icon className="h-4 w-4 shrink-0 text-emerald-500 transition-transform duration-200 group-hover:scale-110" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-500">
              <Wrench className="h-4 w-4" /> Tools &amp; Platforms
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-full border border-slate-200 bg-white/60 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all duration-200 hover:border-brand-400/50 hover:bg-brand-50/30 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-brand-500/40 dark:hover:text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
const contactLinks = [
  { label: "Email",    icon: Mail,     getHref: (p: typeof profile) => `mailto:${p.email}`, getValue: (p: typeof profile) => p.email },
  { label: "LinkedIn", icon: Linkedin, getHref: (p: typeof profile) => p.linkedin,          getValue: (_: typeof profile) => "Connect on LinkedIn" },
  { label: "GitHub",   icon: Github,   getHref: (p: typeof profile) => p.github,            getValue: (_: typeof profile) => "Explore repositories" },
  { label: "Location", icon: Network,  getHref: (_: typeof profile) => "#",                 getValue: (p: typeof profile) => p.location },
] as const;

const CONTACT_GRADIENTS = [GRADIENTS.cyan, GRADIENTS.indigo, GRADIENTS.violet, GRADIENTS.emerald];

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="section-kicker"><Mail className="h-4 w-4" /> Contact</span>
          <h2 className="section-heading">Let's build, collaborate, or discuss opportunities.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am looking for entry-level opportunities in AI/ML and Full-Stack Development.
          </p>
          <div className="mt-8 grid gap-3">
            {contactLinks.map(({ label, icon: Icon, getHref, getValue }, i) => (
              <a
                key={label}
                href={getHref(profile)}
                target={getHref(profile).startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group focus-ring glass flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${CONTACT_GRADIENTS[i]} text-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</span>
                  <span className="block font-bold">{getValue(profile)}</span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-brand-500" />
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-[2rem] p-6 shadow-card flex flex-col items-center justify-center text-center gap-6">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
            <Mail className="h-10 w-10" />
          </div>
          <div>
            <h3 className="text-2xl font-black">Reach me directly</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-6">
              The best way to reach me is via email. Click below and your mail app will open with my address ready.
            </p>
          </div>
          <a
           href={`https://mail.google.com/mail/?view=cm&to=${profile.email}&su=Portfolio Inquiry`}
              className="inline-flex max-w-full items-center gap-3 break-all rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-base sm:text-lg font-black text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-400/30"
             >
              <Mail className="h-5 w-5 shrink-0" />
              {profile.email}
           </a>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-brand-400 dark:border-slate-700"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-brand-400 dark:border-slate-700"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/70 px-4 py-10 text-center text-sm font-semibold text-slate-500 dark:border-slate-800 dark:text-slate-400">
      Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
    </footer>
  );
}