import CVDropdown from "./CVDropdown";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Ivana Lovric. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/gingercurlygirl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ilovric/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ivana.lovric1314@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Email
          </a>
          <CVDropdown variant="link" />
        </div>
      </div>
    </footer>
  );
}
