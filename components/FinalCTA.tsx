'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'What services do you offer?',
    a: 'I provide end-to-end product design — from research and product strategy to UX, UI, and scalable design systems. This includes new product development, redesigns, and ongoing product design support.',
  },
  {
    q: 'What industries do you work with?',
    a: 'I primarily work with fintech, Web3, and SaaS products. My approach is built for complex digital platforms where clarity, trust, and performance are essential.',
  },
  {
    q: 'How do you structure collaboration?',
    a: 'Every engagement starts with alignment on business goals, users, and product context. From there, I define the design direction, system foundations, and execution roadmap — working closely with product and engineering teams.',
  },
  {
    q: 'Do you work with startups or established companies?',
    a: 'Both. I collaborate with early-stage startups building from scratch and with growing companies scaling and optimizing existing products.',
  },
  {
    q: 'How do we collaborate?',
    a: 'Depending on your needs, we can work through focused design sprints or ongoing product partnerships. I integrate directly with your team to ensure clarity, speed, and measurable progress.',
  },
  {
    q: 'What makes your approach different?',
    a: "I don't design for aesthetics alone. I focus on building scalable product systems where strategy, usability, and performance work together — creating experiences users trust and businesses grow with.",
  },
];

export default function FinalCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-final-cta" aria-labelledby="cta-heading">
      <div className="final-cta-container">

        {/* Left: CTA content */}
        <div className="final-cta-left">
          <div className="hero-badge">
            <span className="status-dot" aria-hidden="true" />
            <span className="cta-badge-desktop">Product Designer · Available for Full-Time (Remote)</span>
            <span className="cta-badge-mobile">Available for Full-Time (Remote)</span>
          </div>

          <h2 className="projects-title final-cta-title" id="cta-heading">
            Looking for a strategic product design partner?
          </h2>

          <p className="final-cta-body">
            Available for new engagements in 2026. I help growing teams and companies design scalable digital products built on trust, clarity, and performance.
          </p>

          <div className="hero-buttons">
            <a
              href="https://cal.com/"
              className="btn-primary-hero"
            >
              <img src="/icons/google-meet.svg" alt="" aria-hidden="true" width={20} height={20} />
              <span>Book a call</span>
            </a>
            <a
              href="mailto:valera.grigor15@gmail.com?subject=Product%20Design%20Inquiry"
              className="btn-secondary-hero"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right: FAQ accordion */}
        <div className="final-faq" aria-label="Frequently asked questions">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}>
              <button
                className="faq-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-question">{faq.q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
