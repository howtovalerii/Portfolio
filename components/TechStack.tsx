'use client';

import { useState, useEffect, useCallback } from 'react';

type ToolItem = {
  id: string;
  name: string;
  logo: string;
  logoW: number;
  logoH: number;
  spacer?: false;
} | {
  id: string;
  spacer: true;
  name?: never;
  logo?: never;
  logoW?: never;
  logoH?: never;
};

const ROW_1: ToolItem[] = [
  { id: 'figma',     name: 'Figma',          logo: '/logos/Logo_01.svg', logoW: 25, logoH: 36 },
  { id: 'chatgpt',   name: 'ChatGPT',        logo: '/logos/Logo_02.svg', logoW: 40, logoH: 40 },
  { id: 'hotjar',    name: 'Hotjar',         logo: '/logos/Logo_03.svg', logoW: 32, logoH: 36 },
  { id: 'vercel',    name: 'Vercel',         logo: '/logos/Logo_04.svg', logoW: 32, logoH: 28 },
  { id: 'cc',        name: 'Creative Cloud', logo: '/logos/Logo_05.svg', logoW: 40, logoH: 40 },
  { id: 'analytics', name: 'Analytics',      logo: '/logos/Logo_06.svg', logoW: 31, logoH: 36 },
  { id: 'claude',    name: 'Claude',         logo: '/logos/Logo_07.svg', logoW: 40, logoH: 40 },
];

const ROW_2: ToolItem[] = [
  { id: 'spacer-l', spacer: true },
  { id: 'cursor',   name: 'Cursor',     logo: '/logos/Logo08.svg', logoW: 33, logoH: 38 },
  { id: 'banana',   name: 'NanoBanana', logo: '/logos/Logo09.svg', logoW: 40, logoH: 40 },
  { id: 'make',     name: 'Make',       logo: '/logos/Logo10.svg', logoW: 40, logoH: 40 },
  { id: 'gemini',   name: 'Gemini',     logo: '/logos/Logo11.svg', logoW: 40, logoH: 40 },
  { id: 'github',   name: 'GitHub',     logo: '/logos/Logo12.svg', logoW: 40, logoH: 39 },
  { id: 'spacer-r', spacer: true },
];

// Mobile: flat list of 12 items, 4 per row
const MOBILE_ITEMS: ToolItem[] = [
  ...ROW_1,
  ...ROW_2.filter(i => !i.spacer),
];

function ToolIcon({
  item,
  row,
  isHovered,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onTap,
  isMobile,
}: {
  item: ToolItem;
  row: 'top' | 'bottom';
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTap: () => void;
  isMobile?: boolean;
}) {
  if (item.spacer) return <div className="tech-item tech-spacer" aria-hidden="true" />;

  const highlighted = isHovered || isActive;

  return (
    <div
      className={`tech-item${highlighted ? ' tech-item--active' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onTap}
      role="img"
      aria-label={item.name}
    >
      {/* Desktop label: show only on hover */}
      <span className={`tech-label tech-label--${row} tech-label--desktop${isHovered ? ' tech-label--visible' : ''}`}>
        {item.name}
      </span>
      {/* Mobile label: show only when active/tapped */}
      {isActive && (
        <span className={`tech-label tech-label--bottom tech-label--mobile`}>
          {item.name}
        </span>
      )}

      <div className="tech-item-logo">
        <img
          src={item.logo}
          alt={item.name}
          className="tech-logo-img"
          style={{ width: item.logoW, height: item.logoH }}
        />
      </div>
    </div>
  );
}

export default function TechStack() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!activeId) return;
    const t = setTimeout(() => setActiveId(null), 5000);
    return () => clearTimeout(t);
  }, [activeId]);

  const handleTap = useCallback((id: string) => {
    setActiveId(prev => prev === id ? null : id);
  }, []);

  const renderItem = (item: ToolItem, row: 'top' | 'bottom') => (
    <ToolIcon
      key={item.id}
      item={item}
      row={row}
      isHovered={hoveredId === item.id}
      isActive={activeId === item.id}
      onMouseEnter={() => !item.spacer && setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
      onTap={() => !item.spacer && handleTap(item.id)}
    />
  );

  return (
    <section className="section-tech" aria-labelledby="tech-heading">
      <div className="tech-inner">
        <div className="projects-header">
          <span className="section-label">Tech stack</span>
          <h2 className="projects-title" id="tech-heading">
            Built with the right tools
          </h2>
        </div>

        {/* Desktop layout: 2 rows with spacers */}
        <div className="tech-content tech-content--desktop">
          <div className="tech-row">{ROW_1.map(i => renderItem(i, 'top'))}</div>
          <div className="tech-row">{ROW_2.map(i => renderItem(i, 'bottom'))}</div>
        </div>

        {/* Mobile layout: 4-column grid, no spacers */}
        <div className="tech-content tech-content--mobile">
          <div className="tech-grid-mobile">
            {MOBILE_ITEMS.map(i => renderItem(i, 'bottom'))}
          </div>
        </div>
      </div>
    </section>
  );
}
