import React from 'react';
import SmoothLink from '@/src/components/Atoms/SmoothLink';
import { useIsPc } from '../hooks/useMobile';

const Introduce = () => {
  const isPc = useIsPc();

  return (
    <div
      id="introduce"
      className={'flex flex-col w-full items-center bg-black py-40 md:py-80'}
      style={{
        backgroundImage: 'url(/intro-background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="flex flex-col items-center gap-[30px] md:gap-[52px] max-w-screen-xl">
        <div
          className={
            'flex text-white text-[30px] md:text-[60px] whitespace-pre-line leading-[1.4] text-center font-bold'
          }>
          {isPc
            ? '가격도 결과물도 천차만별인 개발 외주\n 시행착오 없이, 한 번에 하이퍼디.'
            : '개발 외주 시행착오 없이,\n한 번에 하이퍼디.'}
        </div>
        <SmoothLink
          href="#contact"
          className={
            'flex cursor-pointer bg-white text-[#2D6DE4] text-base whitespace-pre-line py-[12px] px-[24px] rounded-3xl'
          }
          scrollPosition={'start'}>
          문의하기
        </SmoothLink>
      </div>
    </div>
  );
};
export default Introduce;
