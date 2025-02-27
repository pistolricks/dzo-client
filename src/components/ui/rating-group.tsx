import { RatingGroup } from '@ark-ui/solid/rating-group'
import { StarIcon } from 'lucide-solid'
import {Component, createSignal, Index, Show} from 'solid-js'


type PROPS = {
    readOnly?: boolean;
    allowHalf?: boolean;
}
const RatingSystem: Component<PROPS> = props => {
    const [getValue, setValue] = createSignal(0)

    const readOnly = () => props.readOnly ?? true;
    const allowHalf = () => props.allowHalf ?? true;
    return (
        <RatingGroup.Root
            value={getValue()}
            name="my-rating"
            count={5}
            allowHalf={allowHalf()}
            readOnly={readOnly()}
            onValueChange={(details) => setValue(details.value)}>
            <RatingGroup.Label>Label</RatingGroup.Label>
            <RatingGroup.Control>
                <RatingGroup.Context>
                    {(context) => (
                        <Index each={context().items}>
                            {(index) => (
                                <RatingGroup.Item index={index()}>
                                    <RatingGroup.ItemContext>
                                        {(context) => (
                                            <Show when={context().highlighted} fallback={<StarIcon/>}>
                                                <StarIcon fill="current"/>
                                            </Show>
                                        )}
                                    </RatingGroup.ItemContext>
                                </RatingGroup.Item>
                            )}
                        </Index>
                    )}
                </RatingGroup.Context>
                <RatingGroup.HiddenInput/>
            </RatingGroup.Control>
        </RatingGroup.Root>
    )
}