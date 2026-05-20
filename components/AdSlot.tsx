"use client";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  label?: string;
  className?: string;
  anchor?: boolean;
}

export default function AdSlot({ id, label = "Advertisement", className = "", anchor = false }: Props) {
  const [visible, setVisible] = useState(!anchor);

  useEffect(() => {
    if (!anchor) return;
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [anchor]);

  if (anchor) {
    return (
      <div
        id={id}
        className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        } ${className}`}
      >
        <div className="max-w-screen-lg mx-auto relative">
          <div className="ad-slot min-h-[60px] rounded-none border-x-0 border-b-0 rounded-t-xl bg-cream-50">
            <div className="text-center">
              <span className="text-bark-300 text-xs uppercase tracking-widest">
                {label}
              </span>
              <p className="text-bark-400 text-xs mt-0.5">
                [{id}] — Ad space available
              </p>
            </div>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute top-2 right-3 text-bark-400 hover:text-bark-600 transition-colors text-xs"
            aria-label="Close ad"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id={id} className={`ad-slot ${className}`}>
      <div className="text-center py-2">
        <span className="text-bark-300 text-xs uppercase tracking-widest block">
          {label}
        </span>
        <p className="text-bark-400 text-xs mt-1">
          [{id}] — Ad space available
        </p>
      </div>
    </div>
  );
}
