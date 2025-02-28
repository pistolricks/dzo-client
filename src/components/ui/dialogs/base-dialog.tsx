import Dialog from '@corvu/dialog'
import {Component, JSX, JSXElement, ParentProps, splitProps, ValidComponent} from 'solid-js'
import DrawerPrimitive, {ContentProps, DynamicProps} from "@corvu/drawer";
import {cn} from "~/lib/utils";

type PROPS = ParentProps & { contextId?: string }


const BaseDialog: Component<PROPS> = props => {

    const children = () => props.children;


    return (
        <Dialog contextId={props.contextId}>
            {children()}
            <Dialog.Portal contextId={props.contextId}>
                {/* <Dialog.Overlay contextId={props.contextId}/>*/}
               <>
               </>
            </Dialog.Portal>
        </Dialog>
    )
}

export default BaseDialog

type DialogContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
    contextId?: string
    class?: string
    children?: JSX.Element
}
export const DialogContent = <T extends ValidComponent = "div">(
    props: DynamicProps<T, DialogContentProps<T>>
) => {
    const [, rest] = splitProps(props as DialogContentProps, ["contextId", "class", "children"])

    return (
        <Dialog.Content
            contextId={props.contextId}
            class={cn(
                "fixed left-1/2 top-1/2 z-50 min-w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-corvu-400 bg-corvu-100 px-6 py-5 data-open:animate-in data-open:fade-in-0% data-open:zoom-in-95% data-open:slide-in-from-top-10% data-closed:animate-out data-closed:fade-out-0% data-closed:zoom-out-95% data-closed:slide-out-to-top-10%",
                props.class
            )}
            {...rest}
        >
            {props.children}
        </Dialog.Content>
    );
};