// src/components/Projects.tsx
import { Github, ExternalLink } from 'lucide-react';

// Define the shape of a single Project object.
// `link` and `github` are optional (string | undefined).
type Project = {
  name: string;
  link?: string;
  github?: string;
  tech: string[];
  description: string[];
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Projects</h2>
      <div className="bg-slate-800/50 rounded-md p-6">
        {projects.map((project, index) => (
          <div key={index} className="[&:not(:last-child)]:mb-10">
            {/* Project Header: Name and Links */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium text-slate-200">{project.name}</h3>
              <div className="flex items-center gap-4">
                {/* Conditionally render the link icon if project.link exists */}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External link">
                    <ExternalLink className="text-slate-400 hover:text-teal-400" size={20} />
                  </a>
                )}
                {/* Conditionally render the GitHub icon if project.github exists */}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                    <Github className="text-slate-400 hover:text-teal-400" size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stacks */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <div key={techIndex} className="bg-slate-700 text-teal-300 font-medium py-1 px-3 rounded-full text-xs">
                  {tech}
                </div>
              ))}
            </div>

            {/* Description Bullet Points */}
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              {project.description.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}