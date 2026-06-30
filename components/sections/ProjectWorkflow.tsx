"use client";

// ── Icon Components ────────────────────────────────────────────────────────────

function IconVSCode() {
  return (
    <svg width="24" height="24" viewBox="0 0 128 128" fill="none">
      <defs>
        <linearGradient id="vsgrad" x1="25" y1="10" x2="100" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2489CA" />
          <stop offset="50%" stopColor="#1070B8" />
          <stop offset="100%" stopColor="#0865A6" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
        fill="url(#vsgrad)"
      />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="22" height="22" viewBox="0 0 98 96" fill="#e2e8f0">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      />
    </svg>
  );
}

function IconRender() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" fill="#22c55e" />
    </svg>
  );
}

function IconFastAPI() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#059669" />
      <path d="M13 6L7.5 13H12L11 18L16.5 11H12L13 6z" fill="white" />
    </svg>
  );
}

function IconVercel() {
  return (
    <svg width="20" height="20" viewBox="0 0 116 100" fill="white">
      <path d="M57.5 0L115 100H0L57.5 0z" />
    </svg>
  );
}

function IconNextjs() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#111" stroke="#444" strokeWidth="1" />
      <path
        d="M8 16V8l8 8V8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStreamlit() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
      <path d="M14 1L26 8v14L14 27 2 20V8L14 1z" fill="#ff4b4b" />
      <path d="M8 11l6 3.5 6-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14.5V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="#22c55e" strokeWidth="2" />
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        stroke="#22c55e"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconReact() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.5" fill="#61dafb" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

// ── Arrow ──────────────────────────────────────────────────────────────────────
function Arrow({ label }: { label: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-0.5 px-1 min-w-[32px]">
      <svg width="100%" height="12" viewBox="0 0 40 12" preserveAspectRatio="none" fill="none">
        <path
          d="M2 6h32M28 2l6 4-6 4"
          stroke="#3a4a6a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-[8px] text-slate-600 whitespace-nowrap">{label}</span>
    </div>
  );
}

// ── Node ───────────────────────────────────────────────────────────────────────
function Node({
  icon,
  label,
  sub,
  boxStyle,
  labelColor = "text-slate-300",
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  boxStyle: string;
  labelColor?: string;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-1" style={{ width: 68 }}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${boxStyle}`}>
        {icon}
      </div>
      <span className={`text-center text-[10px] font-semibold leading-tight ${labelColor}`}>
        {label}
      </span>
      <span className="text-center text-[9px] text-slate-600 leading-tight">{sub}</span>
    </div>
  );
}

// ── Row ────────────────────────────────────────────────────────────────────────
interface Step {
  node: React.ReactNode;
  arrow?: string;
}

interface ProjectRowData {
  icon: React.ReactNode;
  iconBg: string;
  name: string;
  sub: string;
  tag: string;
  tagStyle: string;
  steps: Step[];
}

function Row({ proj }: { proj: ProjectRowData }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl border border-[#1e2d45] bg-[#111827] px-4 py-3">
      {/* Project identity — fixed width, never shrinks */}
      <div
        className="flex shrink-0 items-center gap-3 border-r border-[#1e2d45] pr-4"
        style={{ width: 178 }}
      >
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1e2d45] ${proj.iconBg}`}
        >
          {proj.icon}
        </div>
        <div>
          <p className="text-[13px] font-bold leading-tight text-slate-100">{proj.name}</p>
          <p className="mt-0.5 text-[10px] leading-tight text-slate-500">{proj.sub}</p>
          <div className="mt-1 flex items-center gap-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-semibold text-emerald-400">Live</span>
          </div>
        </div>
      </div>

      {/* Pipeline — flex-1 fills full remaining width */}
      <div className="flex flex-1 items-center">
        {proj.steps.map((step, i) => (
          <div key={i} className="flex flex-1 items-center">
            {step.node}
            {step.arrow && <Arrow label={step.arrow} />}
          </div>
        ))}
        {/* Tag */}
        <span
          className={`ml-2 shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold ${proj.tagStyle}`}
        >
          {proj.tag}
        </span>
      </div>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
export function ProjectWorkflow() {
  const projects: ProjectRowData[] = [
    {
      name: "AI Resume Analyzer",
      sub: "Python · FastAPI · Next.js ",
      iconBg: "bg-[#1a2a4a]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
            stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          />
          <polyline points="14 2 14 8 20 8" stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="13" x2="8" y2="13" stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="17" x2="8" y2="17" stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      tag: "AI · Full-Stack",
      tagStyle: "border-[#2a4a7a] bg-[#1a2a4a] text-[#4d9fff]",
      steps: [
        {
          node: <Node icon={<IconVSCode />} label="VS Code" sub="Local Dev" boxStyle="border-[#2a3a5a] bg-[#1a2a4a]" />,
          arrow: "push",
        },
        {
          node: <Node icon={<IconGitHub />} label="GitHub" sub="Version Control" boxStyle="border-[#2a3450] bg-[#1a2236]" />,
          arrow: "auto-deploy",
        },
        {
          node: <Node icon={<IconFastAPI />} label="FastAPI" sub="AI Backend" boxStyle="border-[#1a4a32] bg-[#0e2a1e]" labelColor="text-emerald-400" />,
          arrow: "API calls",
        },
        {
          node: <Node icon={<IconRender />} label="Render" sub="FastAPI Host" boxStyle="border-[#1a4a32] bg-[#0e2a1e]" labelColor="text-emerald-400" />,
          arrow: "serves",
        },
        {
          node: <Node icon={<IconVercel />} label="Vercel" sub="Next.js UI" boxStyle="border-[#2a2a5a] bg-[#1a1a2e]" labelColor="text-violet-400" />,
          arrow: "serves",
        },
        {
          node: <Node icon={<IconGlobe />} label="Live App" sub="Public URL" boxStyle="border-emerald-700 bg-[#0e2a1e]" labelColor="text-emerald-400" />,
        },
      ],
    },
    {
      name: "Balaji Kirana Store",
      sub: "MERN Stack · MongoDB",
      iconBg: "bg-[#1e1a36]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="21" r="1" fill="#a78bfa" />
          <circle cx="20" cy="21" r="1" fill="#a78bfa" />
          <path
            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      ),
      tag: "Full-Stack · Web",
      tagStyle: "border-[#3a2a6a] bg-[#1e1a36] text-[#a78bfa]",
      steps: [
        {
          node: <Node icon={<IconVSCode />} label="VS Code" sub="Local Dev" boxStyle="border-[#2a3a5a] bg-[#1a2a4a]" />,
          arrow: "push",
        },
        {
          node: <Node icon={<IconGitHub />} label="GitHub" sub="Version Control" boxStyle="border-[#2a3450] bg-[#1a2236]" />,
          arrow: "auto-deploy",
        },
        {
          node: <Node icon={<IconReact />} label="React.js" sub="Frontend" boxStyle="border-[#1a3a4a] bg-[#0e2030]" labelColor="text-cyan-400" />,
          arrow: "REST API",
        },
        {
          node: <Node icon={<IconRender />} label="Render" sub="Node+Express" boxStyle="border-[#1a4a32] bg-[#0e2a1e]" labelColor="text-emerald-400" />,
          arrow: "serves",
        },
        {
          node: <Node icon={<IconVercel />} label="Vercel" sub="React Host" boxStyle="border-[#2a2a5a] bg-[#1a1a2e]" labelColor="text-violet-400" />,
          arrow: "serves",
        },
        {
          node: <Node icon={<IconGlobe />} label="Live App" sub="Public URL" boxStyle="border-emerald-700 bg-[#0e2a1e]" labelColor="text-emerald-400" />,
        },
      ],
    },
    {
      name: "Clinic NL2SQL",
      sub: "Python · FastAPI · Streamlit · SQLite",
      iconBg: "bg-[#1a2a1a]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 12h-4l-3 9L9 3l-3 9H2"
            stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      ),
      tag: "AI · NLP · SQL",
      tagStyle: "border-[#2a5a2a] bg-[#1a2a1a] text-[#4ade80]",
      steps: [
        {
          node: <Node icon={<IconVSCode />} label="VS Code" sub="Local Dev" boxStyle="border-[#2a3a5a] bg-[#1a2a4a]" />,
          arrow: "push",
        },
        {
          node: <Node icon={<IconGitHub />} label="GitHub" sub="Version Control" boxStyle="border-[#2a3450] bg-[#1a2236]" />,
          arrow: "auto-deploy",
        },
        {
          node: <Node icon={<IconFastAPI />} label="FastAPI" sub="NL2SQL Logic" boxStyle="border-[#1a4a32] bg-[#0e2a1e]" labelColor="text-emerald-400" />,
          arrow: "UI layer",
        },
        {
          node: <Node icon={<IconStreamlit />} label="Streamlit" sub="Chat Interface" boxStyle="border-[#6a2a2a] bg-[#2a1a1a]" labelColor="text-red-400" />,
          arrow: "deploy",
        },
        {
          node: <Node icon={<IconGlobe />} label="Live App" sub="Streamlit Cloud" boxStyle="border-emerald-700 bg-[#0e2a1e]" labelColor="text-emerald-400" />,
        },
      ],
    },
    {
      name: "Aizen Studio",
      sub: "React · Next.js · Tailwind · Framer",
      iconBg: "bg-[#1a1a2e]",
      icon: (
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-black text-blue-600">
          Ai
        </div>
      ),
      tag: "Frontend · Studio",
      tagStyle: "border-[#5a2a3a] bg-[#2a1a1e] text-[#f472b6]",
      steps: [
        {
          node: <Node icon={<IconVSCode />} label="VS Code" sub="Local Dev" boxStyle="border-[#2a3a5a] bg-[#1a2a4a]" />,
          arrow: "push",
        },
        {
          node: <Node icon={<IconGitHub />} label="GitHub" sub="Version Control" boxStyle="border-[#2a3450] bg-[#1a2236]" />,
          arrow: "auto-deploy",
        },
        {
          node: <Node icon={<IconNextjs />} label="Next.js" sub="SSG + Optimise" boxStyle="border-[#333] bg-[#111]" labelColor="text-slate-300" />,
          arrow: "deploy",
        },
        {
          node: <Node icon={<IconVercel />} label="Vercel" sub="Edge CDN" boxStyle="border-[#2a2a5a] bg-[#1a1a2e]" labelColor="text-violet-400" />,
          arrow: "serves",
        },
        {
          node: <Node icon={<IconGlobe />} label="Live Site" sub="Public URL" boxStyle="border-emerald-700 bg-[#0e2a1e]" labelColor="text-emerald-400" />,
        },
      ],
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0d1117] p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2a3450] bg-[#1a2236]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="#4d9fff" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="#4d9fff" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="#4d9fff" strokeWidth="2" />
              <path d="M17.5 10v4M17.5 14a4 4 0 0 1-4 4H10" stroke="#4d9fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-[15px] font-bold text-slate-100">Project Workflow</span>
        </div>
       <a
        href="#projects"
        className="flex items-center gap-1 text-[12px] font-semibold text-[#4d9fff] hover:underline"
      >
        View all projects
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
          
      </div>

      {/* Rows — on mobile each row scrolls horizontally */}
      <div className="flex flex-col gap-2.5">
        {projects.map((p) => (
          <div
            key={p.name}
            className="w-full max-w-full overflow-x-auto rounded-xl border border-[#1e2d45] bg-[#111827]"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* scrollbar styling */}
            <style>{`
              .pw-row::-webkit-scrollbar { height: 3px; }
              .pw-row::-webkit-scrollbar-track { background: #111827; }
              .pw-row::-webkit-scrollbar-thumb { background: #2a3450; border-radius: 99px; }
            `}</style>
            <div className="pw-row flex min-w-max items-center gap-3 px-4 py-3 w-full">
              {/* Project identity */}
              <div
                className="flex shrink-0 items-center gap-3 border-r border-[#1e2d45] pr-4"
                style={{ width: 178 }}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#1e2d45] ${p.iconBg}`}
                >
                  {p.icon}
                </div>
                <div>
                  <p className="text-[13px] font-bold leading-tight text-slate-100">{p.name}</p>
                  <p className="mt-0.5 text-[10px] leading-tight text-slate-500">{p.sub}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-semibold text-emerald-400">Live</span>
                  </div>
                </div>
              </div>

              {/* Pipeline — stretches to fill on desktop, scrolls on mobile */}
              <div className="flex flex-1 items-center" style={{ minWidth: 420 }}>
                {p.steps.map((step, i) => (
                  <div key={i} className="flex flex-1 items-center">
                    {step.node}
                    {step.arrow && <Arrow label={step.arrow} />}
                  </div>
                ))}
                <span
                  className={`ml-2 shrink-0 rounded-full border px-2.5 py-0.5 text-[9px] font-bold ${p.tagStyle}`}
                >
                  {p.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}