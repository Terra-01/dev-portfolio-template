# Terra's Developer Portfolio Template

A clean, modern, and easily customizable developer portfolio built with Next.js and Tailwind CSS. This template is designed to be a "digital garden" where you can showcase your work, skills, and experience in a beautifully organized, single-page layout. Its most powerful feature is a robust, CSS-variable-driven theming system that allows for creating and switching between multiple predefined themes.

<!-- 
  TODO: Add a screenshot or, even better, a GIF of the finished portfolio.
-->

## Features

-   **Advanced Multi-Theme System:** Comes with over a dozen predefined themes (including popular GMK keycap set colorways). Easily create and add your own themes by editing a single CSS file.
-   **Component-Based Architecture:** Built with React and Next.js for a fast, modern web experience.
-   **Styled with Tailwind CSS:** A utility-first CSS framework for rapid UI development and customization.
-   **Markdown-Driven Content:** Easily edit your "About," "Experience," "Projects," and other sections in simple `.md` files.
-   **Mobile-First Responsive Design:** Looks and feels great on all devices, from phones to desktops.
-   **Intelligent Content Reordering:** On mobile, the `Experience` and `Projects` sections are displayed first for immediate impact.
-   **Sticky Sidebar Layout:** On desktop, the main content scrolls while your key information stays visible.
-   **Floating Action Button & Modal:** A non-intrusive contact button opens a focused, centered contact form.
-   **Self-Contained Icon System:** All icons are included as local SVG components, ensuring they will never change or break, and giving you full control.
-   **Ready for Analytics:** Easily integrates with Vercel Analytics for simple, privacy-friendly insights.

## Getting Started

Follow these steps to get the template up and running on your local machine.

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

This template is designed for easy customization. Here is a complete guide to personalizing every part of the portfolio.

### 1. Theming & Appearance

The entire color system is controlled by CSS variables, allowing for easy theming. This is managed in two key files.

#### **Part A: The Theme Library (`src/app/globals.css`)**
This file contains your "theme library." Each theme is a block of CSS variables inside a `[data-theme="..."]` selector.

-   **To edit an existing theme:** Simply find its block (e.g., `[data-theme="dark-slate"]`) and change the hex codes for the variables.
-   **To add a new theme:**
    1.  Copy an existing theme block.
    2.  Change the selector to a new name, like `[data-theme="my-cool-theme"]`.
    3.  Customize the hex code values for your new theme.

#### **Part B: The Theme Switcher (`src/components/ThemeSwitcher.tsx`)**
This file controls the options that appear in the theme selection dropdown.

-   To make your new theme selectable, add it to the `themes` array at the top of the file. The `value` must **exactly match** the `data-theme` selector name from `globals.css`.

    ```javascript
    const themes = [
      // ... other themes
      { value: 'my-cool-theme', label: 'My Cool Theme' },
    ];
    ```

### 2. Primary Identity & Header

-   **Profile Picture:** Place your image in `public/profile.jpg`.
-   **Name, Title, & Tagline:** Open `src/app/page.tsx` and edit the text inside the `<header>`.
-   **CV / Resume:** Place your PDF in `public/cv.pdf` and edit the link in `src/components/DownloadCV.tsx`.

### 3. Social Links & Contact Form

-   **Social Media Links:** Open `src/components/Socials.tsx` and replace the placeholder `href` values.
-   **Contact Form:**
    1.  Go to [formspree.io](https://formspree.io) and create a form.
    2.  Copy your unique form ID.
    3.  Open `src/components/ContactModal.tsx` and paste the ID into the `useForm` hook.

### 4. Main Content Sections (Markdown)

All section content lives in the `src/content/` directory.

-   **`about.md`**: Edit your bio and the `currentlyLearning` list.
-   **`experience.md`**: Edit the list of `jobs`. The `description` is a list of bullet points.
-   **`projects.md`**: Edit the list of `projects`. `link` and `github` are optional.
-   **`education.md`**: Edit the list of `degrees`.
-   **`skills.md`**: Edit the `skillCategories` and the list of `skills` within each.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/).

1.  Push your customized code to a GitHub repository.
2.  Go to Vercel and import your project from GitHub.
3.  Vercel will automatically detect the settings. Click **Deploy**.
4.  **To enable analytics:** In your Vercel project dashboard, go to the "Analytics" tab and enable it.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.