// textNode.js
import { useEffect, useState, useRef } from 'react';

import { Handle, Position, useUpdateNodeInternals } from 'reactflow';

export const TextNode = ({ id, data, onChange }) => {
  const [dynamicHandles, setDynamicHandles] = useState([]);
  const textRef = useRef();

   const onChangeHandler = (e) => {
    const target = e.target;
    handleTextChange(target.value)
    textRef.current.style.height = "30px";
    textRef.current.style.height = `${target.scrollHeight}px`;
   };

  const updateNodeInternals = useUpdateNodeInternals();
  const currText = (data?.text || '');

  const handleTextChange = (text) => {
    onChange(id, 'text', text)
    const matches = text.match(/{{\w+}}/g)
    setDynamicHandles((matches || []).map(m =>
      m.replaceAll('}', '').replaceAll('{', '')
    ))
  }

  useEffect(() => {
    updateNodeInternals(id)
  }, [dynamicHandles, id, updateNodeInternals])

  return (
    <>
      <div className="heading">
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <textarea
            value={currText}
            ref={textRef}
            onChange={onChangeHandler}
            style={{ resize: 'none', overflow: 'hidden', height: '30px', minHeight: '30px'}}
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
          style={{top: `${((100 * (i + 1))/(dynamicHandles.length))}%`}}
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
