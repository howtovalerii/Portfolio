'use client';

import { useState, useEffect, useCallback } from 'react';

type ToolItem = {
  id: string;
  name: string;
  logo: string;
  spacer?: false;
} | {
  id: string;
  spacer: true;
  name?: never;
  logo?: never;
};

const ROW_1: ToolItem[] = [
  { id: 'figma',     name: 'Figma',          logo: '/logos/Logo_01.svg' },
  { id: 'chatgpt',   name: 'ChatGPT',        logo: '/logos/Logo_02.svg' },
  { id: 'hotjar',    name: 'Hotjar',         logo: '/logos/Logo_03.svg' },
  { id: 'vercel',    name: 'Vercel',         logo: '/logos/Logo_04.svg' },
  { id: 'cc',        name: 'Creative Cloud', logo: '/logos/Logo_05.svg' },
  { id: 'analytics', name: 'Analytics',      logo: '/logos/Logo_06.svg' },
  { id: 'claude',    name: 'Claude',         logo: '/logos/Logo_07.svg' },
];

const ROW_2: ToolItem[] = [
  { id: 'spacer-l', spacer: true },
  { id: 'cursor',   name: 'Cursor',     logo: '/logos/Logo08.svg' },
  { id: 'banana',   name: 'NanoBanana', logo: '/logos/Logo09.svg' },
  { id: 'make',     name: 'Make',       logo: '/logos/Logo10.svg' },
  { id: 'gemini',   name: 'Gemini',     logo: '/logos/Logo11.svg' },
  { id: 'github',   name: 'GitHub',     logo: '/logos/Logo12.svg' },
  { id: 'spacer-r', spacer: true },
];

const ALL_ITEMS = [...ROW_1, ...ROW_2].filter(i => !i.spacer);

function ToolIcon({
  item,
  row,
  isHovered,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onTap,
}: {
  item: ToolItem;
  row: 'top' | 'bottom';
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTap: () => void;
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
      {/* Desktop: show on hover. Mobile: always show */}
      <span className={`tech-label tech-label--${row} tech-label--desktop${isHovered ? ' tech-label--visible' : ''}`}>
        {item.name}
      </span>
      <span className={`tech-label tech-label--${row} tech-label--mobile`}>
        {item.name}
      </span>

      <div className="tech-item-logo">
        <img src={item.logo} alt={item.name} className="tech-logo-img" />
      </div>
    </div>
  );
}

export default function TechStack() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Auto-reset active tap after 5s
  useEffect(() => {
    if (!activeId) return;
    const t = setTimeout(() => setActiveId(null), 5000);
    return () => clearTimeout(t);
  }, [activeId]);

  const handleTap = useCallback((id: string) => {
    setActiveId(prev => prev === id ? null : id);
  }, []);

  const renderRow = (items: ToolItem[], row: 'top' | 'bottom') =>
    items.map((item) => (
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
    ));

  return (
    <section className="section-tech" aria-labelledby="tech-heading">
      <div className="tech-inner">
        <div className="projects-header">
          <span className="section-label">Tech stack</span>
          <h2 className="projects-title" id="tech-heading">
            Built with the right tools
          </h2>
        </div>

        <div className="tech-content">
          <div className="tech-row">{renderRow(ROW_1, 'top')}</div>
          <div className="tech-row">{renderRow(ROW_2, 'bottom')}</div>
        </div>
      </div>
    </section>
  );
}
