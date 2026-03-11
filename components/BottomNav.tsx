'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Map, Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';

export default function BottomNav() {
  const pathname = usePathname();
  const { favorites, isLoaded } = useFavorites();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname === '/' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium">找公司</span>
        </Link>
        <Link href="/map" className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname === '/map' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
          <Map className="w-5 h-5" />
          <span className="text-[10px] font-medium">攤位地圖</span>
        </Link>
        <Link href="/favorites" className={`relative flex flex-col items-center justify-center w-full h-full space-y-1 ${pathname === '/favorites' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-medium">我的收藏</span>
          {isLoaded && favorites.length > 0 && (
            <span className="absolute top-1 right-[calc(50%-20px)] bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center border-2 border-white">
              {favorites.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
