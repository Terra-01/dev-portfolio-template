// src/components/About.tsx
"use client";

import { useMemo } from 'react';

type AboutProps = {
  contentHtml: string;
  keywords?: string[];
  learning?: string[];
};

export default function About({ contentHtml, keywords = [], learning = [] }: AboutProps) {
  
  const highlightedHtml = useMemo(() => {
    if (!keywords.length) return contentHtml;
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    return contentHtml.replace(regex, (match) => `<span class="font-bold text-teal-300">${match}</span>`);
  }, [contentHtml, keywords]);

  return (
    <section id="about">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">About</h2>
      <div className="bg-slate-800/50 rounded-md p-6">
        <div
          className="prose prose-slate max-w-none prose-p:text-slate-400"
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />

        {/* 
          NEW: Conditionally render the "Currently Learning" section.
          This block will only appear if the 'learning' array has items.
        */}
        {learning.length > 0 && (
          <>
            <div className="border-t border-slate-700 my-6"></div>

            <h3 className="text-md font-semibold text-slate-300 mb-3">Currently Exploring</h3>
            
            <div className="flex flex-wrap gap-2">
              {learning.map((item, index) => (
                <div key={index} className="bg-teal-900/50 text-teal-300 font-medium py-1 px-3 rounded-full text-sm">
                  {item}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}