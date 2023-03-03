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

export function getNodes(
  nodeArray,
  width = 172,
  height = 36,
  xSeparation = 25,
  ySeparation = 75
) {
  const root = stratify().parentId((d) =>
    d.parents.reduce((acc, val) => {
      if (!acc) return val;
      const curParent = nodeArray.find((n) => n.id === acc);
      const nextParent = nodeArray.find((n) => n.id === val);
      return curParent.depth < nextParent.depth ? nextParent.id : curParent.id;
    }, null)
  )(nodeArray);
  const nodeTree = tree()
    .nodeSize([width + xSeparation, height + ySeparation])
    .separation((a, b) => {
      return a.parent == b.parent ? 1 : 1.25;
    })(root);
  return nodeTree.descendants().map(({ data, x, y }) => {
    return {
      id: data.id,
      data,
      position: { x, y },
      type: data.type,
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
