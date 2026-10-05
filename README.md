# Ashwin Phadke | Portfolio

This is a personal portfolio website built with Vue 3, TypeScript, and Vite. It showcases my professional experience, projects, talks, and blog posts.

## Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Lucide Vue](https://lucide.dev/)
- **Markdown:** [Marked](https://marked.js.org/)

## Project Structure

- `src/components/`: Contains the Vue components for different sections of the portfolio (About, Experience, Work, etc.).
- `src/data.ts`: Contains the static data for the portfolio content.
- `src/types.ts`: TypeScript interfaces for the data structures.
- `src/posts/`: Blog posts, one Markdown file per post. The file name is the post URL (`src/posts/my-post.md` is served at `/blog/my-post`).
- `src/views/`: The home page (tabs) and the blog post page.
- `src/App.vue`: The main application component.

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Writing a Blog Post

Add a Markdown file to `src/posts/` starting with this block (`date` is optional):

```markdown
---
title: My post title
date: 2026-01-31
category: Machine Learning
excerpt: One or two sentences shown in the post list and in link previews.
---

Post content in Markdown. Fenced code blocks with a language are syntax highlighted.
```

The build pre-renders each post to its own static page using [vite-ssg](https://github.com/antfu-collective/vite-ssg).

## Customization

- Update `src/data.sensitive.ts` to change the content (Profile, Timeline, Projects, etc.) and update it in your github action repository secrets as well.
- Modify components in `src/components/` to adjust the layout or design.
- Update `index.html` for SEO and meta tags.


## Sensitive Data Configuration

To protect personal information, the main profile data is stored in `src/data.sensitive.ts`, which is **excluded from version control** (via `.gitignore`).

- **`src/data.sensitive.ts`**: Contains the actual `PROFILE_DATA`. Create this file locally for development.
- **`src/data.sensitive.example.ts`**: A template file. Copy this to `src/data.sensitive.ts` to get started.

### CI/CD Setup (GitHub Actions)

To build the project in a CI environment, you must inject the sensitive data file at build time.

1. **Create a Repository Secret**:
   - Go to **Settings** > **Secrets and variables** > **Actions**.
   - Create a new secret named `DATA_SENSITIVE_FILE`.
   - Paste the **entire content** of your local `src/data.sensitive.ts`.

2. **Workflow Configuration**:
   The workflow uses an environment variable to safely inject the file content. Ensure your `.github/workflows/deploy.yml` includes:

   ```yaml
   - name: Inject Sensitive Data
     env:
       DATA_SENSITIVE: ${{ secrets.DATA_SENSITIVE_FILE }}
     run: echo "$DATA_SENSITIVE" > src/data.sensitive.ts
   ```

## Credits

This theme was created using **Antigravity** and dozens of prompts carried out on:
- **Gemini 3 Pro**
- **Gemini 3 Flash**


## License

[MIT](LICENSE)
