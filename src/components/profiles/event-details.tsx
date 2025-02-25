import {Component, For} from "solid-js";
import EventCard from "~/components/profiles/partials/event-card";
import {EventProps} from "~/lib/store";

type PROPS = {
    list: EventProps[];
}

const FriendsDetails: Component<PROPS> = props => {

    const list = () => props.list;
    return (
        <>
            <div class="mt-1 grid grid-cols-1 gap-4 p-2 md:px-6 py-2">
                <For each={list()}>
                    {(item) => (
                        <EventCard {...item}/>
                    )}
                </For>

            </div>
        </>
    );
};

export default FriendsDetails;