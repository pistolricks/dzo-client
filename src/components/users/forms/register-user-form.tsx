import {Component, createEffect, createMemo, Show} from "solid-js";
import {redirect, useSubmission} from "@solidjs/router";
import {registerUserHandler} from "~/lib/users";
import {TextField, TextFieldErrorMessage, TextFieldInput} from "~/components/ui/text-field";
import {Button} from "~/components/ui/button";
import {showToast} from "~/components/ui/toast";
import {ChevronLeft} from "~/components/svg";

type PROPS = {}

const RegisterUserForm: Component<PROPS> = props => {
    const submission = useSubmission(registerUserHandler);


    const results = createMemo(() => {
        return submission.result
    })


    createEffect(() => {
        if (results()?.error) {
            console.log(results()?.error)
            let message: string = results()?.error?.name
                ?? results()?.error?.email
                ?? results()?.error?.password


            showToast({
                variant: "error",
                title: "Error",
                description: message
            })
        }
    })
    return (
        <>
            <form class={'space-y-4'} action={registerUserHandler} method="post">
                <TextField>
                    <TextFieldInput class={'capitalize'} type="text" required name="firstName" placeholder="First Name"/>
                    <Show when={results()?.error?.firstName}>
                        <TextFieldErrorMessage>
                            {results()?.error?.firstName}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField>
                    <TextFieldInput class={'capitalize'} type="text" required name="lastName" placeholder="Last Name"/>
                    <Show when={results()?.error?.lastName}>
                        <TextFieldErrorMessage>
                            {results()?.error?.lastName}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField>
                    <TextFieldInput class={'lowercase'} type="email" required name="email" placeholder="email"/>
                    <Show when={results()?.error?.email}>
                        <TextFieldErrorMessage>
                            {results()?.error?.email}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <TextField>
                    <TextFieldInput type="password" autocomplete={'none'} required name="password"
                                    placeholder="********"/>
                    <Show when={results()?.error?.password}>
                        <TextFieldErrorMessage>
                            {results()?.error?.password}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <div class={'items-center flex flex-row-reverse space-x-2 space-x-reverse'}>
                    <Button as={"button"} variant={'default'} type={"submit"}>Register</Button>
                    <Button
                        as={"A"}
                        href={'/'}
                        variant={'secondary'}
                        size={"icon"}
                        type={"button"}
                    >
                        <ChevronLeft/>
                    </Button>
                </div>
            </form>


        </>
    );
};

export default RegisterUserForm;