# React Compiler installation issues

This reproduction repo contains 2 folders, with several scenarios.

The root problem appears to be that when using the default React plugin, some detection of a React Compiler plugin occurs, allowing sourcemaps to "just work". Whereas if you use a React SWC plugin, or React Router plugin, you'll need to manually toggle on sourcemaps in the React Compiler babel plugin.

ALWAYS run with `npm run dev --- --force` to ensure that re-optimization occurs, as caching may confuse things when verifying.

## plain-react

A plain react repo created with `npx create-vite@latest`, using TypeScript + React Compiler. The vite.config.ts contains multiple scenarios with comments.

## react-router

A React Router v7 repo (framework mode) created with `npx create-vite@latest`, using TypeScript + React Compiler. The vite.config.ts contains the single scenario (manually entering `sourceMaps: true`, or leaving it blank).
