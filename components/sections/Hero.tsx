"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Download, Target, Zap } from "lucide-react";
import { profile } from "@/data/portfolio";
import { fadeUp } from "@/lib/animations";

const skillTags = [
  { label: "AI & LLMs" },
  { label: "RAG Systems" },
  { label: "Python" },
  { label: "FastAPI" },
  { label: "React" },
];

// Colored icons (not pure white) so they stay visible on both light & dark backgrounds
const techIcons = [
  { name: "Python",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Next.js",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "GitHub",   src: "https://cdn.simpleicons.org/github/8B8B8B" },
  { name: "SQL",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Azure",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "VS Code",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Vercel",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
];

const whatIDo = [
  {
    icon: Bot,
    title: "AI/ML & LLMs",
    desc: "LLM apps, RAG systems, and AI agents.",
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    desc: "Web apps and APIs with modern tech.",
  },
  {
    icon: Zap,
    title: "End-to-End",
    desc: "Build, deploy, and optimize production systems.",
  },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-hero-glow pt-28">
      <div className="absolute inset-0 bg-radial-grid bg-[length:28px_28px] opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl min-w-0 px-4 pb-16 sm:px-6 lg:px-8">

        {/* ── Top Grid ── */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.65 }}>

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              🚀 Actively looking for Full-time roles
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-7xl break-words">
              AI/ML Engineer<br />
              building with{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
                Generative AI
              </span>{" "}
              <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-500">
                & Full-Stack.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
              I build end-to-end AI solutions, LLM applications, and scalable web systems that solve real-world problems.
            </p>

            {/* Skill tags — hidden on mobile */}
            <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
              {skillTags.map((tag) => (
                <span
                  key={tag.label}
                  className="rounded-full border border-slate-300 bg-white/70 px-4 py-1.5 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex whitespace-nowrap items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/Sai_Nikhil_cv.pdf"
                download="Sai_Nikhil_Resume.pdf"
                className="inline-flex whitespace-nowrap items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-black text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800/60 dark:text-white"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
              <span className="hidden items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Right — Profile card (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="hidden lg:block glass rounded-[2rem] p-8 shadow-card"
          >
            {/* Photo + name row */}
            <div className="flex items-start gap-5">
              <div className="relative shrink-0">
                <img 
                  src="/projects/passport_photo.png"
                  alt="Sai Nikhil Mamidi"
                  className="h-40 w-40 rounded-full object-cover object-top ring-4 ring-brand-500/30"
                />
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-400" />
              </div>

              <div className="flex flex-1 flex-col justify-between self-stretch">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-2xl font-black leading-tight text-slate-950 dark:text-white">Mamidi Sai Nikhil</h2>
                    <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-600 dark:text-emerald-400">
                      Open to Work
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">AI/ML Engineer | Full-Stack Developer</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-violet-500/20 text-violet-600 dark:text-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      </span>
                      B.Tech - Marwadi University, Rajkot
                    </p>
                    <p className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                          <polyline points="8 21 12 17 16 21"/>
                          <line x1="12" y1="17" x2="12" y2="3"/>
                        </svg>
                      </span>
                      Computer Engineering - AI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-slate-300/60 dark:divide-slate-700/50 rounded-2xl border border-slate-300/60 bg-slate-100/70 dark:border-slate-700/50 dark:bg-slate-900/50">
              {[
                { value: "6+",   label: "Projects\nBuilt",           icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, color: "text-violet-600 dark:text-violet-400" },
                { value: "10+",  label: "Technologies\nWorked With", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, color: "text-cyan-600 dark:text-cyan-400" },
                { value: "2026", label: "Passed Out\nStudent",       icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, color: "text-emerald-600 dark:text-emerald-400" },
              ].map(({ value, label, icon, color }) => (
                <div key={value} className="flex flex-col items-center py-2 text-center">
                  <span className={`mb-1 ${color}`}>{icon}</span>
                  <p className="text-2xl font-black text-slate-950 dark:text-white">{value}</p>
                  <p className="mt-1 whitespace-pre-line text-xs text-slate-600 dark:text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Code block — stays dark always (terminal style) */}
            <div className="mt-4 rounded-2xl bg-slate-900 dark:bg-slate-900/80 p-4 font-mono text-sm">
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <p className="text-slate-400"><span className="text-blue-400">const</span> <span className="text-white">developer</span> = {"{"}</p>
              <p className="pl-4 text-slate-300">  <span className="text-violet-400">name</span>: <span className="text-emerald-400">"Mamidi Sai Nikhil"</span>,</p>
              <p className="pl-4 text-slate-300">  <span className="text-violet-400">role</span>: <span className="text-emerald-400">"AI/ML Engineer"</span>,</p>
              <p className="pl-4 text-slate-300">  <span className="text-violet-400">stack</span>: <span className="text-emerald-400">["Python", "LLMs", "React"]</span>,</p>
              <p className="pl-4 text-slate-300">  <span className="text-violet-400">openToWork</span>: <span className="text-cyan-400">true</span>,</p>
              <p className="text-slate-400">{"}"}</p>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 lg:hidden"
        >
          <div className="glass rounded-[24px] border border-slate-300/60 dark:border-slate-700/50 p-4">
            <div className="flex gap-3">
              <div className="relative shrink-0">
                <img
                  src="Projects/passport_photo.png"
                  alt="Sai Nikhil"
                  className="h-20 w-20 rounded-full object-cover object-top ring-4 ring-violet-500/30"
                />
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-400" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-black text-slate-950 dark:text-white">Mamidi Sai Nikhil</h3>
                <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">AI/ML Engineer • Full-Stack Developer</p>
                <div className="mt-2 space-y-1">
                  <p className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    🎓 B.Tech, Marwadi University
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                    💻 Computer Engineering – AI
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="mt-4 grid grid-cols-3 divide-x divide-slate-300/50 dark:divide-slate-700/40 rounded-xl border border-slate-300/50 bg-slate-100/70 dark:border-slate-700/40 dark:bg-slate-900/50">
              {[
                { value: "6+",   label: "Projects" },
                { value: "10+",  label: "Technologies" },
                { value: "2026", label: "Graduate" },
              ].map((item) => (
                <div key={item.value} className="flex flex-col items-center py-2">
                  <p className="text-lg font-black text-slate-950 dark:text-white">{item.value}</p>
                  <p className="mt-0.5 text-center text-xs text-slate-600 dark:text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── What I Do ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">
            <span className="h-5 w-1 rounded-full bg-violet-500" /> What I Do
          </p>

          {/* Desktop cards */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-2">
            {whatIDo.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="mt-3 text-base font-black text-slate-950 dark:text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}

            {/* Tech I Work With — desktop, full width usage */}
            <div className="glass rounded-2xl p-3">
              <p className="font-black text-brand-600 dark:text-brand-400 text-sm mb-3">Tech I Work With</p>
              <div className="grid grid-cols-4 gap-3">
                {techIcons.map(({ name, src }) => (
                  <img
                    key={name}
                    src={src}
                    alt={name}
                    title={name}
                    className="h-8 w-8 rounded-lg object-contain transition hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile cards — real icons, theme-aware text */}
          <div className="grid grid-cols-2 gap-2 lg:hidden">
            <div className="glass rounded-2xl p-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
                <Bot className="h-5 w-5" />
              </div>
              <h4 className="mt-2 text-sm font-black text-slate-950 dark:text-white">AI/ML & LLMs</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Build smart models, RAG systems & AI agents.</p>
            </div>
            <div className="glass rounded-2xl p-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-300">
                <Code2 className="h-5 w-5" />
              </div>
              <h4 className="mt-2 text-sm font-black text-slate-950 dark:text-white">Full-Stack Dev</h4>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Create modern web apps and APIs.</p>
            </div>
          </div>

          {/* Tech I Work With — mobile, stretches full width, evenly spaced */}
          <div className="mt-2 glass rounded-2xl p-3 lg:hidden">
            <p className="text-xs font-black text-brand-600 dark:text-brand-400 mb-2">Tech I Work With</p>
            <div className="grid grid-cols-8 gap-2">
              {techIcons.map(({ name, src }) => (
                <img
                  key={name}
                  src={src}
                  alt={name}
                  title={name}
                  className="h-6 w-6 rounded object-contain justify-self-center"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Bottom banner — desktop only ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6 hidden md:flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-300/60 bg-slate-100/60 dark:border-slate-700/50 dark:bg-slate-900/50 px-6 py-4 sm:flex-row"
        >
          <p className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Target className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            Actively seeking full-time opportunities in{" "}
            <span className="font-black text-slate-950 dark:text-white">AI/ML, Generative AI, and Full-Stack Development.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5"
          >
            Let's Build Together <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* ── Mobile Bottom CTA ── */}
        <div className="mt-6 rounded-[24px] border border-violet-500/30 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-600/30 dark:to-purple-600/30 p-4 lg:hidden">
          <p className="text-sm text-slate-800 dark:text-slate-200">
            🚀 Actively looking for full-time opportunities in{" "}
            <span className="font-bold text-slate-950 dark:text-white">AI/ML, Generative AI & Full-Stack.</span>
          </p>
          <a
            href="#contact"
            className="mt-3 flex items-center justify-center rounded-full bg-slate-950 dark:bg-white px-5 py-2.5 text-sm font-black text-white dark:text-slate-900"
          >
            Let's Connect →
          </a>
        </div>

      </div>
    </section>
  );
}