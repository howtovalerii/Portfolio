'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Are you available for full-time roles?',
    a: 'Yes — I'm actively looking for a full-time product design position at a US tech company. I'm open to both remote and hybrid roles, with a strong preference for product-led teams where design has real strategic weight.',
  },
  {
    q: 'What does your design process look like?',
    a: 'I start with structure, not screens. That means understanding business goals and user needs first, building a clear information architecture, then moving into components and visual execution. I treat consistency as foundational — not optional.',
  },
  {
    q: 'How do you approach design systems?',
    a: 'I build token-based, system-driven libraries — not component libraries that happen to be in Figma. Design tokens, spacing scales, typography systems, and reusable logic come first. The visual layer follows the architecture, not the other way around.',
  },
  {
    q: 'Can you work with a US-based team remotely?',
    a: 'Absolutely. I'm experienced with async-first collaboration across time zones. I work in Figma, Notion, Linear, and Loom, and I'm flexible with overlap hours for EST, PST, or CST teams.',
  },
  {
    q: 'How do you see design's role in a product team?',
    a: 'Design should be a strategic function, not a service layer. That means participating in product decisions early, questioning requirements when needed, and being accountable to outcomes — not just deliverables.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-section">
      <h3 className="title-big faq-title" id="faq-heading">Frequently asked</h3>
      <div className="faq-list" role="list" aria-labelledby="faq-heading">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`faq-item${isOpen ? ' open' : ''}`}
              role="listitem"
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{item.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className="faq-answer"
                role="region"
              >
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
