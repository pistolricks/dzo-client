import {Component, For, Show} from "solid-js";
import {ProfileDetailProps} from "~/lib/store";


type PROPS = ProfileDetailProps
const UserDetails: Component<PROPS> = (props) => {

    const name = () => props.name;
    const email = () => props.email;
    const username = () => props.username;

    return (
        <article>
            <div class="mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                    <For each={Object.entries(props)}>
                        {(item) => (
                            <Show when={typeof item?.[1] === 'string'}>
                                <div class="sm:col-span-1 p-3">
                                    <dt class="pl-1 text-base text-gray-900 capitalize">{item?.[1]}</dt>
                                    <div class={' border-t border-gray-5 w-full flex justify-end p-0.5'}>
                                        <dd class="uppercase text-xs font-medium text-tomato-11">{item?.[0]}</dd>
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

export default UserDetails;