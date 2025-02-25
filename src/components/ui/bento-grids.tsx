import {Component, Show} from "solid-js";


type PROPS = {
    title: string;
    subTitle?: string;
    class?: string;
    imageSrc: string;
    variant: number;
    href?: string;
}

export type BentoVariants = "variant-0" | "variant-1" | "variant-2" | "variant-3" | "variant-4" | "variant-5"

const Bento: Component<PROPS> = props => {

    const title = () => props.title;
    const subTitle = () => props.subTitle;
    const className = () => props.class;
    const imageSrc = () => props.imageSrc;
    const variant: () => number = () => props.variant;

    let variants1: string = {
        0: "absolute inset-px rounded-lg bg-white hover:bg-blue-3 max-md:rounded-t-[2rem] md:rounded-tl-[2rem]",
        1: "absolute inset-px rounded-lg bg-white hover:bg-blue-3",
        2: "absolute inset-px rounded-lg bg-white hover:bg-blue-3 max-md:rounded-t-[2rem] md:rounded-bt-[2rem]",
        3: "absolute inset-px rounded-lg bg-white hover:bg-blue-3 md:rounded-bl-[2rem]",
        4: "absolute inset-px rounded-lg bg-white hover:bg-blue-3",
        5: "absolute inset-px rounded-lg bg-white hover:bg-blue-3 max-md:rounded-b-[2rem] md:rounded-br-[2rem]",
    }[variant() as 0 | 1 | 2 | 3 | 4 | 5];


    let variants2: string = {
        0: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-md:rounded-t-[calc(2rem+1px)] md:rounded-tl-[calc(2rem+1px)]",
        1: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]",
        2: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] md:rounded-tr-[calc(2rem+1px)]",
        3: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] md:rounded-bl-[calc(2rem+1px)]",
        4: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]",
        5: "relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-md:rounded-b-[calc(2rem+1px)] md:rounded-br-[calc(2rem+1px)]",
    }[variant() as 0 | 1 | 2 | 3 | 4 | 5];


    let variants3: string = {
        0: "object-cover object-left",
        1: "object-cover",
        2: "object-cover object-left md:object-right",
        3: "object-cover object-left",
        4: "object-cover",
        5: "object-cover",
    }[variant() as 0 | 1 | 2 | 3 | 4 | 5];

    let variants4: string = {
        0: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-md:rounded-t-[2rem] md:rounded-tl-[2rem]",
        1: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5",
        2: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 md:rounded-tr-[2rem]",
        3: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 md:rounded-bl-[2rem]",
        4: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5",
        5: "pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-md:rounded-b-[2rem] md:rounded-br-[2rem]",
    }[variant() as 0 | 1 | 2 | 3 | 4 | 5];

    return (
        <div class={'relative md:col-span-2'}>
            <div
                class={variants1}></div>
            <div
                class={variants2}>
                <img class={`${className()} ${variants3}`}
                     src={imageSrc()}
                     alt=""/>
                <div class="p-10 py-4 hover:bg-blue-3">
                    <p class="text-lg font-medium tracking-tight text-gray-950 capitalize">
                        {title()}
                    </p>
                    <Show when={subTitle()}>
                        <p class="mt-2 max-w-lg text-sm/6 text-gray-600">
                            {subTitle()}
                        </p>
                    </Show>
                </div>
            </div>
            <div
                class={variants4}></div>
        </div>
    );
};


export default Bento;