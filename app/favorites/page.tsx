'use client';

import { useFavorites } from '@/hooks/use-favorites';
import { companies } from '@/data/companies';
import CompanyCard from '@/components/CompanyCard';
import Header from '@/components/Header';
import { HeartCrack } from 'lucide-react';

export default function FavoritesPage() {
  const { favorites, isLoaded } = useFavorites();
  const favoriteCompanies = companies.filter(c => favorites.includes(c.id));

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">我的收藏</h1>
        
        {!isLoaded ? (
          <div className="text-center py-20 text-slate-500">載入中...</div>
        ) : favoriteCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteCompanies.map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed flex flex-col items-center">
            <HeartCrack className="w-12 h-12 text-slate-300 mb-4" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">目前沒有收藏的公司</h2>
            <p className="text-slate-500">去首頁逛逛，把感興趣的公司加入收藏吧！</p>
          </div>
        )}
      </main>
    </div>
  );
}
