import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <div id="footer" className={'flex flex-row items-center justify-center w-full bg-[#F2F1F3] py-24 text-[#646464]'}>
      <div className="flex flex-col flex-1 max-w-screen-xl px-[16px] gap-8">
        <div className={'flex flex-col gap-8 md:gap-0'}>
          <div className={'flex flex-col md:flex-row gap-8 md:justify-start'}>
            <div className="flex flex-col flex-1 items-start justify-start gap-4">
              <div className="font-bold">{t('company_type_ko')}</div>
              <div className={'flex flex-row gap-1 flex-wrap'}>
                <div>{t('company_ko')}</div>
                <div>{'|'}</div>
                <div>{t('ceo_ko')}</div>
                <div>{'|'}</div>
                <div>{t('register_num_ko')}</div>
                <div>{'|'}</div>
                <div>{t('email_ko')}</div>
              </div>
              <div>{t('address_ko')}</div>
            </div>
            <div className="flex flex-col flex-1 items-start justify-start gap-4">
              <div className="font-bold">{t('company_type_en')}</div>
              <div className={'flex flex-row gap-1 flex-wrap'}>
                <div>{t('company_en')}</div>
                <div>{'|'}</div>
                <div>{t('ceo_en')}</div>
                <div>{'|'}</div>
                <div>{t('register_num_en')}</div>
                <div>{'|'}</div>
                <div>{t('email_en')}</div>
              </div>
              <div>{t('address_en')}</div>
            </div>
          </div>
        </div>
        <div className="font-bold">{'ⓒ 2023 Hyperhire'}</div>
      </div>
    </div>
  );
};
export default Footer;
