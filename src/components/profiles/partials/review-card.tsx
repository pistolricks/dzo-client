import {Component} from "solid-js";
import {IconStar} from "~/components/svg";
import {ReviewProps} from "~/lib/store";

const ReviewCard: Component<ReviewProps> = props => {

    const name = () => props.name;
    const imageSrc = () => props.imageSrc;
    const date = () => props.date;
    const location = () => props.location;
    const rating = () => props.rating;
    const review = () => props.review;

    return (
        <>
            <figure
                class={'bg-gray-100 rounded-2xl shadow ring-1 ring-gray-900/5 sm:col-span-2'}>
                <figcaption
                    class="flex flex-wrap items-center gap-x-4 gap-y-4 border-b border-gray-900/10 px-6 py-2 sm:flex-nowrap">
                    <img class="size-10 flex-none rounded-full bg-gray-50"
                         src={imageSrc()}
                         alt=""/>
                    <div class="flex-auto">
                        <div class="font-semibold text-sm">{name()}</div>
                        <div class="text-gray-600 text-sm">{date()}</div>
                    </div>
                    <div class="flex items-center">
                        <p class="sr-only">{rating()} out of 5 stars</p>
                        <span>{rating()}</span>
                        <IconStar class="size-3 fill-amber-200"/>
                    </div>
                </figcaption>
                <div class="flex-1 p-4">

                    <div class="text-sm/6 text-gray-500">
                        <p class={'p-2'}>
                            {review()}
                        </p>
                    </div>
                </div>

            </figure>
        </>
    );
};

export default ReviewCard;