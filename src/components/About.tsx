const techStack = [
  "Java",
  "Python",
  "C++",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "JDBC",
  "SpringBoot",
  "MySQL",
  "REST API",
  "GraphQL",
  "AWS",
  "Scrum",
  "Jira",
  "Trello",
  "GitHub",
  "Linear",
];

export default function About() {
  return (
    <section id="about" className="pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          About Me
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-12">
          <div className="space-y-4 text-muted md:col-span-2">
            <p>
              I&apos;m a software developer in training with a Master&apos;s degree in Wood Technology - an engineering background that shapes the way I think about problems and systems. I combine hands-on experience in full-stack development (Java, Spring Boot, TypeScript, React) with machine learning and AI in Python, currently building an end-to-end ML pipeline for a Swedish government agency.
            </p>
            <p>
              I thrive in agile teams, care about clean code, and bring an analytical mindset to everything I build. My engineering foundation means I don&apos;t just write code - I understand the context and purpose behind it.
            </p>
            <p>
              Currently completing my YH education in software development for mobility services at Folkuniversitetet, with graduation in 2026. Open to junior developer roles in software development.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            {["Analytical problem-solving", "Systems development", "Machine learning & AI", "Agile development", "Engineering mindset", "Technical & business understanding"].map((item) => (
              <span key={item} className="rounded-full border border-accent bg-card px-3 py-1 text-xs text-muted text-center">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 items-center">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground whitespace-nowrap">
                {tech}
              </span>
              <span className="text-accent text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
