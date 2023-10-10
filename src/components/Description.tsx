const data = [
  {
    title: '전문 PM과 소통하세요',
    description:
      '전문 PM과 소통하세요.\n 요청 너머의 기획 의도를 파악하고 빈틈없이 채워갑니다.\n개발을 몰라도 실시간으로 소통할 수 있습니다.',
  },
  {
    title: '비슷한 프로젝트 경험자로 팀을 꾸립니다.',
    description: '경험이 힘입니다. 우리 서비스에만 적용되는 디테일을 알고 있는 전문 팀이 함께합니다.',
  },
  {
    title: 'Top 1% 개발자가 만듭니다.',
    description: '4, 5차 스크리닝을 거쳐 합류한\n전 세계 top 1% 개발자들이 만듭니다.\n경험있는 개발자가 리드합니다.',
  },
  {
    title: '유지보수를 생각합니다.',
    description:
      '제작 이후 장기 운영 계약이 가능합니다.\n기능만 하고 손쓸 수 없는 코드가 아닌,\n재활용할 수 있고, 수정할 수 있는 코드를 사용합니다.',
  },
];

const Description = () => {
  return (
    <div id="description" className="grid w-full grid-cols-2 gap-16 px-72 py-60 bg-white">
      {data.map((value, index) => {
        return (
          <div key={index} className={'flex flex-col gap-1 justify-start whitespace-pre-line break-keep'}>
            <div className={'flex text-[48px] text-[#2B1710] leading-[1.2] font-bold'}>{value.title}</div>
            <div className={'flex text-[24px] text-[#6A7C96] leading-[1.6] mt-[20px]'}>{value.description}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Description;
