import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { TimePicker as AntdTimePicker } from 'ant-design-vue'
import { PreviewText } from '../preview-text'
import { formatMomentValue, momentable } from '../__builtins__'

const mapTimeFormat = function () {
  return (props: any) => {
    const format = props['format'] || 'HH:mm:ss'
    const onChange = props.onChange
    return {
      ...props,
      format,
      value: momentable(props.value, format),
      onChange: (value: moment.Moment | moment.Moment[]) => {
        if (onChange) {
          onChange(formatMomentValue(value, format))
        }
      },
    }
  }
}

export const TimePicker = connect(
  AntdTimePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(PreviewText.TimePicker)
)

TimePicker.RangePicker = connect(
  AntdTimePicker.TimeRangePicker,
  mapProps(mapTimeFormat()),
  mapReadPretty(PreviewText.TimeRangePicker)
)

export default TimePicker
