// src/components/ContactFAB.tsx
import IconSend from './icons/IconSend';

type ContactFABProps = {
  onClick: () => void;
};

export default function ContactFAB({ onClick }: ContactFABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Open contact form"
    >
      <IconSend size={24} />
    </button>
  );
}