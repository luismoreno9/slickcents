import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SlickCents privacy policy — how we collect, use, and protect your information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `When you visit SlickCents, we may collect certain information automatically, including your IP address, browser type, referring/exit pages, and operating system. This is standard web analytics data collected via tools like Google Analytics.

If you subscribe to our newsletter or submit a contact form, we collect your name and email address. We do not sell this information to third parties.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to:
- Deliver the newsletter you subscribed to
- Respond to your messages and inquiries
- Analyze site traffic and improve our content
- Comply with legal obligations

We do not use your personal information for automated decision-making or profiling.`,
  },
  {
    title: "Cookies",
    content: `SlickCents uses cookies to improve your browsing experience. These include:

Essential cookies: Required for the site to function properly.
Analytics cookies: Help us understand how visitors interact with our site (Google Analytics).
Advertising cookies: May be used if we display ads via third-party ad networks.

You can control cookie preferences through your browser settings. Disabling some cookies may affect site functionality.`,
  },
  {
    title: "Third-Party Services",
    content: `We may use third-party services that have their own privacy policies:

- Google Analytics (analytics)
- Mailchimp or ConvertKit (newsletter delivery)
- Ad networks (advertising, if applicable)

SlickCents is not responsible for the privacy practices of these third-party services.`,
  },
  {
    title: "Affiliate Disclosure",
    content: `Some links on SlickCents are affiliate links. This means we may earn a commission if you click through and make a purchase, at no additional cost to you. We only recommend products and services we genuinely believe in.

All affiliate relationships are disclosed in accordance with FTC guidelines.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information only as long as necessary for the purposes described in this policy, or as required by law. Newsletter subscribers may unsubscribe at any time using the link in any email we send.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information. To exercise these rights, contact us at hello@savvycents.com.`,
  },
  {
    title: "Children's Privacy",
    content: `SlickCents is not directed at children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will delete it promptly.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last revised" date. Continued use of the site after changes constitutes acceptance of the updated policy.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="flex items-center gap-2 text-xs text-bark-400 mb-8">
        <Link href="/" className="hover:text-forest-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-bark-600">Privacy Policy</span>
      </nav>

      <header className="mb-10">
        <h1 className="font-display font-bold text-4xl text-bark-900 mb-3">Privacy Policy</h1>
        <p className="text-bark-400 text-sm">Last revised: May 1, 2025</p>
        <p className="text-bark-600 mt-4 leading-relaxed">
          Your privacy matters. This policy explains what information SlickCents collects, how we use it, and what choices you have. If you have questions, <Link href="/contact" className="text-forest-600 hover:underline">contact us</Link>.
        </p>
      </header>

      <div className="space-y-8">
        {sections.map((section, i) => (
          <section key={section.title} className="bg-white rounded-2xl p-6 shadow-card border border-cream-200">
            <h2 className="font-display font-bold text-xl text-bark-900 mb-3 flex items-center gap-3">
              <span className="w-7 h-7 bg-forest-100 text-forest-700 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
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

      <div className="mt-10 bg-cream-100 rounded-2xl p-6 border border-cream-200 text-center">
        <p className="text-bark-500 text-sm">
          Questions about this policy?{" "}
          <Link href="/contact" className="text-forest-600 font-medium hover:underline">
            Get in touch
          </Link>{" "}
          and we&apos;ll be happy to help.
        </p>
      </div>
    </div>
  );
}
