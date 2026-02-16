export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
        Full-Stack Developer
      </p>
      <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Hi, I&apos;m John Doe
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        I build modern web applications with a focus on performance, accessibility,
        and clean code. Passionate about open source and continuous learning.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
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
    </section>
  );
}
