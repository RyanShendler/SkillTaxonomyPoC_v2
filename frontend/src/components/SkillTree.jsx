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
import dagre from "dagre";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges) => {
  dagreGraph.setGraph({ rankdir: "TB" });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: nodeWidth,
      height: nodeHeight,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = "top";
    node.sourcePosition = "bottom";
    node.position = {
      x: nodeWithPosition.x,
      y: nodeWithPosition.y
    };
    return node;
  });

  return { nodes, edges };
};

const SkillTree = () => {
  const { data } = useQuery(GetTaxonomy);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!data) return;
    const nodeArray = data?.getTaxonomy;
    const unformattedNodes = getNodes(nodeArray);
    const unformattedEdges = getEdges(nodeArray);
    const { nodes: formattedNodes, edges: formattedEdges } =
      getLayoutedElements(unformattedNodes, unformattedEdges);
    setNodes(formattedNodes);
    setEdges(formattedEdges);
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
