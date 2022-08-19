import {
  defineComponent,
  h,
} from 'vue'
import { observer } from '@formily/reactive-vue'
import { composeExport } from '../__builtins__/shared'
const CardInner = observer(
  defineComponent({
    name: 'Card',
    props: { title: {}, bordered: {} },
    setup(props, { slots }) {
      return () => {
        const prefixCls = 'formily-antdv'
        return h(
          'div',
          {
            ...props,
            class: `${prefixCls}-card ${ props.bordered === true ? `${prefixCls}-card-border` : ''}`,
          },
          slots
        )
      }
    }
  })
)

const CardBody = observer(
  defineComponent({
    name: 'CardBody',
    setup(props, { slots }) {
      const prefixCls = 'formily-antdv'
      return () => {
        return h(
          'div',
          {
            class: `${prefixCls}-card-body`,
          },
          slots
        )
      }
    }
  })
)
const CardTitle = observer(
  defineComponent({
    name: 'CardTitle',
    props: { title: {}},
    setup(props, { slots }) {
      const prefixCls = 'formily-antdv'
      const title = props.title
      return () => {
        return h(
          'div',
          {
            class: `${prefixCls}-card-title`,
          },
          [
            h(
              'div',
              {
                class: `${prefixCls}-card-title2`,
              },
              { default: () => title }
            ),
            h(
              'div',
              {
                class: `${prefixCls}-card-extra`,
              },
              slots
            )
          ]
        )
      }
    }
  })
)
export const Card = composeExport(CardInner, {
  Title: CardTitle,
  Body: CardBody,
})

export default Card
