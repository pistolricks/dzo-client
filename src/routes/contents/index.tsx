import {AccessorWithLatest, createAsync, RouteDefinition} from "@solidjs/router";
import {ContentsData} from "~/lib/store";
import {createEffect, createSignal, lazy} from "solid-js";
import {getContents} from "~/lib/contents";
import FooterMenu from "~/components/layouts/partials/footer-menu";
import {Button} from "~/components/ui/button";
import Dialog from "@corvu/dialog";
import FileUploader from "~/components/ui/file-uploader";
import BaseDialog from "~/components/ui/dialogs/base-dialog";
import {PhotoIcon, PlusIcon} from "~/components/svg";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";
import {FeatureCollection, Feature} from "geojson";
const CategoryLayout = lazy(() => import( "~/components/layouts/category-layout"));
const ContentsList = lazy(() => import( "~/components/contents/list"));

export const route = {
    preload({params}) {
        getContents();
    }
} satisfies RouteDefinition
export default function Contents() {

    const {getStoreCollection, setStoreCollection} = useLayoutContext();

    const contentsData: AccessorWithLatest<Feature | undefined> = createAsync(async () => getContents());

    const [getAllContents, setAllContents] = createSignal<Feature | undefined>(contentsData())
    createEffect(() => {

        setAllContents(() => contentsData())
        console.log("contents", contentsData())
        console.log("getAllContents", getAllContents())


        setStoreCollection("features", (ftrs => [
            ...ftrs,
            {
                geometry: contentsData()?.geometry,
                properties: contentsData()?.properties,
                type: contentsData()?.type,
                id: contentsData()?.id
            }
        ]))
        console.log(getStoreCollection)

    })
    return (
        <>
            <CategoryLayout>

            </CategoryLayout>
            <BaseDialog contextId={'albd1'}>
                <Dialog.Content contextId={'albd1'}>
                    <FileUploader/>
                </Dialog.Content>
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

