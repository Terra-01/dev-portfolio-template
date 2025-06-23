// src/components/Experience.tsx
type Job = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

type ExperienceProps = {
  jobs: Job[];
};

export default function Experience({ jobs }: ExperienceProps) {
  return (
    <section id="experience">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Experience</h2>
      <div className="bg-slate-800/50 rounded-md p-6">
        {jobs.map((job, index) => (
          <div key={index} className="[&:not(:last-child)]:mb-8">
            <h3 className="text-lg font-medium text-slate-200">{job.role}</h3>
            <p className="text-md text-slate-400 mt-1">
              {job.company} | {job.period}
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm md:text-base text-slate-400">
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}