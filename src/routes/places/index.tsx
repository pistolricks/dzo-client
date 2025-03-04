import {AccessorWithLatest, createAsync, useSubmission} from "@solidjs/router";
import {createEffect, createMemo, createSignal} from "solid-js";
import {actionPositionHandler, addressSearchHandler, getAddresses} from "~/lib/addresses";
import FooterMenu from "~/components/layouts/partials/footer-menu";

import AddressSearchForm from "~/components/addresses/forms/address-search-form";
import {LookupResult, OsmOutput} from "~/lib/store";
import {MapIcon} from "~/components/svg";
import GeoMap from "~/components/addresses/partials/geo-map";
import {useLayoutContext} from "~/context/layout-provider";
import DrawerPrimitive from "@corvu/drawer";


export const route = {
    preload() {
        getAddresses();
    }
}

export default function Addresses() {
    const {setMyLocation, getMyLocation, setStoreCollection, getStoreCollection, getIsDesktop} = useLayoutContext();
    const addressData: AccessorWithLatest<any | undefined> = createAsync(async () => getAddresses());

    const submission = useSubmission(addressSearchHandler);
    const currentPosition = useSubmission(actionPositionHandler);

    const [getPlace, setPlace] = createSignal<OsmOutput | undefined>()
    const [getDetails, setDetails] = createSignal<LookupResult | undefined>()

    const [open, setOpen] = createSignal(false)

    const results = createMemo(() => {
        console.log("result2", submission.result)

        setStoreCollection(submission.result)

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

     function handleOpenChange(open: boolean){
        setOpen(open)


        console.log("openChange")
        console.log("open_or", open)
    }

    return (

        <DrawerPrimitive contextId={'map1'} noOutsidePointerEvents={false} closeOnOutsidePointer={false}
                         breakPoints={[0.4]} side={getIsDesktop() ? 'right' : 'bottom'} defaultSnapPoint={1}
                         snapPoints={[0, 1]}
                         dialogId="responsive-drawer-mobile" open={open()} onOpenChange={(e) => handleOpenChange(e)}>


            <GeoMap coordinates={getMyLocation()?.geometry?.coordinates} featureCollection={results()}/>
            <FooterMenu childClass={'w-full sm:max-w-sm'}
                        sectionClass={'flex justify-between items-center w-full space-x-4'}
                        title={<MapIcon class={'size-full stroke-mint-11 p-0.5 fill-green-2'}/>}
                        variant={'ghost'} size={'icon'}>
                <AddressSearchForm contextId={'map1'} class={'w-full sm:max-w-sm'}/>
            </FooterMenu>
        </DrawerPrimitive>

    );
}
