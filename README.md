# AI Portfolio Starter

A modern, professional, recruiter-friendly personal portfolio for a fresher focused on Artificial Intelligence, Machine Learning, Generative AI, LLMs, RAG systems, AI agents, prompt engineering, and full-stack web development.

## Built With

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Vercel-ready structure

## Included Sections

- Hero section with AI/ML personal branding
- About me story
- Categorized skills
- Interactive project showcase with search, category filters, technology filters, featured projects, and recommendation panel
- Dedicated Generative AI showcase
- Experience and learning timeline
- Tech stack visualization
- GitHub stats and open-source area
- Certifications and achievements placeholders
- Resume preview and download CTA
- Testimonials placeholders
- Contact form and collaboration CTAs
- Blog ideas, currently learning, future goals, building now, fun facts, and terminal-style developer card
- Dark mode and light mode toggle

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Customize Your Portfolio

Edit the data at the top of `app/page.tsx`:

- `profile`
- `skillGroups`
- `projects`
- `genAiShowcase`
- `learningTimeline`
- `certifications`
- `currentlyLearning`
- `futureGoals`
- `buildingNow`
- `funFacts`

## Replace Placeholder Assets

Add your real profile image:

```text
public/profile-placeholder.svg → replace or update with your image
```

Add your resume:

```text
public/SaiNikhil_Resume.pdf
```

Update this line in `app/page.tsx` if your resume file has a different name:

```ts
resume: "/SaiNikhil_Resume.pdf"
```

Replace project screenshots in:

```text
public/projects/
```

## Update Links

In `app/page.tsx`, update:

```ts
linkedin: "https://www.linkedin.com/in/your-linkedin-username"
github: "https://github.com/mamidisainikhil2004"
```

For each project, replace:

```ts
github: "https://github.com/mamidisainikhil2004"
demo: "#"
```

with the actual GitHub repository and live demo URL.

## Contact Form

The included form uses `mailto:` by default. For production, connect it to one of these:

- Formspree
- Resend
- EmailJS
- Next.js API route
- Firebase
- Supabase

## Visitor Analytics

For analytics, add one of these providers:

- Vercel Analytics
- Google Analytics
- Plausible
- Umami

Example Vercel Analytics integration:

```bash
npm install @vercel/analytics
```

Then add the provider to `app/layout.tsx`.

## Deployment

Recommended deployment: Vercel.

```bash
npm run build
```

Then push the project to GitHub and import the repository into Vercel.

## Notes

The project content is intentionally written as an editable starter. Replace generic project descriptions with your exact project names, screenshots, measurable outcomes, GitHub links, and live demos before sharing with recruiters.
