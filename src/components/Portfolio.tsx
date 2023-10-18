import Image from 'next/image';
import Skill from '@/src/components/Skill';
import { useTranslations } from 'next-intl';

const Portfolio = () => {
  const t = useTranslations('portfolio');
  const data = [
    {
      type: ['WEB'],
      description: t('workvisa_description'),
      title: t('workvisa_title'),
      link: 'https://workvisa.co.kr/',
      techStack: ['Naver Cloud', 'Nest.js', 'Next.js', 'PostgreSQL'],
      images: [
        '/assets/images/portfolio/workvisa-2.png',
        '/assets/images/portfolio/workvisa-3.png',
        '/assets/images/portfolio/workvisa-4.png',
        '/assets/images/portfolio/workvisa-1.png',
      ],
    },
    {
      type: ['APP'],
      description: t('pops_description'),
      title: t('pops_title'),
      link: 'https://play.google.com/store/apps/details?id=com.popsclient',
      techStack: ['React Native', 'Node.js', 'MongoDB'],
      images: ['/assets/images/portfolio/pops-app-1.png', '/assets/images/portfolio/pops-app-2.png'],
    },
    {
      type: ['APP'],
      description: t('modoo_fashion_description'),
      title: t('modoo_fashion_title'),
      link: 'https://play.google.com/store/apps/details?id=com.modoofashion.client&hl=ko-KR',
      techStack: ['Flutter', 'Node.js', 'MongoDB'],
      images: [
        '/assets/images/portfolio/modoo-fashion-1.png',
        '/assets/images/portfolio/modoo-fashion-2.png',
        '/assets/images/portfolio/modoo-fashion-3.png',
        '/assets/images/portfolio/modoo-fashion-4.png',
      ],
    },
    {
      type: ['APP', 'MAINTANANACE'],
      description: t('oasis_exchange_description'),
      title: t('oasis_exchange_title'),
      link: 'https://oasisexc.com/',
      techStack: ['Flutter', 'Next.js', 'Nest.js', 'gRPC', 'Plasma', 'RabbitMQ'],
      images: ['/assets/images/portfolio/oasis-exchange-1.png'],
    },
    {
      type: ['APP'],
      description: t('oranman_description'),
      title: t('oranman_title'),
      link: 'https://play.google.com/store/apps/details?id=com.oranman',
      techStack: ['React Native', 'Realm', 'Typescript', 'Node.js'],
      images: [
        '/assets/images/portfolio/oranman-1.png',
        '/assets/images/portfolio/oranman-2.png',
        '/assets/images/portfolio/oranman-3.png',
      ],
    },
    {
      type: ['APP'],
      description: t('ping_calender_description'),
      title: t('ping_calender_title'),
      link: 'https://play.google.com/store/apps/details?id=com.tothepoint.pingtopong&hl=ko&gl=US',
      techStack: ['Flutter', 'Dart'],
      images: [
        '/assets/images/portfolio/pingcalender-1.png',
        '/assets/images/portfolio/pingcalender-2.png',
        '/assets/images/portfolio/pingcalender-3.png',
      ],
    },
    {
      type: ['APP'],
      description: t('mathpang_description'),
      title: t('mathpang_title'),
      link: 'https://play.google.com/store/apps/details?id=com.mathpang.game',
      techStack: ['React Native', 'Typescript'],
      images: [
        '/assets/images/portfolio/mathpang-1.png',
        '/assets/images/portfolio/mathpang-2.png',
        '/assets/images/portfolio/mathpang-3.png',
      ],
    },
    {
      type: ['WEB', 'MAINTANECE'],
      description: t('episoden_description'),
      title: t('episoden_title'),
      link: 'https://episoden.com/main',
      techStack: ['Next.js', 'Typescript', 'WebRTC'],
      images: [
        '/assets/images/portfolio/episoden-1.png',
        '/assets/images/portfolio/episoden-2.png',
        '/assets/images/portfolio/episoden-3.png',
      ],
    },
    {
      type: ['WEB', 'MAINTANECE'],
      description: t('trevari_description'),
      title: t('trevari_title'),
      link: 'https://m.trevari.co.kr/',
      techStack: ['React.js', 'Typescript'],
      images: [
        '/assets/images/portfolio/trevari-1.png',
        '/assets/images/portfolio/trevari-2.png',
        '/assets/images/portfolio/trevari-3.png',
        '/assets/images/portfolio/trevari-4.png',
      ],
    },
    {
      type: ['APP', 'MAINTANECE'],
      description: t('gadjet_description'),
      title: t('gadjet_title'),
      link: 'https://gadjet.io/',
      techStack: ['React.js', 'Node.js', 'React Native'],
      images: [
        '/assets/images/portfolio/gadjet-1.png',
        '/assets/images/portfolio/gadjet-3.png',
        '/assets/images/portfolio/gadjet-4.png',
        '/assets/images/portfolio/gadjet-2.png',
      ],
    },
    {
      type: ['WEB', 'MAINTANECE'],
      description: t('nadio_description'),
      title: t('nadio_title'),
      link: 'https://www.nadio.co.kr/',
      techStack: ['React Native', 'Django', 'Python', 'PostgreSQL'],
      images: [
        '/assets/images/portfolio/nadio-1.png',
        '/assets/images/portfolio/nadio-2.png',
        '/assets/images/portfolio/nadio-3.png',
      ],
    },
    {
      type: ['WEB', 'MAINTANECE'],
      description: t('vary_description'),
      title: t('vary_title'),
      link: 'https://vary.one/',
      techStack: ['React.js', 'AWS', 'Node.js', 'MongoDB'],
      images: ['/assets/images/portfolio/vary-1.png'],
    },
    {
      type: ['SERVER'],
      description: t('pops_web_description'),
      title: t('pops_web_title'),
      link: 'https://pops.show/',
      techStack: ['AWS', 'MariaDB', 'Node.js', 'Socket', 'Webrtc'],
      images: [
        '/assets/images/portfolio/pops-web-1.png',
        '/assets/images/portfolio/pops-web-2.png',
        '/assets/images/portfolio/pops-web-3.png',
      ],
    },
  ];

  return (
    <div id="portfolio" className={'flex flex-row w-full items-center justify-center py-20 md:py-40 bg-white z-1'}>
      <div className="flex flex-col flex-1 max-w-screen-xl gap-4 pl-[16px]">
        <div className={'text-[#565CFF] md:text-lg font-medium'}>PORTFOLIO</div>
        <div
          className={'text-[#2F2D35] text-3xl md:text-4xl md:text-6xl font-bold whitespace-pre-line break-keep pb-16'}>
          {t('title')}
        </div>
        <div className={'flex flex-col gap-16 md:gap-32'}>
          {data.map((value, index) => {
            return (
              <div key={index} className={'flex flex-col md:flex-row gap-8'}>
                <div className={'flex flex-none flex-col gap-1 md:gap-2 md:w-[400px]'}>
                  <div className="flex flex-row items-center justify-start gap-2">
                    {value.type.map((_type) => (
                      <div
                        key={value.title + _type}
                        className={
                          'border border-black items-center justify-center px-[4px] py-[2px] font-ibmPlexMono text-xs md:text-sm font-semibold w-min'
                        }>
                        {_type}
                      </div>
                    ))}
                  </div>
                  <div className={'text-[#2F2D35] text-xl md:text-2xl md:text-4xl font-normal mt-[16px]'}>
                    {value.description}
                  </div>
                  <div className={'text-[#2F2D35] text-2xl md:text-3xl md:text-4xl font-bold '}>{value.title}</div>
                  <a
                    href={value.link}
                    target="_blank"
                    className={
                      'flex w-[120px] flex-row items-center justify-around border-b border-[#2F2D35] mt-[16px]'
                    }>
                    <div className={'flex flex-1 md:text-lg font-medium text-[#2F2D35]'}>{t('go')}</div>
                    <div className={'flex h-auto'}>
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
                  <div className={'text-[#646464] md:text-lg font-normal pt-8'}>{t('techstacks_used')}</div>
                  <div className="flex flex-wrap gap-2">
                    {value.techStack.map((skill, index) => {
                      return <Skill key={index} value={skill} />;
                    })}
                  </div>
                </div>
                <div className="flex h-[260px] md:h-[360px] md:flex-1 flex-row overflow-x-scroll">
                  <div className="flex h-full gap-4">
                    {value.images.map((item, index) => (
                      <Image
                        key={value.title + index}
                        src={item}
                        width="0"
                        height="0"
                        alt=""
                        className="h-full w-min border border-[#BEC1FF] rounded-[20px]"
                        sizes="100vw"
                      />
                    ))}
                  </div>
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
