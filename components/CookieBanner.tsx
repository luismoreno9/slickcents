"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-bark-900 text-white rounded-2xl shadow-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white mb-1">We use cookies</p>
          <p className="text-xs text-bark-300 leading-relaxed">
            We use cookies to improve your experience, analyze traffic, and personalize content. By clicking &ldquo;Accept&rdquo;, you agree to our{" "}
            <a href="/privacy-policy" className="text-forest-400 hover:text-forest-300 underline underline-offset-2 transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none text-xs font-medium text-bark-300 hover:text-white border border-bark-600 hover:border-bark-400 px-4 py-2.5 rounded-xl transition-all"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none text-xs font-semibold bg-forest-500 hover:bg-forest-400 text-white px-5 py-2.5 rounded-xl transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
