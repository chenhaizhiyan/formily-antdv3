import { TimePicker as FormilyTimePicker } from '@form-designer/components'
import { composeExport } from '@form-designer/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@form-designer/prototypes'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { VNode } from 'vue'

export const TimePicker: DnFC<VNode> = composeExport(FormilyTimePicker, {
  Behavior: createBehavior(
    {
      name: 'TimePicker',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'TimePicker',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.TimePicker),
      },
      designerLocales: AllLocales.TimePicker,
    },
    {
      name: 'TimePicker.RangePicker',
      extends: ['Field'],
      selector: (node) =>
        node.props['x-component'] === 'TimePicker.RangePicker',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.TimePicker.RangePicker),
      },
      designerLocales: AllLocales.TimeRangePicker,
    }
  ),
  Resource: createResource(
    {
      icon: 'TimePickerSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'string',
            title: 'TimePicker',
            'x-decorator': 'FormItem',
            'x-component': 'TimePicker',
          },
        },
      ],
    },
    {
      icon: 'TimeRangePickerSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'string[]',
            title: 'TimeRangePicker',
            'x-decorator': 'FormItem',
            'x-component': 'TimePicker.RangePicker',
          },
        },
      ],
    }
  ),
})
