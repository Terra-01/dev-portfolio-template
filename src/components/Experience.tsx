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
      <h2 className="text-base font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-6">Experience</h2>
      <div className="bg-[var(--color-bg-secondary)] rounded-md p-6">
        {jobs.map((job, index) => (
          <div key={index} className="[&:not(:last-child)]:mb-8">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{job.role}</h3>
            <p className="text-md text-[var(--color-text-secondary)] mt-1">
              {job.company} | {job.period}
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-sm md:text-base text-[var(--color-text-secondary)]">
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