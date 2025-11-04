import React from 'react';
import { Hotel, Utensils, Coffee, Briefcase, CheckCircle2, Truck, Headphones, BadgeCheck, DollarSign } from 'lucide-react';

const solutions = [
  { icon: Hotel, title: 'For Hotels', desc: 'Breakfast buffet solutions guests love.' },
  { icon: Utensils, title: 'For Restaurants', desc: 'Premium ingredients for signature menus.' },
  { icon: Coffee, title: 'For Cafes', desc: 'All-day breakfast and quick-serve options.' },
  { icon: Briefcase, title: 'For Catering', desc: 'Corporate and event catering excellence.' },
];

const features = [
  { icon: BadgeCheck, title: 'Premium Quality' },
  { icon: CheckCircle2, title: 'Halal Certified' },
  { icon: Truck, title: 'Consistent Supply' },
  { icon: Briefcase, title: 'Flexible Ordering' },
  { icon: Headphones, title: 'Expert Support' },
  { icon: DollarSign, title: 'Competitive Pricing' },
];

export default function SolutionsWhy({ onOpenQuote }) {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-center text-3xl font-semibold text-neutral-900">Trusted B2B Solutions for Your Business</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <s.icon className="text-[#D32F2F]" />
              <h4 className="mt-3 text-lg font-semibold text-neutral-900">{s.title}</h4>
              <p className="mt-1 text-neutral-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button onClick={onOpenQuote} className="rounded-lg bg-[#D32F2F] px-6 py-3 font-semibold text-white shadow-md transition hover:brightness-110">Become Our Partner</button>
        </div>
      </div>

      <div className="bg-neutral-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-3xl font-semibold text-white">Why 200+ HORECA Partners Choose Us</h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
                <f.icon className="text-[#FFA000]" />
                <h4 className="mt-3 text-lg font-semibold">{f.title}</h4>
                <p className="mt-1 text-white/80">We uphold German quality standards with strict halal compliance and reliable distribution.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
