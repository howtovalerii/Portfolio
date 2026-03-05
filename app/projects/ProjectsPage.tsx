'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const ALL_PROJECTS = [
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-1.png', href: '/projects/forma-1' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-2.png', href: '/projects/forma-2' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-3.png', href: '/projects/forma-3' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-4.png', href: '/projects/forma-4' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-1.png', href: '/projects/forma-5' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-2.png', href: '/projects/forma-6' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-3.png', href: '/projects/forma-7' },
  { title: 'Forma - AI Generation Model', type: 'Web design', image: '/projects/forma-4.png', href: '/projects/forma-8' },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 2;

function ProjectCard({ project }: { project: typeof ALL_PROJECTS[0] }) {
  return (
    <Link href={project.href} className="project-card">
      <div className="project-card-image">
        <img src={project.image} alt={project.title} />
        <div className="project-card-overlay" aria-hidden="true">
          <span className="project-card-view-btn">View</span>
        </div>
      </div>
      <div className="project-card-text">
        <span className="project-card-title">{project.title}</span>
        <span className="project-card-type">{project.type}</span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const visible = ALL_PROJECTS.slice(0, count);
  const hasMore = count < ALL_PROJECTS.length;

  // Pair up into rows of 2
  const rows: typeof ALL_PROJECTS[] = [];
  for (let i = 0; i < visible.length; i += 2) {
    rows.push(visible.slice(i, i + 2));
  }

  return (
    <>
      <Header />
      <div className="page-border">
        <main>
          <section className="section-projects" aria-labelledby="all-projects-heading">
            <div className="projects-inner">

              <div className="projects-header">
                <span className="section-label">All projects</span>
                <h1 className="projects-title" id="all-projects-heading">
                  What I've Built So Far
                </h1>
              </div>

              <div className="projects-grid">
                {rows.map((row, i) => (
                  <div className="projects-row" key={i}>
                    {row.map((project, j) => (
                      <ProjectCard key={j} project={project} />
                    ))}
                  </div>
                ))}
              </div>

              {hasMore && (
                <div className="education-load-more-row">
                  <button
                    className="btn-load-more"
                    onClick={() => setCount(c => c + LOAD_MORE_COUNT)}
                  >
                    Load more
                  </button>
                </div>
              )}

            </div>
          </section>

          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
