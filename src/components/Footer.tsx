import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <div id="footer" className={'flex flex-row items-center justify-center w-full bg-[#F2F1F3] py-24 text-[#646464]'}>
      <div className="flex flex-col flex-1 max-w-screen-xl px-[16px] gap-4">
        <div className={'flex flex-col gap-8 md:gap-0'}>
          <div className={'flex flex-col md:flex-row gap-8 md:justify-start'}>
            <div className={'flex flex-row gap-1 flex-wrap'}>
              <div>{t('company')}</div>
              <div>{'|'}</div>
              <div>{t('ceo')}</div>
              <div>{'|'}</div>
              <div>{t('register_num')}</div>
              <div>{'|'}</div>
              <div>{t('email')}</div>
            </div>
          </div>
          <div>{t('address')}</div>
        </div>
        <div>{'ⓒ 2023 Hyperhire'}</div>
      </div>
    </div>
  );
};
export default Footer;
