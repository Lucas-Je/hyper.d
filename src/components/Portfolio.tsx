import Image from 'next/image';
import Skill from '@/src/components/Skill';

const data = [
  {
    type: 'WEB',
    description: '외국인채용플랫폼',
    title: '워크비자',
    link: 'https://www.naver.com',
    techStack: ['React Native', 'Django', 'MySQL'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '이벤트 정보 공유 플랫폼',
    title: '팝스',
    link: 'https://www.naver.com',
    techStack: ['React Native', 'Node.js', 'PostgreSQL'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '패션SNS 리워드앱',
    title: '모두의패션',
    link: 'https://www.naver.com',
    techStack: ['Flutter', 'Node.js', 'MongoDB'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '제주 특산물 플랫폼',
    title: '로컬스루',
    link: 'https://www.naver.com',
    techStack: ['React.js', 'Typescript', 'Node.js', 'MongoDB'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '블록체인거래소',
    title: '오아시스 거래소',
    link: 'https://www.naver.com',
    techStack: ['Flutter', 'Next.js', 'Nest.js', 'gRPC', 'Plasma', 'RabbitMQ'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '인맥 관리 앱',
    title: '오랜만',
    link: 'https://www.naver.com',
    techStack: ['React Native', 'Realm', 'Typescript', 'Node.js'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '소상공인 회원관리 앱',
    title: '핑캘린더',
    link: 'https://www.naver.com',
    techStack: ['Flutter', 'Dart'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '어린이 수학교육 플랫폼',
    title: '매쓰팡',
    link: 'https://www.naver.com',
    techStack: ['React Native', 'Typescript'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'WEB',
    description: '영어회화 라이브 스트리밍 플랫폼',
    title: '에피소든',
    link: 'https://www.naver.com',
    techStack: ['Next.js', 'Typescript', 'WebRTC'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'WEB',
    description: '모임 플랫폼',
    title: '트레바리',
    link: 'https://www.naver.com',
    techStack: ['React.js', 'Typescript'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'APP',
    description: '공유오피스 관리용 SAAS 운영',
    title: 'GADJET',
    link: 'https://www.naver.com',
    techStack: ['React.js', 'Node.js', 'React Native'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'WEB',
    description: '소셜 오디오 컨텐츠 플랫폼',
    title: 'NADIO',
    link: 'https://www.naver.com',
    techStack: ['React Native', 'Django', 'Python', 'PostgreSQL'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'WEB',
    description: '이메일 마케팅 툴',
    title: 'VARY',
    link: 'https://www.naver.com',
    techStack: ['React.js', 'AWS', 'Node.js', 'MongoDB'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'SERVER',
    description: '메타버스 소켓 서버',
    title: '팝스',
    link: 'https://www.naver.com',
    techStack: ['Node.js', 'MongoDB', 'WebRTC', 'Socket', 'AWS'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className={'flex flex-row w-full items-center justify-center py-60 bg-white z-1'}>
      <div className="flex flex-col max-w-screen-xl px-[16px] gap-4">
        <div className={'text-[#565CFF] text-lg font-medium'}>PORTFOLIO</div>
        <div className={'text-[#2F2D35] text-6xl font-bold whitespace-pre-line break-keep pb-16'}>
          {'하이퍼디 포트폴리오'}
        </div>
        <div className={'flex flex-col gap-32'}>
          {data.map((value, index) => {
            return (
              <div key={index} className={'flex flex-row gap-32'}>
                <div className={'flex flex-none flex-col gap-2 max-w-[500px]'}>
                  <div
                    className={
                      'border border-black items-center justify-center px-[4px] py-[2px] font-ibmPlexMono text-sm font-semibold w-min'
                    }>
                    {value.type}
                  </div>
                  <div className={'text-[#2F2D35] text-4xl font-normal mt-[16px]'}>{value.description}</div>
                  <div className={'text-[#2F2D35] text-4xl font-bold '}>{value.title}</div>
                  <a
                    href={value.link}
                    target="_blank"
                    className={
                      'flex w-24 flex-row items-center justify-center gap-1 border-b border-[#2F2D35] mt-[16px]'
                    }>
                    <div className={'flex text-lg font-medium text-[#2F2D35]'}>바로가기</div>
                    <div className={'flex w-auto h-auto'}>
                      <Image
                        src={'/assets/icons/arrow_forward_black.svg'}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt={'logo'}
                      />
                    </div>
                  </a>
                  <div className={'text-[#646464] text-lg font-normal pt-8'}>사용된 테크 스택</div>
                  <div className="flex flex-wrap gap-2">
                    {value.techStack.map((skill, index) => {
                      return <Skill key={index} value={skill} />;
                    })}
                  </div>
                </div>
                <div className={'flex flex-1 items-center justify-center flex-row gap-4 bg-green'}>
                  {value.images.map((image, index) => {
                    return (
                      <div key={index} className={'flex flex-1 w-auto h-auto'}>
                        <Image
                          src={image}
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="w-full h-auto border border-[#BEC1FF] rounded-3xl"
                          alt={'logo'}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
