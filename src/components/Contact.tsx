// src/components/Contact.tsx
"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mldnpeoo");

  if (state.succeeded) {
      return (
        <section id="contact">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
            Contact
          </h2>
          <p className="text-slate-400">Thanks for your message! I'll get back to you soon.</p>
        </section>
      );
  }

  return (
    <section id="contact">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
        Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
            Your Email
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-slate-800 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 disabled:bg-slate-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}