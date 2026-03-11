'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import CompanyCard from '@/components/CompanyCard';
import { companies } from '@/data/companies';
import { motion } from 'motion/react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('全部');

  const industries = ['全部', ...Array.from(new Set(companies.map(c => c.industry)))];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.company_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          company.booth_id.includes(searchTerm);
    const matchesIndustry = selectedIndustry === '全部' || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-10 md:pt-20 md:pb-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs md:text-sm font-semibold mb-4 md:mb-6">
              2026 臺大校園徵才博覽會
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
              生成式職涯導航 <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                跨域 AI 賦能 × 人文共創無界
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10">
              探索超過 300 家頂尖企業，快速定位攤位、瀏覽熱門職缺，找到屬於你的理想舞台。
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="搜尋公司名稱、攤位編號..."
                className="w-full pl-11 pr-4 py-3.5 md:py-4 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base md:text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="md:sticky md:top-24 bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 md:mb-6 md:pb-4 md:border-b border-slate-100">
                <Filter className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                <h2 className="font-bold text-slate-900 text-sm md:text-base">篩選條件</h2>
              </div>
              
              <div>
                <h3 className="hidden md:block text-sm font-semibold text-slate-900 mb-3">產業區域</h3>
                <div className="flex overflow-x-auto pb-2 -mx-2 px-2 md:mx-0 md:px-0 md:flex-col md:space-y-2 space-x-2 md:space-x-0 hide-scrollbar">
                  {industries.map(industry => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={`shrink-0 whitespace-nowrap px-4 py-2 md:px-0 md:py-0 rounded-full md:rounded-none border md:border-none text-sm transition-colors text-left ${
                        selectedIndustry === industry
                          ? 'bg-indigo-600 border-indigo-600 text-white md:bg-transparent md:text-indigo-700 md:font-medium'
                          : 'bg-white border-slate-200 text-slate-600 md:bg-transparent md:text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="industry" 
                          className="hidden md:block w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                          checked={selectedIndustry === industry}
                          readOnly
                        />
                        <span>{industry}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Company Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-end">
              <h2 className="text-xl font-bold text-slate-900">
                參展企業 <span className="text-slate-500 text-base font-normal ml-2">找到 {filteredCompanies.length} 家</span>
              </h2>
            </div>
            
            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCompanies.map((company, index) => (
                  <motion.div 
                    key={company.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <CompanyCard company={company} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                <p className="text-slate-500">找不到符合條件的公司，請嘗試其他關鍵字。</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
