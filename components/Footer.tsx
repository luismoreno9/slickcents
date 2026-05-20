import Link from "next/link";
import Image from "next/image";
import { CATEGORIES, categorySlug } from "@/lib/articles";

export default function Footer() {
  return (
    <footer className="bg-bark-900 text-bark-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src="/images/logo bueno.png"
                  alt="SlickCents"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Slick<span className="text-forest-300">Cents</span>
              </span>
            </Link>
            <p className="text-bark-300 text-sm leading-relaxed max-w-sm">
              Real money talk for real people. Budgeting, investing, and building wealth — without the jargon, judgment, or get-rich-quick nonsense.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-bark-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-bark-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm text-bark-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-bark-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-bark-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">Categories</h4>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link href={`/category/${categorySlug(cat)}`} className="text-sm text-bark-300 hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-bark-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bark-400">
            © {new Date().getFullYear()} SlickCents. All rights reserved.
          </p>
          <p className="text-xs text-bark-500">
            This site does not provide financial advice. Always consult a licensed professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
