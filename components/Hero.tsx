export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="hero-badge">
          <span className="status-dot" aria-hidden="true" />
          <span>Product Designer · Available for Full-Time (Remote)</span>
        </div>

        <div className="hero-headline">
          <div className="hero-title-wrap">
            <h1 className="hero-title">
              Design that performs,<br />not decorates
            </h1>
          </div>

          <div className="hero-subtitle-wrap">
            <p className="hero-subtitle">
              I design products people trust and companies scale with,
              combining strategy, usability, and strong visual systems.
            </p>
          </div>

          <div className="hero-buttons">
            <a
              href="mailto:valera.grigor15@gmail.com?subject=Product%20Design%20Inquiry"
              className="btn-primary-hero"
            >
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

      </div>
    </section>
  );
}
