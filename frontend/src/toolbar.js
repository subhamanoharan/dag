// toolbar.js

import { DraggableNode } from './draggableNode';
import {nodeDefinitions} from './nodes/nodeDefinitions'

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {nodeDefinitions.map(({type, label}) => (
                  <DraggableNode key={type} type={type} label={label} />
                ))}
            </div>
        </div>
    );
};
