// src/components/DownloadCV.tsx
import IconDownload from './icons/IconDownload';

export default function DownloadCV() {
  return (
    <a 
      href="/cv.pdf"
      download="YourName_CV.pdf" // Replace "YourName_CV" with your actual Name
      className="group flex items-center gap-2 border border-[var(--color-border-primary)] text-[var(--color-text-secondary)] py-2 px-4 rounded-lg transition-colors duration-300 hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)]"
    >
      <IconDownload size={18} className="transition-transform group-hover:-translate-y-px" />
      <span>Download CV</span>
    </a>
  );
}