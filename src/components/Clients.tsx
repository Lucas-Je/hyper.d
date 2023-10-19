import Image from 'next/image';
import { useIsPc } from '../hooks/useMobile';
import { useTranslations } from 'next-intl';

const data = [
  { name: 'alogic', image: '/assets/images/clients/alogic.svg' },
  { name: 'eoncare', image: '/assets/images/clients/eoncare.svg' },
  { name: 'merchsquare', image: '/assets/images/clients/merchsquare.svg' },
  { name: 'mintchalk', image: '/assets/images/clients/mintchalk.svg' },
];

const companiesSvg = [
  { name: '블린튼', image: '/assets/images/clients/블린튼.svg' },
  { name: '트레바리', image: '/assets/images/clients/트레바리.svg' },
  { name: '이온케어', image: '/assets/images/clients/이온케어.svg' },
  { name: '좋은생각', image: '/assets/images/clients/좋은생각.svg' },
  { name: '더블디', image: '/assets/images/clients/더블디.svg' },
  { name: '에이아이닷엠', image: '/assets/images/clients/에이아이닷엠.svg' },
  { name: '민트쵸크', image: '/assets/images/clients/민트쵸크.svg' },
  { name: '애드뱅크', image: '/assets/images/clients/애드뱅크.svg' },
  { name: '핑캘린더', image: '/assets/images/clients/핑캘린더.svg' },
  { name: '가디언홀딩스', image: '/assets/images/clients/가디언홀딩스.svg' },
  { name: '지랩스', image: '/assets/images/clients/지랩스.svg' },
  { name: '디앤디랩', image: '/assets/images/clients/디앤디랩.svg' },
  { name: '웨이브온', image: '/assets/images/clients/웨이브온.svg' },
  { name: '메타지', image: '/assets/images/clients/메타지.svg' },
  { name: '메타버즈', image: '/assets/images/clients/메타버즈.svg' },
  { name: '메쓰팡', image: '/assets/images/clients/메쓰팡.svg' },
  { name: '이어가다', image: '/assets/images/clients/이어가다.svg' },
  { name: '커넥트모어', image: '/assets/images/clients/커넥트모어.svg' },
  { name: '앱포스터', image: '/assets/images/clients/앱포스터.svg' },
  { name: '머치스퀘어', image: '/assets/images/clients/머치스퀘어.svg' },
  { name: '스페이스웨이비', image: '/assets/images/clients/스페이스웨이비.svg' },
  { name: '하이퍼이지', image: '/assets/images/clients/하이퍼이지.svg' },
  { name: '리얼날리지', image: '/assets/images/clients/리얼날리지.svg' },
  { name: '베리', image: '/assets/images/clients/베리.svg' },
  { name: '워크비자', image: '/assets/images/clients/워크비자.svg' },
  { name: '알바임', image: '/assets/images/clients/알바임.svg' },
];

const Clients = () => {
  const isPc = useIsPc();
  const t = useTranslations('clients');

  return (
    <div
      id="clients"
      className={'flex flex-row w-full bg-[#F6F6F6] items-center justify-center py-20 md:py-40 text-[#2F2D35]'}>
      <div className="flex flex-col items-center justify-center max-w-screen-xl px-[16px] gap-16">
        <div className={'flex flex-col items-center gap-2'}>
          <div className={'text-3xl font-bold text-center'}>{isPc ? t('title') : t('title_mobile')}</div>
        </div>
        <div className={'flex flex-row gap-4 md:gap-8 flex-wrap justify-center items-center'}>
          {companiesSvg.map((value, index) => {
            return (
              <div key={index} className={'flex w-auto h-auto'}>
                <Image src={value.image} width="0" height="0" sizes="100vw" className="w-full h-auto" alt={'logo'} />
              </div>
            );
          })}
        </div>
        <div className={'text-[#646464]'}>{t('more')}</div>
      </div>
    </div>
  );
};
export default Clients;
