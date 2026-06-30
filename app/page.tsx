"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import {
  GitHubOpenSource,
  ResumeAndAchievements,
  
  
  Contact,
  Footer,
} from "@/components/sections/Sections";

export default function PortfolioPage() {
  const [dark, setDark] = useState(true);

  return (
    <main className={cn(dark && "dark")}>
      <div className="noise min-h-screen bg-paper text-ink transition-colors duration-500">
        <Header dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Projects />
           <GitHubOpenSource />
          <ResumeAndAchievements />
          <Contact />
          <Footer />
        </div>
      </main>
    );
}
