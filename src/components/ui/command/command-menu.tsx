import {Command as CommandPrimitive} from 'cmdk-solid'
import {Component, createSignal, JSXElement, onCleanup, onMount, ParentProps, Show} from "solid-js";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from './command'

type PROPS = {}
const CommandMenu: Component<{children: JSXElement, contextId: string }> = props => {
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


            <CommandDialog contextId={contextId()} open={open()} onOpenChange={setOpen}>
                <CommandInput/>
                {children()}
            </CommandDialog>


    )
}

export default CommandMenu;


const CommandMenuList: Component<{
    loading: () => boolean
    children?: JSXElement
}> = props => {

    const loading = () => props.loading;
    const children = () => props.children;
    return (
        <CommandList>
            <Show when={loading()}>
                <CommandPrimitive.Loading>Hang on…</CommandPrimitive.Loading>
            </Show>
            <CommandEmpty>No results found.</CommandEmpty>
            {children()}
        </CommandList>
    );
};

const CommandMenuGroup: Component<{title: string, children: JSXElement}> = props => {
    const title = () => props.title;
    const children = () => props.children;
    return (
        <CommandGroup heading={title()}>
            {children()}
        </CommandGroup>
    );
};

const CommandMenuItem: Component<{children: JSXElement}> = props => {
    const children = () => props.children;
    return (
        <CommandItem>
            {children()}
        </CommandItem>
    );
};

export {CommandMenuList, CommandMenuGroup, CommandMenuItem}