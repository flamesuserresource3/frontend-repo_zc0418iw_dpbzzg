import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, CheckCircle2, Award, PhoneCall, FileText } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, label: 'Halal MUI Certified' },
  { icon: CheckCircle2, label: 'BPOM Registered' },
  { icon: Award, label: 'ISO Standards' },
];

export default function Hero({ onOpenQuote }) {
  const handleCatalogClick = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-neutral-950">
      {/* Spline animated background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 text-white">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm tracking-wide text-white/90">Since 1989 • Premium German Quality</span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          Premium Halal Sausages for Hotels, Restaurants & Cafes
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          Trusted by 200+ HORECA partners. Heritage German craftsmanship, strictly Halal (MUI) and BPOM compliant.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 rounded-lg bg-[#D32F2F] px-6 py-3 text-base font-semibold text-white shadow-md shadow-red-900/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <PhoneCall size={18} /> Request B2B Quote
          </button>
          <button
            onClick={handleCatalogClick}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg:white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <FileText size={18} /> View Product Catalog
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          {trustBadges.map((b, i) => (
            <div key={i} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <b.icon size={18} className="text-[#FFA000]" />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust indicators strip */}
      <div className="relative border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            ['35+ Years Experience'],
            ['200+ HORECA Partners'],
            ['100% Halal Certified'],
            ['German Quality Standards'],
          ].map(([label], idx) => (
            <div key={idx} className="px-6 py-4 text-center text-white">
              <p className="text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
