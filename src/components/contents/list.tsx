import {Component, createEffect, createSelector, createSignal, For, Show} from "solid-js";
import {CONTENT} from "~/lib/store";
import {ByteWithLocale} from "~/components/ui/format-byte";
import {ResponsiveDialog} from "~/components/ui/dialogs/responsive-dialog";
import DrawerPrimitive from "@corvu/drawer";
import Dialog from "@corvu/dialog";
import {Button} from "~/components/ui/button";
import {ChevronDown, PhotoIcon, XMark} from "~/components/svg";
import GridWrapper from "~/components/layouts/partials/grid-wrapper";
import {useLayoutContext} from "~/context/layout-provider";
import {Feature} from "geojson";
import ImageContent from "~/components/ui/image";
import {DialogContent} from "~/components/ui/dialogs/base-dialog";
import {DrawerContent} from "~/components/ui/dialogs/base-drawer";
import GridImage from "~/components/contents/partials/grid-image";

type PROPS = {
    feature: Feature | undefined;
}

const ContentsList: Component<PROPS> = props => {
    const {getIsDesktop, getHeight} = useLayoutContext()
    const feature = () => props.feature;
    const [getContents, setContents] = createSignal(feature()?.properties?.profile?.contents)

    createEffect(() => {
        console.log("feature", feature())
        setContents(() => feature()?.properties?.profile?.contents)
        console.log(feature())
        console.log("getContents", getContents())
    })

    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<CONTENT>()
    const isSelected = createSelector(getSelectedId)

    const handler = (data: CONTENT, event: Event) => {
        console.log("Data:", data, "Event:", event);
        setSelectedId(data.id)
        if (isSelected(data.id)) {
            setSelected(data)
        }

    };


    const MobileDialogContent = () => {
        return (
            <DrawerContent side={'bottom'} contextId={'dd1'}>
                <img
                    src={`http://localhost:4000/${getSelected()?.src}`}
                    alt=""
                    class="pointer-events-none h-full max-h-[80.5dvh] w-full object-contain group-hover:opacity-75 rounded-sm"/>
                <DrawerPrimitive.Description class={'p-4 text-pretty'} contextId={'dd1'}>
                    {getSelected()?.original}
                </DrawerPrimitive.Description>

                <div class={'flex justify-end items-center p-1'}>
                    <DrawerPrimitive.Close contextId={'dd1'} as={Button<"button">} size={'icon'}
                                           variant="outline">
                        <ChevronDown/>
                    </DrawerPrimitive.Close>
                </div>
            </DrawerContent>
        )
    }

    return (

        <ResponsiveDialog isDesktop={getIsDesktop()}>
            <Show when={getIsDesktop()} fallback={<MobileDialogContent/>}>
                <DialogContent contextId={'dd1'} class="sm:max-w-[80dvw]">

                    <ImageContent
                        src={`http://localhost:4000/${getSelected()?.src}`}
                        alt={getSelected()?.name}
                        imgClass={'pointer-events-none h-full w-full object-contain group-hover:opacity-75 rounded-sm'}
                        rootClass={'h-full max-h-[78dvh] w-full'}
                        fallbackClass={'animate pulse h-full w-full'}
                    >
                        <PhotoIcon class={'w-full h-full'}/>
                    </ImageContent>

                    <Dialog.Description class={'flex justify-end items-center'} contextId={'dd1'}>
                        <Dialog.Close contextId={'dd1'} as={Button<"button">} size={'icon'}>
                            <XMark class={'stroke-sky-8 fill-sky-4'}/></Dialog.Close>
                    </Dialog.Description>
                </DialogContent>
            </Show>

            <GridWrapper>
                <For each={getContents()?.data}>
                    {(content, i) => (
                        <Show when={getIsDesktop()} fallback={
                            <DrawerPrimitive.Trigger as={'li'} class={'relative'} contextId={'dd1'}
                                                     onClick={[handler, content]}
                                                     classList={{active: isSelected(content.id)}}>
                                <GridImage content={content}/>
                            </DrawerPrimitive.Trigger>
                        }>
                            <Dialog.Trigger as={'li'} class={'relative'} contextId={'dd1'} onClick={[handler, content]}
                                            classList={{active: isSelected(content.id)}}>
                                <GridImage content={content}/>
                            </Dialog.Trigger>
                        </Show>
                    )}
                </For>
            </GridWrapper>
        </ResponsiveDialog>
    );
};

export default ContentsList;