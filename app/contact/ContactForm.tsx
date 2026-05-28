'use client';

import { useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 rounded-md border border-basil-500/30 bg-basil-500/10 p-6">
        <p className="font-display text-2xl text-basil-600">Grazie!</p>
        <p className="mt-2 text-charcoal-800">
          Your message is in our queue. We&rsquo;ll get back to you within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mt-8 space-y-5"
    >
      <Field id="name" label="Name" autoComplete="name" required />
      <Field id="email" type="email" label="Email" autoComplete="email" required />
      <Field id="topic" label="Topic" placeholder="Private event, large order, feedback…" />
      <div>
        <label htmlFor="message" className="block text-xs tracking-[0.25em] uppercase text-charcoal-700/70 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-sm border border-crust-200 bg-crust-50 px-4 py-3 text-charcoal-900 outline-none focus:border-brick-600 focus:ring-2 focus:ring-brick-600/20 transition"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-brick-700 hover:bg-brick-800 text-crust-50 px-7 py-3.5 text-sm tracking-widest uppercase transition"
      >
        Send message
      </button>
      <p className="text-xs text-charcoal-700/60">
        This form is a mockup &mdash; messages aren&rsquo;t delivered anywhere yet.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = 'text',
  required,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs tracking-[0.25em] uppercase text-charcoal-700/70 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-sm border border-crust-200 bg-crust-50 px-4 py-3 text-charcoal-900 outline-none focus:border-brick-600 focus:ring-2 focus:ring-brick-600/20 transition"
      />
    </div>
  );
}
