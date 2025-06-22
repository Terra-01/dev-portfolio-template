// src/components/Contact.tsx
"use client";

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ChevronDown } from 'lucide-react'; // Import the icon

export default function Contact() {
  const [state, handleSubmit] = useForm("mldnpeoo");
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapsible section

  // If the form was submitted successfully, we want to keep the section open
  // to show the success message.
  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">
            Contact
          </h2>
        </div>
        <p className="text-slate-400">Thanks for your message! I'll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section id="contact">
      {/* This is the clickable header for the accordion */}
      <div 
        className="flex justify-between items-center cursor-pointer mb-6"
        onClick={() => setIsOpen(!isOpen)} // Toggle the state on click
        role="button"
        aria-expanded={isOpen}
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Contact
        </h2>
        <ChevronDown 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </div>

      {/* This div is the collapsible container */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
      >
        {/* The form itself is placed inside the collapsible container */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
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
    </section>
  );
}