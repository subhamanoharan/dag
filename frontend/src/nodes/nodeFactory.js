// customNode.js
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';
import { TextNode } from './textNode'
import { NumberNode } from './numberNode'
import { OptionNode } from './optionNode'
import { BooleanNode } from './booleanNode'
import { OutputNode } from './outputNode';
import { InputNode } from './inputNode';
import { LLMNode } from './llmNode';
import { CharacterNode } from './characterNode';
import { PriceNode } from './priceNode';

export const nodeTypeDesc = [
  { type: 'llm', component: LLMNode, label: 'LLM' },
  { type: 'customInput', component: InputNode, label: 'Input' },
  { type: 'customOutput', component: OutputNode, label: 'Output' },
  { type: 'text', component: TextNode, label: 'Text' },
  { type: 'number', component: NumberNode, label: 'Number' },
  { type: 'boolean', component: BooleanNode, label: 'Boolean' },
  { type: 'options', component: OptionNode, label: 'Options' },
  { type: 'character', component: CharacterNode, label: 'Character' },
  { type: 'price', component: PriceNode, label: 'Price' },
]

export const getNode = (type) => {
  const TypeNode = nodeTypeDesc.find(({type: t}) => t=== type).component
  const ConnectedTypeNode = ({id, data}) => {
    const selector = (state) => ({ updateNodeField: state.updateNodeField });
    const { updateNodeField } = useStore(selector, shallow);

    const onChange = (id, f, v) => updateNodeField(id, f, v)
    return (
      <div className={`node node-${type} border rounded bg-red-200 p-3`} style={{width: 200}}>
        <TypeNode id={id} data={data} onChange={onChange}/>
      </div>
    )
  };
  return ConnectedTypeNode
}
