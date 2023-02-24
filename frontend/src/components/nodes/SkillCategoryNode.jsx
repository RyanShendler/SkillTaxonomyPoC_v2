import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Handle } from "reactflow";
import { AddChildSkill } from "../../graphql/mutations";
import { GetTaxonomy } from "../../graphql/queries";
import AddChildModal from "../AddChildModal";
import Modal from "../common/Modal";
import DeleteNodeModal from "../DeleteNodeModal";

const SkillCategoryNode = ({ data: { name, id } }) => {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <Handle type="target" position="top" />
      <div className="border border-black rounded-lg bg-yellow-200 p-2 flex flex-col items-center">
        <h3>{name}</h3>
        <div className="flex space-x-2">
          <button
            className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100"
            onClick={() => setAddModal(true)}
          >
            Add Child
          </button>
          <button
            className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100"
            onClick={() => setDeleteModal(true)}
          >
            Delete Node
          </button>
        </div>
      </div>
      <Handle type="source" position="bottom" />
      <Modal
        open={addModal}
        setOpen={setAddModal}
        title="Add Child to Skill Category"
        content={<AddChildModal id={id} closeModal={() => setAddModal(false)}/>}
      />
      <Modal
        open={deleteModal}
        setOpen={setDeleteModal}
        title="Are You Sure You Want to Delete this Node?"
        content={<DeleteNodeModal id={id} closeModal={() => setDeleteModal(false)}/>}
      />
    </>
  );
};

export default SkillCategoryNode;
