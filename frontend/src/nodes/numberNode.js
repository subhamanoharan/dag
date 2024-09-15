// textNode.js

import { Handle, Position } from 'reactflow';

export const NumberNode = ({ id, data, onChange }) => {
  const currNo = (data?.number || '{{input}}');

  const handleNumberChange = (e) =>
    onChange(id, 'number', e.target.value)

  return (
    <>
      <div>
        <span>Number</span>
      </div>
      <div>
        <label>
          Number:
          <input
            type="number"
            value={currNo}
            onChange={handleNumberChange}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
      <Handle
        type="source"
        position={Position.Left}
        id={`${id}-output`}
      />
    </>
  );
}
