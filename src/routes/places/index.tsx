import {AccessorWithLatest, createAsync, useSubmission} from "@solidjs/router";
import {createEffect, createMemo, createSignal, Show} from "solid-js";
import {
    actionPositionHandler,
    addAddress,
    addressSearchHandler,
    getAddresses,
    getAddressFormFormats
} from "~/lib/addresses";
import FooterMenu from "~/components/layouts/partials/footer-menu";

import AddressSearchForm from "~/components/addresses/forms/address-search-form";
import {CountryData, LookupResult, OsmOutput} from "~/lib/store";
import {MagnifyingGlass, MapIcon, MapPin} from "~/components/svg";
import GeoMap from "~/components/addresses/partials/geo-map";
import {useLayoutContext} from "~/context/layout-provider";
import DrawerPrimitive from "@corvu/drawer";
import CreateAddressForm from "~/components/addresses/forms/create-address-form";
import AdvancedSearch from '~/svgs/advanced-search.svg'
import {DrawerContent} from "~/components/ui/dialogs/base-drawer";
import FormLayout from "~/components/layouts/form-layout";

export const route = {
    preload() {
        getAddresses();
    }
}

export default function Addresses() {
    const {setMyLocation, getMyLocation, setStoreCollection, getStoreCollection, getIsDesktop} = useLayoutContext();
    const addressData: AccessorWithLatest<any | undefined> = createAsync(async () => getAddresses());
    const formFormats: AccessorWithLatest<CountryData | undefined> = createAsync(async () => getAddressFormFormats());
    const submissionAv1 = useSubmission(addAddress);
    const submission = useSubmission(addressSearchHandler);
    const currentPosition = useSubmission(actionPositionHandler);
    const [getToggleGeo, setToggleGeo] = createSignal(false)
    const [getOpenForm, setOpenForm] = createSignal(false)
    const [getPlace, setPlace] = createSignal<OsmOutput | undefined>()
    const [getDetails, setDetails] = createSignal<LookupResult | undefined>()

    const [open, setOpen] = createSignal(false)

    const results = createMemo(() => {
        console.log("result2", submission.result)

        if(submission.result?.length > 0){
            setStoreCollection(submission.result)
        }

        if(submissionAv1.result?.length > 0){
            setStoreCollection(submissionAv1.result)
        }
        setOpen(getStoreCollection?.features?.length > 0)
        return getStoreCollection;
    })





    createEffect(() => {
        console.log("open", open())
        console.log("getDetails", getDetails())
        console.log("getPlace", getPlace())
        console.log("getStoreCollection", getStoreCollection)
        console.log("addresses", addressData())

        console.log("currentPosition", currentPosition.result?.results)

        setMyLocation(currentPosition.result?.results)
    })


    const handleToggleGeolocation = () => {
       setToggleGeo((p) => !p)
    }

    function handleOpenChange() {
        setOpen((p) => !p)


        console.log("openChange")
        console.log("open_or", open())
    }


    function handleOpenForm() {
        setOpenForm((p) => !p)


        console.log("openChange")
        console.log("open_or", open())
    }
    return (


        <>
        <DrawerPrimitive contextId={'map1'} noOutsidePointerEvents={false} closeOnOutsidePointer={false}
                         breakPoints={[0.4]} side={getIsDesktop() ? 'right' : 'bottom'} defaultSnapPoint={1}
                         snapPoints={[0, 1]}
                         dialogId="responsive-drawer-mobile" open={open()} onOpenChange={handleOpenChange}>


            <GeoMap handleToggle={handleToggleGeolocation} toggleGeo={getToggleGeo()} coordinates={getMyLocation()?.geometry?.coordinates} featureCollection={results()}/>


            <FooterMenu childClass={'relative w-full sm:max-w-sm'}
                        sectionClass={'flex justify-between items-center w-full space-x-4'}
                        title={<MapIcon class={'size-full stroke-mint-11 p-0.5 fill-green-2'}/>}
                        variant={'ghost'} size={'icon'}>


                <DrawerPrimitive contextId={'map2'} noOutsidePointerEvents={false} closeOnOutsidePointer={false}
                                 breakPoints={[0.4]} side={getIsDesktop() ? 'right' : 'bottom'} defaultSnapPoint={1}
                                 snapPoints={[0, 1]}
                                 dialogId="responsive-drawer-mobile" open={getOpenForm()} onOpenChange={handleOpenForm}>


                    <DrawerContent side={getIsDesktop() ? 'right' : 'bottom'} contextId={'map2'}>
                        <FormLayout title="Add Address">
                            <CreateAddressForm contextId={'map2'} {...formFormats()}/>
                        </FormLayout>

                    </DrawerContent>
                    <Show when={getToggleGeo()}>
                        <AddressSearchForm onClick={handleOpenForm} contextId={'map2'} class={getToggleGeo() ? 'w-full sm:max-w-sm' : ''}/>
                    </Show>
                </DrawerPrimitive>
                <Show when={!getToggleGeo()}>
                <button class={'absolute right-0 bottom-0 justify-center py-4 items-center size-8'} onClick={handleToggleGeolocation}>
                    <MagnifyingGlass class={'stroke-red-11 size-8'}/>
                </button>
                </Show>

            </FooterMenu>
        </DrawerPrimitive>


            </>
    );
}
