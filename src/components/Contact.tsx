// src/components/Contact.tsx
"use client";

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ChevronDown } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm("YOUR_UNIQUE_ID"); // <-- PASTE YOUR FORMSPREE ID HERE
  const [isOpen, setIsOpen] = useState(false);

  // If the form was submitted successfully, render a thank you message inside the box.
  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="bg-slate-800/50 rounded-md p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Contact</h2>
          <p className="text-slate-400">Thanks for your message! I'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <div className="bg-slate-800/50 rounded-md">

        {/* This is the clickable header area with consistent padding */}
        <div
          className="flex justify-between items-center p-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-expanded={isOpen}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Contact
          </h2>
          <ChevronDown 
            className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            size={20}
          />
        </div>

        {/* This is the collapsible container for the form */}
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
        >
          {/* We add padding to the form container itself, but remove top padding */}
          <div className="px-6 pb-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}