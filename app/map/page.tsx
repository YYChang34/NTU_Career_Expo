'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { companies } from '@/data/companies';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

export default function MapPage() {
  const locations = Array.from(new Set(companies.map(c => c.booth_location)));
  const [selectedLocation, setSelectedLocation] = useState<string>(locations[0] || '');

  const locationCompanies = companies.filter(c => c.booth_location === selectedLocation);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">互動式攤位地圖</h1>
          <p className="text-slate-600">選擇展區以查看該區域的參展企業名單。</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Map / Location Selector */}
          <div className="lg:col-span-1">
            <h2 className="hidden lg:block font-semibold text-slate-700 mb-4 uppercase tracking-wider text-sm">選擇展區</h2>
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-col lg:space-y-3 space-x-3 lg:space-x-0 hide-scrollbar">
              {locations.map(loc => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`shrink-0 text-left px-4 py-2.5 lg:py-3.5 rounded-xl border transition-all ${
                    selectedLocation === loc 
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-medium shadow-sm' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <MapPin className={`w-4 h-4 lg:w-5 lg:h-5 ${selectedLocation === loc ? 'text-indigo-500' : 'text-slate-400'}`} />
                    <span className="text-sm lg:text-base">{loc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Companies in selected location */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm min-h-[500px]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  {selectedLocation}
                </h2>
                <span className="text-sm font-medium text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                  共 {locationCompanies.length} 家企業
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locationCompanies.map(company => (
                  <Link 
                    key={company.id} 
                    href={`/companies/${company.id}`}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          攤位 {company.booth_id}
                        </span>
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                          {company.industry}
                        </span>
                      </div>
                      <div className="font-medium text-slate-900 group-hover:text-indigo-700">
                        {company.company_name}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
