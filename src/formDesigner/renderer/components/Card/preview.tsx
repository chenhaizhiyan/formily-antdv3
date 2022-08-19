import { Card as ACard } from '@form-designer/components'
import { composeExport } from '@form-designer/components/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import {
  DroppableWidget,
  DnFC,
} from '@form-designer/prototypes'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { defineComponent } from 'vue-demi'
import { VNode } from 'vue'
import './styles.less'

export const Card: DnFC<VNode> = composeExport(
  defineComponent({
    inheritAttrs: false,
    setup(props, { slots, attrs }) {
      return () => {
        return (
          <div { ...attrs }
          style={{ 'padding': '10px' }}>
            <ACard
            { ...attrs }
            >
              {slots.default?.()}
            </ACard>
          </div>
        )
      }
    }
  }),
  {
    Title: defineComponent({
      props: {
        title: {}
      },
      setup(props, { attrs, slots }) {
        return () => {
          return (
            <ACard.Title
            {
              ...props
            }
            >
              <DroppableWidget
                {...attrs}
              >
                {slots.default?.()}
              </DroppableWidget>
            </ACard.Title>
          )
        }
      },
    }),
    Body: defineComponent({
      setup(props, { attrs, slots }) {
        return () => {
          return (
            <ACard.Body
            {...attrs}
            >
              <DroppableWidget
                {...attrs}
              >
                {slots.default?.()}
              </DroppableWidget>
            </ACard.Body>
          )
        }
      },
    }),
    Behavior: createBehavior({
      name: 'Card',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Card',
      designerProps: {
        // droppable: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Card),
      },
      designerLocales: AllLocales.Card,
    },
    {
      name: 'Card.Title',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Card.Title',
      designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Card.Title),
      },
      designerLocales: AllLocales.CardTitle,
    },
    {
      name: 'Card.Body',
      extends: ['Field'],
      selector: (node) => node.props?.['x-component'] === 'Card.Body',
      designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Card.Body),
      },
      designerLocales: AllLocales.CardBody,
    }),
    Resource: createResource({
      icon: 'CardSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Card',
          },
          children: [
            {
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'Card.Title',
                'x-component-props': {
                  title: 'Title',
                },
              },
            },
            {
              componentName: 'Field',
              props: {
                type: 'void',
                'x-component': 'Card.Body',
              },
            }
          ],
        },
      ],
    }),
  }
)
