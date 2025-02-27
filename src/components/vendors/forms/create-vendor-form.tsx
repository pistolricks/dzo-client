import {css} from 'styled-system/css'

import {Component, createEffect, createMemo, Show} from 'solid-js'
import {useSubmission} from '@solidjs/router'
import {addVendor} from '~/lib/vendors'
import {TextField, TextFieldErrorMessage, TextFieldInput} from '~/components/ui/text-field'
import {showToast} from '~/components/ui/toast'
import {BaseTagInput} from '~/components/ui/base-tag-input'
import Dialog from "@corvu/dialog";
import {Button} from "~/components/ui/button";
import {XMark} from "~/components/svg";

type PROPS = {}

const CreateVendorForm: Component<PROPS> = (props) => {
    const submission = useSubmission(addVendor)

    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {
        if (results()?.error) {
            showToast({
                variant: 'error',
                title: 'Error',
                description: results()?.error,
            })
        }
    })

    return (
        <>
            <BaseTagInput label={'categories'} placeholder={'select'}/>
            <form class={css({mt: '4', mb: '4'})} action={addVendor} method="post">
                <TextField>
                    <TextFieldInput type="text" autocomplete="none" name="title" placeholder="title"/>
                    <Show when={results()?.error?.title}>
                        <TextFieldErrorMessage>{results()?.error?.title}</TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField>
                    <TextFieldInput type="number" autocomplete="none" name="year" placeholder="year"/>
                    <Show when={results()?.error?.year}>
                        <TextFieldErrorMessage>{results()?.error?.year}</TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField>
                    <TextFieldInput type="number" autocomplete="none" name="runtime" placeholder="runtime"/>
                    <Show when={results()?.error?.runtime}>
                        <TextFieldErrorMessage>{results()?.error?.runtime}</TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField></TextField>
                <div class={css({alignItems: 'center', display: 'flex', flexDir: 'row-reverse', mr: '2', ml: '2'})}>
                    <Dialog.Close contextId={'albd1'} class={''}>
                        <Button as={'button'} variant={'default'} type={'submit'}>
                            Add Vendor
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close contextId={'albd1'} class={''}>
                        <Button as={'button'} variant={'default'} size={'icon'} type={'button'}>
                            <XMark class={css({ p: '1.5' })} />
                        </Button>
                    </Dialog.Close>
                </div>
            </form>
        </>
    )
}

export default CreateVendorForm
