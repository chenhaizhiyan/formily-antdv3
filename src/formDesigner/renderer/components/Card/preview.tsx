import { Card as ACard } from 'ant-design-vue'
import { composeExport } from '@form-designer/components/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import {
  useTreeNode,
  TreeNodeWidget,
  DroppableWidget,
  DnFC,
} from '@form-designer/prototypes'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { defineComponent } from 'vue-demi'
import { VNode } from 'vue'
import { useStyle } from '@form-designer/prototypes'

export const Card: DnFC<VNode> = composeExport(
  defineComponent({
    props: { title: {} },
    setup(props, { slots }) {
      const nodeRef = useTreeNode()
      const style = useStyle()
      return () => {
        const node = nodeRef.value
        const children = node?.children || []
        return (
          <ACard {...props} style={style} v-slots={{
            title: () => (
              <span data-content-editable="x-component-props.title">
                {props.title}
              </span>
            ),
            extra: () => (
              slots.extra?.()
              // <div>
              //   <span>测试</span>
              //   <DroppableWidget key={node.id + 'extra'} />
              // </div>
            )
          }}>
            {/* {children.length ? children.map(node => <TreeNodeWidget key={node.id} node={node} />) : <DroppableWidget node={node} />} */}
            {slots.default?.()}
          </ACard>
        )
      }
    },
  }),
  {
    Behavior: createBehavior({
      name: 'Card',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Card',
      designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Card),
      },
      designerLocales: AllLocales.Card,
    }),
    Resource: createResource({
      icon: 'CardSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Card',
            'x-component-props': {
              title: 'Title',
            },
          },
        },
      ],
    }),
  }
)
