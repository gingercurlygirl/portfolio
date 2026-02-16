const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and payment integration. Built with Next.js and Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Developer Blog",
    description:
      "A markdown-powered blog with syntax highlighting, dark mode, and RSS feed support.",
    tags: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-muted"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
