import { Handle } from "reactflow";

const SkillNode = ({ data: { name, id } }) => {
  return (
    <>
      <Handle type="target" position="top" />
      <div className="border border-black rounded-lg bg-blue-200 p-2 flex flex-col items-center">
        <h3>{name}</h3>
        <button className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100">Delete Node</button>
      </div>
    </>
  );
};

export default SkillNode;
