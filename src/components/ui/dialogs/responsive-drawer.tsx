import type {ParentProps} from "solid-js"
import {createSignal, Show} from "solid-js"
import DrawerPrimitive from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";

export function ResponsiveDrawer(props: ParentProps & {
    contextId?: string,
    side?: 'top' | 'right' | 'bottom' | 'left'
}) {
    const {getIsDesktop} = useLayoutContext();

    const [open, setOpen] = createSignal(false)

    const side = () => props.side ?? 'right'
    const contextId = () => props.contextId ?? 'rmd1'

    const children = () => props.children;


    const MobileDrawer = () => (
   <></>
    )

    return (
        <Show when={getIsDesktop()} fallback={<MobileDrawer/>}>
            <DrawerPrimitive contextId={contextId()} noOutsidePointerEvents={false} closeOnOutsidePointer={false}
                             breakPoints={[0.4]} side={side()} dialogId="responsive-drawer-desktop" open={open()}
                             onOpenChange={setOpen}>
                {children()}
            </DrawerPrimitive>
        </Show>
    )
}
