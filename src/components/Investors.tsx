import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useIsPc } from '../hooks/useMobile';

const data = [
  { name: 'spring camp', image: '/assets/images/investors/springcamp-white.svg' },
  { name: 'kakao ventures', image: '/assets/images/investors/kakaoventures-white.svg' },
  { name: 'bluepoint partners', image: '/assets/images/investors/bluepoint-white.svg' },
];
const Investors = () => {
  const isPc = useIsPc();
  const t = useTranslations('investors');

  return (
    <div
      id="investors"
      className={'flex flex-row w-full bg-[#2F2D35] items-center justify-center py-20 md:py-40 text-white'}>
      <div className="flex flex-col max-w-screen-xl items-center px-[16px] gap-16">
        <div className={'flex flex-col items-center gap-2'}>
          <div className={'text-3xl font-bold'}>{t('title')}</div>
          <div className={'text-lg text-center'}>{isPc ? t('description') : t('description_mobile')}</div>
        </div>
        <div className={'flex flex-row gap-16 md:gap-24 flex-wrap justify-center items-center'}>
          {data.map((value, index) => {
            return (
              <div key={index} className={'flex w-auto h-auto'}>
                <Image src={value.image} width="0" height="0" sizes="100vw" className="w-full h-auto" alt={'logo'} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Investors;
