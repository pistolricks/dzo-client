import {Component, createEffect, createMemo, createSignal, Show} from "solid-js";
import {useSubmission} from "@solidjs/router";
import {TextField, TextFieldErrorMessage, TextFieldInput} from "~/components/ui/text-field";
import {Button} from "../../ui/button";
import {showToast} from "~/components/ui/toast";
import {ChevronLeft, MagnifyingGlass, XMark} from "~/components/svg";
import {addAddress, addressFieldNames} from "~/lib/addresses";
import {AreaSelect, CountryData} from "~/lib/store";
import {
    Combobox,
    ComboboxContent,
    ComboboxControl,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxItemLabel,
    ComboboxTrigger
} from "~/components/ui/combobox"

import poi from './poi.json';
import {useLayoutContext} from "~/context/layout-provider";
import {getSessionLocation} from "~/lib/session";
import Drawer from "@corvu/drawer";

type PROPS = CountryData & { contextId?: string, hidePoi?: boolean };

const CreateAddressForm: Component<PROPS> = props => {
    const submission = useSubmission(addAddress);



    const {getViewbox, setMyLocation, getMyLocation} = useLayoutContext();


    const results = createMemo(() => {
        console.log(submission.result)
        return submission.result
    })


    const hidePoi = () => props.hidePoi ?? false;
    const contextId = () => props.contextId ?? 'rmd1'
    const localityNameType = () => props.LocalityNameType ?? 2;
    const administrativeAreaNameType = () => props.AdministrativeAreaNameType ?? 18;
    const dependentLocalityNameType = () => props.DependentLocalityNameType ?? 19;
    const postCodeNameType = () => props.PostCodeNameType ?? 22;
    const postCodeRegex = () => props.PostCodeRegex;
    const administrativeAreas = () => props.AdministrativeAreas;

    const {open, setOpen} = Drawer.useDialogContext(contextId())

    const fields: any = createMemo(() => ({
        locality: addressFieldNames[localityNameType()],
        administrative_area: addressFieldNames[administrativeAreaNameType()],
        dependent_locality: addressFieldNames[dependentLocalityNameType()],
        post_code: addressFieldNames[postCodeNameType()],
    }));

    const adminAreas = createMemo(() => {
        console.log(administrativeAreas()?.en)
        return administrativeAreas()?.en;
    })

    const postalRegex = createMemo(() => {
        console.log(postCodeRegex()?.Regex)
        return postCodeRegex()?.Regex;
    })

    const [getItem, setItem] = createSignal<AreaSelect>({
        ID: "",
        Name: ""
    })

    const [getPoi, setPoi] = createSignal<{key: string, id: string, label: string}>({
        key: "",
        id: "",
        label: ""
    })



    const postalSubRegex = createMemo(() => {
        console.log("sub", postCodeRegex()?.SubdivisionRegex[getItem()?.ID]?.Regex)
        return postCodeRegex()?.SubdivisionRegex[getItem()?.ID]?.Regex ?? postCodeRegex()?.Regex;
    })


    const handleToggle = () => {
        setOpen(false)
    }

    createEffect(async() => {


        setMyLocation(await getSessionLocation())
        console.log("getMyLocation", getMyLocation())
        console.log("getViewbox", getViewbox())
        console.log("getPoi", getPoi())
        console.log("getItem", getItem())
        console.log(postCodeRegex())
        console.log("countryData", props)


        if (results()?.error) {
            showToast({
                variant: "error",
                title: "Error",
                description: results()?.error
            })
        }
    })


    return (
        <>

            <form class={'space-y-4'} action={addAddress} method="post">
                <div class="col-span-3">
                    <input class={'sr-only'} id={'viewbox'} name={'viewbox'} type={'text'}
                           value={String(getMyLocation()?.properties?.place?.boundingbox)}/>
                    <input class={'sr-only'} name="poi_key" id="poi_key"
                           value={getPoi()?.key}/>
                    <input class={'sr-only'} name="poi_id" id="poi_id"
                           value={getPoi()?.id}/>

                    <Show when={!hidePoi()}>
                    <Combobox
                        class={"text-gray-11"}
                        options={poi}
                        optionValue="id"
                        optionTextValue="label"
                        optionLabel="label"
                        optionDisabled="disabled"
                        onChange={(a: any) => setPoi(a)}
                        placeholder={"POI"}
                        itemComponent={(props: any) => (
                            <ComboboxItem item={props.item}>
                                <ComboboxItemLabel class={'capitalize'} >{props.item.rawValue?.label}</ComboboxItemLabel>
                                <ComboboxItemIndicator/>
                            </ComboboxItem>
                        )}
                    >
                        <ComboboxControl class={'bg-white'} aria-label={getPoi()?.label}>
                            <ComboboxInput class={''}/>
                            <ComboboxTrigger/>
                        </ComboboxControl>
                        <ComboboxContent/>
                    </Combobox>
                    </Show>
                </div>
                <TextField>
                    <TextFieldInput type="text" autocomplete="none" name="street_address" placeholder="Street Address"/>
                    <Show when={results()?.error?.street_address}>
                        <TextFieldErrorMessage>
                            {results()?.error?.street_address}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField>
                    <TextFieldInput type="text" autocomplete="none" name="locality" placeholder={fields().locality}/>
                    <Show when={results()?.error?.locality}>
                        <TextFieldErrorMessage>
                            {results()?.error?.locality}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <div class={'grid grid-cols-6 gap-3'}>

                    <div class="col-span-2">
                        <input class={'hidden'} name="administrative_area" id="administrative_area"
                               value={getItem()?.Name}/>

                        <Combobox
                            class={"text-gray-11"}
                            options={adminAreas()}
                            optionValue="Name"
                            optionTextValue="Name"
                            optionLabel="Name"
                            optionDisabled="disabled"
                            onChange={(a: any) => setItem(a)}
                            placeholder={fields().administrative_area}
                            itemComponent={(props: any) => (
                                <ComboboxItem item={props.item}>
                                    <ComboboxItemLabel>{props.item.rawValue?.Name}</ComboboxItemLabel>
                                    <ComboboxItemIndicator/>
                                </ComboboxItem>
                            )}
                        >
                            <ComboboxControl class={'bg-white'} aria-label={fields().administrative_area}>
                                <ComboboxInput/>
                                <ComboboxTrigger/>
                            </ComboboxControl>
                            <ComboboxContent/>
                        </Combobox>
                    </div>
                    <TextField class="col-span-2">
                        <TextFieldInput type="text" autocomplete="none" name="post_code" pattern={postalRegex()}
                                        placeholder={fields().post_code}/>
                        <Show when={results()?.error?.post_code}>
                            <TextFieldErrorMessage>
                                {results()?.error?.post_code}
                            </TextFieldErrorMessage>
                        </Show>
                    </TextField>
                    <div class={'col-span-2 items-center flex flex-row-reverse space-x-2 space-x-reverse'}>
                        <Button as={"button"} onClick={handleToggle} variant={'default'} type={"submit"} size="icon"><MagnifyingGlass/></Button>
                        <Button<"button"> onClick={handleToggle} variant="outline" size="icon">
                            <XMark/>
                        </Button>
                    </div>
                </div>

            </form>
        </>
    );
};

export default CreateAddressForm;