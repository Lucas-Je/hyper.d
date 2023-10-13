import Image from 'next/image';
import Link from 'next/link';

const sns = [
  { iconPath: '/assets/icons/fb.svg', link: 'https://www.facebook.com/jobs.zigup.in' },
  { iconPath: '/assets/icons/ig.svg', link: 'https://www.instagram.com/zigupindia' },
  { iconPath: '/assets/icons/in.svg', link: 'https://www.linkedin.com/showcase/zigup' },
  { iconPath: '/assets/icons/tw.svg', link: 'https://twitter.com/zigup_india' },
];

const Footer = () => {
  return (
    <div id="footer" className={'flex flex-row items-center justify-center w-full bg-[#F2F1F3] py-24 text-[#646464]'}>
      <div className="flex flex-col flex-1 max-w-screen-xl px-[16px] gap-4">
        <div className={'flex flex-col gap-8 md:gap-0'}>
          <div className={'flex flex-col md:flex-row gap-8 md:justify-between'}>
            <div className={'flex flex-row gap-1 flex-wrap'}>
              <div>{'상호: 하이퍼하이어'}</div>
              <div>{'|'}</div>
              <div>{'대표: 김주현'}</div>
              <div>{'|'}</div>
              <div>{'사업자등록번호: 427-86-01187'}</div>
              <div>{'|'}</div>
              <div>{'이메일: contact@hyperhire.in'}</div>
            </div>
            <div className={'flex flex-row gap-4'}>
              {sns.map((value, index) => {
                return (
                  <Link href={value.link} target="_blank" key={index} className={'flex w-auto h-auto'}>
                    <Image
                      src={value.iconPath}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-auto"
                      alt={'fb'}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
          <div>{'주소: 서울특별시 강남구 테헤란로 128 지하 1층 GARAGE'}</div>
        </div>
        <div>{'ⓒ 2023 Hyperhire'}</div>
      </div>
    </div>
  );
};
export default Footer;
