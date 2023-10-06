interface ISkill {
  value: string;
}
const Skill = ({ value }: ISkill) => {
  return (
    <div
      className={
        'flex bg-[#EBEDFF] items-center justify-center px-6 py-3 rounded border border-[#BEC1FF] font-normal text-xl text-[#565CFF]'
      }>
      {value}
    </div>
  );
};
export default Skill;
