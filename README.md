# Terra's Developer Portfolio Template

A clean, modern, and easily customizable developer portfolio built with Next.js and Tailwind CSS. This template is designed to be a "digital garden" where you can showcase your work, skills, and experience in a beautifully organized, single-page layout. The content is managed through simple markdown files, making updates and version control a breeze.

<!-- 
  TODO: Add a screenshot a GIF of the finished portfolio.
-->

## Features

- **Component-Based Architecture:** Built with React and Next.js for a fast, modern web experience.
- **Styled with Tailwind CSS:** A utility-first CSS framework for rapid UI development and customization.
- **Markdown-Driven Content:** Easily edit your "About," "Experience," "Projects," and other sections in simple `.md` files.
- **Mobile-First Responsive Design:** Looks and feels great on all devices, from phones to desktops.
- **Intelligent Content Reordering:** On mobile, the `Experience` and `Projects` sections are displayed first for immediate impact.
- **Sticky Sidebar Layout:** On desktop, the main content scrolls while your key information stays visible.
- **Floating Action Button & Modal:** A non-intrusive contact button opens a focused, centered contact form.
- **Self-Contained Icon System:** All icons are included as local SVG components, ensuring they will never change or break, and giving you full control.
- **Smooth Scrolling:** A pleasant user experience when navigating between sections.
- **Ready for Analytics:** Easily integrates with Vercel Analytics for simple, privacy-friendly insights.

## Getting Started

Follow these steps to get the template up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-Terra-01/dev-portfolio-template.git
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

### 1. Primary Identity & Header

Your main personal information is located in the header.

-   **Profile Picture:**
    -   Place your profile picture in the `public/` folder.
    -   Name the image `profile.jpg`.
    -   For best results, use a square image.

-   **Name, Title, and Tagline:**
    -   Open `src/app/page.tsx`.
    -   Find the `<header>` section and edit the text directly inside the `<h1>`, `<h2>`, and `<p>` tags.

-   **CV / Resume:**
    -   Place your CV in PDF format inside the `public/` folder (e.g., `public/cv.pdf`).
    -   Open `src/components/DownloadCV.tsx` and ensure the `href` attribute points to the correct filename. You can also change the suggested downloaded filename in the `download` attribute.

### 2. Social Links & Contact Form

-   **Social Media Links:**
    -   Open `src/components/Socials.tsx`.
    -   Replace the placeholder `href` values for GitHub, LinkedIn, X (Twitter), and Mail with your personal profile URLs.

-   **Contact Form:**
    1.  Go to [formspree.io](https://formspree.io) and create a new form.
    2.  Copy your unique form ID (it's a string of random characters).
    3.  Open `src/components/ContactModal.tsx`.
    4.  Find the `useForm` hook and paste your ID into it: `const [state, handleSubmit] = useForm("YOUR_UNIQUE_ID");`.

### 3. Main Content Sections (Markdown Files)

All the main content for your portfolio lives in the `src/content/` directory. Edit these `.md` files to update the sections.

-   #### **About Section (`src/content/about.md`)**
    -   **Bio:** Edit the main paragraph text directly in the file.
    -   **Highlighted Keywords:** The `highlightKeywords` list in the front matter will style matching words in your bio.
    -   **Currently Learning:** Update the `currentlyLearning` list to show what skills you are currently focused on.

-   #### **Experience Section (`src/content/experience.md`)**
    -   Edit the list of `jobs`. Each job is an item in the list with `role`, `company`, `period`, and a `description`.
    -   The `description` is a list of bullet points. Add or remove points using the `-` syntax.

-   #### **Projects Section (`src/content/projects.md`)**
    -   Edit the list of `projects`.
    -   `link` (live site) and `github` are optional; if you remove a field, its icon will not appear.
    -   `tech` is a list of technologies used, which will be displayed as tags.
    -   `description` is a list of bullet points for the project's key features.

-   #### **Education Section (`src/content/education.md`)**
    -   Edit the list of `degrees`. Each entry has a `degree`, `institution`, `location`, and `period`.

-   #### **Skills Section (`src/content/skills.md`)**
    -   The skills are grouped into categories under `skillCategories`.
    -   You can rename the categories (`Languages`, `Technologies`, etc.) or add new ones.
    -   Update the `skills` list under each category with your personal skill set.

## Deployment

The easiest way to deploy your portfolio is with [Vercel](https://vercel.com/), the creators of Next.js.

1.  Push your customized code to a GitHub repository.
2.  Go to Vercel and import your project from GitHub.
3.  Vercel will automatically detect the Next.js framework and configure the build settings.
4.  Deploy!
5.  **To enable analytics:** In your Vercel project dashboard, go to the "Analytics" tab and enable it for privacy-friendly insights.

---

That's it! By following this guide, you can transform this template into a personalized, professional portfolio that is ready to be shared with the world.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.