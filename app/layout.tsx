import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Nikhil Mamidi | AI/ML & Generative AI Portfolio",
  description:
    "Modern portfolio for a fresher focused on AI, Machine Learning, Generative AI, LLMs, RAG systems, AI agents, and full-stack web development.",
  keywords: [
    "AI Engineer Portfolio",
    "Machine Learning Portfolio",
    "Generative AI",
    "LLM",
    "RAG",
    "AI Agents",
    "Next.js Developer",
    "Full Stack Developer"
  ],
  authors: [{ name: "Sai Nikhil Mamidi" }],
  openGraph: {
    title: "Sai Nikhil Mamidi | AI/ML & Generative AI Portfolio",
    description:
      "Projects, skills, learning journey, and contact information for internships, collaborations, and entry-level AI opportunities.",
    type: "website",
    images: ["/og-image.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Nikhil Mamidi | AI/ML & Generative AI Portfolio",
    description: "AI/ML, Generative AI, LLMs, RAG, AI Agents, and Web Development portfolio.",
    images: ["/og-image.svg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
