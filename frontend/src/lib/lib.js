import { stratify, tree } from "d3-hierarchy";

/*
single parent function
export function getNodes(nodeArray, width=172, height=36, xSeparation=25, ySeparation=75){
  const root = stratify().parentId((d) => d.parent)(nodeArray)
  const nodeTree = tree().nodeSize([width+xSeparation, height+ySeparation]).separation((a, b) => {
    return (a.parent == b.parent ? 1 : 1.25)
  })(root)
  return nodeTree.descendants().map(({data, x, y}) => {
    return {
      id: data.id,
      data,
      position: {x, y},
      type: data.type
    }
  })
}
*/

export function getNodes(nodeArray) {
  return nodeArray.map((node) => {
    return {
      id: node.id,
      data: { label: node.name },
      position: { x: 0, y: 0 },
    };
  });
}

export function getEdges(nodeArray) {
  let ret = [];
  nodeArray.forEach((node) => {
    node.parents.forEach((parent) => {
      ret.push({
        id: `${parent}_${node.id}`,
        source: parent,
        target: node.id,
        style: { stroke: "black" },
        markerStart: { type: "arrow", color: "black", width: 20, height: 20 },
      });
    });
  });
  return ret;
}

/*
single parent function
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
*/
