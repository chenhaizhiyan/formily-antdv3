import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { Radio as AntdRadio } from 'ant-design-vue'
import { PreviewText } from '../preview-text'
import { composeExport } from '../__builtins__/shared'
const { Group } = AntdRadio


const RadioGroup = connect(
  Group,
  mapProps({
    dataSource: 'options',
  }),
  mapReadPretty(PreviewText.Select, {
    mode: 'tags',
  })
)

const _Radio = connect(
  AntdRadio,
  mapProps({
    value: 'checked',
    onInput: 'onChange',
  })
)

export const Radio = composeExport(_Radio, {
  Group: RadioGroup,
})

export default Radio
