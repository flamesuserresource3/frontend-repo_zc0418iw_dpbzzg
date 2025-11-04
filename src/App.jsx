import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import AboutCategories from './components/AboutCategories.jsx';
import SolutionsWhy from './components/SolutionsWhy.jsx';
import SocialProofCTA from './components/SocialProofCTA.jsx';
import { MessageCircle } from 'lucide-react';

function LeadFormModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  if (!open) return null;
  const mailto = `mailto:sales@sosisdelikatessa.com?subject=B2B%20Quote%20Request%20-%20${encodeURIComponent(form.company || 'Company')}&body=${encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">Request B2B Quote</h3>
          <button onClick={onClose} className="rounded-md p-2 text-neutral-500 hover:bg-neutral-100">✕</button>
        </div>
        <p className="mt-1 text-sm text-neutral-600">Tell us about your business and product needs. Our team will contact you within 1 business day.</p>
        <div className="mt-4 grid gap-3">
          <input name="name" value={form.name} onChange={onChange} placeholder="Full Name" className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
          <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input name="email" value={form.email} onChange={onChange} placeholder="Work Email" className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone / WhatsApp" className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your menu, volume, delivery location, and preferred products" rows={4} className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a href={mailto} className="rounded-lg bg-[#D32F2F] px-5 py-3 text-sm font-semibold text-white hover:brightness-110">Send Request</a>
          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Sosis Delikatessa, saya ingin penawaran B2B. Nama: ${form.name} | Perusahaan: ${form.company} | Produk: ${form.message}`)}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
          >
            Contact via WhatsApp
          </a>
          <button onClick={onClose} className="ml-auto text-sm text-neutral-600 hover:underline">Close</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const openQuote = () => setOpen(true);
  const closeQuote = () => setOpen(false);

  return (
    <div className="min-h-screen bg-white font-['Inter','Montserrat',system-ui,sans-serif] text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D32F2F] text-white">SD</div>
            <div>
              <p className="font-semibold">Sosis Delikatessa</p>
              <p className="text-xs text-neutral-500">Premium Halal Sausages</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a href="#catalog" className="hover:text-[#D32F2F]">Products</a>
            <a href="#solutions" className="hover:text-[#D32F2F]">B2B</a>
            <a href="#testimonials" className="hover:text-[#D32F2F]">Testimonials</a>
            <button onClick={openQuote} className="rounded-lg bg-[#D32F2F] px-4 py-2 font-semibold text-white">Request Quote</button>
          </nav>
        </div>
      </header>

      <main>
        <Hero onOpenQuote={openQuote} />
        <AboutCategories />
        <div id="solutions">
          <SolutionsWhy onOpenQuote={openQuote} />
        </div>
        <div id="testimonials">
          <SocialProofCTA onOpenQuote={openQuote} />
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D32F2F] text-white">SD</div>
              <p className="font-semibold">Sosis Delikatessa</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600">Premium halal sausages crafted with German standards since 1989. Serving hotels, restaurants, cafes and catering across Indonesia.</p>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#catalog" className="hover:text-[#D32F2F]">Products</a></li>
              <li><a href="#" className="hover:text-[#D32F2F]">About</a></li>
              <li><a href="#testimonials" className="hover:text-[#D32F2F]">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">B2B Services</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Hotels</li>
              <li>Restaurants</li>
              <li>Cafes</li>
              <li>Catering</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Email: sales@sosisdelikatessa.com</li>
              <li>Phone: +62 812-3456-7890</li>
              <li>Address: Jakarta, Indonesia</li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="hover:text-[#D32F2F]">Instagram</a>
                <a href="#" className="hover:text-[#D32F2F]">LinkedIn</a>
                <a href="#" className="hover:text-[#D32F2F]">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-4 text-center text-xs text-neutral-600">© {new Date().getFullYear()} Sosis Delikatessa. All rights reserved.</div>
      </footer>

      <a
        href="https://wa.me/6281234567890?text=Halo%20Sosis%20Delikatessa%2C%20saya%20ingin%20berkonsultasi%20B2B."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition hover:brightness-110"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>

      <LeadFormModal open={open} onClose={closeQuote} />
    </div>
  );
}
