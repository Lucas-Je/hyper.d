import Image from 'next/image';
import Skill from '@/app/components/Skill';

const data = [
  {
    type: 'WEB',
    description: '3D 에디팅 프로그램',
    title: 'PINCH',
    link: 'https://www.naver.com',
    techStack: ['Three.js', 'Next.js', 'Nest.js', 'MongoDB'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
  {
    type: 'WEB',
    description: '3D 에디팅 프로그램',
    title: 'PINCH',
    link: 'https://www.naver.com',
    techStack: ['Three.js', 'Next.js', 'Nest.js', 'MongoDB'],
    images: ['/assets/images/portfolio/pinch_1.png', '/assets/images/portfolio/pinch_2.png'],
  },
];

const Portfolio = () => {
  return (
    <div className={'flex flex-col w-full px-72 py-60 gap-4'}>
      <div className={'text-[#565CFF] text-lg font-medium'}>PORTFOLIO</div>
      <div className={'text-[#2F2D35] text-6xl font-bold whitespace-pre-line break-keep pb-16'}>
        {'하이퍼디 포트폴리오'}
      </div>
      <div className={'flex flex-col gap-32'}>
        {data.map((value, index) => {
          return (
            <div key={index} className={'flex flex-row gap-32'}>
              <div className={'flex flex-none flex-col gap-2'}>
                <div className={'flex border w-9 font-ibmPlexMono text-sm font-semibold'}>{value.type}</div>
                <div className={'text-[#2F2D35] text-4xl font-normal'}>{value.description}</div>
                <div className={'text-[#2F2D35] text-4xl font-bold '}>{value.title}</div>
                <div className={'flex flex-row gap-1 border-b border-[#2F2D35]'}>
                  <div className={'text-lg font-medium text-[#2F2D35]'}>바로가기</div>
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
                </div>
                <div className={'text-[#646464] text-lg font-normal pt-8'}>사용된 테크 스택</div>
                <div className="grid w-full grid-cols-2 gap-2">
                  {value.techStack.map((skill, index) => {
                    return <Skill key={index} value={skill} />;
                  })}
                </div>
              </div>
              <div className={'flex flex-1 items-center justify-center flex-row gap-4'}>
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
  );
};
export default Portfolio;
