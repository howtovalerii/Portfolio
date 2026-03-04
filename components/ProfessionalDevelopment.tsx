'use client';

import { useState } from 'react';

const CERTIFICATES = [
  {
    id: 1,
    title: 'Advance Your Skills as a User Experience Researcher',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-1.jpeg',
  },
  {
    id: 2,
    title: 'Figma for UX Research: Presentations that Stand Out',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-2.jpeg',
  },
  {
    id: 3,
    title: 'UX Research: Being Flexible',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-3.jpeg',
  },
  {
    id: 4,
    title: 'UX Research for Agile Teams',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-4.jpeg',
  },
  {
    id: 5,
    title: 'UX Deep Dive: Foundational Research',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-5.jpeg',
  },
  {
    id: 6,
    title: 'UX Research: Journey Mapping',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-6.jpeg',
  },
  {
    id: 7,
    title: 'Figma for UX Design',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-7.jpeg',
  },
  {
    id: 8,
    title: 'UX Foundations: Research',
    org: 'LinkedIn Learning Course',
    image: '/certificates/cert-8.jpeg',
  },
];

const INITIAL_COUNT = 4;
const LOAD_MORE_COUNT = 2;

export default function ProfessionalDevelopment() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const allLoaded = visibleCount >= CERTIFICATES.length;
  const visible = CERTIFICATES.slice(0, visibleCount);
  const rows: typeof CERTIFICATES[] = [];
  for (let i = 0; i < visible.length; i += 2) {
    rows.push(visible.slice(i, i + 2));
  }

  return (
    <section className="section-education" aria-labelledby="education-heading">
      <div className="education-inner">

        <div className="projects-header">
          <span className="section-label">Education</span>
          <h2 className="projects-title" id="education-heading">
            Professional development
          </h2>
        </div>

        <div className="education-grid">
          {rows.map((row, ri) => (
            <div key={ri} className="projects-row">
              {row.map((cert) => (
                <div key={cert.id} className="project-card education-card">
                  <div className="project-card-image education-card-image">
                    <img src={cert.image} alt={cert.title} />
                  </div>
                  <div className="project-card-text">
                    <span className="project-card-title education-card-title">
                      {cert.title}
                    </span>
                    <span className="project-card-type">{cert.org}</span>
                  </div>
                </div>
              ))}
              {row.length === 1 && (
                <div className="project-card education-card-placeholder" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {!allLoaded && (
          <div className="education-load-more-row">
            <button
              className="btn-load-more"
              onClick={() =>
                setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, CERTIFICATES.length))
              }
            >
              Load more
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
