import {Component, createEffect, createMemo, createSignal, For, ParentProps, Show} from "solid-js";
import {RouteSectionProps, useSubmission} from "@solidjs/router";
import {addVendor} from "~/lib/vendors";
import {TextField, TextFieldErrorMessage, TextFieldInput} from "~/components/ui/text-field";
import {Button} from "../../ui/button";
import {showToast} from "~/components/ui/toast";
import {ChevronLeft} from "~/components/svg";
import {addAddress, addressFieldNames, getAddressField} from "~/lib/addresses";
import {AreaSelect, CountryData} from "~/lib/store";
import {
    ComboboxContent,
    ComboboxControl,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxItemLabel,
    ComboboxTrigger,
    Combobox
} from "~/components/ui/combobox"
type PROPS = CountryData;

const CreateAddressForm: Component<PROPS> = props => {
    const submission = useSubmission(addAddress);

    const results = createMemo(() => {
        return submission.result
    })

    const localityNameType = () => props.LocalityNameType ?? 2;
    const administrativeAreaNameType = () => props.AdministrativeAreaNameType ?? 18;
    const dependentLocalityNameType = () => props.DependentLocalityNameType ?? 19;
    const postCodeNameType = () => props.PostCodeNameType ?? 22;
    const postCodeRegex = () => props.PostCodeRegex;

    const administrativeAreas = () => props.AdministrativeAreas;

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
        ID: "CA",
        Name: "California"
    })

    const postalSubRegex = createMemo(() => {
        console.log("sub", postCodeRegex()?.SubdivisionRegex[getItem()?.ID]?.Regex)
        return postCodeRegex()?.SubdivisionRegex[getItem()?.ID]?.Regex ?? postCodeRegex()?.Regex;
    })



    createEffect(() => {

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
                <TextField>
                    <TextFieldInput type="text" autocomplete="none" name="street_address" placeholder="Address"/>
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
                <div class={'grid grid-cols-1 sm:grid-cols-2 gap-3'}>
                    <Combobox
                        name="administrative_area"
                        class={"text-gray-11"}
                        options={adminAreas()}
                        optionValue="ID"
                        optionTextValue="Name"
                        optionLabel="Name"
                        optionDisabled="disabled"
                        onChange={(a: any) => setItem(a)}
                        placeholder={fields().administrative_area}
                        itemComponent={(props: any) => (
                            <ComboboxItem  item={props.item}>
                                <ComboboxItemLabel>{props.item.rawValue?.Name}</ComboboxItemLabel>
                                <ComboboxItemIndicator />
                            </ComboboxItem>
                        )}
                    >
                        <ComboboxControl aria-labe={fields().administrative_area}>
                            <ComboboxInput />
                            <ComboboxTrigger />
                        </ComboboxControl>
                        <ComboboxContent />
                    </Combobox>
                    <TextField>
                        <TextFieldInput type="text" autocomplete="none" name="post_code" pattern={postalRegex()}
                                        placeholder={fields().post_code}/>
                        <Show when={results()?.error?.post_code}>
                            <TextFieldErrorMessage>
                                {results()?.error?.post_code}
                            </TextFieldErrorMessage>
                        </Show>
                    </TextField>
                </div>`
                <div class={'flex justify-end space-x-2'}>
                    <Button as={"A"} href={'/addresses'} variant={'secondary'} size={"icon"}
                            type={"button"}><ChevronLeft/></Button>
                    <Button as={"button"} variant={'default'} type={"submit"}>Add Address</Button>
                </div>
            </form>
        </>
    );
};

export default CreateAddressForm;