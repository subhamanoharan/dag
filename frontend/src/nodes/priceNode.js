// characterNode.js

import { Handle, Position } from 'reactflow';

export const PriceNode = ({ id, data, onChange }) => {
  const currDigit = (data?.price || '');

  const handleChange = (e) =>
    onChange(id, 'price', e.target.value)

  return (
    <>
      <div className="heading">
        <span>Price</span>
      </div>
      <div>
        <span className="mr-1">$</span>
        <input
          className="w-3/4"
          type="number"
          value={currDigit}
          onChange={handleChange}
        />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-output`}
      />
    </>
  );
}
