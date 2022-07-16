import { Button } from 'ant-design-vue'
import { ArrayItems, Form, Input, FormItem, Space } from '@form-designer/components'
import { createForm, Form as FormCore, DataField } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { markRaw, isObservable } from '@formily/reactive'
import { createSchemaField } from '@formily/vue'
import { ValueInput } from '@form-designer/settings-form/components'
// import { usePrefix, TextWidget, watch as ReactiveWatch, ref, defineComponent, IconWidget } from '@form-designer/prototypes/widgets'
import { TextWidget, IconWidget } from '@form-designer/prototypes/widgets'
import { usePrefix } from '@form-designer/prototypes/hooks'
import { Header } from './Header'
import { traverseTree } from './shared'
import { ITreeDataSource } from './types'
import { watch as ReactiveWatch, } from '@form-designer/prototypes/shared/reactive'
import { PropType, ref, defineComponent } from 'vue'
import './styles.less'

const { SchemaField } = createSchemaField({
    components: {
        FormItem,
        Input,
        ArrayItems,
        ValueInput,
        Space
    }
})

export interface IDataSettingPanelProps {
    treeDataSource: ITreeDataSource
    allowExtendOption?: boolean
    effects?: (form: FormCore<any>) => void
}

export const DataSettingPanel = observer(
    defineComponent({
        inheritAttrs: false,
        props: {
            treeDataSource: { type: Object as PropType<IDataSettingPanelProps['treeDataSource']> },
            allowExtendOption: { type: Boolean as PropType<IDataSettingPanelProps['allowExtendOption']> },
            effects: { type: Function as PropType<IDataSettingPanelProps['effects']> }
        },
        setup(props) {
            const prefixRef = usePrefix('data-source-setter')
            const formRef = ref()

            ReactiveWatch(
                [() => props.treeDataSource?.selectedKey, () => props.treeDataSource?.dataSource?.length],
                () => {
                    let values: any
                    traverseTree(props.treeDataSource!.dataSource, dataItem => {
                        if (dataItem.key === props.treeDataSource!.selectedKey) {
                            values = dataItem
                        }
                    })
                    console.log('values:', values)
                    formRef.value = createForm({
                        values,
                        effects: props.effects
                    })
                },
                { immediate: true }
            )
            return () => {
                const prefix = prefixRef.value
                const form = formRef.value
                const allowExtendOption = props.allowExtendOption
                if (!props.treeDataSource?.selectedKey)
                    return (
                        <>
                            <Header title={<TextWidget token="SettingComponents.DataSourceSetter.nodeProperty" />} extra={null} />
                            <div class={`${prefix + '-layout-item-content'}`}>
                                <TextWidget token="SettingComponents.DataSourceSetter.pleaseSelectNode" />
                            </div>
                        </>
                    )
                return (
                    <>
                        <Header
                            title={<TextWidget token="SettingComponents.DataSourceSetter.nodeProperty" />}
                            extra={
                                allowExtendOption ? (
                                    <Button
                                        type='text'
                                        onClick={() => {
                                            form.setFieldState('map', (state: DataField) => {
                                                state.value.push({})
                                            })
                                        }}
                                        icon={<IconWidget infer="Add" />}
                                    >
                                        <TextWidget token="SettingComponents.DataSourceSetter.addKeyValuePair" />
                                    </Button>
                                ) : null
                            }
                        />
                        <div class={`${prefix + '-layout-item-content'}`}>
                            <Form form={form} labelWidth={60} wrapperWidth={160}>
                                <SchemaField
                                    schema={{
                                        type: 'object',
                                        properties: {
                                            map: {
                                                type: 'array',
                                                'x-component': 'ArrayItems',
                                                items: {
                                                    type: 'object',
                                                    'x-decorator': 'ArrayItems.Item',
                                                    'x-decorator-props': { type: 'divide' },
                                                    'x-component': 'Space',
                                                    properties: {
                                                        label: {
                                                            'x-decorator': 'FormItem',
                                                            'x-decorator-props': {
                                                                label: markRaw(<TextWidget token="SettingComponents.DataSourceSetter.label" />)
                                                            },
                                                            'x-disabled': !allowExtendOption,
                                                            name: 'label',
                                                            'x-component': 'Input'
                                                        },
                                                        value: {
                                                            'x-decorator': 'FormItem',
                                                            'x-decorator-props': {
                                                                label: markRaw(<TextWidget token="SettingComponents.DataSourceSetter.value" />)
                                                            },
                                                            'x-disabled': !allowExtendOption,
                                                            name: 'value',
                                                            'x-component': 'Input'
                                                        },
                                                        remove: {
                                                            type: 'void',
                                                            'x-component': 'ArrayItems.Remove',
                                                            'x-visible': allowExtendOption,
                                                            'x-component-props': {
                                                                style: {
                                                                    margin: 5,
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }}
                                >
                                </SchemaField>
                            </Form>
                        </div>
                    </>
                )
            }
        }
    })
)
