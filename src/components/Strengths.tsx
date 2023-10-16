import SmoothLink from '@/src/components/Atoms/SmoothLink';
import { useTranslations } from 'next-intl';

const Strengths = () => {
  const t = useTranslations('strength');

  return (
    <div id="strengths" className="flex items-center justify-center py-20 md:py-40 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-none grid-rows-none md:grid-rows-6 grid-flow-row md:grid-flow-col gap-[24px] px-[16px] max-w-screen-xl">
        <div className={'flex flex-col md:row-span-2 justify-around whitespace-pre-line break-keep py-[2px]'}>
          <div className={'flex text-[30px] md:text-[50px] text-[#2B1710] font-bold'}>{t('title')}</div>
          <div className={'flex text-[18px] md:text-[20px] md:font-bold text-[#2B1710]'}>{t('description')}</div>
        </div>
        <div
          className={`flex flex-col md:row-span-4 gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
          style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="flex flex-col gap-[10px]">
            <div className={'flex text-[26px] md:text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>
              {t('title_1')}
            </div>
            <div className={'flex flex-1 md:text-[24px] text-[#6A7C96] leading-[1.6] whitespace-pre-line break-keep'}>
              {t('description_1')}
            </div>
          </div>
          <SmoothLink href="#portfolio" className={'flex md:text-lg text-[#4A77FF]'}>
            {t('see_portfolio')}
          </SmoothLink>
        </div>
        <div
          className={`flex flex-col md:row-span-3 gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
          style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="flex flex-col gap-[10px]">
            <div className={'flex text-[26px] md:text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>
              {t('title_2')}
            </div>
            <div className={'flex md:text-[24px] text-[#6A7C96] leading-[1.6] whitespace-pre-line break-keep'}>
              {t('description_2')}
            </div>
          </div>
          <SmoothLink href="#portfolio" className={'flex md:text-lg text-[#4A77FF]'}>
            {t('see_portfolio')}
          </SmoothLink>
        </div>
        <div
          className={`flex flex-col md:row-span-3 gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
          style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="flex flex-col gap-[10px]">
            <div className={'flex text-[26px] md:text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>
              {t('title_2')}
            </div>
            <div className={'flex flex-1 md:text-[24px] text-[#6A7C96] leading-[1.6] whitespace-pre-line break-keep'}>
              {t('description_3')}
            </div>
          </div>
          <SmoothLink href="#portfolio" className={'flex md:text-lg text-[#4A77FF]'}>
            {t('see_portfolio')}
          </SmoothLink>
        </div>
      </div>
    </div>
  );
};
export default Strengths;
