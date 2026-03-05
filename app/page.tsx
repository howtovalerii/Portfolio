import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import SelectedProjects from '@/components/SelectedProjects';
import WhatIDo from '@/components/WhatIDo';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import ProfessionalDevelopment from '@/components/ProfessionalDevelopment';
import CareerHighlights from '@/components/CareerHighlights';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="page-border">
        <main>
          <Hero />
          <LogoStrip />
          <SelectedProjects />
          <WhatIDo />
          <About />
          <TechStack />
          <ProfessionalDevelopment />
          <CareerHighlights />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
