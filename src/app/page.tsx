// src/app/page.tsx
import Image from 'next/image';
import { getSectionData } from '@/lib/markdown';

// Import all our components
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import DownloadCV from '@/components/DownloadCV';
import Contact from '@/components/Contact';
// Import a 'Projects' component if you have one

export default async function Home() {
  // Fetch data for ALL sections at once
  const aboutData = await getSectionData('about');
  const experienceData = await getSectionData('experience');
  const educationData = await getSectionData('education');
  const skillsData = await getSectionData('skills');
  // const projectsData = await getSectionData('projects');

  return (
    // Main container with overall padding
    <main className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20">
      
      {/* ================================================================= */}
      {/* HEADER (Full-width, at the top)                                 */}
      {/* ================================================================= */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16">
        {/* Left side: Identity (Pic, Name, Title, Tagline) */}
        <div className="flex items-center gap-4">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-200">
              Your Name
            </h1>
            <h2 className="mt-1 text-md font-medium tracking-tight text-slate-400">
              Your Title
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-normal text-slate-500">
              A brief, catchy tagline about your mission.
            </p>
          </div>
        </div>
        
        {/* Right side: CV Button */}
        <div className="shrink-0">
          <DownloadCV />
        </div>
      </header>

      {/* ================================================================= */}
      {/* TWO-COLUMN CONTENT AREA                                         */}
      {/* ================================================================= */}
      <div className="lg:flex lg:justify-between lg:gap-16 lg:items-start">
        
        {/* LEFT COLUMN (Sticky Sidebar) */}
        <aside className="lg:w-1/3 lg:sticky lg:top-24 flex flex-col gap-12">
          {/* Add a wrapper div to contain all left-column components */}
          <div>
            <About contentHtml={aboutData.contentHtml} />
            <Skills skills={skillsData.skills} />
            <Education degrees={educationData.degrees} />
            <Contact />
          </div>
        </aside>

        {/* RIGHT COLUMN (Scrollable Main Content) */}
        <section className="lg:w-2/3 pt-12 lg:pt-0">
          <Experience jobs={experienceData.jobs} />
          {/* Add your Projects component here once it's ready */}
          {/* <Projects projects={projectsData.projects} /> */}
        </section>

      </div>
    </main>
  );
}