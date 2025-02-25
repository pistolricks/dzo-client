import {Component, For} from "solid-js";
import ReviewCard from "~/components/profiles/partials/review-card";
import {ReviewProps} from "~/lib/store";

type PROPS = {
    list: ReviewProps[]
}

const ReviewDetails: Component<PROPS> = props => {

    const list = () => props.list;
    return (
        <>
            <div class="mt-1 grid grid-cols-1 gap-4 p-2 md:px-6 py-2 overflow-y-auto h-full">
                <For each={list()}>
                    {(item) => (
                        <ReviewCard {...item}/>
                    )}
                </For>

            </div>
        </>
    );
};

export default ReviewDetails;