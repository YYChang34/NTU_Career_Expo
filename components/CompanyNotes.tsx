'use client';

import { useState, useEffect } from 'react';
import { Save, Check, Edit3 } from 'lucide-react';

export default function CompanyNotes({ companyId }: { companyId: string }) {
  const [note, setNote] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('company_notes') || '{}');
    if (savedNotes[companyId]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setNote(savedNotes[companyId]);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, [companyId]);

  const handleSave = () => {
    const savedNotes = JSON.parse(localStorage.getItem('company_notes') || '{}');
    savedNotes[companyId] = note;
    localStorage.setItem('company_notes', JSON.stringify(savedNotes));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  if (!isLoaded) return <div className="animate-pulse h-48 bg-slate-100 rounded-3xl"></div>;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 md:p-8 shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
          <Edit3 className="w-4 h-4 md:w-5 md:h-5" />
          我的專屬備註
        </h2>
        <button 
          onClick={handleSave}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-medium transition-colors ${
            isSaved 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : 'bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100'
          }`}
        >
          {isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {isSaved ? '已儲存' : '儲存備註'}
        </button>
      </div>
      <textarea
        value={note}
        onChange={(e) => { setNote(e.target.value); setIsSaved(false); }}
        placeholder="在這裡寫下關於這間公司的筆記、面試重點或攤位活動資訊... (內容會自動保存在您的瀏覽器中)"
        className="w-full flex-grow min-h-[160px] p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-base text-slate-700 placeholder:text-slate-400 transition-colors"
      />
    </div>
  );
}
