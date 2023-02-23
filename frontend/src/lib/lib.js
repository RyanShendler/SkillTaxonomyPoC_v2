import { stratify, tree } from "d3-hierarchy";

/*export function getNodes(nodeArray) {
  return nodeArray.map((node) => {
    const parent = !node.parent ? {} : { parentNode: node.parent };
    return {
      id: node.id,
      position: { x: 0, y: 0 },
      data: { label: node.name },
      ...parent,
    };
  });
}*/

export function getNodes(nodeArray, width=172, height=36, xSeparation=25, ySeparation=75){
  const root = stratify().parentId((d) => d.parent)(nodeArray)
  const nodeTree = tree().nodeSize([width+xSeparation, height+ySeparation]).separation((a, b) => {
    return (a.parent == b.parent ? 1 : 1.25)
  })(root)
  return nodeTree.descendants().map(({data, x, y}) => {
    return {
      id: data.id,
      data: {label: data.name},
      position: {x, y}
    }
  })
}

export function getEdges(nodeArray) {
  let ret = [];
  nodeArray.forEach((node) => {
    if (node.parent) {
      ret.push({
        id: `${node.parent}_${node.id}`,
        source: node.parent,
        target: node.id,
        style: {stroke: "black"},
        markerStart: { type: "arrow", color: "black", width: 20, height: 20 },
      });
    }
  });
  return ret;
}
