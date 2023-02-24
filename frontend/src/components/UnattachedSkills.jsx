import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GetUnattachedSkills } from "../graphql/queries";
import Modal from "./common/Modal";
import DeleteNodeModal from "./DeleteNodeModal";

const UnattachedSkills = () => {
  const { data } = useQuery(GetUnattachedSkills);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  return (
    <>
      <div className="absolute z-10 bg-white border-2 border-black w-1/5 h-2/5 left-4 top-4 rounded-2xl p-4 flex flex-col">
        <h3 className="font-bold mb-2">Unattached Skills</h3>
        {!data ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full h-full border border-gray-200 rounded-md overflow-y-auto">
            {!data?.getUnattachedSkills?.length ? (
              <div className="w-full h-full flex items-center justify-center">
                No Unattached Skills
              </div>
            ) : (
              data?.getUnattachedSkills?.map((skill) => {
                return (
                  <div
                    key={skill.id}
                    className="border-b border-gray-200 p-2 flex justify-between items-center"
                  >
                    {skill.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[20px] fill-red-500 hover:fill-red-400 cursor-pointer"
                      viewBox="0 96 960 960"
                      onClick={() => {
                        setId(skill.id);
                        setOpen(true);
                      }}
                    >
                      <path d="m330 768 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42Zm150 208q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-156t86-127Q252 239 325 207.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 82-31.5 155T763 858.5q-54 54.5-127 86T480 976Zm0-60q142 0 241-99.5T820 576q0-142-99-241t-241-99q-141 0-240.5 99T140 576q0 141 99.5 240.5T480 916Zm0-340Z" />
                    </svg>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        title="Are You Sure You Want to Delete this Skill?"
        content={<DeleteNodeModal id={id} closeModal={() => setOpen(false)} />}
      />
    </>
  );
};

export default UnattachedSkills;
