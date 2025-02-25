import {Component, For, JSXElement, Match, Show, Switch} from "solid-js";
import {A} from "@solidjs/router";
import {AttendeeProps, LocationProps} from "~/lib/store";
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";

type PROPS = {
    title: string;
    description: string;
    imageSrc?: string;
    href?: string;
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    class?: string;
    location?: LocationProps;
    attendees?: AttendeeProps[];
    owner: AttendeeProps;
    onClick?: () => void;
    children?: JSXElement;
}

const EventCard: Component<PROPS> = props => {

    const title = () => props.title;
    const description = () => props.description;
    const imageSrc = () => props.imageSrc;
    const href = () => props.href ?? '#';
    const start_date = () => props.start_date ?? 'January 10th, 2025';
    const end_date = () => props.end_date ?? 'January 10th, 2025';
    const start_time = () => props.start_time ?? '5:00 PM';
    const end_time = () => props.end_time ?? '6:00 PM';
    const location = () => props.location;
    const attendees = () => props.attendees ?? [];
    const owner = () => props.owner;
    const className = () => props.class ?? ''
    const children = () => props.children;
    const onClick = () => props.onClick;

    return (
        <A
            onClick={onClick()}
            href={href()}
            class={`relative flex items-center space-x-3 rounded-xl border border-gray-300 bg-gray-100 px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400 ${className()} `}>
            <div class="flex-auto sm:flex sm:justify-between w-full">
                <div class={'sm:pr-2 space-y-2 w-full'}>
                    <div class={'py-3 px-4 border border-gray-300 rounded-lg bg-white'}>
                        <h3 class="pr-10 font-semibold text-gray-900">{title()}</h3>
                    </div>
                    <div class={'py-3 px-4 border border-gray-300 rounded-lg bg-white'}>
                        <div
                            class="flex items-start gap-x-3">
                            <dt class="mt-0.5">
                                <span class="sr-only">Location</span>
                                <svg class="size-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"
                                     aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd"
                                          d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </dt>
                            <dd class={'text-gray-700'}>{location()?.name}, {location()?.city}</dd>
                        </div>
                    </div>
                    <div class={'py-2 px-4 border border-gray-300 rounded-lg bg-white w-full'}>
                        <dl class="flex flex-col text-gray-500 w-full">
                            <div class="flex justify-start gap-x-3 py-2">
                                <dt class="mt-0.5">
                                    <span class="sr-only">Start Date</span>
                                    <svg class="size-5 stroke-emerald-500 fill-emerald-200" viewBox="0 0 20 20"
                                         fill="currentColor"
                                         aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd"
                                              d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </dt>
                                <dd>
                                    <time class={'lg:flex lg:justify-start'}>
                                        {start_date()}
                                        <span class={'hidden lg:block pl-1.5'}> at {start_time()}</span>
                                    </time>

                                </dd>
                            </div>
                            <div class="lg:hidden pb-2 flex justify-start gap-x-3">
                                <dt class="mt-0.5">
                                <span class="sr-only">Start Time <span
                                    class={start_date() !== end_date() ? 'hidden' : ''}>and end time.</span></span>
                                    <svg class="size-5 stroke-emerald-500 fill-white"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                </dt>
                                <dd>
                                    <time>{start_time()} <span
                                        class={start_date() !== end_date() ? 'hidden' : ''}> - {end_time()}</span>
                                    </time>
                                </dd>
                            </div>

                            <Show when={start_date() !== end_date()}>
                                <div class="relative py-2">
                                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div class="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div class="relative flex justify-center">
                                         <span class="bg-white px-2 text-gray-500">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                  fill="currentColor" class="size-5">
                                              <path fill-rule="evenodd"
                                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                                    clip-rule="evenodd"/>
                                            </svg>
                                         </span>
                                    </div>
                                </div>
                                <div class="flex justify-start lg:pb-2 pt-2 gap-x-3">
                                    <dt class="mt-0.5">
                                        <span class="sr-only">End Date</span>
                                        <svg class="size-5 text-red-400" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                  d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </dt>
                                    <dd>
                                        <time  class={'lg:flex lg:justify-start'}>
                                            {end_date()}
                                            <span class={'hidden lg:block pl-1.5'}> at {end_time()}</span>
                                        </time>
                                    </dd>
                                </div>

                                <div class="lg:hidden flex justify-start pb-2 gap-x-3">
                                    <dt class="mt-0.5">
                                        <span class="sr-only">End Time</span>
                                        <svg class="size-5 text-red-400" xmlns="http://www.w3.org/2000/svg"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </dt>
                                    <dd>
                                        <time>{end_time()}</time>
                                    </dd>
                                </div>
                            </Show>
                        </dl>
                    </div>
                </div>
                <div class={'mt-2 sm:mt-0 py-2 px-2 border border-gray-300 rounded-lg bg-white sm:min-w-[27dvw]'}>
                    <div class="flex flex-col w-full py-2">
                        <div class={'flex justify-start space-x-2 w-full px-4'}>

                            <Avatar>
                                <AvatarImage src={owner().imageSrc}/>
                                <AvatarFallback>{owner().first_name.substring(0, 1)}{owner().last_name.substring(0, 1)}</AvatarFallback>
                            </Avatar>
                            <div class="ml-3">
                                <p class="text-sm  font-medium text-gray-700 group-hover:text-gray-900">{owner().first_name} {owner().last_name}</p>
                                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">Organizer</p>
                            </div>
                        </div>
                        <div class="relative mt-3 mb-1">
                            <div class="absolute inset-0 px-3 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center">
                                <span class="bg-white px-2 text-sm text-gray-500">Attendees</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-start w-full py-2 px-4">
                            <div class="flex -space-x-4 transition-all hover:-space-x-2">
                                <For each={attendees()}>
                                    {(item) => (
                                        <Avatar>

                                            <AvatarImage src={item.imageSrc}/>
                                            <AvatarFallback>{item?.first_name.substring(0, 1)}{item?.last_name.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                </For>

                                <Show when={attendees()?.length > 0}>
                                    <div
                                        class="relative inline-flex items-center justify-center w-10 h-10 text-sm transition-all border-2 border-white rounded-full bg-slate-200 text-slate-500">
                                        +{attendees()?.length}
                                    </div>
                                </Show>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </A>
    );
};

export default EventCard;