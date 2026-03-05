export default function Footer() {
  const SOCIAL_LINKS = [
    { icon: '/icons/instagram.svg', label: 'Instagram', href: 'https://instagram.com' },
    { icon: '/icons/x.svg',         label: 'X (Twitter)', href: 'https://x.com' },
    { icon: '/icons/dribbble.svg',  label: 'Dribbble',  href: 'https://dribbble.com' },
    { icon: '/icons/linkedin.svg',  label: 'LinkedIn',  href: 'https://linkedin.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Design and dev by Valerii Hryhoriev
          </span>
          <nav className="footer-links" aria-label="Footer navigation">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={link.label}
              >
                <img src={link.icon} alt="" aria-hidden="true" width={20} height={20} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
