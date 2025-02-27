import { TagsInput } from '@ark-ui/solid/tags-input'
import {Component, Index} from 'solid-js'
import {cn} from "~/lib/utils";
import {BackspaceIcon, XMark} from "~/components/svg";

type PROPS = {
    label: string;
    name: string;
    placeholder: string;

}
export const BaseTagInput:Component<PROPS> = props => {

    const label = () => props.label;
    const name = () => props.name;
    const placeholder = () => props.placeholder;
    return (
        <TagsInput.Root
            max={9} allowOverflow
            blurBehavior="add"
            addOnPaste delimiter=","
            validate={(details) => {
                return !details.value.includes(details.inputValue)
            }}
        >
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>{label()}</TagsInput.Label>
                        <div class={'relative w-full h-10'}>
                        <TagsInput.Input
                            name={name()}
                            class={cn(
                                "flex h-10 w-full rounded-md border border-input bg-gray-1 px-3 py-2 text-sm outline-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium text-normal placeholder:text-dim focus-visible:outline-hidden focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-error-foreground data-invalid:text-error-foreground",
                            )}
                            placeholder={placeholder()}/>
                        <TagsInput.ClearTrigger class={'absolute top-0 right-0 h-10'}>
                            <BackspaceIcon class={"p-1.5 stroke-gray-8 size-8 hover:stroke-red-11"}/>
                        </TagsInput.ClearTrigger>
                        </div>
                        <TagsInput.Control class={'flex-auto inline-block text-balance text-center mx-auto space-x-2 py-3'}>
                            <Index each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index} value={value()} class={'inline-flex items-center gap-x-0.5 rounded-md bg-pink-100 pl-4 pr-2 py-1 text-xs font-medium text-pink-700 mb-2'} >
                                        <TagsInput.ItemPreview class={'flex items-center justify-between'}>
                                            <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                                        </TagsInput.ItemPreview>
                                        <TagsInput.ItemDeleteTrigger type={"button"}>
                                            <XMark class={"p-1.5 stroke-gray-9 size-6 hover:stroke-red-12"}/>
                                        </TagsInput.ItemDeleteTrigger>
                                    </TagsInput.Item>
                                )}
                            </Index>
                        </TagsInput.Control>


                    </>
                )}
            </TagsInput.Context>
            <TagsInput.HiddenInput />
        </TagsInput.Root>
    )
}
