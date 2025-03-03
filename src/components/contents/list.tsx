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
import MobileDrawerContent from "~/components/contents/partials/mobile-drawer-content";
import DesktopDialogContent from "~/components/contents/partials/desktop-dialog-content";

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




    return (

        <ResponsiveDialog isDesktop={getIsDesktop()}>
            <Show when={getIsDesktop()} fallback={<MobileDrawerContent content={getSelected()} contextId={'dd1'}/>}>
                <DesktopDialogContent content={getSelected()} contextId={'dd1'}/>
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