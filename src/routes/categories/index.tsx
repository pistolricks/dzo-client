import {Component, For, ParentProps} from "solid-js";
import {MenuItem} from "~/components/layouts/partials/side-nav-menu";
import {useLayoutContext} from "~/context/layout-provider";
import {A} from "@solidjs/router";
import BentoGrids from "~/components/ui/bento-grids";
import Bento from "~/components/ui/bento-grids";

const Categories: Component<ParentProps> = props => {
    const {apps, getHeight} = useLayoutContext();

    return (
        <div class={"h-full w-full scrollbar-hide relative overflow-y-auto container p-2"}>
            <ul class="md:absolute md:top-1/2 md:-translate-y-1/2 md:inset-x-0 container lg:w-5/6 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
                <For each={apps}>
                    {(item, i) => (
                     <A href={item.href} class={'relative md:col-span-2 '}>
                            <Bento variant={i()} class={'h-40 w-full'} title={item.title}
                                   imageSrc={`/${item.href}.jpg`}/>
                     </A>
                    )}
                </For>
            </ul>
        </div>
    );
};

export default Categories;