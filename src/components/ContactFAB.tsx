// src/components/ContactFAB.tsx
import IconSend from './icons/IconSend';

type ContactFABProps = {
  onClick: () => void;
};

export default function ContactFAB({ onClick }: ContactFABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 bg-slate-800/50 border border-slate-600 text-slate-300 hover:border-teal-400 hover:text-teal-400 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Open contact form"
    >
      <IconSend size={24} />
    </button>
  );
}