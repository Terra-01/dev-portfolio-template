// src/components/DownloadCV.tsx
export default function DownloadCV() {
    return (
      <a 
        href="/cv.pdf" // Assuming your CV is named cv.pdf in the /public folder
        download="Shivam_CV.pdf"
        className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Download CV
      </a>
    );
  }