import { useState } from "react";
import { Handle } from "reactflow";
import Modal from "../common/Modal";
import DeleteNodeModal from "../DeleteNodeModal";

const SkillNode = ({ data: { name, id } }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Handle type="target" position="top" />
      <div className="border border-black rounded-lg bg-blue-200 p-2 flex flex-col items-center">
        <h3>{name}</h3>
        <button
          className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          Delete Node
        </button>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Are You Sure You Want to Delete this Node?"
        content={<DeleteNodeModal id={id} closeModal={() => setOpen(false)} />}
      />
    </>
  );
};

export default SkillNode;
