import { GlobalRegistry } from '@designable/core'
import { ISchema } from '@formily/vue'

export const Card: ISchema & { Extra?: ISchema, Body?: ISchema } = {
  type: 'object',
  properties: {
    bordered: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      'x-component-props': {
        defaultChecked: true,
      },
    },
  },
}

Card.Title = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
}

Card.Body = {
  type: 'object',
  properties: {
  },
}
