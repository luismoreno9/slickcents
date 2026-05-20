import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SlickCents terms of service — the rules for using our website.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using SlickCents ("the site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the site.

We reserve the right to update these terms at any time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: "Not Financial Advice",
    content: `The content published on SlickCents is for educational and informational purposes only. Nothing on this site constitutes financial, investment, tax, or legal advice.

The author shares personal experiences and general information. Individual financial situations vary significantly. Always consult a qualified, licensed financial professional before making investment or financial decisions.

Past results (including the author's own financial journey) do not guarantee similar outcomes for others.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on SlickCents — including articles, images, graphics, and design — is owned by or licensed to SlickCents and is protected by copyright law.

You may not reproduce, distribute, or create derivative works from our content without explicit written permission. Sharing links to our articles is encouraged. Copying and republishing full articles is not permitted.`,
  },
  {
    title: "User Conduct",
    content: `When using this site, you agree not to:
- Post or submit any content that is illegal, harmful, or violates others' rights
- Attempt to gain unauthorized access to any part of the site
- Use the site to send spam or unsolicited communications
- Engage in any activity that disrupts or interferes with the site's operation
- Impersonate any person or entity`,
  },
  {
    title: "Comments and User Submissions",
    content: `If commenting functionality is enabled, you are responsible for the content you post. By posting, you grant SlickCents a non-exclusive license to display that content on the site.

We reserve the right to remove any content that violates these terms or that we find objectionable, at our sole discretion.`,
  },
  {
    title: "Affiliate Links and Advertising",
    content: `SlickCents participates in affiliate programs and may display advertising. We disclose these relationships as required by the FTC.

Affiliate links allow us to earn commissions when you purchase products we recommend, at no additional cost to you. We only recommend products we genuinely use or believe in.`,
  },
  {
    title: "Disclaimer of Warranties",
    content: `SlickCents is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the site will be error-free, uninterrupted, or free of harmful components.

We make reasonable efforts to ensure content accuracy, but we cannot guarantee that all information is current, complete, or accurate.`,
  },
  {
    title: "Limitation of Liability",
    content: `To the fullest extent permitted by law, SlickCents and its author shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the site or any content on it.

This includes, without limitation, any financial losses arising from reliance on information published on this site.`,
  },
  {
    title: "External Links",
    content: `SlickCents may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of any linked site. A link does not constitute an endorsement.`,
  },
  {
    title: "Governing Law",
    content: `These terms are governed by the laws of the State of Oregon, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Oregon.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="flex items-center gap-2 text-xs text-bark-400 mb-8">
        <Link href="/" className="hover:text-forest-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-bark-600">Terms of Service</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-display font-bold text-4xl text-bark-900 mb-3">Terms of Service</h1>
        <p className="text-bark-400 text-sm">Last revised: May 1, 2025</p>
        <p className="text-bark-600 mt-4 leading-relaxed">
          Please read these terms carefully. By using SlickCents, you agree to these terms. Questions? <Link href="/contact" className="text-forest-600 hover:underline">Contact us</Link>.
        </p>
      </header>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <section key={section.title} className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
            <h2 className="font-display font-bold text-xl text-bark-900 mb-3 flex items-center gap-3">
              <span className="w-7 h-7 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </span>
              {section.title}
            </h2>
            <div className="text-bark-600 text-sm leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 bg-amber-50 rounded-2xl p-6 border border-amber-100 text-center">
        <p className="text-bark-500 text-sm">
          <strong className="text-bark-700">TL;DR:</strong> Be respectful, don&apos;t copy our content, and remember that nothing here is financial advice. Thanks for reading SlickCents!
        </p>
      </div>
    </div>
  );
}
