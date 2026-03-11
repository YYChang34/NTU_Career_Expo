'use client';

import Link from 'next/link';
import { MapPin, ChevronRight, Heart } from 'lucide-react';
import { Company } from '@/data/companies';
import { useFavorites } from '@/hooks/use-favorites';

export default function CompanyCard({ company }: { company: Company }) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const favorited = isLoaded ? isFavorite(company.id) : false;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 h-full flex flex-col hover:shadow-lg hover:border-indigo-200 transition-all duration-300 relative group">
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(company.id); }}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-50 transition-colors z-10"
        aria-label="Toggle favorite"
      >
        <Heart className={`w-5 h-5 transition-colors ${favorited ? 'fill-red-500 text-red-500' : 'text-slate-300 hover:text-slate-400'}`} />
      </button>

      <Link href={`/companies/${company.id}`} className="flex flex-col h-full mt-2">
        <div className="flex items-start justify-between mb-4 pr-8">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
            {company.industry}
          </span>
          <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
            攤位 {company.booth_id}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {company.company_name}
        </h3>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-grow">
          {company.short_description || '詳細資訊待補充，請點擊查看更多或前往攤位了解。'}
        </p>
        
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
          <MapPin className="w-3.5 h-3.5" />
          {company.booth_location}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {company.tags?.map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-indigo-600">
          查看職缺與詳情
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  );
}
