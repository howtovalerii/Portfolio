'use client';

import Link from 'next/link';
import { useRef, useState, useCallback } from 'react';

const PROJECTS = [
  {
    title: 'Forma - AI Generation Model',
    type: 'Web design',
    image: '/projects/forma-1.jpg',
    href: '/projects/forma-1',
  },
  {
    title: 'Forma - AI Generation Model',
    type: 'Web design',
    image: '/projects/forma-2.png',
    href: '/projects/forma-2',
  },
  {
    title: 'Forma - AI Generation Model',
    type: 'Web design',
    image: '/projects/forma-3.png',
    href: '/projects/forma-3',
  },
  {
    title: 'Forma - AI Generation Model',
    type: 'Web design',
    image: '/projects/forma-4.png',
    href: '/projects/forma-4',
  },
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.4, y: y * 0.4 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <Link
      ref={cardRef}
      href={project.href}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
        <div className="project-card-overlay" aria-hidden="true">
          <span
            className="project-card-view-btn"
            style={{
              transform: hovered
                ? `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px)) scale(1)`
                : 'translate(-50%, -50%) scale(0.9)',
            }}
          >
            View
          </span>
        </div>
      </div>
      <div className="project-card-text">
        <span className="project-card-title">{project.title}</span>
        <span className="project-card-type">{project.type}</span>
      </div>
    </Link>
  );
}

export default function SelectedProjects() {
  const top = PROJECTS.slice(0, 2);
  const bottom = PROJECTS.slice(2, 4);

  return (
    <section className="section-projects" aria-labelledby="projects-heading">
      <div className="projects-inner">

        <div className="projects-header">
          <span className="section-label">Selected projects</span>
          <h2 className="projects-title" id="projects-heading">
            Products shaped by strategy.<br />Designed to perform.
          </h2>
        </div>

        <div className="projects-grid">
          <div className="projects-row">
            {top.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
          <div className="projects-row">
            {bottom.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
