'use client';
import React from 'react';

import Image from 'next/image';
import SmoothLink from '@/src/components/Atoms/SmoothLink';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('header');
  const data = [
    { label: t('service'), url: '#description' },
    { label: t('portfolio'), url: '#portfolio' },
    { label: t('client'), url: '#clients' },
    { label: t('sales'), url: '#contact' },
  ];

  return (
    <div className="flex w-full bg-white items-center justify-center bg-white">
      <div className={'flex flex-row flex-1 items-center justify-between h-[56px] px-[16px] bg-white max-w-screen-xl'}>
        <div className={'flex w-auto h-auto'}>
          <Image src={'logo.svg'} width="0" height="0" sizes="100vw" className="w-full h-auto" alt={'logo'} />
        </div>
        <div className={'w-auto h-auto gap-8 text-[#2F2D35] text-sm hidden md:flex'}>
          {data.map((value, index) => {
            return (
              <SmoothLink key={index} href={value.url} scrollPosition={'start'}>
                {value.label}
              </SmoothLink>
            );
          })}
        </div>
        <div className={'w-auto h-auto gap-8 text-[#2F2D35] text-sm md:hidden flex'}>
          <SmoothLink href="#portfolio" scrollPosition={'start'}>
            포트폴리오
          </SmoothLink>
          <SmoothLink href="#contact" scrollPosition={'start'}>
            문의
          </SmoothLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
