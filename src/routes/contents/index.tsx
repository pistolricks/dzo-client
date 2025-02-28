import {AccessorWithLatest, createAsync, RouteDefinition} from "@solidjs/router";
import {lazy, onMount} from "solid-js";
import {getContents} from "~/lib/contents";
import FooterMenu from "~/components/layouts/partials/footer-menu";
import {Button} from "~/components/ui/button";
import FileUploader from "~/components/ui/file-uploader";
import BaseDialog, {DialogContent} from "~/components/ui/dialogs/base-dialog";
import {PhotoIcon, PlusIcon} from "~/components/svg";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";
import {Feature} from "geojson";
import {updateCollection} from "~/lib/features";


const ContentsList = lazy(() => import( "~/components/contents/list"));

export const route = {
    preload({params}) {
        getContents();
    }
} satisfies RouteDefinition
export default function Contents() {

    const {getStoreCollection, setStoreCollection} = useLayoutContext();

    const feature: AccessorWithLatest<Feature> = createAsync(async () => getContents());


    onMount(async () => {
        let col = updateCollection(getStoreCollection, setStoreCollection, feature())
        console.log("col", col)
    })
    return (
        <>
            <ContentsList feature={feature()}/>
            <BaseDialog contextId={'albd1'}>
                <DialogContent contextId={'albd1'}>
                    <FileUploader/>
                </DialogContent>
                <FooterMenu title={<PhotoIcon class={'size-full stroke-sky-11 p-0.5 fill-green-2'}/>} variant={'ghost'}
                            size={'icon'}>
                    <Button as={Drawer.Trigger} contextId={"albd1"} variant={"ghost"} size={'icon'}>
                        <PlusIcon class={'size-full p-0.5 stroke-slate-11'}/>
                    </Button>
                </FooterMenu>
            </BaseDialog>
        </>
    );
}

