"use client";
import { useEffect, useRef } from "react";

/**
 * ArticleAd — Premium native/vignette ad slot for inside article content.
 *
 * Usage:
 *   <ArticleAd id="article-ad-1" />
 *
 * Notes:
 *   - The Monetag script is loaded ONCE per page (global flag below) so multiple
 *     <ArticleAd /> mounts on the same page don't duplicate it.
 *   - To DISABLE all ads: set `ADS_ENABLED = false` in this file. No other change needed.
 *   - To CHANGE the ad zone: update `MONETAG_ZONE_ID`.
 *   - To CHANGE positions inside articles: edit `getAdInsertionPoints()` in
 *     app/blog/[slug]/page.tsx
 */

// === Config ===
const ADS_ENABLED = true;
const MONETAG_ZONE_ID = "11033957";
const MONETAG_SRC = "https://dd133.com/vignette.min.js";

// === Module-level guard so the script only loads once per page session ===
let scriptInjected = false;

export default function ArticleAd({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ADS_ENABLED) return;
    if (scriptInjected) return;
    if (typeof document === "undefined") return;

    scriptInjected = true;

    // Inject Monetag vignette script (lazy, after hydration) — single instance per page.
    const target =
      document.body || document.documentElement;

    const script = document.createElement("script");
    script.dataset.zone = MONETAG_ZONE_ID;
    script.src = MONETAG_SRC;
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    target.appendChild(script);
  }, []);

  if (!ADS_ENABLED) return null;

  return (
    <aside
      aria-label="Advertisement"
      data-ad-slot={id}
      // Premium editorial styling: subtle separators, generous margins, no harsh borders.
      // min-height reserves space to avoid CLS (Cumulative Layout Shift).
      className="my-14 -mx-2 sm:mx-0"
    >
      <div className="relative">
        {/* Sponsored label — discreet, magazine-style */}
        <div className="flex items-center justify-center mb-3">
          <span className="text-[10px] uppercase tracking-[0.22em] text-bark-400 font-medium px-3 bg-white">
            Sponsored
          </span>
        </div>

        {/* Thin top/bottom divider with the ad container in the middle */}
        <div className="border-t border-b border-cream-200 bg-cream-50/30 rounded-lg">
          <div
            ref={ref}
            id={`ad-container-${id}`}
            className="min-h-[120px] sm:min-h-[140px] flex items-center justify-center px-4 py-5"
          >
            {/* Monetag delivers vignette as page-level interstitial; this slot
                stays clean and gracefully empty if no native creative is served. */}
            <span className="text-bark-300 text-xs">&nbsp;</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
