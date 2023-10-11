import Image from 'next/image';
import Skill from '@/src/components/Skill';
import SmoothLink from '@/src/components/Atoms/SmoothLink';

const skills = ['React.js', 'NodeJs', 'React Native', 'Vue.js', 'Flutter', 'Django', 'Android', 'iOS', 'Java'];
const Service = () => {
  return (
    <div id="service" className="flex flex-row items-center justify-center w-full bg-white py-60">
      <div className="flex flex-col flex-1 max-w-screen-xl px-[16px] gap-4">
        <div className={'text-[#565CFF] text-lg font-medium'}>SERVICE AREA</div>
        <div className={'flex flex-col gap-16'}>
          <div className={'text-[#2F2D35] text-6xl font-bold whitespace-pre-line break-keep'}>
            {'신규 어플리케이션, 웹 개발\n기존 앱/웹 유지보수'}
          </div>
          <div className={'flex flex-row gap-2'}>
            <div className={'flex flex-col text-lg font-medium text-[#646464]'}>원하는 테크스택이 따로 있나요?</div>
            <div className={'flex flex-row gap-1 border-b border-[#2F2D35]'}>
              <SmoothLink href={'#contact'} className={'text-lg font-medium text-[#2F2D35]'}>
                문의하기
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
  );
};
export default Service;
