import Image from 'next/image';
const data = [
  { name: 'alogic', image: '/assets/images/clients/alogic.svg' },
  { name: 'eoncare', image: '/assets/images/clients/eoncare.svg' },
  { name: 'merchsquare', image: '/assets/images/clients/merchsquare.svg' },
  { name: 'mintchalk', image: '/assets/images/clients/mintchalk.svg' },
];
const Clients = () => {
  return (
    <div
      id="clients"
      className={'flex flex-row w-full bg-[#F6F6F6] items-center justify-center py-20 md:py-40 text-[#2F2D35]'}>
      <div className="flex flex-col items-center justify-center max-w-screen-xl px-[16px] gap-16">
        <div className={'flex flex-col items-center gap-2'}>
          <div className={'text-3xl font-bold text-center'}>
            {'이미 많은 한국 업체들이 하이퍼하이어 서비스를 이용하고 있습니다'}
          </div>
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
        <div className={'text-[#646464]'}>{'+ 더 많은 회사들'}</div>
      </div>
    </div>
  );
};
export default Clients;
