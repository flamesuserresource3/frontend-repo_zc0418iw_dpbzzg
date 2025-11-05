import React from 'react';

export default function VariantSelector({ current, onChange }) {
  const variants = [
    { id: 'A', label: 'Variant A — Centered' },
    { id: 'B', label: 'Variant B — Split' },
    { id: 'C', label: 'Variant C — Minimal' },
  ];

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-black/50 p-1 ring-1 ring-white/15 backdrop-blur">
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => onChange(v.id)}
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              current === v.id ? 'bg-white text-black' : 'text-white/80 hover:text-white'
            }`}
            aria-pressed={current === v.id}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}
