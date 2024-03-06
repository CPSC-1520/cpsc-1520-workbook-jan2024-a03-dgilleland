# Getting Started with Node Projects

Most JavaScript-based web applications today are Node-based projects. Whenever you hear about things like Angular, React, NextJS, Svelte, Vue, etc., you are talking about Node-based projects.

Setting up a minimal Node project can be done with a single command. I have `pnpm` installed, so I'll use that; if you only have `npm` installed, then just replace the `pnpm` portion below with `npm`.

```ps
pnpm init
```

This will just create the `package.json` file which is the heart of every Node project. It's a little bit too "bare-bones", so let's create a project based on [**Vite**]().

```ps
pnpm create vite@latest
```

Then, you just need to follow the prompts to create the type of project you want. Here's what I created.

```ps
pnpm create vite@latest
.../Local/pnpm/store/v3/tmp/dlx-12176    |   +1 +
.../Local/pnpm/store/v3/tmp/dlx-12176    | Progress: resolved 1, reused 1, downloaded 0, added 1, done
√ Project name: ... node-vite
√ Select a framework: » Vanilla
√ Select a variant: » JavaScript

Scaffolding project in C:\GH\where-ever-you-are\node-vite...

Done. Now run:

  cd node-vite
  pnpm install
  pnpm run dev
```
