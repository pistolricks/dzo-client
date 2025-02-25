import {Component, For, ParentProps, Show} from "solid-js";
import {useLayoutContext} from "~/context/layout-provider";
import {A} from "@solidjs/router";
import Bento from "~/components/ui/bento-grids";
import BaseSearch from "~/components/ui/search/search";
import {VENDOR, VendorsData} from "~/lib/store";
import FooterMenu from "~/components/layouts/partials/footer-menu";
import {BuildingOffice2Icon} from "~/components/svg";

const Categories: Component<ParentProps> = props => {
    const {apps} = useLayoutContext();

    return (
        <div class={"h-full w-full scrollbar-hide relative overflow-y-auto md:overflow-y-hidden container px-2 py-6"}>

            <div class={'md:absolute md:top-1/2 md:-translate-y-1/2 md:inset-x-0 container lg:w-5/6 space-y-4'}>

                <ul class=" grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
                    <For each={apps}>
                        {(item, i) => (
                            <A href={item.href} class={'relative md:col-span-2 '}>
                                <Bento variant={i()} class={'h-40 md:h-44 w-full'} title={item.title}
                                       imageSrc={`${item.href}.jpg`}/>
                            </A>
                        )}
                    </For>
                </ul>
            </div>


            <FooterMenu
                childClass={'w-full sm:max-w-sm'}
                sectionClass={'flex justify-between items-center w-full space-x-4'}
                title={<BuildingOffice2Icon class={'size-full stroke-bronze-11 p-0.5 fill-green-2'}/>} variant={'ghost'} size={'icon'}>
                <BaseSearch<VENDOR> options={[]}/>
            </FooterMenu>
        </div>
    );
};

export default Categories;