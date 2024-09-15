// outputNode.js

import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data, onChange }) => {
  const currName = (data?.outputName || id.replace('customOutput-', 'output_'));
  const outputType = (data.outputType || 'Text');

  const handleNameChange = (e) =>
    onChange(id, 'outputName', e.target.value)

  const handleTypeChange = (e) =>
    onChange(id, 'outputType', e.target.value)

  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div className="heading">
        <span>Output</span>
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
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </>
  );
}
