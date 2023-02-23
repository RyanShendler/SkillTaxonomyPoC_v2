import { Handle } from "reactflow";

const SkillNode = ({ data: { label } }) => {
  return (
    <>
      <Handle type="target" position="top" />
      <div className="border border-black rounded-lg bg-blue-200 p-2 flex flex-col items-center">
        <h3 className="text-base">{label}</h3>
        <span className="text-xs">Skill</span>
      </div>
    </>
  );
};

export default SkillNode;
