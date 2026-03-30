"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Trainy",
    description:
      "Developed Trainy as a graduation project — a full-stack web application for tracking train punctuality on the Mälartåg network, integrating Trafikverket's open API with a Java/Spring Boot backend and an interactive React dashboard displaying real-time and historical delay statistics.",
    tags: ["Java", "SpringBoot", "React", "Recharts"],
    github: "https://github.com/gingercurlygirl/Trainy",
    internship: false,
    live: "",
    images: [
      "/projects/malartag1.png",
      "/projects/malartag2.png",
    ],
  },
  {
    title: "MYH AI Agent",
    description:
      "Built an end-to-end ML pipeline for the Swedish Agency for Higher Vocational Education (MYH) to analyze and rank vocational education applications, combining LLM-based PDF data extraction (GPT-4o) with machine learning model training, evaluation and cross-validation.",
    tags: ["Python", "JupyterLab", "AI", "Machine Learning"],
    github: "",
    internship: true,
    live: "",
    images: [
      "/projects/myh1.png",
      "/projects/myh2.png",
      "/projects/myh3.png",
    ],
  },
  {
    title: "Azomo",
    description:
      "Developed key features for Azomo, a pedagogical e-learning platform, including an alphabetically sorted course overview, a doubly linked list implementation for seamless automatic navigation between courses, and reusable React/TypeScript components integrated with a GraphQL and AWS backend.",
    tags: ["TypeScript", "GraphQL", "AWS"],
    github: "",
    internship: true,
    live: "",
    images: [
      "/projects/azomo1.png",
      "/projects/azomo2.png",
      "/projects/azomo3.png",
    ],
  },
  {
    title: "Library",
    description:
      "    Written in Java that contains database connection using JDBC and MySQL. Implemented as Command Line Interface for user or admin-based experience. ",
    tags: ["JDBC", "MySql", "Java", "SpringBoot"],
    github: "https://github.com/gingercurlygirl/Library-application",
    internship: false,
    live: "https://example.com",
    images: [
      "/projects/library1.png",
      "/projects/library2.png",
      "/projects/library3.png",
      "/projects/library4.png",
    ],
  },
  {
    title: "Chat Backend App",
    description:
      "    Implemented REST API backend with endpoints to support working chat-like application. The code contains unit, integration, and component tests. ",
    tags: ["Java", "Node.js", "SpringBoot", "RestAPI"],
    github: "https://github.com/gingercurlygirl/Chat-backend",
    internship: false,
    live: "https://example.com",
    images: [
      "/projects/chat2.png",
      "/projects/chat1.png",
      "/projects/chat3.png",
      "/projects/chat4.png",
      "/projects/chat5.png",
    ],
  },
  {
    title: "Interactive Room Designer",
    description:
      "    Designed and implemented a browser-based application for selecting catalogue furniture to create custom room layouts in real time. ",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "",
    internship: false,
    live: "",
    images: [
      "/projects/room_designer1.png",
      "/projects/room_designer2.png",
      "/projects/room_designer3.png",
    ],
  },
];

function Lightbox({ images, index, alt, onClose }: { images: string[]; index: number; alt: string; onClose: () => void }) {
  const [current, setCurrent] = useState(index);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 text-white/70 hover:text-white text-sm"
        >
          Zatvori ✕
        </button>
        <div className="relative w-full h-[80vh]">
          <Image src={images[current]} alt={`${alt} ${current + 1}`} fill className="object-contain" />
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((current - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white text-xl hover:bg-black/80"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white text-xl hover:bg-black/80"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      {lightbox && (
        <Lightbox
          images={project.images}
          index={current}
          alt={project.title}
          onClose={() => setLightbox(false)}
        />
      )}
      <div className="group rounded-xl border border-border bg-card transition-colors hover:border-muted flex flex-col">
        {project.images.length > 0 && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
            <Image
              src={project.images[current]}
              alt={`${project.title} screenshot ${current + 1}`}
              fill
              className="object-cover cursor-pointer"
              onClick={() => setLightbox(true)}
            />
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setCurrent((current - 1 + project.images.length) % project.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-white hover:bg-black/80"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % project.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-white hover:bg-black/80"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted flex-1">{project.description}</p>
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
          <div className="mt-4">
            {project.internship ? (
              <span className="text-sm text-muted">Internship work · ZoCom</span>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}