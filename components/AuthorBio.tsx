import Link from "next/link";
import Image from "next/image";

export default function AuthorBio() {
  return (
    <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100 flex gap-5 items-start mt-12">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-forest-200">
          <Image
            src="/images/foto sara redonda.jpeg"
            alt="Sarah Chen"
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-forest-600 uppercase tracking-wide mb-0.5">Written by</p>
        <h3 className="font-display font-bold text-bark-900 text-xl mb-2">Sarah Chen</h3>
        <p className="text-bark-600 text-sm leading-relaxed">
          Sarah paid off $52,000 in student loans, reached financial independence at 41, and now writes about the real-world money decisions that actually move the needle. She&apos;s based in Portland, Oregon and still tracks every dollar.
        </p>
        <Link href="/about" className="inline-flex items-center gap-1.5 text-forest-600 font-semibold text-sm mt-3 hover:text-forest-800 transition-colors">
          More about Sarah
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
