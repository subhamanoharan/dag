// customNode.js
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';
import {NumberNode} from './numberNode'
import {BooleanNode} from './booleanNode'

export const nodeTypeDesc = [
  { type: 'number', component: NumberNode, label: 'Number' },
  { type: 'boolean', component: BooleanNode, label: 'Boolean' },
]

export const getNode = (type) => {
  const TypeNode = nodeTypeDesc.find(({type: t}) => t=== type).component
  const ConnectedTypeNode = ({id, data}) => {
    const selector = (state) => ({ updateNodeField: state.updateNodeField });
    const { updateNodeField } = useStore(selector, shallow);

    const onChange = (id, f, v) => updateNodeField(id, f, v)
    return (
      <div className="text-white border rounded bg-red-400 p-2" style={{width: 200, height: 100}}>
        <TypeNode id={id} data={data} onChange={onChange}/>
      </div>
    )
  };
  return ConnectedTypeNode
}
