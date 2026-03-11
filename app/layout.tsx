import type {Metadata} from 'next';
import './globals.css'; // Global styles
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'VISION 2026 臺大校園徵才博覽會',
  description: '生成式職涯導航 —— 跨域 AI 賦能 × 人文共創無界',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="zh-TW">
      <body className="pb-16 md:pb-0" suppressHydrationWarning>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
