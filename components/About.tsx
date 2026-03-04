const SOCIAL_LINKS = [
  { icon: '/icons/instagram.svg', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '/icons/x.svg', label: 'X (Twitter)', href: 'https://x.com' },
  { icon: '/icons/dribbble.svg', label: 'Dribbble', href: 'https://dribbble.com' },
  { icon: '/icons/linkedin.svg', label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function About() {
  return (
    <section className="section-about" aria-labelledby="about-heading">
      <div className="about-container">

        <div className="about-text">
          <div className="about-content-top">
            <span className="section-label">About</span>
            <h2 className="projects-title" id="about-heading" style={{ textAlign: 'left' }}>
              Hi, I am<br />Valerii Hryhoriev
            </h2>
          </div>

          <div className="about-social-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label={link.label}
              >
                <img src={link.icon} alt="" aria-hidden="true" width={20} height={20} />
              </a>
            ))}
          </div>

          <div className="about-subtitle">
            <p>
              With 5 years in product design, I create digital products where
              strategy, systems, and usability work together to drive measurable
              impact for companies across Europe and the US.
            </p>
          </div>

          <a
            href="mailto:valera.grigor15@gmail.com?subject=Product%20Design%20Inquiry"
            className="btn-primary-hero about-btn"
          >
            <span>Work with me</span>
          </a>
        </div>

        <div className="about-image">
          <img src="/about.jpg" alt="Valerii Hryhoriev" />
        </div>

      </div>
    </section>
  );
}
