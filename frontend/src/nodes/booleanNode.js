// textNode.js

import { Handle, Position } from 'reactflow';

export const BooleanNode = ({ id, data, onChange }) => {
  const currVal = data?.booleanVal || false;

  const handleChange = (e) =>
    onChange(id, 'booleanVal', e.target.checked)

  return (
    <>
      <div className="heading">
        <span className="mr-2">Boolean</span>
        <input
          type="checkbox"
          checked={currVal}
          onChange={handleChange}/>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-output`}
      />
    </>
  );
}
