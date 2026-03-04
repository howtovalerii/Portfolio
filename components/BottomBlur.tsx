'use client';

import { useEffect, useState } from 'react';

export default function BottomBlur() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`bottom-blur${visible ? ' visible' : ''}`}
      aria-hidden="true"
    />
  );
}
