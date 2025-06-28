# Terra's Developer Portfolio Template

A clean, modern, and easily customizable developer portfolio built with Next.js and Tailwind CSS. Its most powerful feature is a robust, CSS-variable-driven theming system that allows for creating and switching between multiple predefined themes inspired by iconic GMK keycap sets.

**[Live Demo](https://terra-temp.vercel.app/)**

![Example Image](public/screenshot.png)

## Core Features

-   **Advanced Multi-Theme System:** Comes with over 20 predefined themes. Easily create and add your own by editing a single CSS file.
-   **Markdown-Driven Content:** All content is managed through simple `.md` files for easy updates.
-   **Fully Responsive:** Features a sticky sidebar layout on desktop and an intelligent, mobile-first content order on smaller devices.
-   **Modern UI/UX:** Includes a non-intrusive modal contact form, themed drop shadows, and smooth scrolling.
-   **Self-Contained & Optimized:** Built with a local icon system (no external dependencies) and optimized for performance with Next.js.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Terra-01/dev-portfolio-template.git
    cd dev-portfolio-template
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization Guide

To personalize this template, you only need to edit a few key files.

-   **Global Identity:**
    -   `src/app/page.tsx`: Edit your **Name, Title, and Tagline** in the `<header>`.
    -   `public/`: Replace `profile.jpg` with your image and `cv.pdf` with your resume.
    -   `src/components/DownloadCV.tsx` : Replace `YourName_CV.pdf` with your preferred pdf name.

-   **Theming:**
    -   `src/app/globals.css`: **Add or edit theme color palettes** here. Each theme is a block of CSS variables under a `[data-theme="..."]` selector.
    -   `src/components/ThemeSwitcher.tsx`: **Update the `themes` array** to add your new theme to the dropdown menu.

-   **Content (Markdown):**
    -   `src/content/`: **Edit the `.md` files** (`about.md`, `experience.md`, `education.md`, `projects.md`, `skills.md`, etc.) to fill in your personal information.

-   **Links & Services:**
    -   `src/components/Socials.tsx`: Update the `href` values with your profile URLs.
    -   `src/components/ContactModal.tsx`: Paste your unique Formspree ID into the `useForm` hook.
    -   `src/components/ThemeProvider.tsx`: Change the default theme (preference).

## Deployment

Deploying is simple with Vercel:
1.  Push your code to a GitHub repository.
2.  Import the repository on [Vercel](https://vercel.com/).
3.  Vercel handles the rest. Enable **Analytics** in your Vercel project dashboard for privacy-friendly insights.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.