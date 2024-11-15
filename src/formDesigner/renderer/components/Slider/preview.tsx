import { Slider as ASlider } from 'ant-design-vue'
import { composeExport, transformComponent } from '@form-designer/components/__builtins__'
// import { connect, mapProps, mapReadPretty, VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { createFieldSchema } from '../Field'

import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
// import { PreviewText } from '@form-designer/components'
import { DnFC } from '@form-designer/prototypes'
import { VNode } from 'vue'


// const TransformSlider = transformComponent(ASlider, {
//   change: 'updatev-model:value',
// })

// const InnerSlider = connect(
//   TransformSlider,
//   mapProps({
//     value: 'modelValue',
//     readOnly: 'readonly',
//   }),
//   mapReadPretty(PreviewText.Input)
// )

export const Slider: DnFC<VNode> = composeExport(
  ASlider,
  {
    Behavior: createBehavior({
      name: 'Slider',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Slider',
      designerProps: {
        // propsSchema: createFieldSchema(AllSchemas.Slider),
      },
      designerLocales: AllLocales.Slider,
    }),
    Resource: createResource({
      icon: 'SliderSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'number',
            title: 'Slider',
            'x-decorator': 'FormItem',
            'x-component': 'Slider',
          },
        },
      ],
    }),
  }
)