import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { TimePicker as AntdTimePicker } from 'ant-design-vue'

export type TimePickerProps = typeof AntdTimePicker

const TransformElTimePicker = transformComponent<TimePickerProps>(
  AntdTimePicker,
  {
    change: 'update:modelValue',
  }
)

export const TimePicker = connect(
  TransformElTimePicker,
  mapProps({ readOnly: 'readonly', value: 'modelValue' }),
  mapReadPretty(PreviewText.TimePicker)
)

export default TimePicker
