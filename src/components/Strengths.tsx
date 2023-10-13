import SmoothLink from '@/src/components/Atoms/SmoothLink';

const Strengths = () => {
  return (
    <div id="strengths" className="flex items-center justify-center py-20 md:py-40 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-none grid-rows-none md:grid-rows-6 grid-flow-row md:grid-flow-col gap-[24px] px-[16px] max-w-screen-xl">
        <div className={'flex flex-col md:row-span-2 justify-around whitespace-pre-line break-keep py-[2px]'}>
          <div className={'flex text-[30px] md:text-[50px] text-[#2B1710] font-bold'}>하이퍼디 강점 분야</div>
          <div className={'flex text-[18px] md:text-[20px] md:font-bold text-[#2B1710]'}>
            {'어려운 기술부터 노하우가 필요한 서비스까지,\n개발 경험이 있는 팀에게 맡기세요.'}
          </div>
        </div>
        <div
          className={`flex flex-col md:row-span-4 gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
          style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="flex flex-col gap-[10px]">
            <div className={'flex text-[26px] md:text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>
              블록체인/Web3
            </div>
            <div className={'flex flex-1 md:text-[24px] text-[#6A7C96] leading-[1.6] whitespace-pre-line break-keep'}>
              블록체인 기술력을 가진 개발자들과 Web3 생태계를 구축하고, 안정적인 성능과 보안을 제공합니다.
            </div>
          </div>
          <SmoothLink href="#portfolio" className={'flex md:text-lg text-[#4A77FF]'}>
            포트폴리오 보기
          </SmoothLink>
        </div>
        <div
          className={`flex flex-col md:row-span-3 gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
          style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="flex flex-col gap-[10px]">
            <div className={'flex text-[26px] md:text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>메타버스/3D</div>
            <div className={'flex md:text-[24px] text-[#6A7C96] leading-[1.6] whitespace-pre-line break-keep'}>
              합리적인 가격으로 고품질의 메타버스/3D 서비스를 제공합니다. 예산을 고려하여 최적의 솔루션을
              제시해드립니다.
            </div>
          </div>
          <SmoothLink href="#portfolio" className={'flex md:text-lg text-[#4A77FF]'}>
            포트폴리오 보기
          </SmoothLink>
        </div>
        <div
          className={`flex flex-col md:row-span-3 gap-[10px] rounded-xl justify-between whitespace-pre-line break-keep p-8`}
          style={{ boxShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.15)' }}>
          <div className="flex flex-col gap-[10px]">
            <div className={'flex text-[26px] md:text-[36px] text-[#2B1710] leading-[1.3] font-bold'}>플랫폼</div>
            <div className={'flex flex-1 md:text-[24px] text-[#6A7C96] leading-[1.6] whitespace-pre-line break-keep'}>
              결제/정산/채팅까지 커머스에 필요한 모든 기능을 제공합니다. 서비스 출시 경험을 토대로 매끄럽게
              제작해드립니다.
            </div>
          </div>
          <SmoothLink href="#portfolio" className={'flex md:text-lg text-[#4A77FF]'}>
            포트폴리오 보기
          </SmoothLink>
        </div>
      </div>
    </div>
  );
};
export default Strengths;
