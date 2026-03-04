'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="header" role="banner">
        <div className="header-left">
          <img src="/avatar.jpg" alt="Valerii Hryhoriev" className="header-avatar" />
          <div className="header-info">
            <span className="header-name">Valerii Hryhoriev</span>
            <span className="header-status">
              <span className="status-dot" aria-hidden="true" />
              Open for work
            </span>
          </div>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
        </nav>

        <a
          href="mailto:valera.grigor15@gmail.com?subject=Product%20Design%20Inquiry"
          className="header-contact btn-contact"
        >
          Contact me
        </a>

        {/* Burger — mobile only */}
        <button
          className="header-burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* Mobile burger menu */}
      {menuOpen && (
        <div className="burger-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="burger-menu-header">
            <div className="header-left">
              <img src="/avatar.jpg" alt="Valerii Hryhoriev" className="header-avatar" />
              <div className="header-info">
                <span className="header-name">Valerii Hryhoriev</span>
                <span className="header-status">
                  <span className="status-dot" aria-hidden="true" />
                  Open for work
                </span>
              </div>
            </div>
            <button
              className="burger-menu-close"
              aria-label="Close menu"
              onClick={close}
            >
              ×
            </button>
          </div>

          <nav className="burger-menu-links" aria-label="Mobile navigation">
            <Link href="/"        onClick={close}>Home</Link>
            <Link href="/projects" onClick={close}>Projects</Link>
            <Link href="/resume"  onClick={close}>Resume</Link>
          </nav>

          <div className="burger-menu-footer">
            <a
              href="mailto:valera.grigor15@gmail.com?subject=Product%20Design%20Inquiry"
              className="btn-secondary-hero"
              onClick={close}
            >
              Contact me
            </a>
          </div>
        </div>
      )}
    </>
  );
}
