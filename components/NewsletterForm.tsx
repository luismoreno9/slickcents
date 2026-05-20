"use client";
import { useState } from "react";

interface Props {
  variant?: "hero" | "sidebar" | "inline";
}

export default function NewsletterForm({ variant = "inline" }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className={`font-medium text-sm ${variant === "sidebar" ? "text-forest-100" : "text-forest-700"}`}>
        ✓ You&apos;re subscribed! Check your inbox for a confirmation.
      </p>
    );
  }

  if (variant === "sidebar") {
    return (
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="w-full px-3 py-2.5 rounded-lg text-sm bg-white/15 text-white placeholder-forest-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40"
        />
        <button
          type="submit"
          className="w-full py-2.5 bg-white text-forest-700 font-semibold text-sm rounded-lg hover:bg-cream-50 transition-colors"
        >
          Subscribe Free
        </button>
      </form>
    );
  }

  // Inline / hero variant
  return (
    <form className="flex gap-2 w-full sm:w-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        className="flex-1 sm:w-52 px-3 py-2.5 rounded-lg text-sm bg-white text-bark-900 placeholder-bark-400 border border-cream-200 focus:outline-none focus:ring-2 focus:ring-forest-300 min-w-0"
      />
      <button
        type="submit"
        className="bg-white text-[#1a4731] font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-cream-50 transition-colors whitespace-nowrap flex-shrink-0"
      >
        Sign Up
      </button>
    </form>
  );
}
