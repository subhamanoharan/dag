// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data, onChange }) => {
  const currName = (data?.inputName || id.replace('customInput-', 'input_'));
  const inputType = useState(data.inputType || 'Text');

  const handleNameChange = (e) =>
    onChange(id, 'inputName', e.target.value)

  const handleTypeChange = (e) =>
    onChange(id, 'inputType', e.target.value)

  return (
    <>
      <div className="heading">
        <span>Input</span>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </>
  );
}
