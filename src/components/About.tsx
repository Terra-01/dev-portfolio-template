// src/components/About.tsx
type AboutProps = {
    contentHtml: string;
  };
  
  export default function About({ contentHtml }: AboutProps) {
    return (
      <section id="about" className="mb-16 scroll-mt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
          About
        </h2>
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>
    );
  }