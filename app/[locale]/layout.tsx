import './globals.css';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import React, { ReactNode } from 'react';
import cls from '@/src/utils/cls';
import i18nConfig from '@/i18nConfig';
import { NextIntlClientProvider } from 'next-intl';
import Script from 'next/script';

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

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`@/public/messages/${locale}.json`)).metadata;
  return {
    metadataBase: new URL('https://hyper-d.xyz'),
    title: messages.title,
    description: messages.description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      siteName: 'hyper-d',
      title: 'Hyper.D',
      description: messages.description,
      images: {
        url: 'https://hyper-d.xyz/logo.png',
        alt: 'hyper-d',
        type: 'png',
      },
    },
  };
}

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
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '977767719996008');
              fbq('track', 'PageView');
          `,
        }}
      />
      <body className={cls(inter.className, ibmPlexMono.className)} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
