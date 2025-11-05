import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroVariantC() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle bottom gradient so bottom-left content pops */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Top bar */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 text-white">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 backdrop-blur" />
          <span className="font-semibold tracking-wide">Sosis Delikatessa</span>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#catalog" className="hover:text-white">Catalog</a>
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#certs" className="hover:text-white">Certifications</a>
          <a href="#contact" className="rounded-full bg-red-600 px-4 py-2 font-medium text-white shadow transition hover:bg-red-700">Contact</a>
        </div>
      </div>

      {/* Bottom-left headline block */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-end px-6 pb-16 sm:pb-24 md:pb-28 lg:pb-32 h-full">
        <div className="max-w-2xl text-white">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Halal • German Quality • Since 1989</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Engineered for Chefs.
            <br />Trusted by Operations.
          </h1>
          <p className="mt-3 text-white/85">
            Premium sausages and deli, batch-tracked and cold-chain delivered. Built for consistency at volume.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg transition hover:bg-amber-100">
              Get samples <ArrowRight className="h-5 w-5" />
            </a>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 ring-1 ring-white/15">
              Lead time: 3–5 working days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
