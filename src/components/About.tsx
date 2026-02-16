const techStack = [
  "Java",
  "Python",
  "C++",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        About Me
      </h2>
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-muted">
          <p>
            I&apos;m a full-stack developer with a passion for creating elegant,
            performant web applications. I enjoy working across the entire stack,
            from crafting pixel-perfect UIs to designing robust APIs.
          </p>
          <p>
            When I&apos;m not coding, you can find me contributing to open-source
            projects, writing technical articles, or exploring new technologies.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
