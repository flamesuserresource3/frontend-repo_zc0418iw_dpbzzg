import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Star } from 'lucide-react';

export default function HeroVariantB() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* angled vignette + side fade */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_120%_at_0%_0%,black,transparent_60%)] bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 sm:py-28 lg:grid-cols-2">
        <div className="max-w-xl text-white">
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider ring-1 ring-white/15">
            B2B Supply • Hotels • Airlines • HORECA
          </div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Scale your menu with consistent, halal-certified quality
          </h1>
          <p className="mt-4 text-white/80">
            From breakfast classics to gourmet bratwursts, our catalog covers every service window—delivered cold-chain and on schedule.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 font-semibold text-black shadow-lg shadow-amber-900/20 transition hover:bg-amber-300">
              Talk to sales <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#catalog" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 transition hover:bg-white/20">
              Browse catalog
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-amber-300" /> 100% Halal</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" /> 35+ years heritage</div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-semibold">Service-level at a glance</h3>
              <span className="text-xs text-white/60">Live metrics</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {[
                { k: 'OTIF', v: '98.4%' },
                { k: 'SKU', v: '42+' },
                { k: 'MOQ', v: '10 kg' },
              ].map((m) => (
                <div key={m.k} className="rounded-lg bg-black/30 p-4 text-center ring-1 ring-white/10">
                  <div className="text-2xl font-bold text-amber-300">{m.v}</div>
                  <div className="text-xs text-white/70">{m.k}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-gradient-to-r from-red-600/80 to-amber-500/80 p-4 text-sm">
              <p className="font-medium">Cold-chain integrity monitored end-to-end.</p>
              <p className="text-white/90">Digital temperature logs and batch traceability for every shipment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
