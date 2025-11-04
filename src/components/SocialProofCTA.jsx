import React, { useMemo, useState } from 'react';
import { Star, Quote, Phone, MessageSquareText, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Chef Andi Pratama',
    role: 'Executive Chef',
    company: 'Grand Meridian Hotel',
    photo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1887&auto=format&fit=crop',
    quote: 'Sosis Delikatessa delivers consistent quality our guests rave about. Perfect for our breakfast buffet and room service menu.',
    rating: 5,
  },
  {
    name: 'Rina Suryani',
    role: 'Owner',
    company: 'Kopii & Co. Cafe',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop',
    quote: 'Reliable supply and superb taste. Their halal certification gives our customers confidence.',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Operations Manager',
    company: 'PrimeCater Events',
    photo: 'https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1974&auto=format&fit=crop',
    quote: 'Great partner for large events. Flexible ordering and professional support every step of the way.',
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#FFA000]">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} fill="#FFA000" />
      ))}
    </div>
  );
}

function Certifications() {
  const items = useMemo(() => [
    { icon: ShieldCheck, title: 'Halal MUI Certified' },
    { icon: CheckCircle2, title: 'BPOM Registered' },
    { icon: Award, title: 'ISO Standards' },
  ], []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <it.icon className="text-[#D32F2F]" />
            <div>
              <p className="font-semibold text-neutral-900">{it.title}</p>
              <p className="text-sm text-neutral-600">Verified for safety, quality, and compliance.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SocialProofCTA({ onOpenQuote }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-center text-3xl font-semibold text-neutral-900">What Our Partners Say</h3>
        <div className="mt-8 grid items-center gap-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow">
              <div className="flex items-start gap-4">
                <img src={t.photo} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <p className="text-lg font-medium text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.role} • {t.company}</p>
                  <div className="mt-1"><Stars count={t.rating} /></div>
                </div>
                <Quote className="ml-auto text-neutral-300" />
              </div>
              <p className="mt-4 text-neutral-700">“{t.quote}”</p>
              <div className="mt-6 flex justify-between">
                <button onClick={prev} className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Previous</button>
                <button onClick={next} className="rounded-lg bg-[#D32F2F] px-4 py-2 text-sm font-semibold text-white hover:brightness-110">Next</button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2069&auto=format&fit=crop"
                alt="Premium sausages plated"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Certifications />

      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514511547114-2a4d5b7fd993?q=80&w=2070&auto=format&fit=crop"
            alt="Delicious breakfast"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-white">
          <h3 className="text-3xl font-semibold">Ready to Partner with Us?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">Speak with our B2B team to explore pricing, samples, and tailored solutions for your venue.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button onClick={onOpenQuote} className="rounded-lg bg-[#D32F2F] px-6 py-3 font-semibold text-white shadow-md hover:brightness-110">
              Request Quote
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Sosis%20Delikatessa%2C%20saya%20ingin%20mendapatkan%20penawaran%20B2B."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/20"
            >
              <MessageSquareText size={18} /> Schedule Consultation
            </a>
          </div>
          <p className="mt-3 text-sm text-white/80">Phone: +62 812-3456-7890</p>
        </div>
      </div>
    </section>
  );
}
