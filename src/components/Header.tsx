'use client';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import SmoothLink from '@/src/components/Atoms/SmoothLink';

const data = [
  { label: '서비스 소개', url: '#description' },
  { label: '포트폴리오', url: '#portfolio' },
  { label: '클라이언트', url: '#clients' },
  { label: '세일즈 문의', url: '#contact' },
];

const Header = () => {
  return (
    <div className={'flex flex-row w-full items-center justify-between bg-white px-72 h-[56px]'}>
      <div className={'flex w-auto h-auto'}>
        <Image src={'logo.svg'} width="0" height="0" sizes="100vw" className="w-full h-auto" alt={'logo'} />
      </div>
      <div className={'flex w-auto h-auto gap-8 text-[#2F2D35] text-sm'}>
        {data.map((value, index) => {
          return (
            <SmoothLink key={index} href={value.url} scrollPosition={'start'}>
              {value.label}
            </SmoothLink>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
