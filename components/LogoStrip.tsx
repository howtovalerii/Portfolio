const LOGOS = [
  { src: '/strip/Item01.svg', alt: 'Logo 1', w: 132, h: 36 },
  { src: '/strip/Item02.svg', alt: 'Logo 2', w: 36,  h: 36 },
  { src: '/strip/Item03.svg', alt: 'Logo 3', w: 176, h: 36 },
  { src: '/strip/Item04.svg', alt: 'Logo 4', w: 137, h: 36 },
  { src: '/strip/Item05.svg', alt: 'Logo 5', w: 134, h: 36 },
  { src: '/strip/Item06.svg', alt: 'Logo 6', w: 90,  h: 36 },
  { src: '/strip/Item07.svg', alt: 'Logo 7', w: 104, h: 36 },
];

export default function LogoStrip() {
  const repeated = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="logo-strip" aria-label="Featured in">
      <div className="logo-strip-mask">
        <div className="logo-strip-track">
          {repeated.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="logo-strip-item"
              width={logo.w}
              height={logo.h}
              aria-hidden={i >= LOGOS.length ? true : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
