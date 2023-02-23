import { Handle } from "reactflow";

const SkillCategoryNode = ({ data: { label } }) => {
  return (
    <>
      <Handle type="target" position="top"/>
      <div className="flex flex-col items-center border border-black rounded-lg bg-yellow-200 p-2">
        <h3>{label}</h3>
        <span className="text-xs">Skill Category</span>
      </div>
      <Handle type="source" position="bottom"/>
    </>
  );
};

export default SkillCategoryNode;
