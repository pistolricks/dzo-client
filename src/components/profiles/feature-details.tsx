import {Component, createEffect, For, Show, VoidComponent} from "solid-js";
import {Feature} from "~/lib/store";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {Button} from "~/components/ui/button";


type PROPS = {
    street_address: string
    unit?: string
    locality: string
    administrative_area: string
    post_code: string
    phone: string
}

const FeatureDetails: Component<Feature> = props => {

    const imageSrc = () => "";
    const coverSrc = () => "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";


    createEffect(() => {
        console.log("feature", props)
    })

    return (
        <article>
            <div>
                <div>
                    <img class="h-28 w-full object-cover lg:h-48"
                         src={coverSrc()}
                         alt=""/>
                </div>
                <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

                    <div class="-mt-26  sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div class="flex">

                            <Avatar class={'bg-gray-3 size-24 ring-2 ring-white lg:size-32'}>
                                <AvatarImage src={imageSrc()}/>
                                <AvatarFallback class={'uppercase'}>{props.properties?.type}</AvatarFallback>
                            </Avatar>


                        </div>
                        <div
                            class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">


                        </div>
                    </div>

                </div>
            </div>
            <div class="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                    <For each={Object.entries(props?.properties?.address)?.reverse()}>
                        {(item: [string, unknown]) => (
                            <Show when={typeof item?.[1] === 'string'}>
                                <div class="sm:col-span-1 p-3">
                                    <dt class="pl-1 text-base text-gray-900 h-6">{item?.[1] as string}</dt>
                                    <div class={' border-t border-gray-5 w-full flex justify-end p-0.5'}>
                                        <dd class="uppercase text-xs font-medium text-tomato-11">{item?.[0]?.replaceAll("_", " ")}</dd>
                                    </div>
                                </div>
                            </Show>
                        )}
                    </For>
                </dl>
            </div>
        </article>
    );
};

export default FeatureDetails;

const LocationAdvert: VoidComponent = () => {

    return (
        <div class="bg-white">
            <div class="px-6 py-12 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        Add your location information
                    </h2>
                    <p class="mx-auto mt-6 max-w-xl text-balance text-lg/8 text-gray-600">
                        Add your location information to get trip details.
                    </p>
                    <div class="mt-4 flex items-center justify-center gap-x-6">
                        <Button type={"button"} variant={'information'}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {LocationAdvert};