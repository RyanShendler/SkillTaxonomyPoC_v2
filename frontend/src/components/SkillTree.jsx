import { useQuery } from "@apollo/client";
import { useEffect, useMemo } from "react";
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
import SkillCategoryNode from "./nodes/SkillCategoryNode";
import SkillNode from "./nodes/SkillNode";
import TaxonomyNode from "./nodes/TaxonomyNode";



const SkillTree = () => {
  const nodeTypes = useMemo(() => ({Taxonomy: TaxonomyNode, SkillCategory: SkillCategoryNode, Skill: SkillNode}), [])
  const { data } = useQuery(GetTaxonomy);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!data) return;
    const nodeArray = data?.getTaxonomy;
    const formattedNodes = getNodes(nodeArray)
    const formattedEdges = getEdges(nodeArray)
    setNodes(formattedNodes);
    setEdges(formattedEdges);
  }, [data]);

  return (
    <div className="w-full h-full">
      {!data ? (
        <div>Loading...</div>
      ) : (
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      )}
    </div>
  );
};

export default SkillTree;
