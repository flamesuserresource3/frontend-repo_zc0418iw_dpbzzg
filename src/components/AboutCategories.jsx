import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Sosis Premium',
    desc: 'Our flagship line with rich seasoning and tender bite.',
    img: 'https://images.unsplash.com/photo-1526312426976-593c2b9998d4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sosis Jerman',
    desc: 'Authentic German-style sausages crafted to perfection.',
    img: 'https://images.unsplash.com/photo-1604908812239-92094e916f59?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Sosis Breakfast',
    desc: 'Perfect for buffets and all-day breakfast menus.',
    img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sosis Halal',
    desc: '100% Halal ingredients, MUI certified and BPOM compliant.',
    img: 'https://images.unsplash.com/photo-1543333936-6c3f7a3a763e?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function AboutCategories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=2069&auto=format&fit=crop"
              alt="Production facility"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Heritage German Quality Since 1989</h2>
            <p className="mt-4 text-neutral-600">
              Sosis Delikatessa delivers premium halal sausages with German craftsmanship. For over three decades, we have served hotels, restaurants, cafes, and catering businesses with consistent quality, reliable supply, and dedicated support.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-3 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50">
              Learn Our Story <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div id="catalog" className="mt-16">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-semibold text-neutral-900">Product Categories</h3>
            <p className="text-sm text-neutral-500">Four pillars curated for HORECA excellence</p>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-neutral-900">{c.title}</h4>
                  <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-[#D32F2F] transition hover:gap-3">
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
