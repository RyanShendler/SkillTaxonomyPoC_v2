import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Handle } from "reactflow";
import { AddChildSkill } from "../../graphql/mutations";
import { GetTaxonomy } from "../../graphql/queries";
import Modal from "../common/Modal";

const SkillCategoryNode = ({ data: { name, id } }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Handle type="target" position="top" />
      <div className="border border-black rounded-lg bg-yellow-200 p-2 flex flex-col items-center">
        <h3>{name}</h3>
        <div className="flex space-x-2">
          <button
            className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100"
            onClick={() => setOpen(true)}
          >
            Add Child
          </button>
          <button className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100">Delete Node</button>
        </div>
      </div>
      <Handle type="source" position="bottom" />
      <Modal
        open={open}
        setOpen={setOpen}
        title="Add Child to Skill Category"
        content={<span>Skill Category Modal</span>}
      />
    </>
  );
};

export default SkillCategoryNode;
