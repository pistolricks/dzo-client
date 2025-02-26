import {Search} from "@kobalte/core/search";
import {Component, createSignal, JSX, Show} from "solid-js";

import "./style.css"
import {MagnifyingGlass, SpinnerIcon, XMark} from "~/components/svg";
import {useLayoutContext} from "~/context/layout-provider";

function BaseSearch<T>(props: {
    options: T[],
    showResults?: boolean

}) {
    const {getQuery, setQuery} = useLayoutContext();

    const options = () => props.options;

    const [getOptions, setOptions] = createSignal<any>(options());
    const [getItem, setItem] = createSignal<any>();

    const showResults = () => props.showResults;

    const handleListings = (query: string) => {
        setQuery(query)
        setOptions(options());
        return getOptions();
    }

    const handleClear = (data: string, event: Event) => {
        setQuery(data)

    };


    return (
        <>
            <Search
                triggerMode="focus"
                options={getOptions()}
                onInputChange={query => setOptions(handleListings(query))}
                onChange={result => setItem(result)}
                debounceOptionsMillisecond={300}
                optionValue="name"
                optionLabel="name"
                placeholder="Search…"
                itemComponent={(props: any) => (
                    <Search.Item item={props.item} class="search__item">
                        <Search.ItemLabel>{props.item.rawValue.name}</Search.ItemLabel>
                    </Search.Item>
                )}
            >
                <Search.Control aria-label="item" class="search__control w-full flex items-center px-2">
                    <Search.Input value={getQuery()} class="w-full search__input"/>
                    <Search.Indicator
                        loadingComponent={
                            <Search.Icon class="load__icon">
                                <SpinnerIcon class={'spin__icon'}/>
                            </Search.Icon>
                        }
                    >
                        <Search.Icon class="search__icon">
                            <Show
                                fallback={
                                    <button onClick={[handleClear, ""]}>
                                        <XMark class={'h-full w-full center__icon stroke-red-11'}/>
                                    </button>
                                }
                                when={getQuery() === ''}>
                                <MagnifyingGlass class={'h-full w-full center__icon'}/>
                            </Show>

                        </Search.Icon>
                    </Search.Indicator>
                </Search.Control>
                <Show when={showResults()}>
                    <Search.Portal>
                        <Search.Content class="search__content" onCloseAutoFocus={(e) => e.preventDefault()}>
                            <Search.Listbox class="search__listbox"/>
                            <Search.NoResult class="search__no_result">
                                0 Results
                            </Search.NoResult>
                        </Search.Content>
                    </Search.Portal>
                </Show>
            </Search>

        </>
    )
}

export default BaseSearch;