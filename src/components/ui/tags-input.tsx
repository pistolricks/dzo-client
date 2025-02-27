import { TagsInput } from '@ark-ui/solid/tags-input'
import {Component, Index} from 'solid-js'
import {cn} from "~/lib/utils";
import {XMark} from "~/components/svg";

type PROPS = {
    label?: string;
    placeholder?: string;

}

export const BaseTagInput: Component<PROPS> = props => {

    const label = () => props.label;
    const placeholder = () => props.placeholder;

    return (
        <TagsInput.Root
            class={'w-full'}
            addOnPaste delimiter=","
            blurBehavior="add"
            validate={(details) => {
                return !details.value.includes(details.inputValue)
            }}
        >
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label class={"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}>
                            {label()}
                        </TagsInput.Label>
                        <TagsInput.Control class={'w-full'}>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()}>
                                        <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        <TagsInput.ItemInput />
                                        <TagsInput.ItemDeleteTrigger><XMark/></TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>
                        <TagsInput.Input
                            class={cn(
                                "flex h-10 w-full rounded-md border border-input bg-gray-1 px-3 py-2 text-sm outline-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium text-normal placeholder:text-dim focus-visible:outline-hidden focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-error-foreground data-invalid:text-error-foreground",
                            )}
                            placeholder={placeholder()} />
                        <TagsInput.ClearTrigger>Clear all</TagsInput.ClearTrigger>
                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}
