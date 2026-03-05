'use client';

import { useState } from 'react';

const COMPANIES = [
  { id: 'evoplay',        name: 'Evoplay',        role: 'UX/UI Designer',   logo: '/companies/evoplay.jpg' },
  { id: 'wormhole',       name: 'Wormhole',       role: 'UX Designer',      logo: '/companies/wormhole.jpg' },
  { id: 'u1core',         name: 'U1CORE',         role: 'Product Designer', logo: '/companies/u1core.jpg' },
  { id: 'oneclickcrypto', name: 'OneClickCrypto', role: 'Product Designer', logo: '/companies/oneclickcrypto.jpg' },
  { id: 'solar',          name: 'Solar Ent.',     role: 'Product Designer', logo: '/companies/solar.jpg' },
  { id: 'theweather',     name: 'TheWeather',     role: 'UX/UI Designer',   logo: '/companies/theweather.jpg' },
];

export default function CareerHighlights() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="section-career" aria-labelledby="career-heading">
      <div className="career-inner">

        <div className="projects-header">
          <span className="section-label">My background</span>
          <h2 className="projects-title" id="career-heading">Career highlights</h2>
        </div>

        <div className="career-companies">
          <div className="career-line" aria-hidden="true" />

          {COMPANIES.map((company) => (
            <div
              key={company.id}
              className="career-item"
              onMouseEnter={() => setHoveredId(company.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Desktop: show on hover only */}
              {hoveredId === company.id && (
                <span className="career-label career-label--desktop" role="tooltip">
                  {company.role}
                </span>
              )}
              {/* Mobile: always visible, absolutely positioned */}
              <span className="career-label career-label--mobile" aria-hidden="true">
                {company.role}
              </span>

              <div className="career-logo">
                <img src={company.logo} alt={company.name} />
              </div>
              <span className="career-name">{company.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
