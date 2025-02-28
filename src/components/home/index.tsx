import {Component, createEffect, createSignal, For, JSX} from "solid-js";
import {Button} from "~/components/ui/button";
import {MagnifyingGlass, MapPin} from "~/components/svg";
import {A} from "@solidjs/router";
import {useLayoutContext} from "~/context/layout-provider";
import WSClient from "~/components/ws/ws-client";


type PROPS = {
    background_images: string[]
}

const HomeSection: Component<PROPS> = props => {
    const {getQuery, setQuery} = useLayoutContext();
    const [currentIndex, setCurrentIndex] = createSignal(0)

    const images: () => string[] = () => props.background_images as string[];

    createEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((p) => (p + 1) % images().length)
        }, 5000)
        return () => clearInterval(interval)
    })



    const handleQuery: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
        console.log("Query Input changed to", event.currentTarget.value)
        setQuery(event.currentTarget.value)
    }

    return (
        <>
            <img src={'logo.jpg'} alt={`Hero background`} class="absolute inset-0 w-full h-full object-cover"/>
        <div class={'h-full w-full flex justify-center items-center'}>
            <div class="relative container mx-auto flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 space-y-6">
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-pretty text-center">
                    {import.meta.env.VITE_WELCOME_TITLE}
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-200 text-center text-balance">
                    {import.meta.env.VITE_WELCOME_SUBTITLE}
                </p>
                <div class="w-full max-w-xl">
                    <div class="relative">
                        <MapPin class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"/>
                        <input
                            id={'search-1'}
                            onInput={handleQuery}
                            type="search"
                            placeholder="Search..."
                            class="pl-12 pr-16 py-3 w-full rounded-full bg-white/90 focus:bg-white shadow-lg"
                        />
                        <div class="absolute right-1 top-1/2 -translate-y-1/2 flex">
                            <Button as={A} type={'button'} href={'/categories'} size="icon" class={'rounded-full'}>
                                <MagnifyingGlass class="w-6 h-6 p-1 text-blue-400"/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
    );
};

export default HomeSection;