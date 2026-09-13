# Mansaj Public Site

Public, multilingual marketing SPA for **Mansaj (منسج)**, an Arabic-first research and writing workspace. The infrastructure repository retains its original technical name and remains independent from the knowledge base and product application.

## Boundaries

- Static public content only
- No database, authentication, analytics, cookies, or personal-data collection
- Arabic-first, with English switching and automatic RTL/LTR document direction
- Public contact email: `eng.omar.kattan@gmail.com`
- Public sections lead with customer problems, outcomes, intended users, and trust; the day-to-day workflow appears only as supporting detail

## Local development

```bash
npm ci
npm start
```

Open `http://localhost:4200`.

## Verification

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

## Firebase Hosting setup

1. Firebase project `najjar-website` is already selected in `.firebaserc` and the deployment workflow.
2. Create a Firebase service account limited to Hosting deployment, save its JSON as the repository secret `FIREBASE_SERVICE_ACCOUNT_NAJJAR_PUBLIC_SITE`, and never commit that JSON.
3. Push to `main`. `.github/workflows/firebase-hosting.yml` tests, builds, and deploys the site.

The Firebase web SDK and Analytics are intentionally not initialized: this site only uses Firebase Hosting and collects no visitor data.

Firebase serves `dist/najjar-public-site/browser` and rewrites navigation to `index.html`.
