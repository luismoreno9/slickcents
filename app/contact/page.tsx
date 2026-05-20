import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sarah Chen at SlickCents. Questions, collaborations, or just want to say hello.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        <div>
          <span className="text-xs font-semibold text-forest-600 uppercase tracking-wider">Get in touch</span>
          <h1 className="font-display font-bold text-4xl text-bark-900 mt-2 mb-4">Say hello</h1>
          <p className="text-bark-600 leading-relaxed mb-8 max-w-lg">
            Whether you have a question about an article, want to collaborate, or just want to share your own money win — I&apos;d love to hear from you. I read every message personally.
          </p>
          <ContactForm />
        </div>

        {/* Contact info sidebar */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
            <h3 className="font-display font-bold text-bark-900 text-lg mb-4">Other ways to reach me</h3>
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  ),
                  label: "Email",
                  value: "hello@savvycents.com",
                  note: "Best for detailed questions",
                },
                {
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  ),
                  label: "Twitter / X",
                  value: "@savvycents",
                  note: "Quick questions welcome",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-9 h-9 bg-forest-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-forest-100">
                    <svg className="w-4 h-4 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-bark-400 uppercase tracking-wide">{item.label}</p>
                    <p className="text-bark-800 font-medium text-sm">{item.value}</p>
                    <p className="text-bark-400 text-xs">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
            <h3 className="font-display font-bold text-bark-900 text-lg mb-3">Response time</h3>
            <div className="space-y-2">
              {[
                { type: "General questions", time: "2–3 business days" },
                { type: "Collaboration inquiries", time: "3–5 business days" },
                { type: "Advertising", time: "1 week" },
                { type: "Urgent / corrections", time: "Same day (usually)" },
              ].map((item) => (
                <div key={item.type} className="flex justify-between text-sm border-b border-cream-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-bark-600">{item.type}</span>
                  <span className="text-forest-600 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-5 border border-forest-100">
            <h3 className="font-display font-bold text-bark-900 text-base mb-2">What I can&apos;t help with</h3>
            <p className="text-bark-500 text-sm leading-relaxed">
              I&apos;m not a licensed financial advisor. I can share my personal experience and point you to resources, but I can&apos;t give personalized investment advice for your specific situation. Please consult a fee-only fiduciary for that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
