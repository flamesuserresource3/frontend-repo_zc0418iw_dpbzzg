import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star, Phone } from 'lucide-react';

const Badge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white ring-1 ring-white/15 backdrop-blur">
    <Icon className="h-4 w-4 text-amber-300" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function HeroVariantA() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast; doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.35),transparent_60%),linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.8))]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-28 text-center sm:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 backdrop-blur">
          <span className="text-xs uppercase tracking-widest text-amber-300">Since 1989</span>
          <span className="h-1 w-1 rounded-full bg-amber-300/70" />
          <span className="text-xs text-white/80">Halal-certified German Quality</span>
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          Sosis Delikatessa — Premium Halal Sausages for B2B
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Trusted by hotels, airlines, and caterers across the region. Consistent taste, rigorous quality control, and reliable supply at scale.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white shadow-lg shadow-red-900/30 transition hover:bg-red-700">
            Get wholesale quote <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#catalog" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 transition hover:bg-white/20">
            View product catalog
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Badge icon={Shield} label="100% Halal Certified" />
          <Badge icon={Star} label="German Quality Standards" />
          <Badge icon={Phone} label="Dedicated B2B Support" />
        </div>
      </div>
    </section>
  );
}
