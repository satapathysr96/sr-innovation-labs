import React, { useState } from 'react';

interface Template {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  themeColor: string;
}

const templates: Template[] = [
  {
    id: 'coaching',
    name: 'EduPeak Academy',
    category: 'Coaching & Education',
    description: 'Course catalog, student enquiry forms, success stories slider, and direct WhatsApp admissions trigger.',
    price: '₹9,999',
    themeColor: '#3b82f6',
  },
  {
    id: 'healthcare',
    name: 'AuraCare Clinic',
    category: 'Healthcare & Doctors',
    description: 'Doctor profiles, direct appointment booking widget, patient reviews, and emergency map launcher.',
    price: '₹12,999',
    themeColor: '#10b981',
  },
  {
    id: 'retail',
    name: 'UrbanByte Retail',
    category: 'Retail & Showrooms',
    description: 'Digital catalog, WhatsApp order placement, special offer banners, and store locator.',
    price: '₹11,499',
    themeColor: '#f59e0b',
  },
];

export default function TemplateCatalog() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar Selector */}
      <div class="lg:col-span-4 space-y-4">
        <h3 class="text-lg font-bold text-white mb-4">Select Template Industry</h3>
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => setSelectedTemplate(tpl)}
            class={`w-full text-left p-5 rounded-xl border transition-all ${
              selectedTemplate.id === tpl.id
                ? 'bg-dark-card border-brand-500 shadow-lg shadow-brand-500/10'
                : 'bg-dark-card/40 border-dark-border hover:border-gray-700'
            }`}
          >
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-brand-500">
                {tpl.category}
              </span>
              <span class="text-sm font-bold text-white">{tpl.price}</span>
            </div>
            <h4 class="text-lg font-bold text-white mb-1">{tpl.name}</h4>
            <p class="text-xs text-gray-400">{tpl.description}</p>
          </button>
        ))}

        {/* Action Button */}
        <div class="pt-4">
          <a
            href={`/contact?template=${selectedTemplate.id}`}
            class="block w-full py-3 px-4 rounded-xl bg-brand-500 text-black text-center font-bold hover:bg-brand-600 transition-colors"
          >
            Order This Template ({selectedTemplate.price})
          </a>
        </div>
      </div>

      {/* Live Preview Canvas */}
      <div class="lg:col-span-8 bg-dark-card border border-dark-border rounded-2xl p-4 sm:p-6">
        {/* Device Mode Switcher */}
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-dark-border">
          <span class="text-sm text-gray-400 font-mono">
            Previewing: <strong class="text-white">{selectedTemplate.name}</strong>
          </span>
          <div class="flex items-center gap-2 bg-dark-bg p-1 rounded-lg border border-dark-border">
            <button
              onClick={() => setViewMode('desktop')}
              class={`px-3 py-1 rounded text-xs font-semibold ${
                viewMode === 'desktop' ? 'bg-brand-500 text-black' : 'text-gray-400'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              class={`px-3 py-1 rounded text-xs font-semibold ${
                viewMode === 'mobile' ? 'bg-brand-500 text-black' : 'text-gray-400'
              }`}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Mock Screen Content */}
        <div class="flex justify-center bg-black/40 p-4 rounded-xl min-h-[420px] items-center">
          <div
            class={`transition-all duration-300 border border-dark-border rounded-xl bg-dark-bg p-6 w-full ${
              viewMode === 'mobile' ? 'max-w-[340px]' : 'max-w-full'
            }`}
          >
            {/* Header Mock */}
            <div class="flex justify-between items-center mb-8 border-b border-dark-border pb-4">
              <div class="font-bold text-white text-sm" style={{ color: selectedTemplate.themeColor }}>
                {selectedTemplate.name}
              </div>
              <div class="w-16 h-6 rounded bg-gray-800 animate-pulse"></div>
            </div>

            {/* Banner Mock */}
            <div class="rounded-xl p-6 mb-6 text-center" style={{ backgroundColor: `${selectedTemplate.themeColor}15` }}>
              <div class="text-lg font-bold text-white mb-2">
                Welcome to {selectedTemplate.name}
              </div>
              <p class="text-xs text-gray-400 mb-4">
                Premier solutions for {selectedTemplate.category} in Bhubaneswar.
              </p>
              <button
                class="px-4 py-2 rounded text-xs font-bold text-white"
                style={{ backgroundColor: selectedTemplate.themeColor }}
              >
                Enquire Now
              </button>
            </div>

            {/* Grid Mock */}
            <div class="grid grid-cols-2 gap-3">
              <div class="p-3 bg-dark-card rounded border border-dark-border">
                <div class="w-6 h-6 rounded mb-2" style={{ backgroundColor: selectedTemplate.themeColor }}></div>
                <div class="h-3 bg-gray-800 rounded w-3/4 mb-1"></div>
                <div class="h-2 bg-gray-900 rounded w-1/2"></div>
              </div>
              <div class="p-3 bg-dark-card rounded border border-dark-border">
                <div class="w-6 h-6 rounded mb-2" style={{ backgroundColor: selectedTemplate.themeColor }}></div>
                <div class="h-3 bg-gray-800 rounded w-3/4 mb-1"></div>
                <div class="h-2 bg-gray-900 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
