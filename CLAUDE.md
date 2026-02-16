# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (http://localhost:5173)
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — ESLint (flat config, TS/TSX only)
- `npm run preview` — Preview production build locally

No test framework is configured.

## Architecture

This is a single-page interactive resume built with React 19, TypeScript, Vite 7, Tailwind CSS v4, and Framer Motion. It deploys as a static site to GitHub Pages via `.github/workflows/deploy.yml`.

### Data-driven config

All resume content lives in `src/data/resume-config.ts`, which exports a single `resumeConfig` object typed as `ResumeConfig` (defined in `src/data/types.ts`). Every user-facing string is a `LocalizedString` (`Record<string, string>`) keyed by language code, enabling multi-language support without a translation framework.

### Theme system

Colors flow through CSS custom properties set at runtime:
1. `src/data/presets.ts` defines 6 color presets (minimal, warm, ocean, forest, slate, lilac), each providing light + dark mode values
2. `ThemeProvider` (`src/lib/theme/context.tsx`) manages dark/light state and active preset. It resolves preset colors merged with optional `resumeConfig.theme.colors` overrides
3. `ThemeVarsInjector` in `App.tsx` injects the resolved colors as `--resume-*` CSS custom properties on `:root` and `.dark`
4. `src/globals.css` bridges these to Tailwind via `@theme inline`, making them available as `bg-resume-bg`, `text-resume-primary`, etc.

Dark mode uses a `.dark` class on `<html>` (not `prefers-color-scheme`). Default mode is time-based (approximating sunset/sunrise in France), overridable via `resumeConfig.theme.defaultMode`.

### i18n system

`LanguageProvider` (`src/lib/i18n/context.tsx`) detects language from: URL `?lang=` param → localStorage → browser language → config default. The `useTranslation()` hook exposes `resolve(localizedString)` and `resolveArray(localizedStringArray)` to pick the correct translation at render time.

### Component layout

`Resume` (`src/components/Resume/index.tsx`) renders a two-column card: `Sidebar` (photo, contact, skills, education, hobbies) and `MainContent` (experiences, projects). Experience items expand inline on desktop or in a modal on mobile (controlled via `useBreakpoints` hook).

### Tech badges

`src/data/tech-registry.ts` maps ~150 technology names to their brand colors. Components use `getTechColor(name)` to resolve colors; unregistered techs fall back to gray. The `techs` arrays in config accept both `TechName` (autocompleted) and arbitrary strings.

### Path alias

`@/` is aliased to `src/` (configured in `vite.config.ts`). Always use `@/` imports.

### Asset paths

Use `assetUrl()` from `src/lib/utils.ts` for public assets — it prepends `import.meta.env.BASE_URL` to handle GitHub Pages subpath deployment.

### Dev-only features

In development mode, the app renders a `DevPresetSelector` (top-left dropdown to switch color presets) and the [Agentation](https://agentation.dev/) toolbar (lazy-loaded). Both are stripped from production builds.

## Conventions

- Commit messages follow conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`
- New technologies in `tech-registry.ts`: use official brand color, add in the appropriate category section, keep alphabetical order within each section
- Test in both light and dark mode, and on mobile viewport
