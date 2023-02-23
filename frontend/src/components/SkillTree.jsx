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
const ELK = require('elkjs')

const elk = new ELK();

const getLayoutedElements = async (nodes, edges) => {
  const nodeList = nodes.map((node) => {
    return {
      id: node.id,
      width: 172,
      height: 36,
    };
  });
  const edgeList = edges.map((edge) => {
    return {
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target]
    }
  });

  const graph = {
    id: "root",
    layoutOptions: {'elk.algorithm': 'layered', 'elk.direction': 'DOWN', 'elk.layered.spacing.nodeNodeBetweenLayers': 50, 'elk.layered.nodePlacement.strategy': 'SIMPLE'},
    children: nodeList,
    edges: edgeList
  }
  const {children: nodesWithPosition} = await elk.layout(graph)
  nodes.forEach((node) => {
    const nodeWithPosition = nodesWithPosition.find(n => n.id === node.id)
    node.position = {
      x: nodeWithPosition.x,
      y: nodeWithPosition.y
    }

    return node
  })

  return ({nodes, edges})
}

const SkillTree = () => {
  const { data } = useQuery(GetTaxonomy);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!data) return;
    const nodeArray = data?.getTaxonomy;
    const unformattedNodes = getNodes(nodeArray);
    const unformattedEdges = getEdges(nodeArray);
    getLayoutedElements(unformattedNodes, unformattedEdges).then(({nodes: formattedNodes, edges: formattedEdges}) => {
      setNodes(formattedNodes);
      setEdges(formattedEdges);
    })
    
  }, [data]);

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
