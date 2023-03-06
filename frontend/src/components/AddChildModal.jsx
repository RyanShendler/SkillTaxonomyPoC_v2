import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  AddChildCategory,
  AddChildSkill,
  AttachExistingNode,
} from "../graphql/mutations";
import {
  GetTaxonomy,
  GetUnconnectedNodes,
} from "../graphql/queries";

const AddChildModal = ({ id, closeModal }) => {
  const [addChildCategory] = useMutation(AddChildCategory, {
    refetchQueries: [{ query: GetTaxonomy }, "GetUnconnectedNodes"],
  });
  const [addChildSkill] = useMutation(AddChildSkill, {
    refetchQueries: [{ query: GetTaxonomy }, "GetRelatedSkills", "GetUnconnectedNodes"],
  });
  const [attachExistingNode] = useMutation(AttachExistingNode, {
    refetchQueries: [
      "GetTaxonomy",
      "GetUnattachedSkills",
      "GetUnconnectedNodes",
      "GetRelatedSkills",
    ],
  });
  const { data } = useQuery(GetUnconnectedNodes, {
    variables: { parentId: id },
  });
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [node, setNode] = useState("");
  const [error, setError] = useState({ create: false, attach: false });

  const validateAttach = () => {
    if (!node) {
      setError({ ...error, attach: true });
      return false;
    }
    return true;
  };

  const validateCreate = () => {
    if (!type) {
      setError({ ...error, create: true });
      return false;
    }
    if (!name) {
      setError({ ...error, create: true });
      return false;
    }
    return true;
  };

  const handleAttachNode = () => {
    if (validateAttach()) {
      attachExistingNode({
        variables: {
          parentId: id,
          nodeId: node,
        },
      });
      closeModal();
    }
  };

  const handleCreateChild = () => {
    if (validateCreate()) {
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
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className="flex justify-between w-full space-x-6">
          <div className="flex flex-col w-full h-full p-2 space-y-4">
            <h3>Create New Node</h3>
            <label>
              Type<span className="text-red-500">*</span>
              <select
                value={type}
                onChange={(e) => {
                  setError({ ...error, create: false });
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
                  setError({ ...error, create: false });
                  setName(e.target.value);
                }}
              />
            </label>
            <span
              className={`text-red-500 text-sm ${error.create ? "" : "hidden"}`}
            >
              A required field was not provided
            </span>
            <button
              className="bg-green-500 text-white font-bold rounded-md p-2"
              onClick={() => handleCreateChild()}
            >
              Create
            </button>
          </div>
          <span className="self-center text-lg font-bold">OR</span>
          <div className="flex flex-col w-full h-full p-2 space-y-4">
            <h3>Attach Existing Node</h3>
            <label>
              Nodes <span className="text-red-500">*</span>
              <select
                className="ml-4 border border-black rounded-md p-1"
                value={node}
                onChange={(e) => {
                  setError({ ...error, attach: false });
                  setNode(e.target.value);
                }}
              >
                <option value={""} />
                {data?.getUnconnectedNodes?.map((node) => {
                  return (
                    <option key={node.id} value={node.id}>
                      {node.name}
                    </option>
                  );
                })}
              </select>
            </label>
            <span
              className={`text-red-500 text-sm ${error.attach ? "" : "hidden"}`}
            >
              A required field was not provided
            </span>
            <button
              className="bg-green-500 text-white font-bold rounded-md p-2"
              onClick={() => handleAttachNode()}
            >
              Attach
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddChildModal;
