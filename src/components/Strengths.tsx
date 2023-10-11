import SmoothLink from '@/src/components/Atoms/SmoothLink';

const data = [
  {
    title: '블록체인/Web3',
    description: '블록체인 기술력을 가진 개발자들과 Web3 생태계를 구축하고, 안정적인 성능과 보안을 제공합니다.',
  },
  {
    title: '메타버스/3D',
    description:
      '합리적인 가격으로 고품질의 메타버스/3D 서비스를 제공합니다. 예산을 고려하여 최적의 솔루션을 제시해드립니다.',
  },
  {
    title: '이커머스',
    description:
      '결제/정산/채팅까지 커머스에 필요한 모든 기능을 제공합니다. 서비스 출시 경험을 토대로 매끄럽게 제작해드립니다.',
  },
];

const Strengths = () => {
  return (
    <div id="strengths" className="flex items-center justify-center py-60 bg-white">
      <div className="grid grid-rows-6 grid-flow-col gap-[24px] px-[16px] max-w-screen-xl">
        <div className={'flex flex-col row-span-2 justify-around whitespace-pre-line break-keep py-[2px]'}>
          <div className={'flex text-5xl text-[#2B1710] font-bold'}>하이퍼디 강점 분야</div>
          <div className={'flex text-2xl font-bold text-[#2B1710]'}>
            {'어려운 기술부터 노하우가 필요한 서비스까지,\n개발 경험이 있는 팀에게 맡기세요.'}
          </div>
        </div>
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col row-span-${
                index === 0 ? 4 : 3
              } gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
              style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
              <div className="flex flex-col gap-[10px]">
                <div className={'flex text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>{value.title}</div>
                <div className={'flex text-[24px] text-[#6A7C96] leading-[1.6]'}>{value.description}</div>
              </div>
              <SmoothLink href="#portfolio" className={'flex text-lg text-[#4A77FF]'}>
                포트폴리오 보기
              </SmoothLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Strengths;
