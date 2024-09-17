// characterNode.js

import { Handle, Position } from 'reactflow';

export const CharacterNode = ({ id, data, onChange }) => {
  const currChar = (data?.character || '');

  const handleChange = (e) =>
    onChange(id, 'character', e.target.value)

  return (
    <>
      <div className="heading">
        <span>Character</span>
      </div>
      <div>
          <input
            type="text"
            maxLength={1}
            value={currChar}
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
