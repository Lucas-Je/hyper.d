'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { useIsPc } from '../hooks/useMobile';
import { useTranslations } from 'next-intl';

const Testimonial = () => {
  const isPc = useIsPc();
  const t = useTranslations('testimonial');

  const data = [
    {
      title: t('title_1'),
      description: t('description_1'),
      writer: t('writer_1'),
      icon: '/assets/images/testimonial/avatar1.png',
    },
    {
      title: t('title_2'),
      description: t('description_2'),
      writer: t('writer_2'),
      icon: '/assets/images/testimonial/avatar1.png',
    },
    {
      title: t('title_3'),
      description: t('description_3'),
      writer: t('writer_3'),
      icon: '/assets/images/testimonial/avatar1.png',
    },
    {
      title: t('title_4'),
      description: t('description_4'),
      writer: t('writer_4'),
      icon: '/assets/images/testimonial/avatar1.png',
    },
    {
      title: t('title_5'),
      description: t('description_5'),
      writer: t('writer_5'),
      icon: '/assets/images/testimonial/avatar1.png',
    },
  ];

  return (
    <div id="reviews" className={'flex items-center justify-center w-full py-20 md:py-40 bg-white'}>
      <div className="flex flex-col max-w-screen-xl gap-16 overflow-hidden">
        <div className="text-[#2F2D35] text-[30px] md:text-[60px] font-bold whitespace-pre-line break-keep leading-[1.2] px-4">
          {t('title')}
        </div>
        <Swiper
          className="custom-swiper w-full h-full"
          slidesPerView={isPc ? 3.2 : 1.2}
          spaceBetween={16}
          initialSlide={data.length / 2}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={true}>
          {data.map((value, index) => {
            return (
              <SwiperSlide key={index} className={'bg-black rounded-xl md:rounded-3xl p-4 md:p-8'}>
                <div className={'flex h-full w-full justify-between flex-col p-4 gap-4 whitespace-pre-line break-keep'}>
                  <div className={'flex flex-col gap-4 md:gap-8'}>
                    <div className={'text-lg text-[#2F78FF]'}>{value.title}</div>
                    <div className={'text-2xl font-bold text-white'}>{value.description}</div>
                  </div>
                  <div className={'flex flex-row justify-between items-center'}>
                    <div className={'text-lg opacity-60 text-white'}>{value.writer}</div>
                    <div className={'flex w-12 h-auto bg-white rounded-full'}>
                      <Image
                        src={value.icon}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt={value.writer}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;
