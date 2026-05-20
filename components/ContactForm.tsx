"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-forest-50 border border-forest-100 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-14 h-14 bg-forest-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-bark-900 text-xl mb-2">Message Received!</h3>
        <p className="text-bark-600 text-sm leading-relaxed">
          Thanks for reaching out, {form.name || "friend"}. I read every message and will get back to you within 2–3 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
          className="btn-outline mt-5 text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-bark-900 text-sm placeholder-bark-300 focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-300 transition-all";
  const labelCls = "block text-sm font-semibold text-bark-700 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelCls}>Your Name</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email Address</label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={labelCls}>Subject</label>
        <select
          id="subject"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className={inputCls}
          required
        >
          <option value="">Select a topic...</option>
          <option value="general">General Question</option>
          <option value="collaboration">Collaboration / Partnership</option>
          <option value="feedback">Feedback or Correction</option>
          <option value="advertising">Advertising Inquiry</option>
          <option value="personal">Personal Finance Question</option>
          <option value="other">Something Else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea
          id="message"
          required
          rows={6}
          placeholder="What's on your mind? Be as detailed as you'd like..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} resize-none`}
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center py-3">
        Send Message
      </button>
      <p className="text-xs text-bark-400 text-center">
        I typically reply within 2–3 business days. For urgent matters, reach out on{" "}
        <a href="#" className="text-forest-600 hover:underline">Twitter/X</a>.
      </p>
    </form>
  );
}
