import Image from 'next/image';

const data = [
  { name: 'spring camp', image: '/assets/images/investors/springcamp-white.svg' },
  { name: 'kakao ventures', image: '/assets/images/investors/kakaoventures-white.svg' },
  { name: 'bluepoint partners', image: '/assets/images/investors/bluepoint-white.svg' },
];
const Investors = () => {
  return (
    <div id="investors" className={'flex flex-row w-full bg-[#2F2D35] items-center justify-center py-40 text-white'}>
      <div className="flex flex-col max-w-screen-xl items-center px-[16px] gap-16">
        <div className={'flex flex-col items-center gap-2'}>
          <div className={'text-3xl font-bold'}>투자자</div>
          <div className={'text-lg'}>하이퍼하이어는 아래 투자자들의 지원을 받고 있습니다</div>
        </div>
        <div className={'flex flex-row gap-24'}>
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
