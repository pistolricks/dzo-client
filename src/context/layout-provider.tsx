import {Accessor, Component, createContext, createSignal, JSX, onMount, Setter, useContext} from "solid-js";
import {Feature, FeatureCollection} from "~/lib/store";

import {createStore, SetStoreFunction, Store} from "solid-js/store";

import ProfileIcon from '~/svgs/menu/profile.svg'
import VendorsIcon from '~/svgs/menu/vendors.svg'
import PlacesIcon from '~/svgs/menu/places.svg'
import ContentsIcon from '~/svgs/menu/contents.svg'
import CategoriesIcon from '~/svgs/menu/categories.svg'
import {SessionUser} from "~/lib/session";
import {Extent} from "ol/extent";


export type MenuItem = {
    title: string;
    href: string;
    description?: string;
    icon?: string;
}

type POSITION = [number, number] | undefined

type LayoutType = {
    storedCurrentUser: Store<SessionUser>
    setCurrentUser: SetStoreFunction<SessionUser>
    getStoreCollection: Store<FeatureCollection>
    setStoreCollection: SetStoreFunction<FeatureCollection>
    getViewbox: Accessor<Extent | undefined>
    setViewbox: Setter<Extent | undefined>
    getMyLocation: Accessor<Feature | undefined>
    setMyLocation: Setter<Feature | undefined>
    getPosition: Accessor<POSITION>
    setPosition: Setter<POSITION>
    getHeight: Accessor<number>
    getIsDesktop: Accessor<boolean>
    getQuery: Accessor<string>
    setQuery: Setter<string>
    menu: MenuItem[]
    apps: MenuItem[]
}

let headerHeight = import.meta.env.VITE_HEADER_HEIGHT
let footerHeight = import.meta.env.VITE_FOOTER_HEIGHT


export const LayoutContext = createContext<LayoutType>();

export function LayoutProvider(props: { children: JSX.Element }) {

    const [storedCurrentUser, setCurrentUser] = createStore<SessionUser>()


    const [getStoreCollection, setStoreCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })


    const [getPosition, setPosition] = createSignal<POSITION>(undefined)
    const [getMyLocation, setMyLocation] = createSignal<Feature | undefined>(undefined)
    const [getViewbox, setViewbox] = createSignal<Extent | undefined>(undefined)
    const [getHeight, setHeight] = createSignal(0)
    const [getQuery, setQuery] = createSignal("")

    const handleHeight = () => {
        setHeight(() => window.innerHeight - (headerHeight) - (footerHeight))
        setIsDesktop(window.innerWidth >= 726)

        console.log('height', getHeight())
    }

    const [getIsDesktop, setIsDesktop] = createSignal(false)


    const menu: MenuItem[] = [
        {title: "profile", href: "/profile", icon: ProfileIcon},
        {title: "vendors", href: "/vendors", icon: VendorsIcon},
        {title: "places", href: "/places", icon: PlacesIcon},
        {title: "contents", href: "/contents", icon: ContentsIcon},
        {title: "categories", href: "/categories", icon: CategoriesIcon}
    ]

    const apps: MenuItem[] = [
        {title: "beauty", href: "/categories/beauty"},
        {title: "car wash", href: "/categories/car-wash"},
        {title: "cleaning", href: "/categories/cleaning"},
        {title: "entertainment", href: "/categories/entertainment"},
        {title: "handyman", href: "/categories/handyman"},
        {title: "homemade food", href: "/categories/homemade-food"},
    ]


    onMount(() => {
        handleHeight();

    })

    return (
        <LayoutContext.Provider value={{
            storedCurrentUser,
            setCurrentUser,
            getStoreCollection,
            setStoreCollection,
            getQuery,
            setQuery,
            getViewbox,
            setViewbox,
            getMyLocation,
            setMyLocation,
            getPosition,
            setPosition,
            getHeight,
            getIsDesktop,
            menu,
            apps,
        }}>
            {props.children}
        </LayoutContext.Provider>
    );
}

export function useLayoutContext() {
    return useContext(LayoutContext)!
}