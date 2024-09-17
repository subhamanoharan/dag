// textNode.js
import { useEffect, useState } from 'react';

import { Handle, Position, useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data, onChange }) => {
  const [dynamicHandles, setDynamicHandles] = useState([]);

  const updateNodeInternals = useUpdateNodeInternals();
  const currText = (data?.text || '');

  const handleTextChange = (e) => {
    const text = e.target.value
    onChange(id, 'text', text)
    const matches = text.match(/{{\w+}}/)
    const isHandleVariable = matches && matches[0] === text
    if(isHandleVariable)
      setDynamicHandles([...dynamicHandles,
        text.replaceAll('}', '').replaceAll('{', '')
      ])
  }

  useEffect(() => {
    updateNodeInternals(id)
  }, [dynamicHandles])

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
      {
        dynamicHandles.map((h, i) =>
        <Handle
          key={`target-${h}-${i}`}
          type="target"
          position={Position.Left}
          id={`${id}-input-${i}`}
          style={{top: `${((100 * (i+1))/4) % 100}%`}}
        />)
      }

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </>
  );
}
