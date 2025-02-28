import {createSignal, type JSX, splitProps, type ValidComponent} from "solid-js"

import {Button} from "~/components/ui/button"
import {DrawerClose, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle} from "~/components/ui/drawer"
import DrawerPrimitive, {type ContentProps, type DynamicProps} from "@corvu/drawer";
import {cn} from "~/lib/utils";

export function BaseDrawer() {
    const [goal, setGoal] = createSignal(250)

    const onClick = (change: number) => {
        setGoal(goal() + change)
    }

    return (
        <DrawerPrimitive contextId={'bd1'} dialogId="base-drawer-1" breakPoints={[0.75]} side={"right"}>
            <DrawerPrimitive.Trigger contextId={'bd1'} as={Button<"button">} variant="outline">
                Open Drawer
            </DrawerPrimitive.Trigger>
            <DrawerPrimitive.Content contextId={'bd1'}>
                <div class="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle contextId={'bd1'}>Move Goal</DrawerTitle>
                        <DrawerDescription contextId={'bd1'}>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>
                    <div class="p-4 pb-0">
                        <div class="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                class="size-8 shrink-0 rounded-full"
                                onClick={() => onClick(-10)}
                                disabled={goal() <= 200}
                            >

                                <span class="sr-only">Decrease</span>
                            </Button>
                            <div class="flex-1 text-center">
                                <div class="text-7xl font-bold tracking-tighter">{goal()}</div>
                                <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                class="size-8 shrink-0 rounded-full"
                                onClick={() => onClick(10)}
                                disabled={goal() >= 400}
                            >
                                <span class="sr-only">Increase</span>
                            </Button>
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose contextId={'bd1'} as={Button<"button">} variant="outline">
                            Cancel
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerPrimitive.Content>
        </DrawerPrimitive>
    )
}

type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
    contextId?: string
    class?: string,
    side?: 'top' | 'right' | 'bottom' | 'left',
    children?: JSX.Element
}
const DrawerContent = <T extends ValidComponent = "div">(
    props: DynamicProps<T, DrawerContentProps<T>>
) => {
    const [, rest] = splitProps(props as DrawerContentProps, ["contextId", "class","side", "children"])

    const side = () => props.side ?? 'bottom'

    let sides = {
        top: "fixed w-full inset-x-0 top-0 z-50 flex h-full border-l-2 border-b-2 border-r-2  rounded-b-lg after:absolute after:inset-x-0 after:top-[calc(100%-1px)] after:h-1/2 z-50 flex flex-col pt-3 after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
        right: "fixed inset-y-0 right-0 z-50 w-screen md:max-w-md border-l-2 flex h-screen flex-col after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
        bottom: "fixed w-full inset-x-0 bottom-0 z-50 flex h-full border-l-2 border-t-2 border-r-2  rounded-t-lg after:absolute after:inset-x-0 after:top-[calc(100%-1px)] after:h-1/2 z-50 flex flex-col pt-3 after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
        left: "fixed inset-y-0 left-0 z-50 w-screen md:max-w-md border-r-2 flex h-screen flex-col after:bg-inherit data-transitioning:transition-transform data-transitioning:duration-500 data-transitioning:ease-[cubic-bezier(0.32,0.72,0,1)] md:select-none",
    }[side()];


    return (
        <DrawerPrimitive.Content
            contextId={props.contextId}
            class={cn(
                "border-corvu-400 bg-corvu-100",
                props.class,
                sides
            )}
            {...rest}
        >

            {props.children}
        </DrawerPrimitive.Content>

    )
}


export {DrawerContent}