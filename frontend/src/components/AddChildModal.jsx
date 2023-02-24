import { useMutation } from "@apollo/client";
import { useState } from "react";
import { AddChildCategory, AddChildSkill } from "../graphql/mutations";
import { GetTaxonomy } from "../graphql/queries";

const AddChildModal = ({ id, closeModal }) => {
  const [addChildCategory] = useMutation(AddChildCategory, {
    refetchQueries: [{ query: GetTaxonomy }],
  });
  const [addChildSkill] = useMutation(AddChildSkill, {
    refetchQueries: [{ query: GetTaxonomy }],
  });
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const validateForm = () => {
    if (!type) {
      setError(true);
      return false;
    }
    if (!name) {
      setError(true);
      return false;
    }
    return true;
  };

  const handleCreateChild = () => {
    if (validateForm()) {
      if (type === "Skill") {
        addChildSkill({
          variables: {
            parentId: id,
            name: name,
          },
        });
      } else {
        addChildCategory({
          variables: {
            parentId: id,
            name: name,
          },
        });
      }
      closeModal();
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-2 space-y-4">
      <label>
        Type<span className="text-red-500">*</span>
        <select
          value={type}
          onChange={(e) => {
            setError(false);
            setType(e.target.value);
          }}
          className="ml-4 border border-black rounded-md p-1"
        >
          <option value={""} />
          <option value={"Skill"}>Skill</option>
          <option value={"SkillCategory"}>SkillCategory</option>
        </select>
      </label>
      <label>
        Name<span className="text-red-500">*</span>
        <input
          className="ml-4 border border-black rounded-md p-1"
          type={"text"}
          value={name}
          onChange={(e) => {
            setError(false);
            setName(e.target.value);
          }}
        />
      </label>
      <span className={`text-red-500 text-sm ${error ? "" : "hidden"}`}>
        A required field was not provided
      </span>
      <div className="flex w-full justify-evenly">
        <button
          className="bg-green-500 text-white font-bold rounded-md p-2"
          onClick={() => handleCreateChild()}
        >
          Save
        </button>
        <button
          className="bg-red-500 text-white font-bold rounded-md p-2"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddChildModal;
