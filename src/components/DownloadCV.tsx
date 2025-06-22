// src/components/DownloadCV.tsx
import IconDownload from './icons/IconDownload';

export default function DownloadCV() {
  return (
    <a 
      href="/cv.pdf"
      download="YourName_CV.pdf"
      className="group flex items-center gap-2 border border-slate-600 text-slate-300 py-2 px-4 rounded-lg transition-colors duration-300 hover:border-teal-400 hover:text-teal-400"
    >
      <IconDownload size={18} className="transition-transform group-hover:-translate-y-px" />
      <span>Download CV</span>
    </a>
  );
}