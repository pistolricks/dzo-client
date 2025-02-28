import {Command as CommandPrimitive} from 'cmdk-solid'
import {Component, createSignal, onCleanup, onMount, ParentProps, Show} from "solid-js";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from './command'

type PROPS = {}
const CommandMenu: Component<ParentProps & { contextId: string }> = props => {
    const [open, setOpen] = createSignal(false)
    const [loading, setLoading] = createSignal(false)


    const contextId = () => props.contextId;
    const children = () => props.children;
    onMount(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        onCleanup(() => document.removeEventListener('keydown', down))
    })
    return (

        <>
            <CommandDialog contextId={contextId()} open={open()} onOpenChange={setOpen}>
                <CommandInput/>

                <CommandList>
                    <Show when={loading()}>
                        <CommandPrimitive.Loading>Hang on…</CommandPrimitive.Loading>
                    </Show>

                    <CommandEmpty>No results found.</CommandEmpty>

                    <CommandGroup heading="Fruits">
                        <CommandItem>Apple</CommandItem>
                        <CommandItem>Orange</CommandItem>
                        <CommandSeparator/>
                        <CommandItem>Pear</CommandItem>
                        <CommandItem>Blueberry</CommandItem>
                    </CommandGroup>


                </CommandList>
            </CommandDialog>
        </>
    )
}

export default CommandMenu;