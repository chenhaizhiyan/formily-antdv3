import { defineComponent, h } from 'vue'
import { useField } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { isVoidField, Field } from '@formily/core'
import { Cascader as AntdCascader,  } from 'ant-design-vue'

import { PreviewText } from '../preview-text'

export type CascaderProps = typeof AntdCascader

// export const Cascader = connect(
//   AntdCascader,
//   mapProps({ dataSource: 'options', value: 'modelValue' }),
//   mapReadPretty(PreviewText.Cascader)
// )

export const Cascader = observer(
  defineComponent({
    name: 'FCascader',
    props: ['onChange'],
    setup(props, { attrs, slots }: { [key: string]: any }) {
      const fieldRef = useField()
      return () => {
        const field = fieldRef.value as Field
        const Comp =
          field && !isVoidField(field) && field.pattern === 'readPretty'
            ? PreviewText.Cascader
            : AntdCascader
        return h(
          Comp,
          {
            ...attrs,
            options: field?.dataSource,
            modelValue: field?.value,
            onChange: (...args: any[]) => {
              props.onChange(...args)
            },
          },
          slots
        )
      }
    },
  })
)

export default Cascader
