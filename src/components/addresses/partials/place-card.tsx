import {Component, createEffect, createMemo, createSignal, Match, Show, Switch} from "solid-js";
import {Feature, Properties} from "~/lib/store";
import {CallIcon, EnvelopeIcon, GlobeIcon, MapPin, RatingIcon} from "~/components/svg";
import {A} from "@solidjs/router";
import {Geometry, Point} from "geojson";


export type PLACE_PROPS = {
    geometry: {
        coordinates: [number, number]
        type: string
    }
    properties: Properties
    type: string
    id?: string | number
    bbox?: any
}

const PlaceCard: Component<Feature> = props => {

    const type = () => props.type ?? null;
    const geometry = () => props.geometry;
    const id = () => props.id;
    const properties = () => props.properties?.place ?? props.properties;
    const extraTags = () => properties()?.extratags;
    const bbox = () => props.bbox;

    const displayName = () => properties()?.display_name?.split(',');


    createEffect(() => {
        console.log("geometry", geometry())
        console.log("displayName", displayName())
        console.log("properties", properties())

    })
    /*housenumber, street, locality, district, postcode, city, county, state, country*/
    return (


        <div class="bg-white shadow rounded overflow-hidden">
            <div class="bg-cover bg-center h-16 p-4 flex justify-end items-center"
                 style="background-image: url(https://content.api.news/v3/images/bin/11990db1d540d5c13ea8ca3e01f2083c)">
                <button
                    type={'button'}
                    class="uppercase text-sm text-gray-11 bg-gray-action py-1 px-1 rounded-full shadow-lg">
                    <MapPin class={'size-7 p-1'}/>
                </button>

            </div>
            <div class="px-4 pb-3 pt-4 border-b border-gray-2 bg-gray-1 flex justify-between">
                <div class={'flex justify-start items-center space-x-1'}>
                    <RatingIcon class={'size-4 stroke-amber-10 fill-amber-4'}/>
                    <RatingIcon class={'size-4 stroke-amber-10 fill-amber-4'}/>
                </div>
                <div
                    class="text-xs uppercase font-bold text-gray-600 tracking-wide"><Show
                    fallback={<>{properties()?.type}</>}
                    when={properties()?.address_type !== properties()?.type}> {properties()?.address_type} {properties()?.type?.replaceAll("_", " ")}</Show><Show
                    when={extraTags()?.building !== 'yes'}> {extraTags()?.building}</Show></div>
            </div>
            <div class="p-4 text-gray-700 flex justify-start items-center w-full">

                <AddressTypeShop address_type={properties()?.address_type} name={properties()?.name}
                                 address={properties()?.address}/>


            </div>
            <p class="text-xs py-2 w-full bg-gray-1 items-center text-center">{extraTags()?.opening_hours?.replaceAll(";", " |")}</p>
            <div class="h-14 items-center p-2 border-t border-gray-4 text-gray-600">
                <div class="flex items-center justify-end space-x-2">
                    <Show when={extraTags()?.phone}>
                        <A href={`tel:${extraTags()?.phone}`} target="_blank"
                           class={'flex items-center rounded-full bg-gray-action border border-gray-5 p-1'}>
                            <CallIcon class={'size-7 p-1'}/>
                        </A>
                    </Show>
                    <Show when={extraTags()?.email}>
                        <A href={`mailto:${extraTags()?.email}`}
                           class={'flex items-center rounded-full bg-gray-action border border-gray-5 p-1'}>
                            <EnvelopeIcon class={'size-7 p-1'}/>
                        </A>
                    </Show>
                    <Show when={extraTags()?.website}>
                        <A href={`${extraTags()?.website}`} target="_blank"
                           class={'flex items-center rounded-full bg-gray-action border border-gray-5 p-1'}>
                            <GlobeIcon class={'size-7 p-1'}/>
                        </A>
                    </Show>
                </div>
            </div>
        </div>
    );
};

export default PlaceCard;


const AddressTypeShop: Component<{
    name: string;
    address_type: string;
    address: {
        road: string;
        city: string;
        country: string;
        house_number: string;
        locality: string;
        postcode: string;
        street: string;
        state: string;
        suburb: string;
        county: string;
        town: string;
        "ISO3166-2-lvl4": string;

    }
}> = props => {

    const address_type = () => props.address_type;
    const name = () => props.name;
    const address = () => props?.address;
    createEffect(() => {
        console.log('type', address_type())
        console.log('addy', address())
    })

    return (
        <div class={'items-center text-left'}>
            <p class="text-xl text-gray-900 leading-none">
                {name()}
            </p>


            <Switch>
                <Match when={address_type() === 'shop'}>
                    <p class="text-sm w-full mt-2 text-gray-11">
                        {address()?.suburb}
                    </p>
                    <p class="text-sm w-full mt-3 text-gray-12 font-semibold">
                        <span class={'capitalize'}>{address()?.house_number} {address()?.road}</span>
                    </p>

                    <p class="text-sm w-full mt-1 font-semibold text-gray-12">
                        <Show
                            fallback={
                                <Show when={address()?.county}>{address()?.county}, </Show>
                            }
                            when={address()?.city}>
                            {address()?.city},
                        </Show>
                        {address()?.['ISO3166-2-lvl4']?.replace("US-", "")} {address()?.postcode}
                    </p>
                </Match>
                <Match when={address_type() === 'amenity'}>
                    <p class="text-sm w-full mt-2 text-gray-11">
                        {address()?.suburb}
                    </p>
                    <p class="text-sm w-full mt-3 text-gray-12 font-semibold">
                        <span class={'capitalize'}>{address()?.house_number} {address()?.road}</span>
                    </p>

                    <p class="text-sm w-full mt-1 font-semibold text-gray-12">
                        <Show
                            fallback={
                                <Show when={address()?.county}>{address()?.county}, </Show>
                            }
                            when={address()?.city}>
                            {address()?.city},
                        </Show>
                        {address()?.['ISO3166-2-lvl4']?.replace("US-", "")} {address()?.postcode}
                    </p>
                </Match>
                <Match when={address_type() === 'retail'}>
                    <p class="text-sm w-full mt-2 text-gray-11">
                        {address()?.suburb}
                    </p>
                    <p class="text-sm w-full mt-3 text-gray-12 font-semibold">
                        <span class={'capitalize'}>{address()?.house_number} {address()?.road}</span>
                    </p>

                    <p class="text-sm w-full mt-1 font-semibold text-gray-12">
                        <Show
                            fallback={
                                <Show when={address()?.county}>{address()?.county}, </Show>
                            }
                            when={address()?.city}>
                            {address()?.city},
                        </Show>
                        {address()?.['ISO3166-2-lvl4']?.replace("US-", "")} {address()?.postcode}
                    </p>
                </Match>
                <Match when={address_type() === 'place'}>

                    <p class="text-sm w-full mt-3 text-gray-12 font-semibold">
                        <span class={'capitalize'}>{address()?.house_number} {address()?.road}</span>
                    </p>
                    <Show when={address()?.suburb}>
                        <p class="text-sm w-full mt-2 text-gray-11">
                            {address()?.suburb},
                        </p>
                    </Show>
                    <p class="text-sm w-full mt-1 font-semibold text-gray-12">
                        <Switch>
                            <Match when={address()?.town}>{address()?.town}, </Match>
                            <Match when={address()?.city}>{address()?.city}, </Match>
                            <Match when={address()?.county}>{address()?.county}, </Match>

                        </Switch>

                        {address()?.['ISO3166-2-lvl4']?.replace("US-", "")} {address()?.postcode}
                    </p>
                </Match>
            </Switch>
        </div>
    )
}