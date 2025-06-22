// src/components/Experience.tsx

type Job = {
    role: string;
    company: string;
    period: string;
    description: string;
  };
  
  // The component expects a prop named 'jobs' which is an array of Job objects
  type ExperienceProps = {
    jobs: Job[];
  };
  
  export default function Experience({ jobs }: ExperienceProps) {
    return (
      <section id="experience" className="mb-16 scroll-mt-16">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
          Experience
        </h2>
        <div>
          {jobs.map((job, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-medium text-slate-800">{job.role}</h3>
              <p className="text-md text-slate-600">{job.company}</p>
              <p className="text-sm text-slate-400 mt-1">{job.period}</p>
              <p className="mt-2 text-slate-700">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }