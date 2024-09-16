// submit.js
import { useState } from 'react';

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import PipelinesService from './services/pipelinesService'

const selector = ({nodes, edges}) => ({ nodes, edges })

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [parsedGraph, setParsedGraph] = useState();

    const parsePipeline = () =>
      PipelinesService.parse({
        nodes: nodes.map(({id}) => id),
        edges: edges.map(({source, sourceHandle, target, targetHandle}) => ({source, sourceHandle, target, targetHandle}))
      })
        .then(({num_nodes, num_edges, is_dag}) => setParsedGraph({num_nodes, num_edges, is_dag}))

    return (
        <div
          className="w-full flex justify-center"
        >
            <button
              className="bg-green-600 text-white w-20"
              onClick={parsePipeline}>
            Submit
            </button>
        </div>
    );
}
