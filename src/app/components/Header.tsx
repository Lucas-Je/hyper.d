import Image from 'next/image';

const Header = () => {
  return (
    <div className={'flex flex-row w-full items-center justify-between bg-white px-72 py-8'}>
      <div className={'flex w-auto h-auto'}>
        <Image src={'logo.svg'} width="0" height="0" sizes="100vw" className="w-full h-auto" alt={'logo'} />
      </div>
      <div className={'flex w-auto h-auto gap-8'}>
        <div>서비스 소개</div>
        <div>포트폴리오</div>
        <div>클라이언트</div>
        <div>세일즈 문의</div>
      </div>
    </div>
  );
};
export default Header;
