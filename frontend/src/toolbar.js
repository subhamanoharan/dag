// toolbar.js

import { DraggableNode } from './draggableNode';
import { nodeTypeDesc } from './nodes/nodeFactory'

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                {nodeTypeDesc.map(({type, label}) => (
                  <DraggableNode type={type} label={label} />
                ))}
            </div>
        </div>
    );
};
