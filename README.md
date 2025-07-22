# Spray Form Removal Scheme

A modern React + TypeScript single-page application scaffolded with **Vite** and styled with **Tailwind CSS** and **shadcn/ui** (Radix UI + Tailwind). Use this template as a starting point for applications that require a fast build pipeline, accessible component primitives, and a type-safe developer experience.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)


---

## Features
• Lightning-fast development powered by **Vite**  
• Written in **TypeScript** for end-to-end type safety  
• **Tailwind CSS** utility-first styling with first-party plugins and `tailwind-merge`  
• **shadcn/ui** collection of accessible components built on top of **Radix UI** primitives  
• Client-side routing with **React Router DOM**  
• Server-state management via **TanStack React Query**  
• Robust forms with **React Hook Form**, schema-validated by **Zod**  
• Iconography provided by **Lucide React**  
• Linting with **ESLint** and the TypeScript / React rule sets

---

## Tech Stack
| Purpose | Package |
|---------|---------|
| Build & Dev Server | `vite` |
| UI Library | `react`, `react-dom` |
| Language | `typescript` |
| Styling | `tailwindcss`, `tailwindcss-animate`, `clsx`, `class-variance-authority` |
| Component Primitives | `@radix-ui/react-*` (via **shadcn/ui**) |
| Routing | `react-router-dom` |
| Data-Fetching | `@tanstack/react-query` |
| Forms & Validation | `react-hook-form`, `@hookform/resolvers`, `zod` |
| Icons | `lucide-react` |
| Charts | `recharts` |
| Carousel | `embla-carousel-react` |
| Linting | `eslint`, `@typescript-eslint/*` |

Development dependencies such as **PostCSS**, **Autoprefixer**, and **Tailwind Typography** are pre-configured.

---

## Why React over Framer / Webflow?
While visual builders like **Framer** or **Webflow** are fantastic for rapid prototypes, we opted for **React** for the following reasons:

1. **Full Control & Extensibility** – React provides unrestricted access to the full power of JavaScript/TypeScript, enabling complex business logic, state management, and integrations that can be limiting or unavailable in no-code tools.
2. **Rich Ecosystem** – The npm registry offers hundreds of thousands of packages (e.g. React Query, Zod, Radix UI) that seamlessly compose with React components.
3. **Performance Optimisation** – Code-splitting, memoisation, and fine-grained rendering control help achieve better runtime performance and smaller bundle sizes compared to exported sites from some visual editors.
4. **Maintainability with Type Safety** – TypeScript, ESLint, and testing libraries integrate natively, leading to fewer runtime errors and a smoother developer-team workflow.
5. **Version Control & CI/CD** – A code-first approach sits naturally in Git, enabling pull-requests, code reviews, automated tests, and continuous deployment pipelines.
6. **Design System Compatibility** – shadcn/ui + Tailwind allow us to implement a bespoke design system rather than being constrained by a page builder’s component set.
7. **Cost & Vendor Lock-in** – Hosting a static SPA on any platform (Netlify, Vercel, S3, etc.) avoids subscription fees and proprietary lock-in often associated with visual-builder hosting.

In short, React empowers the team to build a highly-customisable, performant application that scales with future requirements, while still allowing great developer velocity thanks to tools like Vite and shadcn/ui.

---

---

## Chatbot
This project embeds a Dialogflow Messenger widget to provide on-page assistance about spray foam usage and troubleshooting.

### How it works
* The `src/components/Chatbot.tsx` component loads Dialogflow’s launcher script **once** and renders a `<df-messenger>` web component.
* The widget is configured with:
  ```tsx
  chat-title="Spray Foam Help"
  agent-id="VITE_DIALOGFLOW_AGENT_ID" // replace with your own
  language-code="en"
  chat-icon={icon} // custom PNG icon
  ```
* Because it is a pure client-side component, no backend code changes are required—Dialogflow handles the conversation hosting.

### Customising
1. **Agent** – Create your own agent in Dialogflow CX/ES and replace the `agent-id` value.
2. **Branding** – Swap the `chat-icon` import with any 32×32 PNG/SVG.
3. **Styling** – Google’s Messenger supports CSS custom properties; target the `df-messenger` selector globally.
4. **Placement** – Mount `<Chatbot />` anywhere in the React tree (commonly near the root so it appears site-wide).

### Environment considerations
Set `VITE_DIALOGFLOW_AGENT_ID` in a local `.env` file (see `.env.example`) so the chatbot can retrieve your Dialogflow agent ID at runtime.

### Other considerations
The widget injects an external script from `gstatic.com`. Ensure the domain is allowed by your Content-Security-Policy and that ad-blockers do not block it in production.

---

## UI / UX Principles
This site’s interface is designed with modern usability and accessibility standards in mind:

| Principle | Implementation |
|-----------|---------------|
| **Accessibility (WCAG 2.2 & EAA)** | All interactive components from **shadcn/ui** / **Radix UI** come with correct ARIA roles, focus management, and keyboard navigation out-of-the-box. Colour palettes respect WCAG AA contrast ratios.  |
| **Responsive Design** | Tailwind’s mobile-first utility classes ensure layouts adapt gracefully from phones to large desktops. |
| **Consistency & Theming** | A single Tailwind design-token system (spacing, colours, typography) maintains visual coherence; dark-mode support via `next-themes`. |
| **Progressive Enhancement** | Core content and forms remain functional without JavaScript; JS adds enhancements like real-time validation and animations. |
| **Feedback & States** | Components surface hover/active/disabled states, skeleton loaders, and toast notifications (via `sonner`) for transparent system feedback. |
| **Performance** | Vite splits bundles, lazy-loads routes/components, and serves compressed assets, resulting in <sub>100</sub> Lighthouse Performance scores. |

These guidelines align with the forthcoming **European Accessibility Act (EAA)**, ensuring the product is perceivable, operable, understandable, and robust for all users, including those relying on assistive technologies.

---

## Getting Started

1. **Install dependencies** (uses `npm`, but `pnpm` / `yarn` work as well):

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

3. **Build for production**:

   ```bash
   npm run build
   ```
   Compiled assets will be output to the `dist/` directory.

4. **Preview a production build** locally:

   ```bash
   npm run preview
   ```

5. **Lint the codebase**:

   ```bash
   npm run lint
   ```

---

## Available Scripts
| Script | Description |
|--------|-------------|
| `dev` | Start Vite dev server with hot-reload |
| `build` | Generate an optimized production build |
| `build:dev` | Production build using the *development* env mode |
| `preview` | Locally preview the production build |
| `lint` | Run ESLint over the project |

---

## Project Structure
```text
├── public/               # Static assets (served as-is)
├── src/
│   ├── components/       # Re-usable UI components (shadcn-styled)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Route-level components
│   ├── lib/              # Utility helpers & API layer
│   ├── App.tsx           # Root component + router
│   └── main.tsx          # ReactDOM render + providers
├── index.html            # HTML entrypoint (Vite injects scripts)
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json
```

