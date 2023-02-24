import { useState } from "react";
import { Handle } from "reactflow";
import AddChildModal from "../AddChildModal";
import Modal from "../common/Modal";

const TaxonomyNode = ({ data: { id } }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border border-black rounded-lg p-2 bg-green-200 flex flex-col items-center">
        <h3>Taxonomy</h3>
        <button
          className="text-xs bg-white border-black border rounded-md p-1 hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          Add Child
        </button>
      </div>
      <Handle type="source" position="bottom" />
      <Modal
        open={open}
        setOpen={setOpen}
        title="Add Child to Taxonomy"
        content={<AddChildModal closeModal={() => setOpen(false)} id={id} />}
      />
    </>
  );
};

export default TaxonomyNode;
