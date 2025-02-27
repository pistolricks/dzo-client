import {SegmentGroup} from '@ark-ui/solid/segment-group'
import {Index, createSignal, Component} from 'solid-js'


type PROPS = {
    options: string[]
    orientation?: 'horizontal' | 'vertical'
}
const SegmentSelectGroup: Component<PROPS> = props => {

    const options = () => props.options;

    const [value, setValue] = createSignal('')

    const orientation = () => props.orientation ?? "vertical";

    return (
        <SegmentGroup.Root
            orientation={orientation()}
            class={'segmentGroup__root capitalize'}
            value={value()} onValueChange={(e) => setValue(e.value)}>
            <SegmentGroup.Indicator class={'segmentGroup__indicator'}/>
            <Index each={options()}>
                {(option) => (
                    <SegmentGroup.Item class={'segmentGroup__item'} value={option()}>
                        <SegmentGroup.ItemText>{option()}</SegmentGroup.ItemText>
                        <SegmentGroup.ItemControl/>
                        <SegmentGroup.ItemHiddenInput/>
                    </SegmentGroup.Item>
                )}
            </Index>
        </SegmentGroup.Root>
    )
}

export default SegmentSelectGroup;