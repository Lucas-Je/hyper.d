'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const data = [
  {
    title: '비개발팀이 앱을 제작하는 법',
    description: '팀 내부 개발자가 없고, 저도 개발을 몰라 걱정했지만 하이퍼디를 만나고 무사히 완료하고 출시했어요.',
    writer: '바로캐시 김병찬 대표',
    icon: '/assets/images/testimonial/avatar1.png',
  },
  {
    title: '플랫폼 출시까지 함께',
    description: '플랫폼의시작부터 끝까지 만족스럽게 런칭할 수 있었습니다. 장기적인 파트너로 함께 하고 싶습니다.',
    writer: '워크비자 CEO, 고경우',
    icon: '/assets/images/testimonial/avatar1.png',
  },
  {
    title: '전문 지식을 가진 팀을 만났어요',
    description: '블록체인 개발, 하이퍼디 전문 개발자와 함께 만들었어요.',
    writer: '가디언홀딩스 CTO, 강규태',
    icon: '/assets/images/testimonial/avatar1.png',
  },
  {
    title: '돌고 돌아 만난 개발사',
    description: '처음에는 반신반의했지만 확실한 검증과 PM님의 매니징이 좋아 이제는 하이퍼디에 정착했어요.',
    writer: '어썸 CTO, 김성래',
    icon: '/assets/images/testimonial/avatar1.png',
  },
  {
    title: '돌고 돌아 만난 개발사',
    description: '다른곳과 많이 실패 했습니다. 하이퍼 디에 정착했어요.',
    writer: '로컬스루 배승민 기획자',
    icon: '/assets/images/testimonial/avatar1.png',
  },
];
const Testimonial = () => {
  return (
    <div id="reviews" className={'flex w-full py-16 px-64 bg-white'}>
      <Swiper
        className={'@apply w-full'}
        slidesPerView={3.2}
        spaceBetween={16}
        initialSlide={data.length / 2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}>
        {data.map((value, index) => {
          return (
            <SwiperSlide key={index} className={'@apply flex w-auto bg-black rounded-3xl p-8'}>
              <div className={'flex h-72 justify-between flex-col p-4 gap-4 whitespace-pre-line break-keep'}>
                <div className={'flex flex-col gap-8'}>
                  <div className={'text-lg text-[#2F78FF]'}>{value.title}</div>
                  <div className={'text-2xl font-bold  text-white'}>{value.description}</div>
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
  );
};
export default Testimonial;
