'use client';
import React, { LegacyRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const data = [
  { label: '서비스 소개', url: '#description' },
  { label: '포트폴리오', url: '#portfolio' },
  { label: '클라이언트', url: '#clients' },
  { label: '세일즈 문의', url: '#contact' },
];

const Header = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget?.href;
    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
  return (
    <div className={'flex flex-row w-full items-center justify-between bg-white px-72 py-8'}>
      <div className={'flex w-auto h-auto'}>
        <Image src={'logo.svg'} width="0" height="0" sizes="100vw" className="w-full h-auto" alt={'logo'} />
      </div>
      <div className={'flex w-auto h-auto gap-8 text-[#2F2D35] text-sm'}>
        {data.map((value, index) => {
          return (
            <Link key={index} href={value.url} onClick={handleClick}>
              {value.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
