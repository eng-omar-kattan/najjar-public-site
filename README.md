# Najjar Public Site

Public, multilingual marketing SPA for the Najjar research workspace. This repository is intentionally independent from `Najjar-KB` and the product application.

## Boundaries

- Static public content only
- No database, authentication, analytics, cookies, or personal-data collection
- Arabic-first, with English switching and automatic RTL/LTR document direction
- The email link is a placeholder (`hello@example.com`) until the official contact address is chosen

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

1. Create a Firebase project and enable Hosting. No other Firebase services are needed.
2. In the GitHub repository, create the variable `FIREBASE_PROJECT_ID`.
3. Create a Firebase service account limited to Hosting deployment, save its JSON as the repository secret `FIREBASE_SERVICE_ACCOUNT_NAJJAR_PUBLIC_SITE`, and never commit that JSON.
4. Push to `main`. `.github/workflows/firebase-hosting.yml` tests, builds, and deploys the site.

Firebase serves `dist/najjar-public-site/browser` and rewrites navigation to `index.html`.
