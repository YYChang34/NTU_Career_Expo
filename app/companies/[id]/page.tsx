import { notFound } from 'next/navigation';
import { MapPin, Globe, Briefcase, ExternalLink, Building2, Search, Tag, Info } from 'lucide-react';
import Header from '@/components/Header';
import { companies } from '@/data/companies';
import BackButton from '@/components/BackButton';
import CompanyNotes from '@/components/CompanyNotes';

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const company = companies.find(c => c.id === id);

  if (!company) {
    notFound();
  }

  // 動態生成搜尋連結，確保每個公司都有正確的導向
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(company.company_name + ' 官方網站')}`;
  const job104Url = `https://www.104.com.tw/jobs/search/?keyword=${encodeURIComponent(company.company_name)}`;
  const job1111Url = `https://www.1111.com.tw/search/job?ks=${encodeURIComponent(company.company_name)}`;
  const linkedinUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(company.company_name)}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      <Header />
      
      <main className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
        <BackButton />

        {/* Header Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-6 md:mb-8">
          <div className="h-24 md:h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-600"></div>
          <div className="px-5 pb-6 md:px-8 md:pb-8 relative">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center -mt-10 md:-mt-12 mb-4 md:mb-6">
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-indigo-300" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                    {company.industry}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-600">
                    攤位 {company.booth_id}
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-2 md:mb-3 tracking-tight">{company.company_name}</h1>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate">{company.booth_location}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a 
                  href={company.official_website || googleSearchUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto"
                >
                  {company.official_website ? <Globe className="w-4 h-4" /> : <Search className="w-4 h-4" />}
                  {company.official_website ? '官方網站' : '搜尋官網'}
                </a>
                
                <a 
                  href={company.careers_page || job104Url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow w-full sm:w-auto"
                >
                  <Briefcase className="w-4 h-4" />
                  {company.careers_page ? '招募頁面' : '搜尋職缺'}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <section className="bg-white rounded-3xl border border-slate-200 p-5 md:p-8 shadow-sm">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <Info className="w-5 h-5 text-indigo-500" />
                公司簡介
              </h2>
              {company.full_description ? (
                <p className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {company.full_description}
                </p>
              ) : (
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 text-center border border-slate-100 border-dashed">
                  <p className="text-slate-500 text-sm mb-3">詳細公司介紹待補充。</p>
                  <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 hover:underline text-sm font-medium">
                    <Search className="w-4 h-4" />
                    在 Google 上搜尋 {company.company_name}
                  </a>
                </div>
              )}
            </section>

            <section className="bg-white rounded-3xl border border-slate-200 p-5 md:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-500" />
                  職缺搜尋與招募資訊
                </h2>
                <span className="text-xs font-medium px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-md border border-emerald-100 self-start sm:self-auto">招募中</span>
              </div>
              
              <p className="text-sm text-slate-500 mb-6">
                點擊下方連結，直接前往各大求職平台查看 <strong>{company.company_name}</strong> 的最新職缺：
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href={job104Url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-orange-200 hover:bg-orange-50/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 text-orange-600 flex items-center justify-center font-black text-sm">104</div>
                    <span className="font-semibold text-slate-700 group-hover:text-orange-700">104 人力銀行</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-500" />
                </a>
                
                <a href={job1111Url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-yellow-300 hover:bg-yellow-50/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 text-yellow-600 flex items-center justify-center font-black text-sm">1111</div>
                    <span className="font-semibold text-slate-700 group-hover:text-yellow-700">1111 人力銀行</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-yellow-500" />
                </a>

                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/50 transition-all sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 text-blue-600 flex items-center justify-center font-black text-sm">IN</div>
                    <span className="font-semibold text-slate-700 group-hover:text-blue-700">LinkedIn 領英</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </a>
              </div>
            </section>

            <CompanyNotes companyId={company.id} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Tag className="w-4 h-4 text-indigo-500" />
                特色標籤
              </h3>
              {company.tags && company.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {company.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm font-medium px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-lg border border-slate-200/60">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-400 bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                  尚無特色標籤
                </div>
              )}
            </section>

            <section className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl border border-indigo-100/50 p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <MapPin className="w-24 h-24 text-indigo-600" />
              </div>
              <h3 className="text-base font-bold text-indigo-900 mb-3 relative z-10 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                攤位資訊
              </h3>
              <p className="text-indigo-800/80 text-sm leading-relaxed relative z-10">
                前往 <strong className="text-indigo-900">{company.booth_location}</strong> 尋找攤位 <strong className="text-indigo-900">{company.booth_id}</strong>，直接與人資團隊交流！
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
