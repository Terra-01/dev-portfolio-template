// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Socials from '@/components/Socials';
import DownloadCV from '@/components/DownloadCV';
import ContactFAB from '@/components/ContactFAB';
import ContactModal from '@/components/ContactModal';

const initialDataState = {
  aboutData: { contentHtml: "", highlightKeywords: [], currentlyLearning: [] },
  experienceData: { jobs: [] },
  educationData: { degrees: [] },
  skillsData: { skillCategories: [] },
  projectsData: { projects: [] },
};

export default function Home() {
  const [isContactOpen, setContactOpen] = useState(false);

  const [data, setData] = useState<any>(initialDataState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [about, experience, education, skills, projects] = await Promise.all([
          fetch('/api/content?file=about').then(res => res.json()),
          fetch('/api/content?file=experience').then(res => res.json()),
          fetch('/api/content?file=education').then(res => res.json()),
          fetch('/api/content?file=skills').then(res => res.json()),
          fetch('/api/content?file=projects').then(res => res.json()),
        ]);
        setData({
          aboutData: about,
          experienceData: experience,
          educationData: education,
          skillsData: skills,
          projectsData: projects,
        });
      } catch (error) {
        console.error("Failed to fetch page data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <>
      <main className="mx-auto max-w-screen-xl px-6 pt-8 pb-12 md:px-12 md:pt-16 md:pb-20">
        <header className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start mb-8">
            <div className="flex items-center gap-4">
                <Image src="/profile.jpg" alt="Profile Picture" width={80} height={80} className="w-20 h-20 rounded-full object-cover"/>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-200">Your Name</h1>
                    <h2 className="mt-1 text-md font-medium tracking-tight text-slate-400">Your Title</h2>
                    <p className="mt-2 max-w-xs text-sm leading-normal text-slate-500">A brief, catchy tagline about your mission.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Socials />
                <DownloadCV />
            </div>
        </header>
        
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 lg:items-start">
          <aside className="mt-8 lg:mt-0 lg:w-1/3 lg:sticky lg:top-24 flex flex-col gap-8 order-2 lg:order-1">
            <About contentHtml={data.aboutData.contentHtml} learning={data.aboutData.currentlyLearning} keywords={data.aboutData.highlightKeywords} />
            <Education degrees={data.educationData.degrees} />
            <Skills categories={data.skillsData.skillCategories} />
          </aside>
          
          <section className="lg:w-2/3 flex flex-col gap-8 order-1 lg:order-2">
            <Experience jobs={data.experienceData.jobs} />
            <Projects projects={data.projectsData.projects} />
          </section>
        </div>
      </main>

      <ContactFAB onClick={() => setContactOpen(true)} />
      {isContactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
}