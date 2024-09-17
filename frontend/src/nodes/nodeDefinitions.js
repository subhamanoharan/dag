import { Position } from 'reactflow';

import { NumberField } from '../fields/numberField';
import { TextDisplayField } from '../fields/textDisplayField';
import { TextInputField } from '../fields/textInputField';
import { SelectTypeInputField } from '../fields/selectTypeInputField';
import { BooleanField } from '../fields/booleanField';
import { DynamicTextInputField } from '../fields/dynamicTextInputField';

export const nodeDefinitions = [
  {
    type: 'number',
    label: 'Number',
    componentData: {
      heading: 'Number',
      fields: [{label: 'Number', component: NumberField, dataMapper: data => data?.number || '{{input}}', field: 'number'}],
      handles:[
        {type: "source", position: Position.Right, id: (id) => `${id}-input`},
        {type: "target", position: Position.Left, id: (id) => `${id}-output`}
      ]
    }
  },
  {
    type: 'llm',
    label: 'LLM',
    componentData: {
      heading: 'LLM',
      fields: [{label:'', component: () => <TextDisplayField data="This is a LLM"/>}],
      handles:[
        {type: "source", position: Position.Right, id: (id) => `${id}-response`},
        {type: "target", position: Position.Left, id: (id) => `${id}-system`, style: {top: `${100/3}%`}},
        {type: "target", position: Position.Left, id: (id) => `${id}-prompt`, style: {top: `${200/3}%`}}
      ]
    }
  },
  {
    type: 'customInput',
    label: 'Input',
    componentData: {
      heading: 'Input',
      fields: [
        {
          label: 'Name',
          component: TextInputField,
          field: 'inputName',
          dataMapper: (data, id) => (data?.inputName || id.replace('customInput-', 'input_'))
        },
        {
          label: 'Type',
          component: SelectTypeInputField,
          field: 'inputType'
        }
      ],
      handles:[
        {type: "source", position: Position.Right, id: (id) => `${id}-value`},
      ]
    }
  },
  {
    type: 'customOutput',
    label: 'Output',
    componentData: {
      heading: 'Output',
      fields: [
        {
          label: 'Name',
          component: TextInputField,
          field: 'outputName',
          dataMapper: (data, id) => (data?.outputName || id.replace('customOutput-', 'output_'))
        },
        {label: 'Type', component: SelectTypeInputField, field: 'outputType'}
      ],
      handles:[
        {type: "target", position: Position.Left, id: (id) => `${id}-value`},
      ]
    }
  },
  {
    type: 'boolean',
    label: 'Boolean',
    componentData: {
      heading: 'Boolean',
      fields: [{label: 'Boolean', component: BooleanField, field: 'booleanVal' }],
      handles:[
        {type: "target", position: Position.Left, id: (id) => `${id}-output`}
      ]
    }
  },
  {
    type: 'options',
    label: 'Options',
    componentData: {
      heading: 'Options',
      fields: [{label: 'Choose', component: SelectTypeInputField }],
      handles:[
        {type: "target", position: Position.Left, id: (id) => `${id}-output`}
      ]
    }
  },
  {
    type: 'price',
    label: 'Price',
    componentData: {
      heading: 'Price',
      fields: [{label: '$', component: NumberField, field: 'price' }],
      handles:[
        {type: "target", position: Position.Left, id: (id) => `${id}-output`}
      ]
    }
  },
  {
    type: 'counter',
    label: 'Counter',
    componentData: {
      heading: 'Count',
      fields: [
        {label: 'Activity', component: TextInputField, field: 'activity' },
        {label: 'No. of times', component: NumberField, field: 'counter' }
      ],
      handles:[
        {type: "target", position: Position.Left, id: (id) => `${id}-output`}
      ]
    }
  },
  {
    type: 'text',
    label: 'Text',
    componentData: {
      heading: 'Text',
      fields: [
        {label: 'Text', component: DynamicTextInputField, field: 'text' },
      ],
      handles:[
        {type: "source", position: Position.Right, id: (id) => `${id}-output`}
      ]
    }
  },
]
