const isCyclicFromNode = (nodeId, directedGraph, visitedNodes = []) => {
  if(visitedNodes.includes(nodeId)) return true
  if(directedGraph[nodeId].length == 0) return false
  return directedGraph[nodeId]
      .some(n =>
        isCyclicFromNode(n, directedGraph, [...visitedNodes, nodeId])
      )
}

const isDAG = (directedGraph) =>
  Object.keys(directedGraph)
    .every(nodeId => !isCyclicFromNode(nodeId, directedGraph))

const parse = (nodes, edges) => {
  const initialGraph = nodes.reduce((acc, id) => ({...acc, [id]: []}), {})
  const directedGraph = edges.reduce((acc, {source, target}) =>
    ({...acc, [source]: [...(acc.source || []), target]}), initialGraph)
  return {
    num_nodes: nodes.length,
    num_edges: edges.length,
    is_dag: isDAG(directedGraph)
  }
}

export default { parse }
