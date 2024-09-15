// textNode.js

import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data, onChange }) => {
  const currText = (data?.text || '{{input}}');

  const handleTextChange = (e) =>
    onChange(id, 'text', e.target.value)

  return (
    <>
      <div className="heading">
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </>
  );
}
