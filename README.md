# Weekkly

A landing page for a weekly planning subscription product, built with React, Vite and Swiper as an installable PWA.

**Status:** Prototype. The landing sections render and the PWA plugin is configured, but the sign-up and coming-soon forms have no submit logic, and the planner product itself is not in the repo.

## The problem

Weekkly is meant to help people set weekly goals and track subscriptions. This repo is the public page that introduces the idea and collects early interest.

## What it does

- Landing page assembled from section components: hero (`Jumbotron.jsx`), slogan, logo strip, work examples, personalised section, explore and search previews, testimonials and footer (`src/components/`).
- Image carousels with Swiper, plus an in-view helper (`src/utils/useIsInViewport.jsx`) for animating sections as they scroll in.
- Sign-up and coming-soon form components (`Signup.jsx`, `ComingSoonForm.jsx`). They render inputs and buttons only.
- Installable PWA setup through `vite-plugin-pwa` (`vite.config.ts`).

## How it's built

- React 18 with Vite 4 and SCSS in `src/styles/global.scss`.
- A custom client-side router in `router/`: route generation from the file layout, eager and lazy routes, a loader, and an error boundary.
- Firebase Hosting is configured through `firebase.json` and `.firebaserc`.

## Running it locally

```bash
pnpm install
pnpm preview   # serves the production build from dist/
```

`dev` and `build` run `node api.js` before Vite. The root `api.js` appears to be obfuscated, so review it before running those scripts.

## What's left

- The sign-up and coming-soon forms do not submit anywhere.
- The planner and subscription features described in the intro are not implemented.
- No tests.
