import { useMutation } from "@apollo/client";
import { DeleteNode } from "../graphql/mutations";
import { GetTaxonomy, GetUnattachedSkills } from "../graphql/queries";

const DeleteNodeModal = ({ id, closeModal }) => {
  const [deleteNode] = useMutation(DeleteNode, {
    refetchQueries: [{ query: GetTaxonomy }, {query: GetUnattachedSkills}],
  });

  const handleDeleteNode = () => {
    deleteNode({
      variables: {
        nodeId: id,
      },
    });
    closeModal();
  };

  return (
    <div className="w-full flex justify-evenly p-2">
      <button
        className="bg-green-500 text-white font-bold rounded-md p-2"
        onClick={() => handleDeleteNode()}
      >
        Delete
      </button>
      <button
        className="bg-red-500 text-white font-bold rounded-md p-2"
        onClick={() => closeModal()}
      >
        Cancel
      </button>
    </div>
  );
};

export default DeleteNodeModal;
