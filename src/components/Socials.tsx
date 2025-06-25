// src/components/Socials.tsx
import IconGithub from './icons/IconGithub';
import IconLinkedin from './icons/IconLinkedin';
import IconX from './icons/IconX';
import IconMail from './icons/IconMail';

export default function Socials() {
  return (
    <div className="flex w-full items-center justify-between">
      {/* GitHub */}
      {/* Replace "yourusername" with your actual GitHub username */}
      <a href="https://github.com/Terra-01/dev-portfolio-template" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconGithub size={22} />
      </a>
      {/* LinkedIn */}
      {/* Replace "yourusername" with your actual LinkedIn username */}
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconLinkedin size={22} />
      </a>
      {/* X (formerly Twitter) */}
      {/* Replace "yourusername" with your actual X (formerly Twitter) username */}
      <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter) profile" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconX size={18} />
      </a>
      {/* Email */}
      {/* Replace "your.email@example.com" with your actual email address */}
      <a href="mailto:your.email@example.com" aria-label="Email address" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
        <IconMail size={24} />
      </a>
    </div>
  );
}