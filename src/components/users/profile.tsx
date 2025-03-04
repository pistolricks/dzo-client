import {Component, createMemo, createSignal, Show} from "solid-js";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"
import UserDetails from "~/components/profiles/user-details";
import {CountryData, Feature, FeatureCollection} from "~/lib/store";
import VendorDetails, {VendorAdvert} from "~/components/profiles/vendor-details";
import {Card} from "~/components/ui/card";
import {useLayoutContext} from "~/context/layout-provider";

import CreateAddressForm from "~/components/addresses/forms/create-address-form";
import FormLayout from "~/components/layouts/form-layout";
import {AccessorWithLatest, createAsync, useSubmission} from "@solidjs/router";
import {addAddress, getAddressFormFormats} from "~/lib/addresses";
import FeatureDetails from "../profiles/feature-details";


export const route = {
    preload() {
        getAddressFormFormats();
    }
}



const UserProfile: Component<Feature> = props => {
    const {storedCurrentUser} = useLayoutContext();
    const formFormats: AccessorWithLatest<CountryData | undefined> = createAsync(async () => getAddressFormFormats());
    const submission = useSubmission(addAddress);

    const [getFeatureCollection, setFeatureCollection] = createSignal<FeatureCollection>()
    const name = () => storedCurrentUser?.name;


    const vendor = () => props.properties?.profile?.vendor;


    const userAddress = {
        name: '',
        phone: '',
        street_address: '',
        unit: '',
        locality: '',
        administrative_area: '',
        dependent_locality: '',
        post_code: '',

    }


    const featureCollection = createMemo(() => {
       setFeatureCollection(submission?.result?.results)
        return getFeatureCollection();
    })

    return (
        <article class={'bg-white w-full h-full overflow-hidden'}>

            <Tabs defaultValue="account" class="container   mx-auto mt-6 sm:mt-2 2xl:mt-5">
                <TabsList class="-mb-px  flex space-x-8 bg-transparent border-b border-gray-200 pb-4 rounded-none">
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="profile">
                        Profile
                    </TabsTrigger>

                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="address">
                       Location
                    </TabsTrigger>
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="events">
                        Events
                    </TabsTrigger>
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="vendor">
                        Service
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="profile"
                             class={'mx-auto  pb-6 h-full min-h-[67dvh] max-h-[67dvh] overflow-y-auto flex flex-col'}>
                    <UserDetails {...storedCurrentUser}/>

                </TabsContent>
                <TabsContent value="address"
                             class={'mx-auto  pb-6 h-full min-h-[67dvh] max-h-[67dvh] overflow-y-auto flex flex-col'}>

                    <Show
                        fallback={
                            <FormLayout title="Add Address" hideLogo>

                            </FormLayout>
                        }
                        when={featureCollection()?.features}>
                        <FeatureDetails geometry={featureCollection()?.features?.[0]?.geometry} properties={featureCollection()?.features?.[0]?.properties?.place} type={'Feature'} />
                    </Show>

                </TabsContent>

                <TabsContent value="events"
                             class={'mx-auto  pb-6 h-full min-h-[67dvh] max-h-[67dvh] overflow-y-auto flex flex-col'}>
                </TabsContent>
                <TabsContent value="vendor"
                             class={'mx-auto  pb-6 h-full min-h-[67dvh] max-h-[67dvh] overflow-y-auto flex flex-col'}>
                    <Show
                        fallback={
                            <Card>
                                <VendorAdvert/>
                            </Card>
                        }
                        when={vendor()} keyed>
                        {(v) => <VendorDetails {...v()}/>}
                    </Show>


                </TabsContent>
            </Tabs>
        </article>
    );
};

export default UserProfile;



