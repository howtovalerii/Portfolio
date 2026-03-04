export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Valera Grigor
          </span>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="mailto:valera.grigor15@gmail.com?subject=Product%20Design%20Inquiry">Email</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
