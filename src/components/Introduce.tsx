import React from 'react';
import SmoothLink from '@/src/components/Atoms/SmoothLink';
import { useIsPc } from '../hooks/useMobile';
import { useTranslations } from 'next-intl';

const Introduce = () => {
  const isPc = useIsPc();
  const t = useTranslations('introduce');

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
          {isPc ? t('description') : t('description_mobile')}
        </div>
        <SmoothLink
          href="#contact"
          className={
            'flex cursor-pointer bg-white text-[#2D6DE4] text-base whitespace-pre-line py-[12px] px-[24px] rounded-3xl'
          }
          scrollPosition={'start'}>
          {t('contact')}
        </SmoothLink>
      </div>
    </div>
  );
};
export default Introduce;
