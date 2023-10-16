import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import React, { ReactNode } from 'react';
import cls from '@/src/utils/cls';
import i18nConfig from '@/i18nConfig';
import { NextIntlClientProvider } from 'next-intl';

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

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Hyper.D',
  description: '가격도 결과물도 천차만별인 개발 외주. 시행착오 없이, 한 번에 하이퍼디.',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/public/messages/${locale}.json`)).default;
  } catch (e) {
    console.error('error', e);
  }
  return (
    <html lang={locale}>
      <body className={cls(inter.className, ibmPlexMono.className)} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
