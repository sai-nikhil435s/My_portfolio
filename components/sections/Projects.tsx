"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ExternalLink, Github, Rocket } from "lucide-react";
import { projects, allCategories, profile, type Project } from "@/data/portfolio";
import { ButtonLink, Section } from "@/components/ui";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Projects() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(projects[0]);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(projects[0]?.name ?? null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return category === "All" || project.category === category;
    });
  }, [category]);

    const handleSelect = (project: Project, event?: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(project);
    const willOpen = mobileExpanded !== project.name;
    setMobileExpanded(willOpen ? project.name : null);

    if (willOpen && event) {
      const card = event.currentTarget.closest("[data-project-card]") as HTMLElement | null;
      if (card) {
        setTimeout(() => {
          const headerOffset = 90;
          const top = card.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: "smooth" });
        }, 50);
      }
    }
  };

  return (
    <Section id="projects" className="scroll-mt-20">

      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="section-kicker"><Rocket className="h-4 w-4" /> Projects</span>
          <h2 className="section-heading">Things I Built</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A mix of projects I built during my academics, for personal learning, and for my family business.
            Each one taught me something new — from writing my first API to deploying a full-stack app live.
          </p>
        </div>
        <ButtonLink href={profile.github} variant="secondary">View GitHub <Github className="h-4 w-4" /></ButtonLink>
      </div>

      {/* Project name buttons */}
      <div className="mt-10 flex flex-wrap gap-3">
        {projects.map((project) => (
          <button
            key={project.name}
            onClick={() => handleSelect(project)}
            className={cn(
              "focus-ring rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
              selected?.name === project.name
                ? "border-brand-500 bg-brand-500 text-white shadow-glow"
                : "border-slate-200 bg-white/70 text-slate-700 hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-300"
            )}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Category filter */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...allCategories].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={cn(
              "focus-ring rounded-full border px-4 py-1.5 text-xs font-bold transition hover:-translate-y-0.5",
              category === item
                ? "border-brand-500 bg-brand-500 text-white"
                : "border-slate-200 bg-white/70 text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* ── MOBILE LAYOUT (hidden on xl+) ── */}
      <div className="mt-8 grid gap-4 xl:hidden">
        {filteredProjects.map((project) => {
          const isOpen = mobileExpanded === project.name;
          return (
            <motion.div
              key={project.name}
              data-project-card
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className={cn(
                "overflow-hidden rounded-3xl border transition-all duration-300",
                isOpen
                  ? "border-brand-500 shadow-glow"
                  : "border-slate-200 dark:border-slate-800"
              )}
            >
              {/* Card header — always visible */}
              <button
                onClick={(e) => handleSelect(project, e)}
                className="w-full bg-white/70 p-4 text-left dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={project.screenshot}
                      alt={project.name}
                      className="h-14 w-20 rounded-xl border border-slate-200 object-contain bg-white dark:border-slate-800 shrink-0"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="rounded-full bg-slate-950 px-2.5 py-0.5 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-bold text-white">Featured</span>
                        )}
                      </div>
                      <h3 className="font-black text-base">{project.name}</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="rounded-full border border-slate-200 px-2 py-0.5 text-xs font-bold dark:border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300",
                    isOpen && "rotate-180 text-brand-500"
                  )} />
                </div>
              </button>

              {/* Expanded details */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-200 bg-white/50 p-4 dark:border-slate-800 dark:bg-slate-950/40">

                      {/* Screenshot */}
                      <img
                        src={project.screenshot}
                        alt={project.name}
                        className="h-44 w-full rounded-2xl border border-slate-200 object-contain bg-white dark:border-slate-800"
                      />

                      {/* Buttons */}
                      <div className="mt-4 flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-bold transition hover:border-brand-400 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                        {project.demo && project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
                          >
                            <ExternalLink className="h-4 w-4" /> Live Demo
                          </a>
                        )}
                      </div>

                      {/* Problem */}
                      <div className="mt-4 rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                        <h4 className="font-black text-sm">Problem</h4>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.problem}</p>
                      </div>

                      {/* Architecture */}
                      <div className="mt-3 rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                        <h4 className="font-black text-sm">Architecture</h4>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.architecture}</p>
                      </div>

                      {/* Features + Challenges */}
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-white/60 p-3 dark:border-slate-800 dark:bg-slate-950/40">
                          <h4 className="font-black text-sm mb-2">Features</h4>
                          <ul className="space-y-1.5">
                            {project.features.slice(0, 4).map((f) => (
                              <li key={f} className="flex gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-500" /> {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white/60 p-3 dark:border-slate-800 dark:bg-slate-950/40">
                          <h4 className="font-black text-sm mb-2">Challenges</h4>
                          <ul className="space-y-1.5">
                            {project.challenges.slice(0, 4).map((c) => (
                              <li key={c} className="flex gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-500" /> {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-bold dark:border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {!filteredProjects.length && (
          <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
            <p className="font-black">No projects found.</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Try a different category.</p>
          </div>
        )}
      </div>

      {/* ── DESKTOP LAYOUT (hidden below xl) ── */}
      <div className="mt-10 hidden gap-8 xl:grid xl:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-5">
          {filteredProjects.map((project) => (
            <motion.button
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              onClick={() => handleSelect(project)}
              className={cn(
                "focus-ring overflow-hidden rounded-3xl border p-4 text-left transition hover:-translate-y-1 hover:shadow-card",
                selected?.name === project.name
                  ? "border-brand-500 bg-brand-500/10 shadow-glow"
                  : "border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/60"
              )}
            >
              <div className="flex flex-col gap-4 sm:flex-row">
                <img
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  className="h-32 w-full rounded-2xl border border-slate-200 object-contain bg-white sm:w-44 dark:border-slate-800"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">Featured</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-black">{project.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.problem}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-bold dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}

          {!filteredProjects.length && (
            <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
              <p className="font-black">No projects found.</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Try a different category.</p>
            </div>
          )}
        </div>

        {/* Detail panel */}
        {selected && (
          <motion.article
            key={selected.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl p-5 shadow-card"
          >
            <img
              src={selected.screenshot}
              alt={`${selected.name} screenshot`}
              className="h-64 w-full rounded-3xl border border-slate-200 object-contain bg-white dark:border-slate-800"
            />
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-brand-600 dark:text-brand-300">{selected.category}</p>
                <h3 className="mt-1 text-3xl font-black">{selected.name}</h3>
              </div>
              <div className="flex gap-2">
                <a href={selected.github} target="_blank" rel="noreferrer"
                  className="focus-ring flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold hover:border-brand-400 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800 transition">
                  <Github className="h-4 w-4" /> GitHub Repo
                </a>
                {selected.demo && selected.demo !== "#" && (
                  <a href={selected.demo} target="_blank" rel="noreferrer"
                    className="focus-ring flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-600 transition">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {(["Problem", "Architecture Overview"] as const).map((label) => {
                const content = {
                  "Problem": selected.problem,
                  "Architecture Overview": selected.architecture,
                }[label];
                return (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-white/50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                    <h4 className="font-black">{label}</h4>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{content}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {([["Features", selected.features], ["Challenges", selected.challenges], ["Technologies", selected.technologies]] as [string, string[]][]).map(([label, list]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white/50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                  <h4 className="font-black">{label}</h4>
                  <ul className="mt-3 space-y-2">
                    {list.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.article>
        )}
      </div>
    </Section>
  );
}