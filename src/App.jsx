import React, { useMemo, useState } from 'react';
import HeroVariantA from './components/HeroVariantA.jsx';
import HeroVariantB from './components/HeroVariantB.jsx';
import HeroVariantC from './components/HeroVariantC.jsx';
import AboutCategories from './components/AboutCategories.jsx';
import SolutionsWhy from './components/SolutionsWhy.jsx';
import SocialProofCTA from './components/SocialProofCTA.jsx';

export default function App() {
  const [variant, setVariant] = useState('A');

  const Hero = useMemo(() => {
    switch (variant) {
      case 'B':
        return HeroVariantB;
      case 'C':
        return HeroVariantC;
      case 'A':
      default:
        return HeroVariantA;
    }
  }, [variant]);

  const onOpenQuote = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Our sales team will reach out shortly.');
    }
  };

  const VariantControls = (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-black/50 p-1 ring-1 ring-white/15 backdrop-blur">
        {[
          { id: 'A', label: 'Variant A — Centered' },
          { id: 'B', label: 'Variant B — Split' },
          { id: 'C', label: 'Variant C — Minimal' },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => setVariant(v.id)}
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              variant === v.id ? 'bg-white text-black' : 'text-white/80 hover:text-white'
            }`}
            aria-pressed={variant === v.id}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-['Inter','Manrope',system-ui,sans-serif]">
      {VariantControls}
      <Hero />

      {variant === 'A' && (
        <>
          <AboutCategories />
          <SolutionsWhy onOpenQuote={onOpenQuote} />
          <SocialProofCTA onOpenQuote={onOpenQuote} />
        </>
      )}

      {variant === 'B' && (
        <>
          <SolutionsWhy onOpenQuote={onOpenQuote} />
          <AboutCategories />
          <SocialProofCTA onOpenQuote={onOpenQuote} />
        </>
      )}

      {variant === 'C' && (
        <>
          <SocialProofCTA onOpenQuote={onOpenQuote} />
          <SolutionsWhy onOpenQuote={onOpenQuote} />
          <AboutCategories />
        </>
      )}

      {/* Invisible anchor for contact scroll */}
      <div id="contact" className="h-1" />
    </div>
  );
}
