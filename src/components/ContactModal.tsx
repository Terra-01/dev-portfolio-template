// src/components/ContactModal.tsx
"use client";
import { useForm, ValidationError } from '@formspree/react';
import IconXCircle from './icons/IconXCircle';

type ContactModalProps = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
  const [state, handleSubmit] = useForm("YOUR_UNIQUE_ID"); // <-- PASTE YOUR FORMSPREE ID HERE

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h2 className="text-xl font-bold mb-4">Message Sent!</h2>
          <p className="text-slate-400 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
          <button onClick={onClose} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="relative bg-slate-800 rounded-lg p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white"
          aria-label="Close"
        >
          <IconXCircle size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
            <input id="email" type="email" name="email" className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-teal-400" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-teal-400" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
          </div>
          <button type="submit" disabled={state.submitting} className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:bg-slate-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}