// textNode.js

import { Handle, Position } from 'reactflow';

export const BooleanNode = ({ id, data, onChange }) => {
  const currVal = data?.booleanVal || false;

  const handleChange = (e) =>
    onChange(id, 'booleanVal', e.target.checked)

  return (
    <>
      <div>
        <span>Boolean</span>
      </div>
      <div>
        <label>
          Boolean:
          <input
            type="checkbox"
            checked={currVal}
            onChange={handleChange}/>
        </label>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-output`}
      />
    </>
  );
}
