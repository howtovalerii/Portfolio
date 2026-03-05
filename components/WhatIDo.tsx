const ROW_1 = [
  { icon: '/icons/Icon01.svg', label: 'Web design' },
  { icon: '/icons/Icon02.svg', label: 'Product design' },
  { icon: '/icons/Icon03.svg', label: 'UI/UX design' },
  { icon: '/icons/Icon04.svg', label: 'Design systems' },
  { icon: '/icons/Icon05.svg', label: 'Mobile apps' },
];

const ROW_2 = [
  { icon: '/icons/Icon06.svg', label: 'Crypto' },
  { icon: '/icons/Icon07.svg', label: 'FinTech' },
  { icon: '/icons/Icon08.svg', label: 'Blockchain' },
  { icon: '/icons/Icon09.svg', label: 'Web3' },
  { icon: '/icons/Icon10.svg', label: 'DEX' },
  { icon: '/icons/Icon11.svg', label: 'DeFi' },
  { icon: '/icons/Icon12.svg', label: 'Booking & Traveling' },
  { icon: '/icons/Icon13.svg', label: 'E-commerce' },
];

function TagItem({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="what-tag">
      <img src={icon} alt="" aria-hidden="true" width={20} height={20} />
      <span>{label}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof ROW_1;
  direction: 'left' | 'right';
}) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="what-marquee-mask">
      <div className={`what-marquee-track${direction === 'right' ? ' marquee-reverse' : ''}`}>
        {repeated.map((item, i) => (
          <TagItem key={i} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}

export default function WhatIDo() {
  return (
    <section className="section-what" aria-labelledby="what-heading">
      <div className="what-inner">
        <div className="projects-header">
          <span className="section-label">What I do</span>
          <h2 className="projects-title" id="what-heading">
            End-to-end product design<br />for digital products
          </h2>
        </div>

        <div className="what-rows">
          <MarqueeRow items={ROW_1} direction="left" />
          <MarqueeRow items={ROW_2} direction="right" />
        </div>
      </div>
    </section>
  );
}
