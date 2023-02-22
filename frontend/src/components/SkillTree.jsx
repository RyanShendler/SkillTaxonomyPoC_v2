import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { GetTaxonomy } from "../graphql/queries";
import { getEdges, getNodes } from "../lib/lib";

const SkillTree = () => {
  const { data } = useQuery(GetTaxonomy);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if(!data) return
    const nodeArray = data?.getTaxonomy
    setNodes(getNodes(nodeArray))
    setEdges(getEdges(nodeArray))
  }, [data])

  return (
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      )}
    </>
  );
};

export default SkillTree;
