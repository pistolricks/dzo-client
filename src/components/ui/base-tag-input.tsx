
import { For } from 'solid-js'
import { Button } from '~/components/ui/button'

import { TagsInput } from '~/components/ui/tags-input'
import {IconButton} from "~/components/ui/icon-button";
import {XMark} from "~/components/svg";

export const BaseTagInput = (props: TagsInput.RootProps & { label?: string, placeholder?: string }) => {
    const label = () => props.label;
    const placeholder = () => props.placeholder;
    return (
        <TagsInput.Root
            addOnPaste delimiter=","
            blurBehavior="add"
            validate={(details: { value: string | any[]; inputValue: any; }) => {
                return !details.value.includes(details.inputValue)
            }}
            defaultValue={['React', 'Solid', 'Vue']} maxW="xs" {...props}>
            <TagsInput.Context>
                {(api) => (
                    <>
                        <TagsInput.Label>{label()}</TagsInput.Label>
                        <TagsInput.Control>
                            <For each={api().value}>
                                {(value, index) => (
                                    <TagsInput.Item index={index()} value={value}>
                                        <TagsInput.ItemPreview>
                                            <TagsInput.ItemText>{value}</TagsInput.ItemText>
                                            <TagsInput.ItemDeleteTrigger
                                                asChild={(triggerProps) => (
                                                    <IconButton variant="link" size="xs" {...triggerProps()}>
                                                        <XMark/>
                                                    </IconButton>
                                                )}
                                            />
                                        </TagsInput.ItemPreview>
                                        <TagsInput.ItemInput />
                                        <TagsInput.HiddenInput />
                                    </TagsInput.Item>
                                )}
                            </For>
                            <TagsInput.Input placeholder={placeholder()} />
                        </TagsInput.Control>
                        <TagsInput.ClearTrigger
                            asChild={(triggerProps) => (
                                <Button variant="outline" {...triggerProps()}>
                                    Clear
                                </Button>
                            )}
                        />
                    </>
                )}
            </TagsInput.Context>
        </TagsInput.Root>
    )
}
