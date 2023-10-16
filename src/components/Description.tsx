import { useTranslations } from 'next-intl';
import { useIsPc } from '../hooks/useMobile';

const Description = () => {
  const isPc = useIsPc();
  const t = useTranslations('description');

  const data = [
    {
      title: t('title_1'),
      description: t('description_1'),
      title_mobile: t('title_mobile_1'),
      description_mobile: t('description_mobile_1'),
    },
    {
      title: t('title_2'),
      description: t('description_2'),
      title_mobile: t('title_mobile_2'),
      description_mobile: t('description_mobile_2'),
    },
    {
      title: t('title_3'),
      description: t('description_3'),
      title_mobile: t('title_mobile_3'),
      description_mobile: t('description_mobile_3'),
    },
    {
      title: t('title_4'),
      description: t('description_4'),
      title_mobile: t('title_mobile_4'),
      description_mobile: t('description_mobile_4'),
    },
  ];
  return (
    <div id="description" className="flex items-center justify-center w-full py-28 md:py-60 bg-white px-[16px]">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl gap-16">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className={'flex flex-col gap-2 md:gap-4 items-start justify-between whitespace-pre-line break-keep'}>
              <div
                className={
                  'flex flex-1 w-full text-[24px] md:text-[48px] text-[#2B1710] leading-[1.4] font-bold justify-center md:justify-start text-center md:text-start'
                }>
                {isPc ? value.title : value.title_mobile}
              </div>
              <div
                className={
                  'flex flex-1 w-full text-[18px] md:text-[24px] text-[#6A7C96] leading-[1.6] justify-center md:justify-start text-center md:text-start'
                }>
                {isPc ? value.description : value.description_mobile}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Description;
