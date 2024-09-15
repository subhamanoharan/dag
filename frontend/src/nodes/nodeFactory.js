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
      <div style={{width: 200, height: 80, border: '1px solid black'}}>
        <TypeNode id={id} data={data} onChange={onChange}/>
      </div>
    )
  };
  return ConnectedTypeNode
}
