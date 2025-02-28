import Drawer from '@corvu/drawer'
import DrawerPrimitive, {type ContentProps, type DynamicProps} from '@corvu/drawer'
import {type JSX, JSXElement, splitProps, type ValidComponent} from "solid-js";
import {cn} from "~/lib/utils";


type PROPS = {
    children?: JSXElement
    contextId: string
}

function SideDrawer(props: PROPS) {
    const contextId = () => props.contextId;
    const children = () => props.children;

    return (
        <DrawerPrimitive contextId={contextId()} breakPoints={[0.75]} side={"right"}>
            {(props) => (
                <>

                    {children()}

                    <Drawer.Portal contextId={contextId()}>
                        <Drawer.Overlay
                            contextId={contextId()}
                            class="fixed h-sc inset-0 z-40 data-transitioning:transition-colors data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)]"
                            style={{
                                'background-color': `rgb(0 0 0 / ${
                                    0.5 * props.openPercentage
                                })`,
                            }}
                        />

                    </Drawer.Portal>
                </>
            )}
        </DrawerPrimitive>
    )
}

export default SideDrawer


type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
    contextId?: string
    class?: string
    children?: JSX.Element
}

const SideDrawerContent = <T extends ValidComponent = "div">(
    props: DynamicProps<T, DrawerContentProps<T>>
) => {
    const [, rest] = splitProps(props as DrawerContentProps, ["contextId", "class", "children"])
    return (

        <DrawerPrimitive.Content
            contextId={props.contextId}
            class={cn(
                "fixed inset-y-0 right-0 z-50 w-screen md:max-w-md flex h-screen flex-col after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
                props.class ?? "border-l-4 border-corvu-400 bg-corvu-100 pt-3"
            )}
            {...rest}
        >

            {props.children}
        </DrawerPrimitive.Content>

    )
}


export {SideDrawerContent}