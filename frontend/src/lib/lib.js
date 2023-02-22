export function getNodes(nodeArray) {
  return nodeArray.map((node) => {
    const parent = !node.parent ? {} : { parentNode: node.parent };
    return {
      id: node.id,
      position: { x: 100, y: 100 },
      data: { label: node.name },
      ...parent,
    };
  });
}

export function getEdges(nodeArray) {
  let ret = [];
  nodeArray.forEach((node) => {
    if (node.parent) {
      ret.push({
        id: `${node.parent}_${node.id}`,
        source: node.parent,
        target: node.id,
        markerStart: { type: "arrow" },
      });
    }
  });
  return ret;
}
