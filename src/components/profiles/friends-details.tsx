import {Component, For} from "solid-js";
import {FriendProps} from "~/lib/store";
import SimpleCard from "~/components/profiles/partials/friend-card";

type PROPS = {
    list: FriendProps[]
};
const FriendsDetails: Component<PROPS> = props => {

    const list = () => props.list;

    return (
        <>
            <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2 p-2 md:px-6 py-2">
                <For each={list()}>
                    {(item) => (
                        <SimpleCard title={`${item.first_name} ${item.last_name}`} description={`@${item.nickname}`} imageSrc={item.imageSrc}/>
                    )}
                </For>

            </div>
        </>
    );
};

export default FriendsDetails;