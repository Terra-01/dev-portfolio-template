// src/components/Socials.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Socials() {
  return (
    // The main div now centers its content and has a little padding-top for spacing
    <div className="flex items-center justify-center gap-6 pt-4">
      {/* GitHub Link */}
      <a
        href="https://github.com/yourusername" // <-- REPLACE THIS
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Github size={24} />
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://linkedin.com/in/yourusername" // <-- REPLACE THIS
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Linkedin size={24} />
      </a>

      {/* Email Link */}
      <a
        href="mailto:your.email@example.com" // <-- REPLACE THIS
        aria-label="Email address"
        className="text-slate-400 hover:text-teal-400 transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}