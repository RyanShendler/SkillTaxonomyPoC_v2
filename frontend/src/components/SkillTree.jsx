import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Taxonomy" } },
  { id: "2", position: { x: 50, y: 50 }, data: { label: "Developer" }, parentNode: "1" },
  { id: "3", position: { x: -50, y: 50 }, data: { label: "Designer" }, parentNode: "1" },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", markerStart: {type: 'arrow'} },
  { id: "e1-3", source: "1", target: "3", markerStart: {type: 'arrow'} },
];

const SkillTree = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <>
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
    </>
  );
};

export default SkillTree;
