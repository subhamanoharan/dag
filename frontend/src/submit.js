// submit.js
import { useState } from 'react';

import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import PipelinesService from './services/pipelinesService'
import Loader from './components/loader'
import PipelineDataModal from './components/modal/pipeline_data_modal'
import ErrorModal from './components/modal/error_modal'

const selector = ({nodes, edges}) => ({ nodes, edges })

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [parsedPipelineData, setParsedPipelineData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const parsePipeline = () => {
      setIsLoading(true)
      setError()
      return PipelinesService.parse({
          nodes: nodes.map(({id}) => id),
          edges: edges.map(({source, target}) => ({source, target}))
        })
        .then(({num_nodes, num_edges, is_dag}) =>
          setParsedPipelineData({num_nodes, num_edges, is_dag}))
        .catch(() => setError(true))
        .finally(() => setIsLoading(false))
    }

    return (
        <div
          className="w-full flex justify-center"
        >
          {
            isLoading ? <Loader/> :
            <button
              className="bg-green-600 text-white w-20"
              onClick={parsePipeline}>
            Submit
            </button>
          }
          {
            parsedPipelineData &&
            <PipelineDataModal
              noOfNodes={parsedPipelineData.num_nodes}
              noOfEdges={parsedPipelineData.num_edges}
              isDAG={parsedPipelineData.is_dag}
              onClose={() => setParsedPipelineData()}
            />
          }
          {
            error &&
            <ErrorModal onClose={() => setError()} />
          }
        </div>
    );
}
