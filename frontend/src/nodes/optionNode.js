// textNode.js

import { Handle, Position } from 'reactflow';

export const OptionNode = ({ id, data, onChange }) => {
  const currOption = data?.option;

  const handleChange = (e) =>
    onChange(id, 'option', e.target.value)

  return (
    <>
      <div className="heading">
        <span>Options</span>
      </div>
      <div>
        <label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={currOption}
          onChange={handleChange}
        >
          <option key={1}>Option - 1</option>
          <option key={2}>Option - 2</option>
          <option key={3}>Option - 3</option>
        </select>
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
