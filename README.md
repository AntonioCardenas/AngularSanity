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

## Content Management

This project offers two ways to manage your content:

### 1. Integrated Studio (Angular Route)
The Sanity Studio is integrated directly into the Angular application. You can access it without leaving the app:
- **Local**: [http://localhost:4200/studio](http://localhost:4200/studio)
- **Production**: `https://your-domain.web.app/studio`

This is powered by the `StudioComponent` which embeds the studio using `renderStudio`.

### 2. Standard Studio (Subdirectory)
For a full-screen experience or advanced configurations, you can still use the standard studio in the `angularsanity` directory:

**From Project Root:**
```bash
npm run studio:dev      # Start local studio server
npm run studio:build    # Build studio for production
npm run studio:deploy   # Deploy studio to Sanity Cloud
```

**Manual:**
```bash
cd angularsanity
npm install && npm run dev
```

### Build & Deploy

This project is configured for **Firebase Hosting** and **Sanity Cloud**.

#### 1. Build & Deploy Frontend
Run the following command to build the Angular application and deploy it to Firebase:
```bash
npm run deploy
```

#### 2. Accessing Deployed Studio
To access your Sanity Studio in the cloud (after deploying the studio):
1. Run `npm run studio:deploy` from the project root.
2. Once deployed, you can access it at your Sanity project URL (e.g., `https://[project-id].sanity.studio`).

The frontend will be available at your Firebase Hosting URL (e.g., `https://[your-project].web.app`).

---

### Modern Angular Concepts Used
- **Application Builder**: Configured in `angular.json` with `@angular-devkit/build-angular:application`.
- **Zoneless-ready**: Optimized for performance.
- **Control Flow**: Migrated from legacy structural directives.
- **Type Safety**: Full TypeScript support including shims for external libraries.

### Support
For more information on Sanity API versioning, visit: [Sanity API Versioning](https://www.sanity.io/docs/api-versioning)
