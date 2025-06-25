// src/components/ContactModal.tsx
"use client";
import { useForm, ValidationError } from '@formspree/react';
import IconXCircle from './icons/IconXCircle';

type ContactModalProps = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
  const [state, handleSubmit] = useForm("YOUR_UNIQUE_ID"); // <-- IMPORTANT: PASTE YOUR FORMSPREE ID HERE

  // The success message state.
  if (state.succeeded) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg-primary)]/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[var(--color-bg-secondary)]/90 rounded-lg p-8 text-center w-full max-w-md">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Message Sent!</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">Thanks for reaching out. I'll get back to you soon.</p>
          <button 
            onClick={onClose} 
            className="bg-[var(--color-accent-solid)] hover:bg-[var(--color-accent-solid-hover)] text-[var(--color-text-primary)] font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // The default form state.
  return (
    <div 
    className="fixed inset-0 bg-[var(--color-bg-primary)]/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative bg-[var(--color-bg-secondary)]/90 rounded-lg p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          aria-label="Close"
        >
          <IconXCircle size={24} />
        </button>

        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Get in Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Your Email</label>
            <input id="email" type="email" name="email" className="w-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-md p-2 focus:ring-2 focus:ring-[var(--color-accent-primary)]" required autoComplete="email" />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors} 
              className="text-[var(--color-error)] text-sm mt-1" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] rounded-md p-2 focus:ring-2 focus:ring-[var(--color-accent-primary)]" required autoComplete="off" />
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors} 
              className="text-[var(--color-error)] text-sm mt-1"
            />
          </div>
          <button 
            type="submit" 
            disabled={state.submitting} 
            className="w-full bg-[var(--color-accent-solid)] hover:bg-[var(--color-accent-solid-hover)] text-[var(--color-text-primary)] font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:bg-[var(--color-disabled-bg)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}