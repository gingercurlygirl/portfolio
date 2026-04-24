"use client";

import { useState, useRef, useEffect } from "react";

const downloadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
  </svg>
);

const chevronIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z"/>
  </svg>
);

interface CVDropdownProps {
  variant?: "button" | "link";
}

export default function CVDropdown({ variant = "button" }: CVDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (variant === "link") {
    return (
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-sm text-muted transition-colors hover:text-foreground flex items-center gap-1"
        >
          CV {chevronIcon}
        </button>
        {open && (
          <div className="absolute right-0 bottom-full mb-2 w-36 rounded-lg border border-border bg-background shadow-lg z-50">
            <a
              href="/ivana_lovric_cv_sv.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent/10 rounded-t-lg"
            >
              {downloadIcon} Svenska
            </a>
            <a
              href="/ivana_lovric_cv_en.pdf"
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent/10 rounded-b-lg"
            >
              {downloadIcon} English
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border border-accent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
      >
        {downloadIcon} Download CV {chevronIcon}
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 w-44 rounded-lg border border-border bg-background shadow-lg z-50">
          <a
            href="/ivana_lovric_cv_sv.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-accent/10 rounded-t-lg"
          >
            {downloadIcon} Svenska
          </a>
          <a
            href="/ivana_lovric_cv_en.pdf"
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-accent/10 rounded-b-lg"
          >
            {downloadIcon} English
          </a>
        </div>
      )}
    </div>
  );
}