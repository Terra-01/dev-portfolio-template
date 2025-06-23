// src/components/Socials.tsx
import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';
import IconX from './icons/IconX';
import IconMail from './icons/IconMail';

export default function Socials() {
  return (
    <div className="flex w-full items-center justify-between">
      <a
        href="https://github.com/yourusername" // <-- REPLACE THIS
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <IconGithub size={22} />
      </a>

      <a
        href="https://linkedin.com/in/yourusername" // <-- REPLACE THIS
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <IconLinkedin size={22} />
      </a>

      <a
        href="https://x.com/yourusername" // <-- REPLACE THIS
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter) profile"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <IconX size={18} />
      </a>

      <a
        href="mailto:your.email@example.com" // <-- REPLACE THIS
        aria-label="Email address"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <IconMail size={24} />
      </a>
    </div>
  );
}