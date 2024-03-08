# Sandbox Project for Fetch APIs (and other stuff)

I started this project as a Vite package, using this command and with these settings:

```ps
pnpm create vite@latest
.../Local/pnpm/store/v3/tmp/dlx-49068    |   +1 +
.../Local/pnpm/store/v3/tmp/dlx-49068    | Progress: resolved 1, reused 1, downloaded 0, added 1, done
√ Project name: ... .
√ Package name: ... random-user-consumer
√ Select a framework: » Vanilla
√ Select a variant: » JavaScript

Scaffolding project in C:\GH\2024-Jan-In-Class\1520-A03-Instructor\sandbox\UserProfile...

Done. Now run:

  pnpm install
  pnpm run dev
```

Then, the existing boiler-plate code in the project was stripped down to have our more "traditional" HTML/JavaScript setup. The HTML page content will be filled with API calls to the 3rd-party source for our JSON data: [RandomUser.md](https://randomuser.me). The endpoint in our calls will be `'https://randomuser.me/api/'`.

All existing styling was stripped from the project, and a Classless-CSS stylesheet ([Clam.css](https://www.npmjs.com/package/clam.css)) was introduced as a Node package and applied to the site via an `import 'clam.css';` in the `main.js` file.
