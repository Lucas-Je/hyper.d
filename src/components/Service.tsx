import Image from 'next/image';
import Skill from '@/src/components/Skill';
import SmoothLink from '@/src/components/Atoms/SmoothLink';
import { useTranslations } from 'next-intl';

const skills = ['React.js', 'NodeJs', 'React Native', 'Vue.js', 'Flutter', 'Django', 'Kotlin', 'Swift', 'Java'];
const Service = () => {
  const t = useTranslations('service');

  return (
    <div id="service" className="flex flex-row items-center justify-center w-full bg-white py-20 md:py-40">
      <div className="flex flex-col flex-1 max-w-screen-xl px-[16px] gap-4">
        <div className={'text-[#565CFF] text-lg font-medium'}>SERVICE AREA</div>
        <div className={'flex flex-col gap-8 md:gap-16'}>
          <div className={'text-[#2F2D35] text-3xl md:text-6xl font-bold whitespace-pre-line break-keep'}>
            {t('title')}
          </div>
          <div className={'flex flex-col gap-4 text-lg font-medium text-[#2F2D35]'}>
            <div> {t('main_techstack')}</div>
            <div className={'flex flex-row gap-2 flex-wrap'}>
              {skills.map((value, index) => {
                return <Skill value={value} key={index} />;
              })}
            </div>
            <div className={'flex flex-row gap-2'}>
              <div className={'flex flex-col text-lg font-medium text-[#646464]'}>{t('question')}</div>
              <div className={'flex flex-row gap-1 border-b border-[#2F2D35]'}>
                <SmoothLink href="#contact" className={'text-lg font-medium text-[#2F2D35]'}>
                  {t('contact')}
                </SmoothLink>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
