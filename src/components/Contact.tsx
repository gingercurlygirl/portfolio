const socials = [
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=ivana.lovric1314@gmail.com" },
  { label: "GitHub", href: "https://github.com/gingercurlygirl" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ilovric/" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Get In Touch
      </h2>
      <p className="mt-4 max-w-xl text-muted">
        I&apos;m always open to new opportunities and interesting projects.
        Whether you have a question or just want to say hi, feel free to reach
        out!
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
