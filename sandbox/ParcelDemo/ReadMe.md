# Node App using Parcel

We'll start with a blank Node project. I've created a folder called "ParcelDemo", and inside of that I've got this ReadMe.md document. Within this folder, we'll create our Node project and add in our 3rd-party packages.

```ps
pnpm init
```

The 3rd-party packages will include `validator`, `bootstrap`, and `parcel`.

```ps
pnpm i validator
pnpm i bootstrap
pnpm i parcel --save-dev
```

We'll modify our `package.json` file so that it identifies a `"source": "index.html"` in place of the "main" entry point for our app. We'll also include a couple of scripts to run our app using `parcel`.

```json
"source": "index.html",
"scripts": {
    "start": "parcel",
    "build": "parcel build"
}
```

Add your main.js to your HTML

import 'boostrap/dist/css/bootstrap.min.css';