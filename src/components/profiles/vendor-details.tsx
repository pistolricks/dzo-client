import {Component, createEffect, For, Show, VoidComponent} from "solid-js";
import {Feature, VENDOR} from "~/lib/store";
import {Button} from "~/components/ui/button";


type PROPS = VENDOR
const VendorDetails: Component<PROPS> = (props) => {


    createEffect(() => {
        console.log("vv", props)
    })

    return (
        <article>
            <div class="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                    <For each={Object.entries(props)}>
                        {(item) => (
                            <Show when={typeof item?.[1] === 'string'}>
                                <div class="sm:col-span-1 p-3">
                                    <dt class="pl-1 text-base text-gray-900  h-6">{item?.[1]}</dt>
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

export default VendorDetails;


const VendorAdvert: VoidComponent = () => {

    return (
        <div class="bg-white">
            <div class="px-6 py-12 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-balance text-xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Create a
                        service account in just a few minutes.</h2>
                    <p class="mx-auto mt-2 max-w-xl text-balance text-lg/8 text-gray-600">
                        Signing up and listing your services is 100% free. Any Service,
                        Anytime: Whether you’re a plumber, tutor, hairdresser, fitness coach, or any other service
                        provider, our platform welcomes you!


                    </p>
                    <div class="mt-4 flex items-center justify-center gap-x-6">
                        <Button type={"button"} variant={'information'}>Get Started</Button>
                        <Button type={"button"} variant={'link'}>Learn more <span aria-hidden="true">→</span></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {VendorAdvert};