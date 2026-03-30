import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 py-24 md:flex-row md:gap-16 md:text-left">
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
          <a
            href="https://github.com/gingercurlygirl"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ilovric/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Contact Me
          </a>
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
        <div className="flex flex-col items-center gap-2">
          {["Analytical problem-solving", "Systems development", "Machine learning & AI", "Agile development", "Engineering mindset", "Technical & business understanding"].map((item) => (
            <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
