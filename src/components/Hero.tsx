import Image from "next/image";
import CVDropdown from "./CVDropdown";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-24 pb-8 md:flex-row md:gap-16 md:text-left">
      {/* Text */}
      <div className="flex flex-col items-center md:items-start">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Software Developer · Engineer
        </p>
        <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Hi, I&apos;m Ivana Lovric
        </h1>
        <p className="mt-2 text-base text-muted">
          Software Developer · Engineer · Building systems with Java, Python &amp; React
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a href="https://mail.google.com/mail/?view=cm&to=ivana.lovric1314@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-accent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
            Email
          </a>
          <a href="https://github.com/gingercurlygirl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-accent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ilovric/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-accent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <CVDropdown />
        </div>
      </div>

      {/* Profile image */}
      <div className="mt-12 shrink-0 md:mt-0 flex flex-col items-center gap-4">
        <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72">
          <Image
            src="/profile.png"
            alt="Ivana Lovric"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
