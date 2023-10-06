import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import cls from '@/app/utils/cls';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--inter',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--ibmPlexMono',
});

export const metadata: Metadata = {
  title: 'Hyper.D',
  description: '가격도 결과물도 천차만별인 개발 외주. 시행착오 없이, 한 번에 하이퍼디.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cls(inter.className, ibmPlexMono.className)}>{children}</body>
    </html>
  );
}
