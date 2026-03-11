'use client';

import Link from 'next/link';
import { Map, Briefcase, Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';

export default function Header() {
  const { favorites, isLoaded } = useFavorites();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-indigo-600" />
          <span className="font-bold text-xl tracking-tight text-slate-900">VISION 2026</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            找公司
          </Link>
          <Link href="/map" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1">
            <Map className="w-4 h-4" />
            攤位地圖
          </Link>
          <Link href="/favorites" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1 relative">
            <Heart className="w-4 h-4" />
            我的收藏
            {isLoaded && favorites.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
