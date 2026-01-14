# AngularSanity v21

![Logo](https://cdn.sanity.io/images/81pocpw8/production/99b36485e5479f50b24dd390fbd864d226c62b99-1266x930.png?w=2000&fit=max&auto=format)

## Modern Blog Template (Angular 21 + Sanity.io)

This is a high-performance, statically generated blog template built with the latest **Angular 21** and **Sanity.io**. It leverages modern Angular features like **Vite (Application Builder)**, **Standalone Components**, and the new **Built-in Control Flow** syntax.

### Key Features
- **Angular 21**: Leveraging the latest framework improvements.
- **Fast Build (Vite)**: Powered by the modern Angular Application Builder.
- **Standalone Architecture**: Zero NgModules for a cleaner, more modular codebase.
- **Modern Control Flow**: Uses `@if`, `@for`, and `@switch` for high-performance templates.
- **Sanity.io Integration**: Real-time content management with GROQ queries.
- **Tailwind CSS**: Premium styling with utility-first CSS.

---

### Getting Started

#### 1. Clone & Install
```bash
git clone [repository-url]
cd AngularSanity
npm install
```

#### 2. Configure Sanity
Update your Sanity credentials in `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  SANITY_PROJECT_ID: 'YOUR_PROJECT_ID',
  SANITY_DATASET: 'production',
  SANITY_API_VERSION: '2024-02-13',
  SANITY_PROJECT_TITLE: 'My Blog',
};
```

Also, update `angularsanity/sanity.config.ts` and `angularsanity/sanity.cli.ts` with your `projectId`.

#### 3. Run Locally
```bash
ng serve
```
Your app will be available at `http://localhost:4200/`.

---

### Content Management (Sanity Studio)
Go to the `angularsanity` directory to manage your content:
```bash
cd angularsanity
npm install
npm run dev
```

### Build & Deploy
To create a production-ready bundle:
```bash
npm run build
```
The output will be in `dist/angular-sanity`.

---

### Modern Angular Concepts Used
- **Application Builder**: Configured in `angular.json` with `@angular-devkit/build-angular:application`.
- **Zoneless-ready**: Optimized for performance.
- **Control Flow**: Migrated from legacy structural directives.
- **Type Safety**: Full TypeScript support including shims for external libraries.

### Support
For more information on Sanity API versioning, visit: [Sanity API Versioning](https://www.sanity.io/docs/api-versioning)
