// customNode.js
import { shallow } from 'zustand/shallow';
import { useEffect, useState } from 'react';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';

import { useStore } from '../store';
import {nodeDefinitions} from './nodeDefinitions'

export const getNode = (type) => {
  const {componentData: {heading, fields, handles}} = nodeDefinitions.find(({type: t}) => t=== type)
  const ConnectedTypeNode = ({id, data}) => {
    const [dynamicHandles, setDynamicHandles] = useState([]);
    const selector = (state) => ({ updateNodeField: state.updateNodeField });
    const { updateNodeField } = useStore(selector, shallow);
    const updateNodeInternals = useUpdateNodeInternals();

    useEffect(() => {
      updateNodeInternals(id)
    }, [dynamicHandles, id, updateNodeInternals])

    const onChange = (id, f, v) => updateNodeField(id, f, v)

    return (
      <div className={`node node-${type} border rounded bg-red-200 p-3`} style={{width: 200}}>
        <div className="heading">
          <span>{heading}</span>
        </div>
        <div className="content">
          {
            fields.map(({label, component: Field, field, dataMapper}, i) =>
              <div key={i}>
                <label> {label}</label>
                <Field
                  data={dataMapper ? {[field]: dataMapper(data, id)} : data}
                  onChange={(f, v) => onChange(id, f, v)}
                  field={field}
                  onHandlesUpdate={setDynamicHandles}
                />
              </div>
            )
          }
        </div>
        {handles.map(h =>
          <Handle
            key={h.id()}
            type={h.type}
            position={h.position}
            id={h.id()}
            style={h.style || {}}
          />
        )}
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
      </div>
    )
  };
  return ConnectedTypeNode
}
