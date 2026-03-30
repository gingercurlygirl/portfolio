"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Trainy",
    description:
      "Developed Trainy as a graduation project - a full-stack web application for tracking train punctuality on the Mälartåg network, integrating Trafikverket's open API with a Java/Spring Boot backend and an interactive React dashboard displaying real-time and historical delay statistics.",
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
    tags: ["Python", "JupyterLab", "OpenAI API", "Machine Learning"],
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
    tags: ["TypeScript", "React", "GraphQL", "AWS", "Vite", "DynamoDB", "AppSync"],
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
    live: "",
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
    tags: ["Java", "Node.js", "SpringBoot", "RestAPI", "Postman", "CI/CD", "Testing"],
    github: "https://github.com/gingercurlygirl/Chat-backend",
    internship: false,
    live: "",
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
      "Designed and implemented a browser-based application for selecting catalogue furniture to create custom room layouts in real time — bridging 3D visualization and programming by integrating furniture models created in 3ds Max into an interactive UI built with Vanilla JavaScript, responsive CSS and semantic HTML.",
    tags: ["JavaScript", "HTML", "CSS", "3ds Max", "V-Ray", "Visualisation"],
    github: "https://github.com/gingercurlygirl/Moja-stranica",
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
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="max-h-[65vh] max-w-[70vw] object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 hover:text-white hover:bg-black/90 transition-colors"
        >
          Close ✕
        </button>
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

function ProjectCard({
  project,
  isActive,
  onClick,
}: {
  project: typeof projects[0];
  isActive: boolean;
  onClick?: () => void;
}) {
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
      <div
        className={`rounded-xl border bg-card flex flex-col h-full cursor-pointer transition-colors duration-500 ${isActive ? "border-accent" : "border-border"}`}
        onClick={!isActive ? onClick : undefined}
      >
        {project.images.length > 0 && (
          <div className={`relative w-full overflow-hidden rounded-t-xl ${isActive ? "h-56" : "h-40"} transition-all duration-500`}>
            <Image
              src={project.images[current]}
              alt={`${project.title} screenshot ${current + 1}`}
              fill
              className="object-cover"
              onClick={isActive ? () => setLightbox(true) : undefined}
              style={{ cursor: isActive ? "pointer" : "default" }}
            />
            {isActive && project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrent((current - 1 + project.images.length) % project.images.length); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-white hover:bg-black/80"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrent((current + 1) % project.images.length); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-white hover:bg-black/80"
                >
                  ›
                </button>
              </>
            )}
          </div>
        )}
        <div className="p-5 flex flex-col flex-1">
          {isActive && (
            <div className="mb-2 text-center">
              {project.internship ? (
                <span className="text-xs text-muted/50">Internship work · ZoCom</span>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted/50 hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              ) : null}
            </div>
          )}
          <h3 className={`font-semibold text-foreground ${isActive ? "text-xl" : "text-base"} transition-all duration-500`}>
            {project.title}
          </h3>
          {isActive && (
            <>
              <p className="mt-2 text-sm text-muted flex-1">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-accent/30 bg-background px-3 py-1 text-xs text-muted hover:text-accent transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
          {!isActive && (
            <p className="mt-1 text-xs text-muted line-clamp-2">{project.description}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const n = projects.length;

  const prev = () => setActiveIndex((i) => (i - 1 + n) % n);
  const next = () => setActiveIndex((i) => (i + 1) % n);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    return offset;
  };

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 pt-24 pb-24">
      <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">Projects</h2>

      <div className="relative mt-8 flex items-center justify-center" style={{ height: "520px" }}>
        {projects.map((project, index) => {
          const offset = getOffset(index);
          if (Math.abs(offset) > 1) return null;

          const isActive = offset === 0;
          const translateX = offset * 68;
          const scale = isActive ? 1 : 0.78;
          const opacity = isActive ? 1 : 0.45;
          const blur = isActive ? 0 : 4;
          const zIndex = isActive ? 20 : 10;
          const width = isActive ? "52%" : "38%";

          return (
            <div
              key={project.title}
              style={{
                position: "absolute",
                width,
                height: "100%",
                transform: `translateX(${translateX}%) scale(${scale})`,
                filter: `blur(${blur}px)`,
                opacity,
                zIndex,
                transition: "all 0.5s ease",
              }}
              onClick={() => !isActive && setActiveIndex(index)}
            >
              <ProjectCard project={project} isActive={isActive} />
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="rounded-full border border-border px-4 py-2 text-muted hover:text-foreground hover:border-foreground transition-colors"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full border border-border px-4 py-2 text-muted hover:text-foreground hover:border-foreground transition-colors"
        >
          ›
        </button>
      </div>
    </section>
  );
}