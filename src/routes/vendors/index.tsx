import {AccessorWithLatest, createAsync} from "@solidjs/router";
import {createEffect, lazy, onMount} from "solid-js";
import {getVendors} from "~/lib/vendors";
import FooterMenu from "~/components/layouts/partials/footer-menu";
import Dialog from "@corvu/dialog";
import {Button} from "~/components/ui/button";
import BaseDialog from "~/components/ui/dialogs/base-dialog";
import {BuildingOffice2Icon, PlusIcon} from "~/components/svg";
import Drawer from "@corvu/drawer";
import FormLayout from "~/components/layouts/form-layout";
import CreateVendorForm from "~/components/vendors/forms/create-vendor-form";
import {FeatureCollection} from "geojson";
import {useLayoutContext} from "~/context/layout-provider";
import {Feature} from "~/lib/store";
import {updateCollection} from "~/lib/features";

const CategoryLayout = lazy(() => import( "~/components/layouts/category-layout"));
const VendorsList = lazy(() => import( "~/components/vendors/list"));


export const route = {
    preload() {
        getVendors();
    }
}

export default function Vendors() {
    const {getStoreCollection, setStoreCollection} = useLayoutContext();

    const features: AccessorWithLatest<Feature> = createAsync(async () => getVendors());





onMount(async () => {

    let col = updateCollection(getStoreCollection, setStoreCollection, features())
    console.log("col", col)

})


return (
    <>
        <CategoryLayout {...features()}>
            <VendorsList vendors={features()?.properties?.vendors}/>
        </CategoryLayout>
        <BaseDialog contextId={'albd1'}>
            <Dialog.Content contextId={'albd1'}>
                <FormLayout title="Add Vendor">
                    {/*
            <FileUploader/>
            */}
                    <CreateVendorForm/>
                </FormLayout>
            </Dialog.Content>
            <FooterMenu title={<BuildingOffice2Icon class={'size-full stroke-sky-11 p-0.5 fill-green-2'}/>}
                        variant={'ghost'}
                        size={'icon'}>
                <Button as={Drawer.Trigger} contextId={"albd1"} variant={"ghost"} size={'icon'}>
                    <PlusIcon class={'size-full p-0.5 stroke-slate-11'}/>
                </Button>
            </FooterMenu>

        </BaseDialog>
    </>

);
}
