import { useState } from "react";
import { Handle } from "reactflow";
import Modal from "../common/Modal";
import DeleteNodeModal from "../DeleteNodeModal";
import RelatedSkillsModal from "../RelatedSkillsModal";

const SkillNode = ({ data: { name, id } }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [relatedModal, setRelatedModal] = useState(false);

  return (
    <>
      <Handle type="target" position="top" />
      <div className="border border-black rounded-lg bg-blue-200 p-2 flex flex-col items-center">
        <h3>{name}</h3>
        <button
          className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100 mb-2"
          onClick={() => setRelatedModal(true)}
        >
          Related Skills
        </button>
        <button
          className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100"
          onClick={() => setDeleteModal(true)}
        >
          Delete Node
        </button>
      </div>
      <Modal
        open={deleteModal}
        setOpen={setDeleteModal}
        title="Are You Sure You Want to Delete this Node?"
        content={
          <DeleteNodeModal id={id} closeModal={() => setDeleteModal(false)} />
        }
      />
      <Modal
        open={relatedModal}
        setOpen={setRelatedModal}
        title="Related Skills"
        content={<RelatedSkillsModal id={id}/>}
      />
    </>
  );
};

export default SkillNode;
