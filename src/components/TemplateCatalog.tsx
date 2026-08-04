import React, { useState } from 'react';

interface Template {
  id: string;
  name: string;
  sector: string;
  description: string;
  themeColor: string;
  features: string[];
}

const templates: Template[] = [
  {
    id: 'education',
    name: 'EduPeak Academy',
    sector: '1. Education',
    description: 'Designed for coaching institutes, tuition centers, and academies. Includes course showcases, batch schedules, and student lead generation.',
    themeColor: '#3b82f6',
    features: ['Course Catalog', 'Batch Timetable', 'WhatsApp Admission Trigger', 'Toppers Testimonials'],
  },
  {
    id: 'healthcare',
    name: 'AuraCare Clinic',
    sector: '2. Healthcare',
    description: 'Built for doctors, dental clinics, and diagnostic labs. Features doctor bios, service lists, and an online appointment request widget.',
    themeColor: '#10b981',
    features: ['Doctor Schedules', 'Appointment Booking', 'Emergency Call Button', 'Google Maps Directions'],
  },
  {
    id: 'retail',
    name: 'UrbanByte Retail',
    sector: '3. Retail & Showrooms',
    description: 'Perfect for local boutiques, electronic shops, and stores. Display product catalogs without complex e-commerce maintenance.',
    themeColor: '#f59e0b',
    features: ['Digital Product Catalog', 'Direct WhatsApp Ordering', 'Offers & Banners', 'Store Hours'],
  },
  {
    id: 'realestate',
    name: 'UrbanSpace Realty',
    sector: '4. Real Estate & Builders',
    description: 'Tailored for real estate brokers, property developers, and builders. Showcases residential/commercial listings with floor plan galleries.',
    themeColor: '#8b5cf6',
    features: ['Property Listings', 'Interactive Floor Plans', 'Agent Contact Card', 'Site Visit Booking'],
  },
  {
    id: 'hospitality',
    name: 'Savoria Bistro & Cafe',
    sector: '5. Food & Hospitality',
    description: 'Crafted for restaurants, cafes, and cloud kitchens. Highlights dynamic food menus, online table reservations, and location info.',
    themeColor: '#ef4444',
    features: ['Digital Food Menu', 'Table Reservation Form', 'Zomato/Swiggy Links', 'Ambiance Gallery'],
  },
];

export default function TemplateCatalog() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar Selector */}
      <div class="lg:col-span-5 space-y-4">
        <h3 class="text-lg font-bold text-white mb-2">Select Industry Sector</h3>
        <p class="text-xs text-gray-400 mb-6">Choose a pre-designed layout tailored specifically for your target business sector.</p>

        <div class="space-y-3">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => setSelectedTemplate(tpl)}
              class={`w-full text-left p-4 rounded-xl border transition-all ${
                selectedTemplate.id === tpl.id
                  ? 'bg-dark-card border-brand-500 shadow-lg shadow-brand-500/10'
                  : 'bg-dark-card/40 border-dark-border hover:border-gray-700'
              }`}
            >
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-bold uppercase tracking-wider" style={{ color: tpl.themeColor }}>
                  {tpl.sector}
                </span>
              </div>
              <h4 class="text-base font-bold text-white mb-1">{tpl.name}</h4>
              <p class="text-xs text-gray-400 line-clamp-2">{tpl.description}</p>
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div class="pt-4">
          <a
            href={`/contact?template=${encodeURIComponent(selectedTemplate.name)}`}
            class="block w-full py-3.5 px-4 rounded-xl bg-brand-500 text-black text-center font-bold hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/20 text-sm"
          >
            Request Customization for {selectedTemplate.name}
          </a>
        </div>
      </div>

      {/* Live Preview Canvas */}
      <div class="lg:col-span-7 bg-dark-card border border-dark-border rounded-2xl p-4 sm:p-6 sticky top-24">
        {/* Header Bar */}
        <div class="flex items-center justify-between pb-4 mb-4 border-b border-dark-border">
          <div>
            <span class="text-xs text-gray-400 block font-mono">Live Sector Demo</span>
            <strong class="text-white text-base">{selectedTemplate.name}</strong>
          </div>
          <div class="flex items-center gap-2 bg-dark-bg p-1 rounded-lg border border-dark-border">
            <button
              onClick={() => setViewMode('desktop')}
              class={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                viewMode === 'desktop' ? 'bg-brand-500 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              class={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                viewMode === 'mobile' ? 'bg-brand-500 text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Mock Screen Content */}
        <div class="flex justify-center bg-black/50 p-4 sm:p-6 rounded-xl min-h-[460px] items-center border border-dark-border/50">
          <div
            class={`transition-all duration-300 border border-dark-border rounded-xl bg-dark-bg p-5 w-full shadow-2xl ${
              viewMode === 'mobile' ? 'max-w-[320px]' : 'max-w-full'
            }`}
          >
            {/* Mock Header */}
            <div class="flex justify-between items-center mb-6 border-b border-dark-border pb-3">
              <div class="font-bold text-sm" style={{ color: selectedTemplate.themeColor }}>
                {selectedTemplate.name}
              </div>
              <div class="flex gap-1.5">
                <div class="w-12 h-4 rounded bg-gray-800"></div>
                <div class="w-12 h-4 rounded bg-gray-800"></div>
              </div>
            </div>

            {/* Mock Banner */}
            <div class="rounded-xl p-5 mb-5 text-center relative overflow-hidden" style={{ backgroundColor: `${selectedTemplate.themeColor}15` }}>
              <span class="text-[10px] font-mono uppercase tracking-wider font-semibold block mb-1" style={{ color: selectedTemplate.themeColor }}>
                {selectedTemplate.sector}
              </span>
              <div class="text-base font-bold text-white mb-2">
                Grow Your {selectedTemplate.name.split(' ')[0]} Business
              </div>
              <p class="text-xs text-gray-400 mb-4 max-w-xs mx-auto">
                Modern digital experience designed specifically for higher conversions.
              </p>
              <button
                class="px-4 py-2 rounded-lg text-xs font-bold text-white shadow-md"
                style={{ backgroundColor: selectedTemplate.themeColor }}
              >
                Get Started
              </button>
            </div>

            {/* Feature Pills */}
            <div class="mb-4">
              <span class="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-2">Included Modules:</span>
              <div class="grid grid-cols-2 gap-2">
                {selectedTemplate.features.map((feat) => (
                  <div key={feat} class="p-2 bg-dark-card rounded border border-dark-border text-[11px] text-gray-300 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedTemplate.themeColor }}></span>
                    <span class="truncate">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
