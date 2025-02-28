import {Component, For} from "solid-js";
import {VendorsData} from "~/lib/store";
import ListWrapper from "~/components/layouts/partials/list-wrapper";
import VendorCard from "~/components/vendors/partials/vendor-card";

type PROPS = {
    vendors: VendorsData | undefined;
}

const VendorsList: Component<PROPS> = props => {
    const vendors = () => props.vendors?.data;
    return (

            <For each={vendors()}>
                {(vendor, i) => (
                    <VendorCard {...vendor}/>
                )}
            </For>
    );
};

export default VendorsList;