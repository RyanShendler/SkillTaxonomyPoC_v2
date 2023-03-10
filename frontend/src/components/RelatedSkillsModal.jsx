import { useQuery } from "@apollo/client";
import { GetRelatedSkills } from "../graphql/queries";

const RelatedSkillsModal = ({ id }) => {
  const { data, loading } = useQuery(GetRelatedSkills, {
    variables: {
      skillId: id,
    },
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full h-[300px] border border-gray-200 rounded-md items-center flex flex-col overflow-y-auto">
          {!data?.getRelatedSkills.length ? (
            <div className="flex items-center justify-center text-xl h-full">
              No Related Skills
            </div>
          ) : (
            data?.getRelatedSkills.map((skill) => {
              return (
                <div
                  key={skill?.id}
                  className="text-xl border-b border-gray-200 w-full text-center p-2 -mb-[1px]"
                >
                  {skill?.name}
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default RelatedSkillsModal;
